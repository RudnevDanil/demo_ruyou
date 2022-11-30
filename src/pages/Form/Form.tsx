import {Input, TInput, TInputValue, TStatuses} from "../../components/Input/Input";
import {useEffect, useState} from "react";
import {saveForm} from "./saveForm";

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
    {
        label: "Фото",
        placeholder: "Лев",
        id: "img",
        type: "img",
    },
    {
        label: "Сохранить",
        id: "save",
        type: "btn",
    },
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

    const [saveStatus, setSaveStatus] = useState<TStatuses>(null)

    // @ts-ignore
    useEffect(() => {
        if(saveStatus === 'waiting'){
            //sendRequest
            (async () => {
                if(/*!state.name || state.surname || !state.patronymic || */!state.img){
                    setSaveStatus('error')
                    return;
                }

                let formData = new FormData();
                formData.append("id", "1");
                formData.append("contact[name]", state.name);
                formData.append("contact[surname]", state.surname);
                formData.append("contact[patronymic]", state.patronymic);
                formData.append("image", state.img, 'image.png');

                type TResponse = {
                    result: object,
                    error: object,
                }
                // @ts-ignore
                // because my requests dont use ts and i want add it now
                let {result, error}: TResponse = (await saveForm(formData))
                console.log(result, error)
                if(error){
                    setSaveStatus('error')
                    set({response: JSON.stringify(error)})
                }
                else{
                    setSaveStatus('success')
                    set({response: JSON.stringify(result)})
                }
            })()
        } else if(saveStatus){
            const timer = setTimeout(() => {
                setSaveStatus(null)
            }, 1000)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [saveStatus])

    return (
        <>
            {
                formConfig.map(config =>
                    <Input
                        key={config.id}
                        config={{
                            ...config,
                            ...(config.type === 'btn' ? {
                                status: saveStatus,
                                label: {
                                    null: config.label,
                                    waiting: 'Отправка...',
                                    success: 'Успешный успех!',
                                    error: 'Ошибка :(',
                                }[saveStatus || "null"],
                                onClick: () => {
                                    if(!saveStatus)
                                        setSaveStatus('waiting')
                                }
                            }: {})
                        }}
                        value={state[config.id]}
                        setValue={newV => set({[config.id]: newV})}
                    />
                )
            }
        </>
    )
}