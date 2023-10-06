import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import moment from 'moment';
import { IUser } from '../../../../interface/Employee.interface';
import ButtonEdit from "../../../ShareComponent/Button/ButtonEdit"
import ButtonDelete from "../../../ShareComponent/Button/ButtonDelete"
import ButtonView from "../../../ShareComponent/Button/ButtonView"
import Empty from "../../../ShareComponent/Empty/Empty"
import Pagination from "../../../ShareComponent/Pagination/Pagination"
import { STATUS_SALARY, STATUS_PROFILE, NAME_STATUS_PROFILE } from "../../../ShareComponent/Constants/StatusIfomation"
import { useStyles } from "../../../ShareComponent/UseStylesTable/UseStylesTable"


interface TableSalaryIncrease {
    data: any
    page: number
    rowsPerPage: number
    dataUser: IUser
    handleEdit: (item: any) => void
    handleShowhideModalDelete: (item: any) => void
    handleShowhideRegisterFrom: (item: any) => void
    handleChangePage: (event: unknown, newPage: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TableSalaryIncrease = (props: TableSalaryIncrease) => {
    const classes = useStyles();
    const { data, page, rowsPerPage, dataUser, handleEdit, handleShowhideModalDelete, handleShowhideRegisterFrom, handleChangePage, handleChangeRowsPerPage } = props

    return (
        <>
            <Grid >
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
                                        Lý do
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
                            {data && data?.data && data?.data.length > 0
                                ?
                                data?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
                                    return (
                                        <TableBody key={`item-${index}`}>
                                            <TableRow hover role="checkbox" tabIndex={-1}  >
                                                <TableCell align='center' >
                                                    {item.times}
                                                </TableCell>
                                                <TableCell align='right' >
                                                    {item.oldSalary} VND
                                                </TableCell>
                                                <TableCell align='right' >
                                                    {item.newSalary} VND
                                                </TableCell>
                                                <TableCell >
                                                    {item.note}
                                                </TableCell>
                                                <TableCell className="wrap" >
                                                    {item.reason}
                                                </TableCell>
                                                <TableCell >
                                                    {moment(item.startDate).format("DD/MM/YYYY")}
                                                </TableCell>
                                                <TableCell >
                                                    {item.salaryIncreaseStatus == STATUS_SALARY.ONE && NAME_STATUS_PROFILE.ONE}
                                                    {item.salaryIncreaseStatus == STATUS_SALARY.TWO && NAME_STATUS_PROFILE.TWO}
                                                    {item.salaryIncreaseStatus == STATUS_SALARY.THREE && NAME_STATUS_PROFILE.THREE}
                                                    {item.salaryIncreaseStatus == STATUS_SALARY.FOUR && NAME_STATUS_PROFILE.FOUR}
                                                    {item.salaryIncreaseStatus == STATUS_SALARY.FIVE && NAME_STATUS_PROFILE.FIVE}
                                                </TableCell>
                                                {dataUser.submitProfileStatus !== STATUS_PROFILE.SIX ?
                                                    <TableCell >
                                                        <div className="btn">
                                                            {item.salaryIncreaseStatus == STATUS_SALARY.ONE &&
                                                                <>
                                                                    <ButtonEdit
                                                                        handleFuntion={() => handleEdit(item)}
                                                                    />
                                                                    <ButtonDelete
                                                                        handleFuntion={() => handleShowhideModalDelete(item)}
                                                                    />
                                                                    <ButtonView
                                                                        handleFuntion={() => handleShowhideRegisterFrom(item)}
                                                                    />
                                                                </>
                                                            }
                                                            {item.salaryIncreaseStatus == STATUS_SALARY.TWO &&
                                                                <ButtonView
                                                                    handleFuntion={() => handleShowhideRegisterFrom(item)}
                                                                />
                                                            }
                                                            {item.salaryIncreaseStatus == STATUS_SALARY.THREE &&
                                                                <ButtonView
                                                                    handleFuntion={() => handleShowhideRegisterFrom(item)}
                                                                />
                                                            }
                                                            {item.salaryIncreaseStatus == STATUS_SALARY.FOUR &&
                                                                <>
                                                                    <ButtonEdit
                                                                        handleFuntion={() => handleEdit(item)}
                                                                    />
                                                                    <ButtonView
                                                                        handleFuntion={() => handleShowhideRegisterFrom(item)}
                                                                    />
                                                                </>
                                                            }
                                                            {item.salaryIncreaseStatus == STATUS_SALARY.FIVE &&
                                                                <>
                                                                    <ButtonEdit
                                                                        handleFuntion={() => handleEdit(item)}
                                                                    />
                                                                    <ButtonView
                                                                        handleFuntion={() => handleShowhideRegisterFrom(item)}
                                                                    />

                                                                </>
                                                            }
                                                        </div>
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
        </>
    )
}

export default TableSalaryIncrease