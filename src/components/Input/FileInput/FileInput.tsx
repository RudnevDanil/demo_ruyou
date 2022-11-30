import {InputFileBtn} from "../../InputFileBtn/InputFileBtn";
const {default: noImage} = require("../../../imgs/imgPlaceholder.svg");

export const FileInput = ({img, set}: {img: any, set: (img: any) => void}) => {
    // @ts-ignore
    return (
        <InputFileBtn
            accept="image/png, image/jpg, image/jpeg"
            isMultiple={false}
            onChange={files => {
                if(files){
                    let file = Object.keys(files).reduce((s, k) => files[k], null)
                    if(file)
                        set(file)
                }
            }}
        >
            <img
                alt="img"
                src={img ? URL.createObjectURL(img) : noImage}
                style={{
                    cursor: "pointer",
                    width: "-webkit-fill-available",
                    maxHeight: "10rem", maxWidth: "5rem",
                }}
                /*onLoad={files => {

                }}*/
            />
        </InputFileBtn>
    )
}