import {Input, TInput, TInputValue} from "../../components/Input/Input";
import {useState} from "react";

const {default: imgPlaceholderSrc} = require("../../imgs/imgPlaceholder.svg");

const formConfig: TInput[] = [
    {
        label: "Имя",
        placeholder: "Лев",
        id: "name",
        type: "text",
    },
    {
        label: "Фамилия",
        placeholder: "Лещенко",
        id: "surname",
        type: "text",
    },
    {
        label: "Отчество",
        placeholder: "Валерьянович",
        id: "patronymic",
        type: "text",
    },
    /*{
        label: "Фото",
        placeholder: "Лев",
        id: "img",
        type: "img",
    },*/
    {
        label: "Response",
        id: "response",
        type: "text",
        rows: 5,
    },

]

type TInputValues = {[key: string]: TInputValue}

export const Form = () => {
    const [state, setState] = useState<TInputValues>({})
    const set = (newV: TInputValues) => setState(prev => ({...prev, ...newV}))
    return (
        <>
            {
                formConfig.map(config =>
                    <Input
                        key={config.id}
                        config={config}
                        value={state[config.id]}
                        setValue={newV => set({[config.id]: newV})}
                    />
                )
            }
        </>
    )
}