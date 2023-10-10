import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from "moment"
import Empty from "../../../ShareComponent/Empty/Empty"
import ButtonEdit from "../../../ShareComponent/Button/ButtonEdit"
import ButtonDelete from "../../../ShareComponent/Button/ButtonDelete"
import "./TableCertificate.scss"
import { useStyles } from "../../../ShareComponent/UseStylesTable/UseStylesTable"
import React from 'react';
import Pagination from '../../../ShareComponent/Pagination/Pagination';

interface ITableCertificate {
    data: any
    handleSetActionEdit: (value: any) => void
    handleDelete: (value: any) => Promise<void>
    page: number
    rowsPerPage: number
    handleChangePage: (event: unknown, newPage: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const TableCertificate = (props: ITableCertificate) => {
    const classes = useStyles();
    const { data, handleSetActionEdit, handleDelete, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = props
    return (
        <Grid  >
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
                                    Tên văn bằng
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Nội dung văn bằng
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Ngày cấp
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Xếp loại
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
                                            <TableCell className='width_field' title={item.certificateName}
                                            >
                                                {item.certificateName}
                                            </TableCell>
                                            <TableCell className='width_field' title={item.content}
                                            >
                                                {item.content}
                                            </TableCell>
                                            <TableCell align='center' className='width_field'
                                            >
                                                {moment(item.issueDate).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell align='center' className='width_field' title={item.field}
                                            >
                                                {item.field}
                                            </TableCell>
                                            <TableCell  >
                                                <div className='Action'>
                                                    <ButtonEdit
                                                        handleFuntion={() => handleSetActionEdit(item)}
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

export default TableCertificate