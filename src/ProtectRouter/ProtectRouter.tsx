import { useAppDispatch, useAppSelector } from "../redux/hook";
import React, { ReactChildren, ReactChild, useEffect } from "react";
import { Navigate } from "react-router-dom"

interface IProtectRouter {
    children: ReactChildren | ReactChild

}

const ProtectRouter = ({ children }: IProtectRouter) => {
    const { user } = useAppSelector((state) => state.auth);


    return (
        <>
            {user ?
                <> {children} </>
                :
                <Navigate to="/" replace />
            }
        </>

    )
}

export default ProtectRouter