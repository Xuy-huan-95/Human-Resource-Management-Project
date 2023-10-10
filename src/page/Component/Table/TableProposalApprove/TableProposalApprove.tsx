import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Empty from "../../../ShareComponent/Empty/Empty"
import { useStyles } from "../../../ShareComponent/UseStylesTable/UseStylesTable"
import moment from 'moment';
import Pagination from "../../../ShareComponent/Pagination/Pagination"
import ButtonView from "../../../ShareComponent/Button/ButtonView"
import React from 'react';
import { STATUS_PROFILE, NAME_STATUS_PROFILE, NAME_PROPOSAL } from "../../../ShareComponent/Constants/StatusIfomation"


interface ITableProposalApprove {
    data: any
    handlShowHideRegisterFormModal: (item: any) => void
    rowsPerPage: number
    page: number
    handleChangePage: (event: unknown, newPage: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TableProposalApprove = (props: ITableProposalApprove) => {
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
                                    Ngày yêu cầu
                                </TableCell>
                                <TableCell
                                    align="center"

                                >
                                    Nội dung
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Ghi chú
                                </TableCell>

                                <TableCell
                                    align="center"
                                >
                                    Loại
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
                        {data && data?.data && data?.data?.length > 0
                            ?
                            data?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
                                return (
                                    <TableBody key={`item-${index}`}  >
                                        <TableRow hover role="checkbox" tabIndex={-1} >
                                            <TableCell align='center' >
                                                {moment(item.proposalDate).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell >
                                                {item.content}
                                            </TableCell>
                                            <TableCell >
                                                {item.note}
                                            </TableCell>

                                            <TableCell className="text" align='center'>
                                                {item.type == STATUS_PROFILE.ONE && NAME_PROPOSAL.ONE}
                                                {item.type == STATUS_PROFILE.TWO && NAME_PROPOSAL.TWO}
                                                {item.type == STATUS_PROFILE.THREE && NAME_PROPOSAL.THREE}
                                            </TableCell>
                                            <TableCell align='center' >
                                                {item.proposalStatus == STATUS_PROFILE.TWO && NAME_STATUS_PROFILE.ELEVEN}
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

export default TableProposalApprove