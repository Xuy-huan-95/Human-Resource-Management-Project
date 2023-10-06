import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ButtonEdit from "../../../ShareComponent/Button/ButtonEdit"
import ButtonDelete from "../../../ShareComponent/Button/ButtonDelete"
import ButtonView from "../../../ShareComponent/Button/ButtonView"
import moment from "moment"
import { STATUS_PROFILE, NAME_STATUS_PROFILE, STATUS_TYPE, NAME_TYPE } from "../../../ShareComponent/Constants/StatusIfomation"
import { IUser } from '../../../../interface/Employee.interface';
import Pagination from '../../../ShareComponent/Pagination/Pagination';
import Empty from "../../../ShareComponent/Empty/Empty"
import { useStyles } from "../../../ShareComponent/UseStylesTable/UseStylesTable"
import React from 'react';

interface ITableProposal {
    data: any
    page: number
    rowsPerPage: number
    dataUser: IUser
    handleEdit: (item: any) => void
    handleShowHideModalDelete: (item: any) => void
    handleShowhideRegister: (item: any) => void
    handleChangePage: (event: unknown, newPage: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const TableProposal = (props: ITableProposal) => {
    const classes = useStyles();
    const { data, page, rowsPerPage, dataUser, handleEdit, handleShowHideModalDelete, handleShowhideRegister, handleChangePage, handleChangeRowsPerPage } = props
    return (
        <div>
            <Grid>
                <Grid item lg={24} sm={24}  >
                    <Grid container item spacing={0}>
                        <TableContainer sx={{ maxHeight: 380 }}>
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
                                            Loại đề xuất
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
                                            <TableBody key={`item-${index}`}>
                                                <TableRow hover role="checkbox" tabIndex={-1} >
                                                    <TableCell align="center" >
                                                        {moment(item.proposalDate).format("DD/MM/YYYY")}
                                                    </TableCell>
                                                    <TableCell >
                                                        {item.content}
                                                    </TableCell>
                                                    <TableCell >
                                                        {item.note}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {item.type == STATUS_TYPE.ONE && NAME_TYPE.ONE}
                                                        {item.type == STATUS_TYPE.TWO && NAME_TYPE.TWO}
                                                        {item.type == STATUS_TYPE.THREE && NAME_TYPE.THREE}

                                                    </TableCell>
                                                    <TableCell align="center" >
                                                        {item.proposalStatus == STATUS_PROFILE.ONE && NAME_STATUS_PROFILE.ONE}
                                                        {item.proposalStatus == STATUS_PROFILE.TWO && NAME_STATUS_PROFILE.TWO}
                                                        {item.proposalStatus == STATUS_PROFILE.THREE && NAME_STATUS_PROFILE.THREE}
                                                        {item.proposalStatus == STATUS_PROFILE.FOUR && NAME_STATUS_PROFILE.FOUR}
                                                        {item.proposalStatus == STATUS_PROFILE.FIVE && NAME_STATUS_PROFILE.FIVE}
                                                    </TableCell>
                                                    {dataUser.submitProfileStatus !== STATUS_PROFILE.SIX ?
                                                        <TableCell >
                                                            {item.proposalStatus == STATUS_PROFILE.ONE &&
                                                                <div className="btn">
                                                                    <ButtonEdit
                                                                        handleFuntion={() => handleEdit(item)}
                                                                    />
                                                                    <ButtonDelete
                                                                        handleFuntion={() => handleShowHideModalDelete(item)}
                                                                    />
                                                                    <ButtonView
                                                                        handleFuntion={() => handleShowhideRegister(item)}
                                                                    />
                                                                </div>
                                                            }
                                                            {item.proposalStatus == STATUS_PROFILE.TWO &&
                                                                <div className="btn">
                                                                    <ButtonView
                                                                        handleFuntion={() => handleShowhideRegister(item)}
                                                                    />
                                                                </div>
                                                            }
                                                            {item.proposalStatus == STATUS_PROFILE.THREE &&
                                                                <div className="btn">
                                                                    <ButtonView
                                                                        handleFuntion={() => handleShowhideRegister(item)}
                                                                    />
                                                                </div>
                                                            }
                                                            {item.proposalStatus == STATUS_PROFILE.FOUR &&
                                                                <div className="btn">
                                                                    <ButtonEdit
                                                                        handleFuntion={() => handleEdit(item)}
                                                                    />
                                                                    <ButtonView
                                                                        handleFuntion={() => handleShowhideRegister(item)}
                                                                    />
                                                                </div>
                                                            }
                                                            {item.proposalStatus == STATUS_PROFILE.FIVE &&
                                                                <div className="btn">
                                                                    <ButtonEdit
                                                                        handleFuntion={() => handleEdit(item)}
                                                                    />
                                                                    <ButtonView
                                                                        handleFuntion={() => handleShowhideRegister(item)}
                                                                    />
                                                                </div>
                                                            }
                                                        </TableCell>
                                                        :
                                                        <TableCell>
                                                            <div className="btn">
                                                                <ButtonView
                                                                    handleFuntion={() => handleShowhideRegister(item)}
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
            </Grid>
        </div>
    )
}

export default TableProposal