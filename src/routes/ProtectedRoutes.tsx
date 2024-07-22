import React from "react"
import {useCookies} from "react-cookie"
import { Navigate, Outlet } from "react-router-dom";

const Protectedroutes : React.FC = () => {
    const [cookies] = useCookies(["token"]);
    console.log("--->cookies->",cookies.token)
    return (
        <>
          { cookies.token !== undefined ? <Outlet/> : <Navigate to="/login" replace={true}/> }
        </>
    )
}
export default Protectedroutes;