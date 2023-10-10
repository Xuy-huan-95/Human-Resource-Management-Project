import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { STATUS_PROFILE, NAME_STATUS_PROFILE, STATUS_PROCESS, NAME_PROCESS } from "../../../ShareComponent/Constants/StatusIfomation"
import moment from 'moment';
import ButtonEdit from "../../../ShareComponent/Button/ButtonEdit"
import ButtonDelete from "../../../ShareComponent/Button/ButtonDelete"
import ButtonView from "../../../ShareComponent/Button/ButtonView"
import { IUser } from '../../../../interface/Employee.interface';
import Pagination from '../../../ShareComponent/Pagination/Pagination';
import Empty from "../../../ShareComponent/Empty/Empty"
import { useStyles } from "../../../ShareComponent/UseStylesTable/UseStylesTable"
import React from 'react';

interface ITableProcess {
    data: any
    page: number
    rowsPerPage: number
    dataUser: IUser
    handleUpdate: (item: any) => void
    handleShowhideModalDelete: (item: any) => void
    handleShowhideRegisterFrom: (item: any) => void
    handleChangePage: (event: unknown, newPage: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TableProcess = (props: ITableProcess) => {
    const classes = useStyles();
    const { data, page, rowsPerPage, dataUser, handleUpdate, handleShowhideModalDelete, handleShowhideRegisterFrom, handleChangePage, handleChangeRowsPerPage } = props

    return (
        <Grid  >
            <Grid >
                <TableContainer>
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
                                    Chức cụ mới
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Ghi chú
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Lý do từ chối
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Lý do ycbs
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Ngày bắt đầu
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
                        {data?.data && data?.data.length > 0
                            ?
                            data?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
                                return (
                                    <TableBody key={`item-${index}`} >
                                        <TableRow hover role="checkbox" tabIndex={-1} >
                                            <TableCell align="center" >
                                                {item.times}
                                            </TableCell>
                                            <TableCell >
                                                {item.currentPosition == STATUS_PROCESS.ONE && NAME_PROCESS.ONE}
                                                {item.currentPosition == STATUS_PROCESS.TWO && NAME_PROCESS.TWO}
                                                {item.currentPosition == STATUS_PROCESS.THREE && NAME_PROCESS.THREE}
                                                {item.currentPosition == STATUS_PROCESS.FOUR && NAME_PROCESS.FOUR}
                                                {item.currentPosition == STATUS_PROCESS.FIVE && NAME_PROCESS.FIVE}
                                                {item.currentPosition == STATUS_PROCESS.SIX && NAME_PROCESS.SIX}
                                                {item.currentPosition == STATUS_PROCESS.SEVEN && NAME_PROCESS.SEVEN}
                                            </TableCell>
                                            <TableCell >
                                                {item.newPosition == STATUS_PROCESS.ONE && NAME_PROCESS.ONE}
                                                {item.newPosition == STATUS_PROCESS.TWO && NAME_PROCESS.TWO}
                                                {item.newPosition == STATUS_PROCESS.THREE && NAME_PROCESS.THREE}
                                                {item.newPosition == STATUS_PROCESS.FOUR && NAME_PROCESS.FOUR}
                                                {item.newPosition == STATUS_PROCESS.FIVE && NAME_PROCESS.FIVE}
                                                {item.newPosition == STATUS_PROCESS.SIX && NAME_PROCESS.SIX}
                                                {item.newPosition == STATUS_PROCESS.SEVEN && NAME_PROCESS.SEVEN}                                               </TableCell>
                                            <TableCell >
                                                {item.note}
                                            </TableCell>
                                            <TableCell >
                                                {item?.reasonForRefusal}
                                            </TableCell>
                                            <TableCell >
                                                {item.additionalRequest}
                                            </TableCell>
                                            <TableCell align="center" >
                                                {moment(item.promotionDay).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell align='center' >
                                                {item.processStatus == STATUS_PROFILE.ONE && NAME_STATUS_PROFILE.ONE}
                                                {item.processStatus == STATUS_PROFILE.TWO && NAME_STATUS_PROFILE.TWO}
                                                {item.processStatus == STATUS_PROFILE.THREE && NAME_STATUS_PROFILE.THREE}
                                                {item.processStatus == STATUS_PROFILE.FOUR && NAME_STATUS_PROFILE.FOUR}
                                                {item.processStatus == STATUS_PROFILE.FIVE && NAME_STATUS_PROFILE.FIVE}
                                            </TableCell>
                                            {dataUser.submitProfileStatus !== NAME_STATUS_PROFILE.SIX ?
                                                <TableCell  >
                                                    {item.processStatus == STATUS_PROFILE.ONE &&
                                                        <div className="btn">
                                                            <ButtonEdit
                                                                handleFuntion={() => handleUpdate(item)}
                                                            />
                                                            <ButtonDelete
                                                                handleFuntion={() => handleShowhideModalDelete(item)}
                                                            />
                                                            <ButtonView
                                                                handleFuntion={() => handleShowhideRegisterFrom(item)}
                                                            />
                                                        </div>
                                                    }
                                                    {item.processStatus == STATUS_PROFILE.TWO &&
                                                        <div className="btn">
                                                            <ButtonView
                                                                handleFuntion={() => handleShowhideRegisterFrom(item)}
                                                            />
                                                        </div>

                                                    }
                                                    {item.processStatus == STATUS_PROFILE.THREE &&
                                                        <div className="btn">
                                                            <ButtonView
                                                                handleFuntion={() => handleShowhideRegisterFrom(item)}
                                                            />
                                                        </div>
                                                    }
                                                    {item.processStatus == STATUS_PROFILE.FOUR &&
                                                        <div className="btn">
                                                            <ButtonEdit
                                                                handleFuntion={() => handleUpdate(item)}
                                                            />
                                                            <ButtonView
                                                                handleFuntion={() => handleShowhideRegisterFrom(item)}
                                                            />
                                                        </div>
                                                    }
                                                    {item.processStatus == STATUS_PROFILE.FIVE &&
                                                        <div className="btn">
                                                            <ButtonEdit
                                                                handleFuntion={() => handleUpdate(item)}
                                                            />
                                                            <ButtonView
                                                                handleFuntion={() => handleShowhideRegisterFrom(item)}
                                                            />
                                                        </div>
                                                    }
                                                </TableCell>
                                                :
                                                <TableCell >
                                                    <div className="btn">
                                                        <ButtonView
                                                            handleFuntion={() => handleShowhideRegisterFrom(item)}
                                                        />
                                                    </div>
                                                </TableCell>
                                            }
                                        </TableRow>
                                    </TableBody>
                                )
                            })
                            :
                            <Empty />
                        }
                    </Table>
                    <Pagination
                        data={data}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableContainer>

            </Grid>

        </Grid>
    )
}

export default TableProcess