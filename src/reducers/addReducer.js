const addReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            state = [...state, {
                id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
                data: action.data,

            }]



            return state;
        case 'DEL_STUDENT':
            state = [...state]
            console.log(state);
            console.log(action.data);
            var newstate = state.filter((obj) => {
                return (!action.data.includes(obj.id))

            })

            // console.log(newstate);
            // return state.filter((item)=>item.id !== action.data.);


            return newstate;
        case 'UPDATE_STUDENT':
            // console.log(obj.id);
            state = [...state]
            //     console.log(action.id);

            //         var result = state.filter(obj => {
            //             return (obj.id == action.id)
            //           })

            //           console.log((result[0].id));
            //           state.indexof(result[0].id);
            //          // console.log(result[0].data);


            //           console.log(state)
            var e = state.findIndex(x => x.id === action.id)
            var pos = state.map(function (e) { return e.id; }).indexOf(action.id);
            console.log(pos);
            console.log(e);

        default:
            return state;
    }

}
export default addReducer;