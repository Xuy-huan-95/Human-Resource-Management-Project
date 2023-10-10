import React, { useEffect, useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { IExperience } from "../../../../interface/Experiece.interface"
import { useCreateExperieceMutation, useUpdateExperieceMutation } from "../../../../redux/slice/Experience"
import { toast } from 'react-toastify';
import moment from 'moment';
import "./CreateExperienceEmployeeDialog.scss"
import ButtonExit from "../../../ShareComponent/Button/ButtonExit"
import { initStateExperience } from "../../../InitData/InitData"
import { RESPONSE_STATUS_CODE } from "../../../ShareComponent/Constants/StatusCode"
import ButtonSubmit from "../../../ShareComponent/Button/ButtonSubmit"
import ButtonCancel from "../../../ShareComponent/Button/ButtonCancel"
import { validateExperience } from "../../../InitData/InitData"
import { validateDataExperience } from "../../../../validate/ValidateExperience/ValidateExperience"
import Input from "../../../ShareComponent/Input/Input";
import { ERROR_STATUS_EMPTY, ERROR_STATUS_SYNTAX } from "../../../ShareComponent/Constants/StatusCode"
import { IUser } from "../../../../interface/Employee.interface";
export interface Iprop {
    open: any,
    setOpen: any
    action: string
    setAction: any
    dataUser: IUser
    dataUpdateExperience: IExperience
}
const CreateExperienceEmployeeDialog = (props: Iprop) => {
    const { open, setOpen, action, setAction, dataUser, dataUpdateExperience } = props
    const [experience, setExperience] = useState(initStateExperience)
    const [create] = useCreateExperieceMutation()
    const [update] = useUpdateExperieceMutation()
    const [validate, setValidate] = useState(validateExperience)

    const handleClose = () => {
        setOpen(false)
        setAction("")
        setExperience(initStateExperience)
        setValidate(validateExperience)

    };


    const handleCreateExperience = async () => {
        try {
            let check = validateDataExperience(experience, initStateExperience, validate, setValidate)
            if (check == true) {
                let reuslt = await create({
                    employeeId: dataUser.id,
                    data: [{ ...experience, leavingReason: "." }]
                }).unwrap()
                if (reuslt.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    setExperience(initStateExperience)
                    toast.success("Bạn đã thêm kinh nghiệm mới thành công")
                    setValidate(validateExperience)
                    setOpen(false)
                } else {
                    toast.error("Vui lòng kiểm tra lại thông tin trước khi lưu !!!")
                }
            }
        } catch (error) {
        }
    }

    const handleUpdateExperience = async () => {
        try {
            let check = validateDataExperience(experience, initStateExperience, validate, setValidate)
            if (check == true) {
                let reuslt = await update(experience as IExperience).unwrap()
                if (reuslt.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã cập nhật kinh nghiệm thành công")
                    setOpen(false)
                    setValidate(validateExperience)
                }
            }
        } catch (error) {
        }
    }
    useEffect(() => {
        if (action == "Update") {
            if (dataUpdateExperience) setExperience({ ...dataUpdateExperience, startDate: moment(dataUpdateExperience?.startDate).format("YYYY-MM-DD"), endDate: moment(dataUpdateExperience?.startDate).format("YYYY-MM-DD") })
        }
    }, [action])

    useEffect(() => {
        console.log("dataUser", dataUser)
    }, [dataUser])
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
                    {action === "Create" ? " Tạo mới kinh nghiệm làm việc" : "Chỉnh sửa kinh nghiệm làm việc"}
                </DialogTitle>
                <div className='container'>
                    <Grid container item spacing={2} className='height'  >

                        <Grid item lg={12} sm={12} className='width' >

                            <Grid container item spacing={2} className='item'>

                                <Grid item xs={4} >

                                    <Input
                                        label={"Ngày bắt đầu"}
                                        type={"date"}
                                        value={experience.startDate}
                                        FuntionOnchange={(event) => setExperience({ ...experience, startDate: event.target.value })}
                                        Validate={validate.startDate}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYNIGHT}
                                    />
                                </Grid>

                                <Grid item xs={4} >
                                    <Input
                                        label={"Ngày kết thúc"}
                                        type={"date"}
                                        value={experience.endDate}
                                        FuntionOnchange={(event) => setExperience({ ...experience, endDate: event.target.value })}
                                        Validate={validate.endDate}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.THIRTY}
                                        ErrorSyntax={ERROR_STATUS_SYNTAX.THIRTY}
                                    />
                                </Grid>
                                <Grid item xs={4} >
                                    <Input
                                        label={"Tên công ty"}
                                        type={"text"}
                                        value={experience.companyName}
                                        FuntionOnchange={(event) => setExperience({ ...experience, companyName: event.target.value })}
                                        Validate={validate.companyName}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.THIRTYONE}
                                    />
                                </Grid>

                            </Grid>
                            <br />
                            <Grid container item spacing={2} className='item'>

                                <Grid item xs={6} lg={6}>
                                    <Input
                                        label={"Địa chỉ công ty"}
                                        type={"text"}
                                        value={experience.companyAddress}
                                        FuntionOnchange={(event) => setExperience({ ...experience, companyAddress: event.target.value })}
                                        Validate={validate.companyAddress}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.THIRTYTWO}
                                    />
                                </Grid>

                                <Grid item xs={6} lg={6}>

                                    <Input
                                        label={"Nội dung công việc"}
                                        type={"text"}
                                        value={experience.jobDescription}
                                        FuntionOnchange={(event) => setExperience({ ...experience, jobDescription: event.target.value })}
                                        Validate={validate.companyAddress}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.THIRTYTHREE}
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
                    {action === "Update" ?

                        <ButtonSubmit
                            handleFuntion={() => handleUpdateExperience()}
                            name={"Cập nhật"}
                        />
                        :
                        <ButtonSubmit
                            handleFuntion={() => handleCreateExperience()}
                            name={"Lưu"}
                        />

                    }
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>

            </Dialog>

        </div >
    );
}

export default CreateExperienceEmployeeDialog