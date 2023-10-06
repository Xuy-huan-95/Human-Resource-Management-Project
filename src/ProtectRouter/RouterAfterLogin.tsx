import React, { ReactChildren, ReactChild, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IProtectRouter {
    children: ReactChildren | ReactChild

}

const RouterAfterLogin = ({ children }: IProtectRouter) => {
    const navigate = useNavigate()

    return (
        <>
            {localStorage.getItem("user") && window.location.pathname == "/" ?
                navigate("/manageuser/1")
                :
                <> {children} </>}
        </>

    )
}

export default RouterAfterLogin