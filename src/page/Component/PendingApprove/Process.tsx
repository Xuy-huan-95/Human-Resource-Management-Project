import { useState } from "react"
import "./PendingApprove.scss"
import { useGetProccessLeaderCurrentQuery } from "../../../redux/slice/Proccess/index"
import CircularUnderLoad from "../../ShareComponent/Loading/loading"
import RegistrationForms from "../Form/Form"
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { GetResultProcess } from "../../../redux/slice/process.slice"
import { GetResultProposal } from "../../../redux/slice/proposal.slice"
import TableProcessApprove from "../Table/TableProcessApprove/TableProcessApprove"
import React from "react"

const Proccess = () => {
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { data, isLoading } = useGetProccessLeaderCurrentQuery("")
    const [openRegisterForm, setOpenRegisterForm] = useState<boolean>(false)
    const [option, setOption] = useState("")
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handlShowHideRegisterFormModal = (item) => {
        dispatch(GetResultProcess(item))
        dispatch(GetResultProposal({}))
        setOpenRegisterForm(!openRegisterForm)
        setOption("Approve-process")
    }
    return (
        <div>
            {isLoading === false ?
                <TableProcessApprove
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
export default Proccess