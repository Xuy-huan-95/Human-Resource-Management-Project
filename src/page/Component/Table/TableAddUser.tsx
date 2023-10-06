import React, { useEffect, useState } from "react"
import "./Manage.scss"
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ModalCreatedUser from "../CreateAndRegisterEmployee/CreatedEmployeeDialog"
import { useGetCreateUserQuery } from '../../../redux/slice/Employee/index';
import CircularUnderLoad from "../../ShareComponent/Loading/loading"
import Pagination from "../../ShareComponent/Pagination/Pagination"
import TableShare from "../../ShareComponent/Table/TableEmployee"
import SearchShare from "../../ShareComponent/Search/Search"
import BreadcrumbsModal from "../../ShareComponent/Breadcrumbs/Breadcrumbs"

const TableAddNewUser = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [action, setAction] = useState<string>("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState<string>("")

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const { data, isLoading } = useGetCreateUserQuery({ pageIndex: page + 1, pageSize: rowsPerPage, keyword: search, listStatus: "1,2,4,5" })
  const handleShowhideModalCreatedUser = () => {
    setOpenModalCreate(!openModalCreate);
    setAction("Create");
  };

  return (
    <div>
      <BreadcrumbsModal
        NameBreadcrumbs={"Thêm mới nhân viên"}
      />
      <div className="title">
        <div className="name-title">Thêm mới nhân viên</div>
        <SearchShare
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div className="btn-add-new">
        <Button
          variant="contained"
          size="medium"
          sx={{ background: "#7467ef" }}
          onClick={() => handleShowhideModalCreatedUser()}
        >
          <PersonAddAltIcon /> <span>Thêm mới</span>
        </Button>
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
      <ModalCreatedUser
        open={openModalCreate}
        setOpen={setOpenModalCreate}
        action={action}
        setAction={setAction}
      />
    </div >
  );
};

export default TableAddNewUser;
