import React, { useState } from "react"
import "./Manage.scss"
import { useGetCreateUserQuery } from "../../../redux/slice/Employee/index"
import CircularUnderLoad from "../../ShareComponent/Loading/loading"
import Pagination from "../../ShareComponent/Pagination/Pagination"
import TableShare from "../../ShareComponent/Table/TableEmployee"
import SearchShare from "../../ShareComponent/Search/Search"
import BreadcrumbsModal from "../../ShareComponent/Breadcrumbs/Breadcrumbs"

const TableEnd = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [search, setSearch] = useState<string>("")

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const { data, isLoading } = useGetCreateUserQuery({ pageIndex: page + 1, pageSize: rowsPerPage, keyword: search, listStatus: "7,0" }, { refetchOnMountOrArgChange: true })
    return (
        <div>
            <BreadcrumbsModal
                NameBreadcrumbs={"Kết thúc"}
            />
            <div className='title'>
                <div className='name-title'>
                    Kết thúc
                </div>
                <SearchShare
                    search={search}
                    setSearch={setSearch}
                />
            </div>
            {isLoading === false ?
                <>
                    <TableShare
                        data={data}
                    />
                    <Pagination
                        data={data}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </>
                :
                <CircularUnderLoad />
            }
        </div >

    );
}


export default TableEnd