
let apiHost = "https://test-job.pixli.app/"

let axiosHeaders = {
    'accept': 'application/json',
    'Access-Control-Allow-Origin': [apiHost],
    'Access-Control-Max-Age': '3600',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Credentials': 'true',
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

export {
    apiHost,
    axiosHeaders,
    getHeader,
    postHeader,
    fileHeader,
}