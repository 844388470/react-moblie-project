import {ADD_APP} from '../action/app.js'

export default function(state={},action){
    if(action.type===ADD_APP){
        return {fuck:666}
    }else{
        return state
    }
}