import "./TableRelative.scss"
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ButtonEdit from "../../../ShareComponent/Button/ButtonEdit"
import ButtonDelete from "../../../ShareComponent/Button/ButtonDelete"
import moment from "moment";
import Empty from "../../../ShareComponent/Empty/Empty"
import { useStyles } from "../../../ShareComponent/UseStylesTable/UseStylesTable"
import React from "react";
import { STATUS_PROFILE, NAME_GENDER, RELATIONSHIP } from "../../../ShareComponent/Constants/StatusIfomation"
import Pagination from '../../../ShareComponent/Pagination/Pagination';


interface ITableRelative {
    data: any
    handleSelectActionUpdate: (item: any) => Promise<void>
    handleDelete: (item: any) => Promise<void>
    page: number
    rowsPerPage: number
    handleChangePage: (event: unknown, newPage: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const TableRelative = (props: ITableRelative) => {
    const classes = useStyles();
    const { data, handleSelectActionUpdate, handleDelete, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = props

    return (
        <div>
            <Grid >
                <Grid >
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
                                        Email
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                    >
                                        Sđt
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                    >
                                        Giới tính
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                    >
                                        Ngày sinh
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                    >
                                        Cccd
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                    >
                                        Địa chỉ
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                    >
                                        Quan hệ
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                    >
                                        Thao tác
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            {data?.data && data?.data?.length > 0 ?
                                data?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
                                    return (
                                        <TableBody key={`item-${index}`}>
                                            <TableRow hover role="checkbox" tabIndex={-1} >
                                                <TableCell >
                                                    {item.name}
                                                </TableCell>
                                                <TableCell >
                                                    {item.email}
                                                </TableCell>
                                                <TableCell >
                                                    {item.phoneNumber}
                                                </TableCell>
                                                <TableCell align='center' >
                                                    {item.gender == STATUS_PROFILE.ONE && NAME_GENDER.ZERO}
                                                    {item.gender == STATUS_PROFILE.TWO && NAME_GENDER.TWO}
                                                    {item.gender == STATUS_PROFILE.THREE && NAME_GENDER.THREE}
                                                </TableCell>
                                                <TableCell >
                                                    {moment(item.dateOfBirth).format("DD/MM/YYYY")}
                                                </TableCell>
                                                <TableCell >
                                                    {item.citizenIdentificationNumber}
                                                </TableCell>
                                                <TableCell >
                                                    {item.address}
                                                </TableCell>
                                                <TableCell >
                                                    {item.relationShip == STATUS_PROFILE.ONE && RELATIONSHIP.ONE}
                                                    {item.relationShip == STATUS_PROFILE.TWO && RELATIONSHIP.TWO}
                                                    {item.relationShip == STATUS_PROFILE.THREE && RELATIONSHIP.THREE}
                                                    {item.relationShip == STATUS_PROFILE.FOUR && RELATIONSHIP.FOUR}
                                                    {item.relationShip == STATUS_PROFILE.FIVE && RELATIONSHIP.FIVE}

                                                </TableCell>
                                                <TableCell >
                                                    <div className='Action-btn'>
                                                        <ButtonEdit
                                                            handleFuntion={() => handleSelectActionUpdate(item)}
                                                        />
                                                        <ButtonDelete
                                                            handleFuntion={() => handleDelete(item)}
                                                        />
                                                    </div>

                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    )
                                })
                                :
                                < Empty />
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
        </div>
    )
}

export default TableRelative