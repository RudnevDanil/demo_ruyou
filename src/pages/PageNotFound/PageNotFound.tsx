import {Navigate} from "react-router-dom";


export const PageNotFound = () => {
    return <Navigate to={"/form"}/>
    //return <div>Page not found</div>
}