import {useDispatch, useSelector} from "react-redux";
import {TPaletteState} from "../../redux/reducers/palette";
import {addColor, changeColor, removeColor} from "../../redux/actions/palette";
import "./Palette.css"

export const Palette = () => {
    const dispatch = useDispatch()
    const {palette} = useSelector((state: {palette: TPaletteState}) => state.palette)
    return (
        <div style={{width: "15rem"}}>

            {palette.length ? (
                <div className="row m-0 mw-100">
                    {
                        palette.map(({id, color}) => (
                            <div
                                key={id}
                                className="col m-2 px-0 rounded-3"
                                style={{
                                    minHeight: "4rem",
                                    minWidth: "4rem",
                                    maxHeight: "3rem",
                                    maxWidth: "3rem",
                                    border: `1px solid ${color}`,
                                    position: "relative",
                                }}
                            >
                                <input
                                    className="w-100 h-100"
                                    value={color}
                                    type={"color"}
                                    onChange={e => {
                                        dispatch(changeColor({id, color: e.target.value}))
                                    }}
                                    style={{position: 'absolute'}}
                                />
                                <div className="closeBtn bg-red" style={{
                                    position: 'absolute',
                                    right: "0.3rem",
                                }}>
                                    <div
                                        className=""
                                        style={{cursor: "pointer"}}
                                        onClick={() => {dispatch(removeColor({id}))}}
                                    >
                                        X
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            ) : null}

            <div
                className="w-100 p-3 d-flex justify-content-center align-items-center bg-primary rounded-3 mt-4"
                onClick={() => {dispatch(addColor())}}
                style={{cursor: 'pointer'}}
            >
                Добавить цвет
            </div>
        </div>
    )
}