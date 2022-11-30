import {Label} from "../Label/Label";

export type TInputValue = string | {}
export type TInputType = 'text' | 'img'

export type TInput = {
    id: string,
    label: string,
    placeholder?: string,
    type: TInputType,
    //value: string | null, // TODO or file obj
    disabled?: boolean,
    rows?: number
}

const textInputStyle = {
    backgroundColor: "rgba(118, 118, 128, 0.24)",
    borderRadius: ".75rem",
    width: "15rem"
}

export const Input = (
    {
        config: {label, placeholder, type, disabled, rows},
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
        </div>
    )
}