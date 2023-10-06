import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useGetCertificateByEmployeeIdQuery } from "../../../../redux/slice/Certificate"
import moment from 'moment';
import "./CertificateForm.scss"
import { useAppSelector } from "../../../../redux/hook";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        "& .MuiTableCell-root": {
            border: '1px solid #e6e0df',
        },
    },
});
const CertificateForm = () => {
    const classes = useStyles();
    const dataToSendLeader = useAppSelector((state) => state.registerUser.userInfomation)
    const { data } = useGetCertificateByEmployeeIdQuery(dataToSendLeader.id)

    return (
        <TableContainer className='Degreen-container'>
            <div className='All'>
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
                                Số thứ tự
                            </TableCell>
                            <TableCell
                                align="center"
                            >
                                Tên văn bằng
                            </TableCell>
                            <TableCell
                                align="center"
                            >
                                Ngày cấp
                            </TableCell>
                            <TableCell
                                align="center"
                            >
                                Nội dung văn bằng
                            </TableCell>
                            <TableCell
                                align="center"
                            >
                                Lĩnh vực
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {data?.data && data?.data.length > 0
                        ?
                        data?.data.map((item, index) => {
                            return (
                                <TableBody key={`item-${index}`}>
                                    <TableRow hover role="checkbox" tabIndex={-1}>
                                        <TableCell >
                                            {item.id}
                                        </TableCell>
                                        <TableCell >
                                            {item.certificateName}
                                        </TableCell>
                                        <TableCell >
                                            {moment(item.issueDate).format("DD/MM/YYYY")}
                                        </TableCell>
                                        <TableCell >
                                            {item.content}
                                        </TableCell>
                                        <TableCell >
                                            {item.field}
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
            </div>

        </TableContainer>
    );
}

export default CertificateForm