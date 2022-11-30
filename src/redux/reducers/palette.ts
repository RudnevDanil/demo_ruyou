import {ADD_COLOR, CHANGE_COLOR, REMOVE_COLOR} from '../types/palette'

export type TPaletteObj = {
    id: number,
    color: string,
}
export type TPaletteState = {
    palette: TPaletteObj[]
}

const initialState : TPaletteState = {
    palette: []
}

export type palettePayload = {
    id: number,
    color?: string,
}

export const palette = (
    state = initialState,
    {type, payload/*: {id, color}*/}: {type: string, payload: palettePayload}
) => {

    switch (type) {
        case ADD_COLOR:
            return {
                ...state,
                palette: [...state.palette, {id: payload.id, color: payload.color}]
            }
        case REMOVE_COLOR:
            return {
                ...state,
                palette: state.palette.filter(el => el.id !== payload.id)
            }
        case CHANGE_COLOR:
            return {
                ...state,
                palette: state.palette.map(el => el.id === payload.id ? {
                    ...el,
                    color: payload.color,
                }: el)
            }

        default: return state
    }
}
