import React, { useEffect, useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import "./CreatedEmployeeDialog.scss"
import Box from '@mui/material/Box';
import EmployeeInfomationDialog from "./EmployeeInfomationDialog/EmployeeInfomationDialog"
import EmployeeCertificateDialog from "./EmployeeCertificateDialog/EmployeeCertificateDialog"
import RelativeEmployeeDialog from "./RelativeEmployeeDialog/RelativeEmployeeDialog"
import RegistrationForms from "../Form/Form"
import { useCreateEmployeeMutation, useUpdateEmployeeMutation } from "../../../redux/slice/Employee"
import { toast } from 'react-toastify';
import { dataUpdateInistate, InitValidateState } from "../../InitData/InitData"
import { validateUseInfo } from "../../../validate/validate"
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { GetResultData } from "../../../redux/slice/RegisterUser.slice"
import TabsList from "../../ShareComponent/Tabslist/TabsList"
import { RESPONSE_STATUS_CODE } from "../../ShareComponent/Constants/StatusCode"
import CustomTabPanel from "../../ShareComponent/CustomTabPanel/CustomTabPanel"
import ButtonExit from "../../ShareComponent/Button/ButtonExit"
import ButtonSubmit from "../../ShareComponent/Button/ButtonSubmit"
import ButtonCancel from "../../ShareComponent/Button/ButtonCancel"
import { STATUS_All, STATUS_PROFILE } from "../../ShareComponent/Constants/StatusIfomation"

export interface Iprop {
    open: boolean,
    setOpen: any
    action: string
    setAction: any
}
const ModalCreatedUser = (props: Iprop) => {
    const dataToSendLeader = useAppSelector((state) => state.registerUser.userInfomation)
    const dispatch = useAppDispatch()
    const [formDataCreate, setFormDataCreate] = useState(dataUpdateInistate)
    const [validateInput, setValidateInput] = useState(InitValidateState)
    const { open, setOpen, action } = props
    const [value, setValue] = useState(0);
    const [previreImage, setPrevireImage] = useState<string>("")
    const [openRegistration, setOpenRegistration] = useState(false);
    const [CreateData] = useCreateEmployeeMutation()
    const [UpdateData] = useUpdateEmployeeMutation()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);

    };
    const handleCreateUser = async () => {
        let validateData = validateUseInfo(dataUpdateInistate, formDataCreate, validateInput, setValidateInput)
        if (validateData == true) {
            let result = await CreateData(formDataCreate).unwrap()
            if (Object.values(result)[0] === RESPONSE_STATUS_CODE.SUCCESS) {
                dispatch(GetResultData(Object.values(result)[2]))
                toast.success("Bạn đã thêm nhân viên mới thành công")
            }
        }
    }
    const handleUpdateUser = async () => {
        let validateData = validateUseInfo(dataUpdateInistate, formDataCreate, validateInput, setValidateInput)
        if (validateData == true) {
            const data = { ...formDataCreate, dateOfBirth: new Date(formDataCreate.dateOfBirth), dateOfIssuanceCard: new Date(formDataCreate.dateOfBirth) }
            let result = await UpdateData(data).unwrap()
            if (Object.values(result)[0] == RESPONSE_STATUS_CODE.SUCCESS) {
                dispatch(GetResultData(Object.values(result)[2]))
                toast.success("Bạn đã update thành công")
            }
        }
    }
    const handleClose = () => {
        setOpen(false);
        setPrevireImage("")
        setValidateInput(InitValidateState)
        dispatch(GetResultData({}))
    };

    const handleShowhideRegistrationFrom = () => {
        setOpenRegistration(!openRegistration)

    }
    useEffect(() => {
        if (action === "Create") {
            setFormDataCreate(dataUpdateInistate)
        }
        if (action === "Update") {
            setFormDataCreate(dataToSendLeader)
        }
    }, [open])
    return (
        <div >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xl"
                className='modal-create-container'
            >
                <DialogTitle id="customized-dialog-title">
                    {action === "Create" ? "Tạo mới nhân viên" : "Chỉnh sửa nhân viên"}
                </DialogTitle>
                <Box >
                    <TabsList
                        value={value}
                        handleChange={handleChange}
                        name={"CreateEmployee"}
                    />
                    <CustomTabPanel value={value} index={STATUS_All.ZERO}>
                        <EmployeeInfomationDialog
                            previreImage={previreImage}
                            setPrevireImage={setPrevireImage}
                            formDataCreate={formDataCreate}
                            setFormDataCreate={setFormDataCreate}
                            action={action}
                            imageUpdate={dataToSendLeader.image}
                            validate={validateInput}
                            validateInput={validateInput}
                            setValidateInput={setValidateInput}
                        />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={STATUS_All.ONE} >
                        <EmployeeCertificateDialog
                        />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={STATUS_All.TWO}>
                        <RelativeEmployeeDialog
                        />
                    </CustomTabPanel>
                </Box>
                <ButtonExit
                    handleClose={handleClose}
                />
                <DialogActions>
                    {action === "Create" ?
                        <ButtonSubmit
                            handleFuntion={handleCreateUser}
                            name={"Lưu"}
                        />
                        :
                        <ButtonSubmit
                            handleFuntion={handleUpdateUser}
                            name={"Cập nhật"}
                        />
                    }
                    {dataToSendLeader.submitProfileStatus == STATUS_PROFILE.ONE || dataToSendLeader.submitProfileStatus == STATUS_PROFILE.FOUR || dataToSendLeader.submitProfileStatus == STATUS_PROFILE.FIVE ?
                        <ButtonSubmit
                            handleFuntion={handleShowhideRegistrationFrom}
                            name={"Đăng ký"}
                        />
                        :
                        <>
                        </>
                    }
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
                <RegistrationForms
                    open={openRegistration}
                    setOpen={setOpenRegistration}
                    option={""}
                    openCreateModal={open}
                    setOpenCreateModal={setOpen}
                />
            </Dialog>

        </div>
    );
}

export default ModalCreatedUser