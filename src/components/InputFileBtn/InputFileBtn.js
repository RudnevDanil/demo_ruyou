import * as React from "react";
import "./InputFileBtn.css"

export function InputFileBtn(
    {
        accept="*",
        isMultiple = true,
        onChange = files => {console.log(files)},
        children
    }
){

    return(
        <div className="input__wrapper">
            <label className="input__file-button">
                {children}
            </label>
            <input
                type="file"
                className="input input__file"
                accept={accept}
                multiple={isMultiple}
                onChange={e => onChange(e.target.files)}
            />
        </div>
    )
}