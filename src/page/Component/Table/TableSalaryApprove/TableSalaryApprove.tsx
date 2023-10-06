import moment from 'moment';
import Pagination from '../../../ShareComponent/Pagination/Pagination';
import Empty from "../../../ShareComponent/Empty/Empty"
import { useStyles } from "../../../ShareComponent/UseStylesTable/UseStylesTable"
import ButtonView from "../../../ShareComponent/Button/ButtonView"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ISalaryIncreateRes } from "../../../../interface/SalaryIncreate.interface"
import React from 'react';
import { STATUS_All, NAME_STATUS_PROFILE } from "../../../ShareComponent/Constants/StatusIfomation"


interface ITableSalaryApprove {
    data: any
    page: number
    rowsPerPage: number
    handlShowHideRegisterFormModal: (item: any) => void
    handleChangePage: (event: unknown, newPage: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TableSalaryApprove = (props: ITableSalaryApprove) => {
    const classes = useStyles();
    const { data, rowsPerPage, page, handlShowHideRegisterFormModal, handleChangePage, handleChangeRowsPerPage } = props

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
                                    Lần tăng lương
                                </TableCell>
                                <TableCell
                                    align="center"

                                >
                                    Lương cũ
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Lương mới
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Ghi chú
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Lí do tăng lương
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Ngày hiệu lực
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
                        {data && (data as ISalaryIncreateRes)?.data && (data as ISalaryIncreateRes)?.data?.length > 0
                            ?
                            (data as ISalaryIncreateRes)?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
                                return (
                                    <TableBody key={`item-${index}`} >
                                        <TableRow hover role="checkbox" tabIndex={-1} >
                                            <TableCell align="center">
                                                {item.times}
                                            </TableCell>
                                            <TableCell >
                                                {item.oldSalary} VND
                                            </TableCell>
                                            <TableCell >
                                                {item.newSalary} VND
                                            </TableCell>
                                            <TableCell >
                                                {item.note}
                                            </TableCell>
                                            <TableCell >
                                                {item.reason}
                                            </TableCell>
                                            <TableCell >
                                                {moment(item.startDate).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell >
                                                {item.salaryIncreaseStatus == STATUS_All.TWO && NAME_STATUS_PROFILE.TWELE}
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

export default TableSalaryApprove