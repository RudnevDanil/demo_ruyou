import {requests} from "../../requests";
import {apiHost} from "../../constants";

export let saveForm = (/*dispatch, token, */data) => requests({
    baseURL: apiHost,
    url: 'send.php',
    method: 'post',
    isFile: true,
    //token,
    data,
    //reactions: standardReactions(dispatch, {401: {quiet: false}}),
    defaultValue: false,
    //changeBeforeSet: data => data
})