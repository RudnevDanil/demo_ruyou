import {ADD_COLOR, CHANGE_COLOR, REMOVE_COLOR} from "../types/palette";
import {palettePayload} from "../reducers/palette";

export const addColor = () => ({
    type: ADD_COLOR,
    payload: {
        id: Math.random(), // or we can use symbol
        color: "#5F9C45"
    }
})

export const removeColor = ({id} : palettePayload) => ({
    type: REMOVE_COLOR,
    payload: {id}
})

export const changeColor = ({id, color} : palettePayload) => ({
    type: CHANGE_COLOR,
    payload: {
        id,
        color,
    }
})

/*export function loadingLogosDone(logos){
    return {
        type: LOADING_LOGOS_DONE,
        payload: logos
    }
}*/

/*
export let initAuth = (projKey, login = null) => async dispatch => {
    dispatch(authInit(projKey, login))
}
*/