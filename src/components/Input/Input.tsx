import {Label} from "../Label/Label";
import {FileInput} from "./FileInput/FileInput";

export type TStatuses = null | 'waiting' | 'success' | 'error'
const getBtnClass = (status: TStatuses | undefined) => {
    const statusToClass = {
        null: 'primary',
        waiting: 'warning opacity-50',
        success: 'success opacity-50',
        error: 'danger opacity-50',
    }
    return statusToClass[status || 'null']
}

export type TInputValue = string | File
export type TInputType = 'text' | 'img' | 'btn'

export type TInput = {
    id: string,
    label: string,
    placeholder?: string,
    type: TInputType,
    disabled?: boolean,

    // multiline input
    rows?: number,

    // btn
    status?: TStatuses,
    onClick?: () => void,

    // we can use interfaces and extends them, but not today
}

const textInputStyle = {
    backgroundColor: "rgba(118, 118, 128, 0.24)",
    borderRadius: ".75rem",
    width: "15rem"
}

export const Input = (
    {
        config: {label, placeholder, type, disabled, rows, status, onClick},
        value,
        setValue
    }: {
        config: TInput,
        value: TInputValue | null | undefined,
        setValue: (newV : TInputValue) => void,
    }) => {

    return (
        <div className="py-2">
            <Label label={label}/>
            {
                type === 'text' ? (
                    rows ?
                        <textarea
                            className="text-grey py-1 px-3"
                            value={(value || "").toString()}
                            name="Text1"
                            //cols={}
                            rows={rows}
                            disabled={true}
                            style={textInputStyle}
                        />
                        :
                        <input
                            className="text-grey py-1 px-3"
                            value={(value || "").toString()}
                            placeholder={placeholder}
                            disabled={disabled}
                            onChange={e => setValue(e.target.value.toString())}
                            style={textInputStyle}
                        />
                ) : null
            }

            {
                type === 'img' &&
                <div className="px-4 py-3" style={{...textInputStyle, maxWidth: "8rem"}}>
                    <FileInput
                        img={value}
                        set={img => {setValue(img)}}
                    />
                </div>
            }

            {
                type === 'btn' &&
                <div
                    className={`p-3 d-flex justify-content-center align-items-center bg-${getBtnClass(status)}`}
                    style={{
                        ...textInputStyle,
                        cursor: 'pointer'
                    }}
                    onClick={onClick}
                >
                    {label}
                </div>
            }
        </div>
    )
}