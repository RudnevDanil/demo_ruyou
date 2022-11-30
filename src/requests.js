import axios from "axios";
import {apiHost} from "./constants";

let axiosHeaders = {

    'accept': 'application/json',
    'Access-Control-Allow-Origin': [apiHost],
    'Access-Control-Max-Age': '3600',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Credentials': 'true'
}
let getHeader = {
    'Content-Type': 'application/x-www-form-urlencoded',
}

let postHeader = {
    'Content-Type': 'application/json',
}

let fileHeader = {
    'Content-Type': 'multipart/form-data',
}

let requests = async (
    {
        baseURL,
        url,
        method,
        headers = {},
        token,
        data,
        isFile = false,
        defaultValue,
        setItems,
        reactions= {},
        changeBeforeSet = data => data,
        getParams = [],
    }
) => {
    getParams = getParams.filter(el => el)

    let makeGetParam = (key, value, doAmpersand) => (key + "=" + value + (doAmpersand ? "&" : ""))
    url = url + getParams.reduce((s, el, i, arr) => (
        s + (Array.isArray(el.value) ? el.value.reduce((s2, el2, i2, arr2) => s2 + makeGetParam(el.key, el2, true), ""): makeGetParam(el.key, el.value, true/*i !== arr.length*/))
    ), getParams.length ? "?" : "")

    let reqHeaders = {
        ...axiosHeaders,
        ...(method === 'get' ? getHeader : (isFile ? fileHeader : postHeader)),
        ...(token ? {Authorization: 'Bearer ' + token} : {}),
        ...headers,
    }

    try {
        let response = await axios({
            baseURL,
            url,
            method,
            headers: reqHeaders,
            data
        })
        if(response.status < 200 || response.status >= 300)
            throw new Error()
        else{
            let result = changeBeforeSet(response.data)
            if(setItems)
                setItems(result)
            else
                return {result}
        }
    } catch (error) {
        //console.log(error)

        if(error.response && reactions[error.response.status])
            reactions[error.response.status]()

        if(setItems)
            setItems(defaultValue)
        else
            return {
                result: defaultValue,
                error: {
                    isConnectError: !error.response,
                    url: baseURL + url,
                    method,
                    token,
                    data,
                    headers: reqHeaders,
                    status: error.response ? error.response.status : null,
                    statusText: error.response ? error.response.statusText : null,
                    msg: error.response ? error.response.data : null,

                }
            }
    }
}

export {requests}