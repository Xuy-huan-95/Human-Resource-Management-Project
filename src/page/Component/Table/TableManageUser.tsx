import React, { useState } from "react"
import "./Manage.scss"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import { useGetCreateUserQuery } from "../../../redux/slice/Employee/index"
import CircularUnderLoad from "../../ShareComponent/Loading/loading"
import Pagination from "../../ShareComponent/Pagination/Pagination"
import TableShare from "../../ShareComponent/Table/TableEmployee"
import SearchShare from "../../ShareComponent/Search/Search"

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" >
    <div className='icon-tabs'><HomeIcon /></div>
  </Link>,
  <Typography key="3" color="text.primary">
    Quản lý nhân viên
  </Typography>,
];

const TableManageUser = () => {
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
  const { data, isLoading } = useGetCreateUserQuery({ pageIndex: page + 1, pageSize: rowsPerPage, keyword: search, listStatus: "3,8,6,9" })
  return (
    <div>
      <div className='Breadcrumbs'>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
      <div className='title'>
        <div className='name-title'>
          Quản lý nhân viên
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
export default TableManageUser