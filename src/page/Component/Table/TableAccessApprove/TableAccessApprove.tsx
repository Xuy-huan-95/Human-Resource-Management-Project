import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useStyles } from "../../../ShareComponent/UseStylesTable/UseStylesTable"
import moment from "moment"
import Pagination from "../../../ShareComponent/Pagination/Pagination"
import Empty from "../../../ShareComponent/Empty/Empty"
import ButtonView from "../../../ShareComponent/Button/ButtonView"
import React from 'react';
import { STATUS_All, NAME_GENDER, NAME_STATUS_PROFILE, STATUS_PROFILE } from "../../../ShareComponent/Constants/StatusIfomation"

interface ITableAccessApprove {
    data: any
    handlShowHideRegisterFormModal: (item: any) => void
    rowsPerPage: number
    page: number
    handleChangePage: (event: unknown, newPage: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TableAccessApprove = (props: ITableAccessApprove) => {
    const classes = useStyles();
    const { data, handlShowHideRegisterFormModal, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } = props

    return (
        <>
            <Paper >
                <TableContainer >
                    <Table stickyHeader aria-label="sticky table" className={classes.table}>
                        <TableHead>
                            <TableRow sx={{
                                "& th": {
                                    color: "#fff",
                                    backgroundColor: "#7467ef",
                                }
                            }}>
                                <TableCell
                                    align="center"

                                >
                                    Họ và tên
                                </TableCell>
                                <TableCell
                                    align="center"

                                >
                                    Giới tính
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    nhóm
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Email
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Số điện thoại
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Ngày sinh
                                </TableCell>

                                <TableCell
                                    align="center"
                                >
                                    Trạng thái
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Thao tác
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {data && data?.data && data?.data.length > 0
                            ?
                            data?.data.map((item, index) => {
                                return (
                                    <TableBody key={`item-${index}`} >
                                        <TableRow hover role="checkbox" tabIndex={-1} >
                                            <TableCell
                                            >
                                                {item.name}
                                            </TableCell>
                                            <TableCell align="center">
                                                {item.gender == STATUS_All.ZERO && "Nam"}
                                                {item.gender == STATUS_All.ONE && "Nam"}
                                                {item.gender == STATUS_All.TWO && "Nữ"}
                                                {item.gender == STATUS_All.THREE && "Khác"}
                                            </TableCell>
                                            <TableCell align="center" >
                                                {item.team}
                                            </TableCell>
                                            <TableCell >
                                                {item.email}
                                            </TableCell>
                                            <TableCell align="center" >
                                                {item.phone}
                                            </TableCell>
                                            <TableCell align="center" >
                                                {moment(item.dateOfBirth).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell align="center" >
                                                {item.submitProfileStatus == STATUS_PROFILE.TWO && NAME_STATUS_PROFILE.TWO}
                                            </TableCell>
                                            <TableCell >
                                                <div className="btn-approve">
                                                    <ButtonView
                                                        handleFuntion={() => handlShowHideRegisterFormModal(item)}
                                                    />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                )
                            })
                            :
                            <Empty />
                        }
                    </Table>
                </TableContainer>
            </Paper>
            <Pagination
                data={data}
                rowsPerPage={rowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </>
    )
}

export default TableAccessApprove