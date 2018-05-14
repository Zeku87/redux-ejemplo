import Constants from '../constants';

//Exportamos cada reducer para que pueda ser importado por el módulo que lo requiera

export const goal_redux = ((state, action) => {
    return (action.type === Constants.SET_GOAL ? action.payload : state)
}); 

export const all_ski_days_redux = ((state=null , action) => {
    return (action.type === Constants.ADD_DAY ? [... state, action.payload] : state);
});