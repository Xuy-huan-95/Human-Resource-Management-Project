import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useUpdateEmployeeMutation } from "../../../redux/slice/Employee/index"
import { dataUpdateInistate } from "../../InitData/InitData"
import { toast } from "react-toastify";
import { useAppSelector } from "../../../redux/hook";
import RegistrationForms from "../Form/Form"
import ApproveActionModal from "../PendingApprove/ApproveDialog/ApproveDialog"
import { validateEndForm } from "../../../validate/validate"
import ButtonExit from "../../ShareComponent/Button/ButtonExit"
import ButtonSubmit from "../../ShareComponent/Button/ButtonSubmit"
import ButtonCancel from "../../ShareComponent/Button/ButtonCancel"
import ButtonResfuse from "../../ShareComponent/Button/ButtonResfuse"
import EndEmployeeForm from "../Form/EndEmployeeForm/EndEmployeeForm"
import { STATUS_PROFILE, NAME_USER } from "../../ShareComponent/Constants/StatusIfomation"
import { RESPONSE_STATUS_CODE } from "../../ShareComponent/Constants/StatusCode"

interface IEndModalProps {
    open: boolean,
    setOpen: any
    openModalProposal: boolean
    setOpenModalProposal: any
}
const EndEmployeeDialog = (props: IEndModalProps | any) => {
    const name = useAppSelector((state) => state.permission.name)
    const dataUser = useAppSelector((state) => state.registerUser.userInfomation)
    const { open, setOpen, openModalProposal, setOpenModalProposal } = props
    const [openApproveModal, setOpenApproveModal] = useState<boolean>(false)
    const [DataEnd, setDataEnd] = useState(dataUpdateInistate)
    const [UpdateEndStatus] = useUpdateEmployeeMutation()
    const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false)
    const [actionApprove, setActionApprove] = useState<string>("")

    const handleClose = () => {
        setOpen(false);
        setDataEnd(dataUpdateInistate)
    };
    const handleSubmitEndStatus = async () => {
        let check = validateEndForm(DataEnd)
        if (check == true) {
            let result = await UpdateEndStatus({ ...DataEnd, submitProfileStatus: 6 }).unwrap()
            if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                toast.success("Bạn đã nộp đơn nghỉ việc thành công")
                setOpen(!open)
                setOpenModalProposal(!openModalProposal)
            }
        }
    }

    const handleShowHideRegisterForm = () => {
        setOpenRegisterModal(!openRegisterModal)

    }
    const handleShowHideModalApprove = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("End-Approve")
    }

    const handleShowHideModalNeedDocument = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("Need-Document")
    }

    const handleShowHideModalRefuse = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("Refuse")
    }

    useEffect(() => {
        setDataEnd(dataUser)
    }, [dataUser])

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="lg"
                fullWidth
            >
                <DialogTitle id="customized-dialog-title">
                    Đơn xin nghỉ việc
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <EndEmployeeForm
                            DataEnd={DataEnd}
                            dataUser={dataUser}
                            setDataEnd={setDataEnd}
                        />
                    </DialogContentText>
                </DialogContent>
                <ButtonExit
                    handleClose={handleClose}
                />
                {dataUser.submitProfileStatus !== STATUS_PROFILE.SIX && name !== NAME_USER.TWO ?
                    <DialogActions>
                        <ButtonSubmit
                            handleFuntion={() => handleSubmitEndStatus()}
                            name={"Trình lên lãnh đạo"}
                        />
                        <ButtonCancel
                            handleCancel={handleClose}
                        />
                    </DialogActions>
                    :
                    <DialogActions>
                        <ButtonSubmit
                            handleFuntion={() => handleShowHideRegisterForm()}
                            name={"Xem hồ sơ"}
                        />
                        <ButtonSubmit
                            handleFuntion={() => handleShowHideModalApprove()}
                            name={"Phê duyệt"}
                        />
                        <ButtonSubmit
                            handleFuntion={() => handleShowHideModalNeedDocument()}
                            name={"Yêu cầu bổ xung"}
                        />
                        <ButtonResfuse
                            handleFuntion={() => handleShowHideModalRefuse()}
                        />
                        <ButtonCancel
                            handleCancel={handleClose}
                        />
                    </DialogActions>
                }
                <div>
                </div>
            </Dialog>
            <RegistrationForms
                open={openRegisterModal}
                setOpen={setOpenRegisterModal}
            />
            <ApproveActionModal
                open={openApproveModal}
                setOpen={setOpenApproveModal}
                actionApprove={actionApprove}
                openEndModal={open}
                setOpenEndModal={setOpen}
            />
        </div>

    );
}

export default EndEmployeeDialog