import React, { useState } from "react"
import "./Manage.scss"
import { useGetCreateUserQuery } from "../../../redux/slice/Employee/index"
import CircularUnderLoad from "../../ShareComponent/Loading/loading"
import Pagination from "../../ShareComponent/Pagination/Pagination"
import TableShare from "../../ShareComponent/Table/TableEmployee"
import SearchShare from "../../ShareComponent/Search/Search"
import BreadcrumbsModal from "../../ShareComponent/Breadcrumbs/Breadcrumbs"

const LeaderApproved = () => {
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
  const { data, isLoading } = useGetCreateUserQuery({ pageIndex: page + 1, pageSize: rowsPerPage, keyword: search, listStatus: "3,7" }, { refetchOnMountOrArgChange: true })
  return (
    <div>
      <BreadcrumbsModal
        NameBreadcrumbs={"Đã duyệt"}
      />
      <div className='title'>
        <div className='name-title'>
          Đã duyệt
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


export default LeaderApproved