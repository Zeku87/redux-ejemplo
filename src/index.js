import Constants from "./constants";
import {allSkiDays, goal} from "./initialState.json";

//Los reducers han de importarse para usarse
import {goal_redux} from "./store/reducers";

console.log(`
        Datos en initialState.json
        ==========================
`);


    allSkiDays.forEach( obj =>{ 
        Object.keys(obj).forEach(key=>{
            console.log(`       `,key, obj[key])
        })
        console.log(`       ---------------------\n`)        
    } );    

console.log(`
        Datos en constants.js
        =====================
        ${Object.keys(Constants).join("\n       ")}
    `);

/************************************************************* */
/********************** REDUCER INVOCATION *********************/
/************************************************************* */

console.log("Ejemplo de Reducer");
const state = goal;
const action = {
    "type":Constants.SET_GOAL,
    "payload": 15
};

//mediante el reducer modificamos el state=10 a 15
console.log(
    goal_redux(state, action)
);