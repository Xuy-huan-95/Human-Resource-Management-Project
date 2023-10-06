import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
import { RELATIONSHIP, STATUS_REALTIONSHIP } from "../../../ShareComponent/Constants/StatusIfomation"
import "./TableResume"
import { useStyles } from "../../../ShareComponent/UseStylesTable/UseStylesTable"
import './TableResume.scss'
import React from 'react';

interface ITableResume {
    data: any
}

const TableResume = (props: ITableResume) => {
    const classes = useStyles();
    const { data } = props

    return (
        <TableContainer  >
            <Table stickyHeader aria-label="sticky table" className={classes.table}>
                <TableHead>
                    <TableRow >
                        <TableCell
                            align="center"
                            className='fs'
                        >
                            Số thứ tự
                        </TableCell>
                        <TableCell
                            className='fs'
                            align="center"
                        >
                            Họ tên người thân
                        </TableCell>
                        <TableCell
                            className='fs'
                            align="center"
                        >
                            Ngày sinh
                        </TableCell>
                        <TableCell
                            className='fs'
                            align="center"
                        >
                            Số CCCD
                        </TableCell>
                        <TableCell
                            className='fs'
                            align="center"
                        >
                            Quan hệ
                        </TableCell>
                        <TableCell
                            className='fs'
                            align="center"
                        >
                            Địa chỉ chi tiết
                        </TableCell>

                    </TableRow>
                </TableHead>
                {data?.data?.employeeFamilyDtos && data?.data?.employeeFamilyDtos.length > 0
                    ?
                    data?.data?.employeeFamilyDtos.map((item, index) => {
                        return (
                            <TableBody key={`item-${index}`}>

                                <TableRow hover role="checkbox" tabIndex={-1}>

                                    <TableCell
                                        align='center'
                                        className='fs-body'
                                    >
                                        {item.id}
                                    </TableCell >
                                    <TableCell
                                        className='fs-body' >
                                        {item.name}
                                    </TableCell>
                                    <TableCell
                                        align='center'
                                        className='fs-body'
                                    >
                                        {moment(item.dateOfBirth).format("DD/MM/YYYY")}
                                    </TableCell>
                                    <TableCell
                                        align='center'
                                        className='fs-body'
                                    >
                                        {item.citizenIdentificationNumber}
                                    </TableCell>
                                    <TableCell
                                        align='center'
                                        className='fs-body'
                                    >
                                        {item.relationShip == STATUS_REALTIONSHIP.ONE && RELATIONSHIP.ONE}
                                        {item.relationShip == STATUS_REALTIONSHIP.TWO && RELATIONSHIP.TWO}
                                        {item.relationShip == STATUS_REALTIONSHIP.THREE && RELATIONSHIP.THREE}
                                        {item.relationShip == STATUS_REALTIONSHIP.FOUR && RELATIONSHIP.FOUR}
                                    </TableCell>
                                    <TableCell
                                        className='fs-body'
                                    >
                                        {item.address}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        )
                    })
                    :
                    <TableBody>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell colSpan={12}>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                }
            </Table>
        </TableContainer >
    )
}

export default TableResume