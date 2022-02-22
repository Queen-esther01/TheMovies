import axios from 'axios'
import * as actions from '../types'



const requests = ({dispatch}) => next => async action =>{
    //IF ACTION NOT API REQUEST BEGAN THEN END PROCESS
    if(action.type !== actions.API_REQUEST_BEGAN.type){
        return next(action)
    }

    const { url, method, onStart, onSuccess, onError, data } = action.payload

    if(onStart) dispatch({ type: onStart})

    next(action)

    try{
        const response = await axios({
            url,
            method,
            data,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        if(response) dispatch({ type: onSuccess, payload: response.data})
        console.log(response.data)
    } catch(error){
        if(error.response) {
            dispatch({ type: onError, payload: error.response.data})
        }
        console.log(error.response)
    }
}

export default requests