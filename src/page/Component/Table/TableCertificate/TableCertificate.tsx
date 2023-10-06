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

interface ITableCertificate {
    data: any
    handleSetActionEdit: (value: any) => void
    handleDelete: (value: any) => Promise<void>
}
const TableCertificate = (props: ITableCertificate) => {
    const classes = useStyles();
    const { data, handleSetActionEdit, handleDelete } = props
    return (
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
                            data?.data?.map((item, index) => {
                                return (
                                    <TableBody key={`item-${index}`}>

                                        <TableRow hover role="checkbox" tabIndex={-1} >
                                            <TableCell >
                                                {item.certificateName}
                                            </TableCell>
                                            <TableCell >
                                                {item.content}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {moment(item.issueDate).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell align='center' >
                                                {item.field}
                                            </TableCell>
                                            <TableCell className='Action' >
                                                <ButtonEdit
                                                    handleFuntion={() => handleSetActionEdit(item)}
                                                />
                                                <ButtonDelete
                                                    handleFuntion={() => handleDelete(item)}
                                                />
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

            </Grid>

        </Grid>
    )
}

export default TableCertificate