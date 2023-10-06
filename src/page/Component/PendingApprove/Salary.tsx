import React, { useEffect, useState } from "react"
import "./PendingApprove.scss"
import { useGetSalaryByLeaderQuery } from "../../../redux/slice/Salary_increate"
import CircularUnderLoad from "../../ShareComponent/Loading/loading"
import RegistrationForms from "../Form/Form"
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { GetResultDataSalary } from "../../../redux/slice/Increate_Salary.slice "
import ITableSalaryApprove from "../Table/TableSalaryApprove/TableSalaryApprove"



const Salary = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const dispatch = useAppDispatch()
    const { data, isLoading } = useGetSalaryByLeaderQuery()
    const [openRegisterForm, setOpenRegisterForm] = useState<boolean>(false)
    const [option, setOption] = useState("")
    const [dataSearch, setDataSearch] = useState([])
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handlShowHideRegisterFormModal = (item) => {
        dispatch(GetResultDataSalary(item))
        setOpenRegisterForm(!openRegisterForm)
        setOption("Approve-salary")
    }

    return (
        <div>
            {isLoading == false ?
                <ITableSalaryApprove
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
export default Salary