import { useState } from "react"
import "./PendingApprove.scss"
import { useGetProposalCurrentLeaderQuery } from "../../../redux/slice/Proposal/index"
import CircularUnderLoad from "../../ShareComponent/Loading/loading"
import RegistrationForms from "../Form/Form"
import { GetResultProposal } from "../../../redux/slice/proposal.slice"
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import ITableProposalApprove from "../Table/TableProposalApprove/TableProposalApprove"
import React from "react"

const Proposal = () => {
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openRegisterForm, setOpenRegisterForm] = useState<boolean>(false)
    const [option, setOption] = useState("")
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const { data, isLoading } = useGetProposalCurrentLeaderQuery()

    const handlShowHideRegisterFormModal = (item) => {
        dispatch(GetResultProposal(item))
        setOpenRegisterForm(!openRegisterForm)
        setOption("Approve-Proposal")
    }
    return (
        <div>
            {isLoading === false ?
                <ITableProposalApprove
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
export default Proposal 