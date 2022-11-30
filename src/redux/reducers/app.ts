import {LOADING_LOGOS_DONE} from '../types/app'

const initialState = {
    //navbarLogo: "",
}

export const app = (state = initialState, action: {type: string, payload: object}) => {

    switch (action.type) {
        case LOADING_LOGOS_DONE:
            return {
                ...state,
                /*...action.payload,
                detail: Object.keys(action.payload.detail).length ? action.payload.detail : state.detail*/
            }
        default: return state
    }
}
