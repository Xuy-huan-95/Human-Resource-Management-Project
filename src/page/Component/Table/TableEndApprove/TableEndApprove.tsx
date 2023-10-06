import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useStyles } from "../../../ShareComponent/UseStylesTable/UseStylesTable"
import { IEployeeRes } from "../../../../interface/Employee.interface"
import moment from "moment"
import ButtonView from "../../../ShareComponent/Button/ButtonView"
import Pagination from "../../../ShareComponent/Pagination/Pagination"
import Empty from "../../../ShareComponent/Empty/Empty"
import React from 'react';
import { STATUS_All, NAME_GENDER, NAME_STATUS_PROFILE, STATUS_PROFILE } from "../../../ShareComponent/Constants/StatusIfomation"


interface ITableEndApprove {
    data: any
    showHideEndModal: (item: any) => void
    rowsPerPage: number
    page: number
    handleChangePage: (event: unknown, newPage: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TableEndApprove = (props: ITableEndApprove) => {
    const classes = useStyles();
    const { data, showHideEndModal, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } = props

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
                        {data && (data as IEployeeRes)?.data && (data as IEployeeRes)?.data.length > 0
                            ?
                            (data as IEployeeRes)?.data.map((item, index) => {
                                return (
                                    <TableBody key={`item-${index}`} >
                                        <TableRow hover role="checkbox" tabIndex={-1} >
                                            <TableCell
                                            >
                                                {item.name}
                                            </TableCell>
                                            <TableCell >
                                                {item.gender == STATUS_All.ZERO && NAME_GENDER.ONE}
                                                {item.gender == STATUS_All.ONE && NAME_GENDER.ONE}
                                                {item.gender == STATUS_All.TWO && NAME_GENDER.TWO}
                                                {item.gender == STATUS_All.THREE && NAME_GENDER.THREE}
                                            </TableCell>
                                            <TableCell >
                                                {item.team}
                                            </TableCell>
                                            <TableCell >
                                                {item.email}
                                            </TableCell>
                                            <TableCell >
                                                {item.phone}
                                            </TableCell>
                                            <TableCell >
                                                {moment(item.dateOfBirth).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell >
                                                {item.submitProfileStatus == STATUS_PROFILE.SIX && NAME_STATUS_PROFILE.SIX}
                                            </TableCell>
                                            <TableCell >
                                                <div className="btn-approve">
                                                    <ButtonView
                                                        handleFuntion={() => showHideEndModal(item)}
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
export default TableEndApprove