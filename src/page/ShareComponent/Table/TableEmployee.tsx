import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { GetResultData } from "../../../redux/slice/RegisterUser.slice"
import Empty from "../Empty/Empty"
import { dataUpdateInistate } from "../../InitData/InitData"
import RegistrationForms from "../../Component/Form/Form"
import DeleteUser from "../../Component/CreateAndRegisterEmployee/DeleteEmployeeDialog"
import ModalCreatedUser from "../../Component/CreateAndRegisterEmployee/CreatedEmployeeDialog"
import ReasonModal from "../../Component/Modal/ReasonModal/ReasonModal"
import ModalUpdatedevelopments from "../../Component/CreateProposalEmployee/CreateProposalEmployeeDialog"
import "./TableEmployee.scss"
import { STATUS_GENDER, STATUS_TEAM, STATUS_PROFILE, NAME_GENDER, NAME_TEAM, NAME_STATUS_PROFILE } from "../Constants/StatusIfomation"
import ButtonEdit from "../Button/ButtonEdit"
import ButtonDelete from "../Button/ButtonDelete"
import ButtonView from "../Button/ButtonView"
import ButtonViewReason from "../Button/ButtonViewReason"
import ButtonEndCode from "../Button/ButtonEndCode"
import { useStyles } from "../UseStylesTable/UseStylesTable"

interface ITableShare {
    data: any

}
const TableShare = (props: ITableShare | any) => {
    const dispatch = useAppDispatch()
    const { data } = props
    const classes = useStyles();
    const name = useAppSelector((state) => state.permission.name)
    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [action, setAction] = useState<string>("");
    const [openDeleteUser, setOpenDeleteUser] = useState(false);
    const [DataDelete, setDataDelete] = useState({});
    const [openRegistration, setOpenRegistration] = useState(false);
    const [openModalUpdatedevelopments, setOpenModalUpdatedevelopments] = useState(false);
    const [UserInfomation, setUserInfomation] = useState(dataUpdateInistate);
    const [option, setOption] = useState<string>("")
    const [openRereasonForRefuse, setOpenRereasonForRefuse] = useState(false);
    const [dataReasonRefush, setDataReasonRefush] = useState(dataUpdateInistate);


    const handleShowhideModalUpdateUser = (item: any) => {
        setOpenModalCreate(!openModalCreate);
        setAction("Update");
        dispatch(GetResultData(item))
    };

    const handleShowhideDeleteFrom = (item: any) => {
        setOpenDeleteUser(!openDeleteUser);
        setDataDelete(item)
    };

    const handleShowhideRegistrationFrom = (item: any) => {
        setOpenRegistration(!openRegistration);
        dispatch(GetResultData(item))
    };

    const handleShowhideModalUpdatedevelopments = (item) => {
        setOpenModalUpdatedevelopments(!openModalUpdatedevelopments);
        setUserInfomation(item)
        dispatch(GetResultData(item))
    };

    const handleShowhideRereasonForRefuseModal = (item) => {
        setOpenRereasonForRefuse(!openRereasonForRefuse)
        setDataReasonRefush(item)
    }

    const handleShowhideRegistrationFormAfterEnd = (item) => {
        setOpenRegistration(!openRegistration)
        dispatch(GetResultData(item))
        setOption("View-End")
    }

    const handleShowhideRegisterToSendEndUnfomation = (item) => {
        dispatch(GetResultData(item))
        setOpenRegistration(!openRegistration)
        setOption("End-Infomation")
    }

    const handleShowhideRegistrationForm = (item) => {
        setOpenRegistration(!openRegistration)
        dispatch(GetResultData(item))
    }
    return (
        <div>
            <Paper >
                <TableContainer className='container'>
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
                                    STT
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Họ và tên
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Giới tính
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Email
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Số điện thoại
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Ngày sinh
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    Nhóm
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
                        {data && data.data && data.data.length > 0
                            ?
                            data.data.map((item, index) => {
                                return (
                                    <TableBody key={`item-${index}`} >
                                        <TableRow hover role="checkbox" tabIndex={-1} >
                                            <TableCell align="center">
                                                {item.id}
                                            </TableCell>
                                            <TableCell title={item.name} >
                                                <div className='text'>{item.name}</div>
                                            </TableCell>
                                            <TableCell align="center" >
                                                {item.gender == STATUS_GENDER.ZERO && NAME_GENDER.ZERO}
                                                {item.gender == STATUS_GENDER.ONE && NAME_GENDER.ONE}
                                                {item.gender == STATUS_GENDER.TWO && NAME_GENDER.TWO}
                                                {item.gender == STATUS_GENDER.THREE && NAME_GENDER.THREE}
                                            </TableCell>
                                            <TableCell title={item.email} >
                                                <div className='text'>{item.email}</div>
                                            </TableCell>
                                            <TableCell align="center" >
                                                {item.phone}
                                            </TableCell>
                                            <TableCell align="center">
                                                {moment(item.dateOfBirth).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell align="center">
                                                {item.team == STATUS_TEAM.ONE && NAME_TEAM.ONE}
                                                {item.team == STATUS_TEAM.TWO && NAME_TEAM.TWO}
                                                {item.team == STATUS_TEAM.THREE && NAME_TEAM.THREE}
                                                {item.team == STATUS_TEAM.FOUR && NAME_TEAM.FOUR}
                                            </TableCell>
                                            <TableCell align="center" >
                                                {item.submitProfileStatus == STATUS_PROFILE.ONE && NAME_STATUS_PROFILE.ONE}
                                                {item.submitProfileStatus == STATUS_PROFILE.TWO && NAME_STATUS_PROFILE.TWO}
                                                {item.submitProfileStatus == STATUS_PROFILE.FOUR && NAME_STATUS_PROFILE.FOUR}
                                                {item.submitProfileStatus == STATUS_PROFILE.FIVE && NAME_STATUS_PROFILE.FIVE}
                                                {item.submitProfileStatus == STATUS_PROFILE.THREE && NAME_STATUS_PROFILE.THREE}
                                                {item.submitProfileStatus == STATUS_PROFILE.SIX && NAME_STATUS_PROFILE.SIX}
                                                {item.submitProfileStatus == STATUS_PROFILE.EIGHT && NAME_STATUS_PROFILE.EIGHT}
                                                {item.submitProfileStatus == STATUS_PROFILE.NIGHT && NAME_STATUS_PROFILE.NIGHT}
                                                {item.submitProfileStatus == STATUS_PROFILE.ZERO && NAME_STATUS_PROFILE.ZERO}
                                                {item.submitProfileStatus == STATUS_PROFILE.SEVEN && NAME_STATUS_PROFILE.SEVEN}
                                            </TableCell>
                                            <TableCell  >
                                                {item.submitProfileStatus == STATUS_PROFILE.ONE
                                                    &&
                                                    <>
                                                        <div className="btn-option">
                                                            <ButtonEdit
                                                                handleFuntion={() => handleShowhideModalUpdateUser(item)}
                                                            />
                                                            {item.submitProfileStatus !== STATUS_PROFILE.FIVE &&
                                                                <ButtonDelete
                                                                    handleFuntion={() => handleShowhideDeleteFrom(item)}
                                                                />
                                                            }
                                                        </div>
                                                    </>
                                                }
                                                {item.submitProfileStatus == STATUS_PROFILE.FOUR
                                                    &&
                                                    <>
                                                        <div className="btn-option">
                                                            <ButtonEdit
                                                                handleFuntion={() => handleShowhideModalUpdateUser(item)}
                                                            />

                                                        </div>
                                                    </>
                                                }
                                                {item.submitProfileStatus == STATUS_PROFILE.FIVE
                                                    &&
                                                    <>
                                                        <div className="btn-option">
                                                            <ButtonEdit
                                                                handleFuntion={() => handleShowhideModalUpdateUser(item)}
                                                            />

                                                        </div>
                                                    </>
                                                }
                                                {item.submitProfileStatus == STATUS_PROFILE.TWO
                                                    &&
                                                    <div className="btn-option">
                                                        <ButtonView
                                                            handleFuntion={() => handleShowhideRegistrationForm(item)}
                                                        />
                                                    </div>
                                                }
                                                {item.submitProfileStatus == STATUS_PROFILE.THREE && name == "user" &&
                                                    <div className="btn-option">
                                                        <ButtonEdit
                                                            handleFuntion={() => handleShowhideModalUpdatedevelopments(item)}
                                                        />
                                                    </div>
                                                }
                                                {item.submitProfileStatus == STATUS_PROFILE.EIGHT &&
                                                    <>
                                                        <div className="btn-option">
                                                            <ButtonEdit
                                                                handleFuntion={() => handleShowhideModalUpdatedevelopments(item)}
                                                            />
                                                            <ButtonViewReason
                                                                handleFuntion={() => handleShowhideRereasonForRefuseModal(item)}
                                                            />
                                                        </div>
                                                    </>
                                                }
                                                {item.submitProfileStatus == STATUS_PROFILE.NIGHT &&
                                                    <>
                                                        <div className="btn-option">
                                                            <ButtonEdit
                                                                handleFuntion={() => handleShowhideModalUpdatedevelopments(item)}
                                                            />
                                                            <ButtonViewReason
                                                                handleFuntion={() => handleShowhideRereasonForRefuseModal(item)}
                                                            />
                                                        </div>
                                                    </>
                                                }
                                                {item.submitProfileStatus == STATUS_PROFILE.SIX &&
                                                    <div className="btn-option">
                                                        <ButtonView
                                                            handleFuntion={() => handleShowhideModalUpdatedevelopments(item)}
                                                        />
                                                    </div>
                                                }
                                                {item.submitProfileStatus == STATUS_PROFILE.ZERO &&
                                                    <div className="btn-option">
                                                        <ButtonView
                                                            handleFuntion={() => handleShowhideRegistrationForm(item)}
                                                        />
                                                    </div>
                                                }
                                                {item.submitProfileStatus == STATUS_PROFILE.SEVEN && name == "user" &&
                                                    <div className="btn-option">
                                                        <ButtonEndCode
                                                            handleFuntion={() => handleShowhideRegistrationFormAfterEnd(item)}
                                                        />
                                                    </div>
                                                }
                                                {item.submitProfileStatus == STATUS_PROFILE.SEVEN && name == "manage" &&
                                                    <div className="btn-option">
                                                        <ButtonView
                                                            handleFuntion={() => handleShowhideRegistrationFormAfterEnd(item)}
                                                        />
                                                    </div>
                                                }
                                                {item.submitProfileStatus == STATUS_PROFILE.THREE && name == "manage" &&
                                                    <div className="btn-option">
                                                        <ButtonView
                                                            handleFuntion={() => handleShowhideRegistrationForm(item)}
                                                        />
                                                    </div>
                                                }
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

            <RegistrationForms
                open={openRegistration}
                setOpen={setOpenRegistration}
                option={option}
            />
            <DeleteUser
                open={openDeleteUser}
                setOpen={setOpenDeleteUser}
                DataDelete={DataDelete}
            />
            <ModalCreatedUser
                open={openModalCreate}
                setOpen={setOpenModalCreate}
                action={action}
                setAction={setAction}
            />
            <ModalUpdatedevelopments
                open={openModalUpdatedevelopments}
                setOpen={setOpenModalUpdatedevelopments}
            />
            <ReasonModal
                open={openRereasonForRefuse}
                setOpen={setOpenRereasonForRefuse}
                dataReasonRefuse={dataReasonRefush}
            />
        </div>

    )
}

export default TableShare