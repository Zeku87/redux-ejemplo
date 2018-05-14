import Constants from '../constants';

export const goal_redux = ((state, action) => {
    if(action.type === Constants.SET_GOAL )
        return action.payload
    else
        return state;
}); //Exportamos cada reducer para que pueda ser importado por el módulo que lo requiera