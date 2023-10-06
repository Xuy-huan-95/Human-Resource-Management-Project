import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useStyles } from "../../../ShareComponent/UseStylesTable/UseStylesTable"
import { IProccessRes } from "../../../../interface/Proccess.interface"
import moment from 'moment';
import ButtonView from "../../../ShareComponent/Button/ButtonView"
import Pagination from "../../../ShareComponent/Pagination/Pagination"
import Empty from "../../../ShareComponent/Empty/Empty"
import React from 'react';
import { STATUS_PROFILE, NAME_PROCESS, NAME_STATUS_PROFILE } from "../../../ShareComponent/Constants/StatusIfomation"


interface ITableProcessApprove {
    data: any
    handlShowHideRegisterFormModal: (item: any) => void
    rowsPerPage: number
    page: number
    handleChangePage: (event: unknown, newPage: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void

}

const TableProcessApprove = (props: ITableProcessApprove) => {
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
                                    Lần thăng chức
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Chức vụ cũ
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Chức vụ mới
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Ghi chú
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
                        {data && (data as IProccessRes)?.data && (data as IProccessRes)?.data?.length > 0
                            ?
                            (data as IProccessRes)?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
                                return (
                                    <TableBody key={`item-${index}`}  >
                                        <TableRow hover role="checkbox" tabIndex={-1} >
                                            <TableCell >
                                                {item.times}
                                            </TableCell>
                                            <TableCell >
                                                {item.currentPosition == STATUS_PROFILE.ONE && NAME_PROCESS.ONE}
                                                {item.currentPosition == STATUS_PROFILE.TWO && NAME_PROCESS.TWO}
                                                {item.currentPosition == STATUS_PROFILE.THREE && NAME_PROCESS.THREE}
                                                {item.currentPosition == STATUS_PROFILE.FOUR && NAME_PROCESS.FOUR}
                                                {item.currentPosition == STATUS_PROFILE.FIVE && NAME_PROCESS.FIVE}
                                                {item.currentPosition == STATUS_PROFILE.SIX && NAME_PROCESS.SIX}
                                                {item.currentPosition == STATUS_PROFILE.SEVEN && NAME_PROCESS.SEVEN}
                                            </TableCell>
                                            <TableCell >
                                                {item.newPosition == STATUS_PROFILE.ONE && NAME_PROCESS.ONE}
                                                {item.newPosition == STATUS_PROFILE.TWO && NAME_PROCESS.TWO}
                                                {item.newPosition == STATUS_PROFILE.THREE && NAME_PROCESS.THREE}
                                                {item.newPosition == STATUS_PROFILE.FOUR && NAME_PROCESS.FOUR}
                                                {item.newPosition == STATUS_PROFILE.FIVE && NAME_PROCESS.FIVE}
                                                {item.newPosition == STATUS_PROFILE.SIX && NAME_PROCESS.SIX}
                                                {item.newPosition == STATUS_PROFILE.SEVEN && NAME_PROCESS.SEVEN}
                                            </TableCell>
                                            <TableCell className="text">
                                                {item.note}
                                            </TableCell>
                                            <TableCell >
                                                {moment(item.promotionDay).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell >
                                                {item.processStatus == STATUS_PROFILE.TWO && NAME_STATUS_PROFILE.TEN}
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

export default TableProcessApprove