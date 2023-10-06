import React, { useEffect, useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import MenuItem from '@mui/material/MenuItem';
import { useGetAllLeadersQuery } from "../../../../redux/slice/leader"
import { useUpdateEmployeeMutation } from "../../../../redux/slice/Employee/index"
import { useUpdateSalaryMutation } from "../../../../redux/slice/Salary_increate/index"
import { useUpdateProcessMutation } from "../../../../redux/slice/Proccess"
import { initDataSendtoLeader, validateDataSendLeader } from "../../../InitData/InitData"
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { useUpdateLeaderMutation } from "../../../../redux/slice/Proposal/index"
import ButtonExit from "../../../ShareComponent/Button/ButtonExit"
import ButtonSubmit from "../../../ShareComponent/Button/ButtonSubmit"
import ButtonCancel from "../../../ShareComponent/Button/ButtonCancel"
import Input from "../../../ShareComponent/Input/Input";
import "./SendLeaderModal.scss"
import { RESPONSE_STATUS_CODE } from "../../../ShareComponent/Constants/StatusCode"
import { STATUS_PROFILE, LEADER_POSITION, STATUS_SALARY } from "../../../ShareComponent/Constants/StatusIfomation"
import { ERROR_STATUS_EMPTY, ERROR_STATUS_SYNTAX, ERROR_CODE } from "../../../ShareComponent/Constants/StatusCode"
import { validateDataDataSendToLeader } from "../../../../validate/validate"
import moment from "moment"

interface Iprop {
    open: boolean,
    setOpen: any
    option: string
    openCreateModal: boolean
    setOpenCreateModal: any
    openModalRegister: boolean
    setOpenModalRegister: any
}
const SendLeaderModal = (props: Iprop | any) => {
    const Proposal = useAppSelector((state) => state.Proposal.ProposalInfomation)
    const dataToSendLeader = useAppSelector((state) => state.registerUser.userInfomation)
    const dataSalry = useAppSelector((state) => state.salary.SalaryInfomation)
    const dataProcess = useAppSelector((state) => state.process.ProcessInfomation)
    const { open, setOpen, option, openCreateModal, setOpenCreateModal, openModalRegister, setOpenModalRegister } = props
    const [position, setPosition] = useState<string>("")
    const [dataSubmit, setDataSubmit] = useState(initDataSendtoLeader)
    const [validate, setValidate] = useState(validateDataSendLeader)
    const [update] = useUpdateEmployeeMutation()
    const { data } = useGetAllLeadersQuery("")
    const [SendProposalToleader] = useUpdateLeaderMutation()
    const [sendSalaryToLeader] = useUpdateSalaryMutation()
    const [sendProcessToLeader] = useUpdateProcessMutation()
    const handleClose = () => {
        setOpen(false);
        setPosition("")
        setDataSubmit({ ...dataSubmit, note: "", leaderId: "", SubmitDay: moment(new Date()).format("YYYY-MM-DD") })
        setValidate(validateDataSendLeader)
    };
    const handleSearchPositionLeader = (id: string) => {
        let result = data?.data.find((item) => item.id === id)
        setPosition(result.leaderPosition)
    }
    const handleSendToLeader = async () => {
        let check = validateDataDataSendToLeader(dataSubmit, initDataSendtoLeader, validate, setValidate)
        const data = {
            ...dataToSendLeader,
            dateOfBirth: new Date(dataToSendLeader.dateOfBirth),
            dateOfIssuanceCard: new Date(dataToSendLeader.dateOfBirth),
            submitDay: new Date(dataSubmit?.SubmitDay),
            leaderId: dataSubmit?.leaderId,
            submitContent: dataSubmit?.note,
            submitProfileStatus: STATUS_PROFILE.TWO
        }
        if (check == true) {
            let result = await update(data).unwrap()

            if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                setOpen(false)
                setDataSubmit({ ...dataSubmit, note: "", leaderId: "", SubmitDay: moment(new Date()).format("YYYY-MM-DD") })
                setPosition("")
                setOpenModalRegister(!openModalRegister)
                setOpenCreateModal(false)
                toast.success("Bạn đã trình lãnh đạo thành công")
                setValidate(validateDataSendLeader)
            }
            else toast.error("Vui lòng kiểm tra lại thông tin trước khi gửi lãnh đạo")
        }

    }
    const handleSendDataSalaryToLeader = async () => {
        try {
            let check = validateDataDataSendToLeader(dataSubmit, initDataSendtoLeader, validate, setValidate)
            const data = {
                ...dataSalry,
                leaderId: dataSubmit?.leaderId,
                note: dataSubmit?.note,
                startDate: dataSubmit?.SubmitDay,
                salaryIncreaseStatus: STATUS_SALARY.TWO
            }
            if (check == true) {
                let result = await sendSalaryToLeader(data)
                if (Object.values(result)[0].code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã trình lãnh đạo thành công")
                    setOpen(false)
                    setOpenModalRegister(!openModalRegister)
                    setDataSubmit({ ...dataSubmit, note: "", leaderId: "", SubmitDay: moment(new Date()).format("YYYY-MM-DD") })
                    setPosition("")
                    setValidate(validateDataSendLeader)

                }
                else toast.error("Vui lòng kiểm tra lại thông tin trước khi gửi lãnh đạo")
            }
        } catch (error) {
            console.log(error)
        }

    }
    const handleSendDataProcessToLeader = async () => {
        try {
            let check = validateDataDataSendToLeader(dataSubmit, initDataSendtoLeader, validate, setValidate)

            const data = {
                ...dataProcess,
                leaderId: dataSubmit?.leaderId,
                note: dataSubmit?.note,
                promotionDay: dataSubmit?.SubmitDay,
                processStatus: STATUS_PROFILE.TWO
            }
            if (check == true) {

                let result = await sendProcessToLeader(data).unwrap()
                if (Object.values(result)[0] == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã trình lãnh đạo thành công")
                    setOpen(false)
                    setOpenModalRegister(!openModalRegister)
                    setOpenCreateModal(false)
                    setDataSubmit({ ...dataSubmit, note: "", leaderId: "", SubmitDay: moment(new Date()).format("YYYY-MM-DD") })
                    setPosition("")
                    setValidate(validateDataSendLeader)
                }
                else toast.error("Vui lòng kiểm tra lại thông tin trước khi gửi lãnh đạo")
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleSendDataProposalToLeader = async () => {
        try {
            let check = validateDataDataSendToLeader(dataSubmit, initDataSendtoLeader, validate, setValidate)
            const data = {
                ...Proposal,
                leaderId: dataSubmit?.leaderId,
                note: dataSubmit?.note,
                proposalDate: dataSubmit?.SubmitDay,
                proposalStatus: STATUS_PROFILE.TWO
            }
            if (check == true) {
                let result = await SendProposalToleader(data).unwrap()
                if (Object.values(result)[0] == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã trình lãnh đạo thành công")
                    setOpen(false)
                    setOpenModalRegister(!openModalRegister)
                    setOpenCreateModal(false)
                    setDataSubmit({ ...dataSubmit, note: "", leaderId: "", SubmitDay: moment(new Date()).format("YYYY-MM-DD") })
                    setPosition("")
                    setValidate(validateDataSendLeader)
                }
                else toast.error("Vui lòng kiểm tra lại thông tin trước khi cập nhật")
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        setDataSubmit({ ...dataSubmit, SubmitDay: moment(new Date()).format("YYYY-MM-DD") })
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
                    Trình lãnh đạo
                </DialogTitle>
                <div className="container">
                    <Grid container spacing={2} className="height"  >
                        <Grid item lg={13} sm={19} className="width" >
                            <Grid container item spacing={2} >
                                <Grid item xs={6} lg={6}>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="Chọn lãnh đạo"
                                        fullWidth
                                        size='small'
                                        required
                                        value={dataSubmit?.leaderId}
                                        onChange={(event) => { handleSearchPositionLeader(event.target.value); setDataSubmit({ ...dataSubmit, leaderId: event.target.value }) }}
                                        error={validate.leaderId === ERROR_CODE.EMPTY}
                                        helperText={validate.leaderId === ERROR_CODE.EMPTY && ERROR_STATUS_EMPTY.THIRTYFOUR}
                                    >
                                        {data && data?.data.length > 0 &&
                                            data?.data.map((item, index) => {
                                                return (
                                                    <MenuItem key={`item-${index}`} value={item.id} >
                                                        {item.leaderName}
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </TextField>

                                </Grid>
                                <Grid item xs={6} lg={6}>

                                    <Input
                                        label={"Chức vụ"}
                                        type={"text"}
                                        value={position == STATUS_PROFILE.THREE ? LEADER_POSITION.ONE : ""
                                            ||
                                            position == STATUS_PROFILE.TWO ? LEADER_POSITION.TWO : ""
                                                ||
                                                position == STATUS_PROFILE.FOUR ? LEADER_POSITION.THREE : ""}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container item spacing={2} >
                                <Grid item xs={6} lg={6}>

                                    <Input
                                        label={"Ngày hiệu lực"}
                                        type={"date"}
                                        value={dataSubmit?.SubmitDay}
                                        FuntionOnchange={(event) => setDataSubmit({ ...dataSubmit, SubmitDay: event.target.value })}
                                        error={validate.SubmitDay}
                                        Validate={validate.SubmitDay}
                                        ErrorEmpty={ERROR_STATUS_SYNTAX.TWENTYFIVE}
                                        ErrorSyntax={ERROR_STATUS_SYNTAX.TWENTYFIVE}
                                    />
                                </Grid>
                                <Grid item xs={6} lg={6}>
                                    <Input
                                        label={"Ghi chú"}
                                        type={"text"}
                                        value={dataSubmit?.note}
                                        FuntionOnchange={(event) => setDataSubmit({ ...dataSubmit, note: event.target.value })}
                                        Validate={validate.note}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.THIRTYFIVE}
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
                    {!option &&
                        <ButtonSubmit
                            handleFuntion={() => handleSendToLeader()}
                            name={"Trình lãnh đạo"}
                        />
                    }
                    {option == "salary_Increate" &&
                        <ButtonSubmit
                            handleFuntion={() => handleSendDataSalaryToLeader()}
                            name={"Trình lãnh đạo"}
                        />
                    }
                    {option == "Advisory" &&
                        <ButtonSubmit
                            handleFuntion={() => handleSendDataProposalToLeader()}
                            name={"Trình lãnh đạo"}
                        />
                    }
                    {option == "Propose" &&
                        <ButtonSubmit
                            handleFuntion={() => handleSendDataProposalToLeader()}
                            name={"Trình lãnh đạo"}
                        />
                    }
                    {option == "Recommend" &&
                        <ButtonSubmit
                            handleFuntion={() => handleSendDataProposalToLeader()}
                            name={"Trình lãnh đạo"}
                        />
                    }
                    {option == "Process_increate" &&
                        <ButtonSubmit
                            handleFuntion={() => handleSendDataProcessToLeader()}
                            name={"Trình lãnh đạo"}
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

export default SendLeaderModal