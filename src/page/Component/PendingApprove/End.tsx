import { useState } from "react"
import "./PendingApprove.scss"
import { useGetCreateUserQuery } from "../../../redux/slice/Employee/index"
import CircularUnderLoad from "../../ShareComponent/Loading/loading"
import EndFormModal from "../EndEmployee/EndEmployeeDialog"
import { GetResultData } from "../../../redux/slice/RegisterUser.slice"
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import TableEndApprove from "../Table/TableEndApprove/TableEndApprove"
import React from "react"

interface IEnd {
    search: string
}

const End = (props: IEnd) => {
    const { search } = props
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { data, isLoading } = useGetCreateUserQuery({ pageIndex: page + 1, pageSize: rowsPerPage, keyword: search, listStatus: "6" })
    const [openEndModal, setOpenEndModal] = useState<boolean>(false)
    const [option, setOption] = useState("")

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const showHideEndModal = (item) => {
        dispatch(GetResultData(item))
        setOpenEndModal(!openEndModal)
        setOption("End-Infomation")
    }
    return (
        <div>
            {isLoading == false ?
                <TableEndApprove
                    data={data}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    showHideEndModal={showHideEndModal}

                />
                :
                <CircularUnderLoad />
            }
            <EndFormModal
                open={openEndModal}
                setOpen={setOpenEndModal}
                option={option}
                setOption={setOption}
            />

        </div >


    )
}
export default End