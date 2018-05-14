import Constants from "./constants";
import {allSkiDays, goal} from "./initialState.json";

//Los reducers han de importarse para usarse
import {goal_redux, all_ski_days_redux, all_ski_days_remove_redux} from "./store/reducers";

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
const goal_state = goal;
const goal_action = {
    "type":Constants.SET_GOAL,
    "payload": 15
};

const all_ski_days_state = allSkiDays;
const all_ski_days_action = {
    "type":Constants.ADD_DAY,
    "payload": {
        "resort":"Melia",
        "date":"20/08/2018",
        "powder":false,
        "backcountry":false
    }
};

const index = 1;
const all_ski_days_remove_action = {
    "type": Constants.REMOVE_DAY,
    "payload": index
}

//mediante el reducer modificamos el state=10 a 15
console.log(
    `Cambiado el objetivo(goal)`,
    goal_redux(goal_state, goal_action),
    `\nAñadido un nuevo día: `,
    all_ski_days_redux(all_ski_days_state , all_ski_days_action), //la variable state no se actualilza
    `\nSe ha eliminado el elemento ${index}: `,
    all_ski_days_remove_redux(all_ski_days_state, all_ski_days_remove_action) //queda almacenar los cambios
);