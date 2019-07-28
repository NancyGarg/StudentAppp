import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';



class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            delete:[]
        }

    }

    handlecheckbox=(e,id)=>{
    if(e.target.checked){
      var newarr=[...this.state.delete,id];
      console.log(newarr)
      this.setState({
          delete:newarr
      })
    }
    else if(!e.target.checked){
       
        var oldarr=this.state.delete;
        var index = oldarr.indexOf(id);
        var newarr=oldarr.splice(index,1);
        console.log(newarr);
         this.setState({
             delete:newarr
         })
      }
    
    }
    handleDelete=()=>{
        const delData=this.state.delete;

        this.props.dispatch({
            type:'DEL_STUDENT',
            data:delData});
    }
    render(){
  return (
    <div>
   home
   
   <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">EMAIL</th>
      <th scope="col">GENDER</th>
      <th scope="col">COUNTRY</th>
    </tr>
  </thead>
  <tbody>


   {( this.props.list.length>0) && (
       this.props.list.map((item) =>(<tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.data.email}</td>
        <td>{item.data.gender}</td>
        <td>{item.data.country}</td>
        <td><Link to={`/update/${item.id}`}>Update</Link></td>
        <td><input type="checkbox" name="name1" onChange={(e)=>this.handlecheckbox(e,item.id)}/></td>
       </tr>
     
    ) ))}{ (Object.entries(this.state.delete).length !== 0) && (
    <tr>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    
        <td><button type="button" className="btn btn-lg btn-dark" onClick={this.handleDelete}>Delete together</button></td>
       </tr>)
    }


</tbody>
</table>

    
    </div>
  );
}
}


const mapStateToProps = (state) => {
    return {
        list: state
    }
}

export default connect(mapStateToProps)(Home);
