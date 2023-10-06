import React, { useEffect, useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { useUpdateEmployeeMutation } from "../../../../redux/slice/Employee/index"
import { dataEndUser } from "../../../InitData/InitData"
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { toast } from 'react-toastify';
import ButtonExit from "../../../ShareComponent/Button/ButtonExit"
import ButtonSubmit from "../../../ShareComponent/Button/ButtonSubmit"
import ButtonCancel from "../../../ShareComponent/Button/ButtonCancel"
import "./SaveEndCodeModal.scss"
import Input from "../../../ShareComponent/Input/Input";
import { validateSaveCode } from "../../../InitData/InitData"
import { RESPONSE_STATUS_CODE, ERROR_STATUS_EMPTY } from "../../../ShareComponent/Constants/StatusCode"
import { validateDataEndCode } from "../../../../validate/validate"
import moment from "moment"
interface Iprop {
    open: boolean,
    setOpen: any
    openModalRegister: boolean
    setOpenModalRegister: any
}
const SaveEndCodeModal = (props: Iprop) => {
    const dataUser = useAppSelector((state) => state.registerUser.userInfomation)
    const { open, setOpen, openModalRegister, setOpenModalRegister } = props
    const [UpdateEndUser] = useUpdateEmployeeMutation()
    const [DataEnd, setDataEnd] = useState(dataEndUser)
    const [firstCode, setFirstCode] = useState("")
    const [validate, setValidate] = useState(validateSaveCode)
    const handleClose = () => {
        setOpen(false)
        setDataEnd({ ...DataEnd, decisionDay: moment(new Date()).format("YYYY-MM-DD") })
        setValidate(validateSaveCode)
    }
    const handleSenDataEnd = async () => {
        try {
            let check = validateDataEndCode(DataEnd, validate, setValidate)
            if (check === true) {
                let data = {
                    ...dataUser, decisionDay: DataEnd.decisionDay, numberSaved: `${firstCode} ${DataEnd.numberSaved}`, submitProfileStatus: "0"
                }
                let result = await UpdateEndUser(data).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("bạn đã nộp lưu thành công")
                    setOpen(false)
                    setOpenModalRegister(!openModalRegister)
                    setDataEnd({ ...DataEnd, decisionDay: moment(new Date()).format("YYYY-MM-DD") })
                    setValidate(validateSaveCode)
                } else {
                    toast.error("Bạn vui lòng kiểm tra lại thông trước trước khi nộp lưu hồ sơ")
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        let firstMonth = "0"
        let lastMonth = `${new Date().getMonth() + 1}`
        let currentYear = String(new Date().getFullYear()).split("")
        let currentMonth = firstMonth.concat(lastMonth)
        let EndCode = `NL${currentMonth}${currentYear[2]}${currentYear[3]}/`
        if (EndCode) setFirstCode(EndCode)
    }, [open])

    useEffect(() => {
        setDataEnd({ ...DataEnd, decisionDay: moment(new Date()).format("YYYY-MM-DD") })
    }, [open])

    return (
        <div >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xl"
                className='Modal-container'
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Nộp lưu hồ sơ
                </DialogTitle>
                <div className="container">
                    <Grid container spacing={2} className='all'  >
                        <Grid item lg={12} sm={12} className="width" >
                            <Grid container item spacing={2} >
                                <Grid item xs={12} lg={12}>
                                    <Input
                                        label={"Ngày nộp lưu"}
                                        type={"date"}
                                        value={DataEnd.decisionDay}
                                        FuntionOnchange={(event) => setDataEnd({ ...DataEnd, decisionDay: event.target.value })}
                                        error={validate.decisionDay}
                                        Validate={validate.decisionDay}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.THIRTYSIX}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container item spacing={2}>
                                <Grid item xs={12} lg={12}>
                                    <Input
                                        label={"Số lưu hồ sơ"}
                                        type={"text"}
                                        value={DataEnd?.numberSaved}
                                        FuntionOnchange={(event) => setDataEnd({ ...DataEnd, numberSaved: event.target.value })}
                                        error={validate.numberSaved}
                                        Validate={validate.numberSaved}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.THIRTYSEVEN}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>

                <ButtonExit
                    handleClose={handleClose}
                />
                <DialogActions>
                    <ButtonSubmit
                        handleFuntion={() => handleSenDataEnd()}
                        name={"Xác nhận"}
                    />
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>

            </Dialog>

        </div >
    );
}

export default SaveEndCodeModal