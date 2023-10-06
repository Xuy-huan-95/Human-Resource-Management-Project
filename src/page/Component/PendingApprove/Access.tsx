import { useState } from "react"
import "./PendingApprove.scss"
import { useGetCreateUserQuery } from "../../../redux/slice/Employee/index"
import CircularUnderLoad from "../../ShareComponent/Loading/loading"
import RegistrationForms from "../Form/Form"
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { GetResultData } from "../../../redux/slice/RegisterUser.slice"
import TableAccessApprove from '../Table/TableAccessApprove/TableAccessApprove'
import React from "react"

interface IAccess {
    search: string
}
const Access = (props: IAccess) => {
    const { search } = props
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openRegisterForm, setOpenRegisterForm] = useState<boolean>(false)
    const { data, isLoading } = useGetCreateUserQuery({ pageIndex: page + 1, pageSize: rowsPerPage, keyword: search, listStatus: "2" })
    const [option, setOption] = useState("")

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handlShowHideRegisterFormModal = (item) => {
        dispatch(GetResultData(item))
        setOpenRegisterForm(!openRegisterForm)
        setOption("Approve-User")
    }
    return (
        <div>
            {isLoading === false ?
                <TableAccessApprove
                    data={data}
                    handlShowHideRegisterFormModal={handlShowHideRegisterFormModal}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    page={page}
                    rowsPerPage={rowsPerPage}
                />
                :
                <CircularUnderLoad />

            }
            <RegistrationForms
                open={openRegisterForm}
                setOpen={setOpenRegisterForm}
                option={option}
                setOption={setOption}
            />

        </div>
    )
}
export default Access