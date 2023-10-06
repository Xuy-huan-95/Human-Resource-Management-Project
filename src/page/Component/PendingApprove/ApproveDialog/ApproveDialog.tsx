import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import "./ApproveDialog.scss"
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { dataApprove, validateDataApprove } from "../../../InitData/InitData"
import { useUpdateEmployeeMutation } from "../../../../redux/slice/Employee/index"
import { useUpdateSalaryMutation } from "../../../../redux/slice/Salary_increate/index"
import { useUpdateProcessMutation } from "../../../../redux/slice/Proccess/index"
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { toast } from 'react-toastify';
import { useUpdateLeaderMutation } from "../../../../redux/slice/Proposal/index"
import { validateData } from "../../../../validate/validate"
import Input from '../../../ShareComponent/Input/Input';
import { ERROR_STATUS_EMPTY, RESPONSE_STATUS_CODE } from "../../../ShareComponent/Constants/StatusCode"
import { STATUS_PROFILE, STATUS_All } from "../../../ShareComponent/Constants/StatusIfomation"
import NameTitleApprove from "./NameTitleApproveDialog/NameTitleApprove"
import moment from 'moment';
interface IApproveActionModal {
    open: boolean,
    setOpen: any,
    actionApprove: string
    openresitermodal: boolean
    setopenresitermodal: any
    openEndModal: boolean
    setOpenEndModal: any
}
const ApproveDialog = (props: IApproveActionModal | any) => {
    const { open, setOpen, actionApprove, openresitermodal, setopenresitermodal, openEndModal, setOpenEndModal } = props
    const [data, setData] = useState(dataApprove)
    const [validateApproveData, setValidateApproveData] = useState(validateDataApprove)
    const [update] = useUpdateEmployeeMutation()
    const [UpdateSalary] = useUpdateSalaryMutation()
    const [UpdateProcess] = useUpdateProcessMutation()
    const [UpdateProposal] = useUpdateLeaderMutation()
    const dataUser = useAppSelector((state) => state.registerUser.userInfomation)
    const dataSalary = useAppSelector((state) => state.salary.SalaryInfomation)
    const process = useAppSelector((state) => state.process.ProcessInfomation)
    const proposal = useAppSelector((state) => state.Proposal.ProposalInfomation)

    const handleClose = () => {
        setOpen(false);
        setValidateApproveData(validateDataApprove)
    };


    const handleApproveUser = async () => {
        try {
            let check = validateData(data, validateApproveData, setValidateApproveData, actionApprove)
            if (actionApprove == "User-Approve" && check == true) {
                let dataUpdate = { ...dataUser, appointmentDate: data.time, submitProfileStatus: STATUS_PROFILE.THREE }
                let result = await update(dataUpdate).unwrap()
                if (result.code == 200) {
                    toast.success("Bạn đã phê duyệt nhân viên thành công")
                    setOpen(!open)
                    setopenresitermodal(!openresitermodal)
                }
            }
            if (actionApprove == "Salary-Approve" && check == true) {
                let dataUpdate = { ...dataSalary, acceptanceDate: data.time, salaryIncreaseStatus: STATUS_All.THREE }
                let result = await UpdateSalary(dataUpdate).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã phê duyệt đề xuất tăng lương thành công")
                    setOpen(!open)
                    setopenresitermodal(!openresitermodal)
                }
            }
            if (actionApprove == "Process-Approve" && check == true) {
                try {
                    let dataprocess = { ...process, acceptanceDate: data.time, processStatus: STATUS_PROFILE.THREE }
                    let result = await UpdateProcess(dataprocess).unwrap()
                    if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                        toast.success("Bạn đã phê duyệt đề xuất tăng lương thành công")
                        setOpen(!open)
                        setopenresitermodal(!openresitermodal)
                    }
                } catch (error) {
                    console.log(error)
                }

            }

            if (actionApprove == "proposal-Approve" && check == true) {
                let dataprocess = { ...proposal, acceptanceDate: data.time, proposalStatus: STATUS_PROFILE.THREE }
                let result = await UpdateProposal(dataprocess).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã phê duyệt đề xuất tham mưu thành công")
                    setOpen(!open)
                    setopenresitermodal(!openresitermodal)
                }
            }
            if (actionApprove == "Need-Document_access" && check == true) {
                let dataUpdate = { ...dataUser, additionalRequest: data.need, submitProfileStatus: STATUS_PROFILE.FOUR }
                let result = await update(dataUpdate).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã từ chối yêu cầu thêm mới")
                    setOpen(!open)
                    setopenresitermodal(!openresitermodal)
                }
            }
            if (actionApprove == "Refuse-Document_access" && check == true) {
                let dataUpdate = { ...dataUser, rejectionDate: data.time, reasonForRejection: data.need, submitProfileStatus: STATUS_PROFILE.FIVE }
                let result = await update(dataUpdate).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã từ chối yêu cầu thêm mới")
                    setOpen(!open)
                    setopenresitermodal(!openresitermodal)
                }
            }
            if (actionApprove == "Need-Document_Process" && check == true) {
                let dataprocess = { ...process, additionalRequest: data.need, processStatus: STATUS_PROFILE.FOUR }
                let result = await UpdateProcess(dataprocess).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã yêu cầu bổ xung thêm chi tiết đề xuất thăng chức")
                    setOpen(!open)
                    setopenresitermodal(!openresitermodal)
                }
            }
            if (actionApprove == "Need-Document_salary" && check == true) {
                let dataUpdate = { ...dataSalary, additionalRequest: data.need, salaryIncreaseStatus: STATUS_All.FOUR }
                let result = await UpdateSalary(dataUpdate).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã yêu cầu bổ xung thêm thông tin đề xuất tăng lương")
                    setOpen(!open)
                    setopenresitermodal(!openresitermodal)
                }
            }
            if (actionApprove == "Need-Document_Proposal" && check == true) {
                let dataUpdate = { ...proposal, additionalRequest: data.need, proposalStatus: STATUS_PROFILE.FOUR }
                let result = await UpdateProposal(dataUpdate).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã yêu cầu bổ xung thêm thông tin đề xuất tham mưu")
                    setOpen(!open)
                    setopenresitermodal(!openresitermodal)
                }
            }
            if (actionApprove == "End-Approve" && check == true) {
                let dataUpdate = { ...dataUser, terminationAppointmentDate: data.time, submitProfileStatus: STATUS_PROFILE.SEVEN }
                let result = await update(dataUpdate).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    console.log("actionApprove", actionApprove)
                    toast.success("Bạn đã phê duyệt kết thúc hồ sơ thành công")
                    setOpen(!open)
                    if (openEndModal == true) setOpenEndModal(false)
                }
            }
            if (actionApprove == "Need-Document" && check == true) {
                let dataUpdate = { ...dataUser, additionalRequestTermination: data.need, submitProfileStatus: STATUS_PROFILE.EIGHT }
                let result = await update(dataUpdate).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã yêu cầu bổ xung thêm chi tiết")
                    setOpen(!open)
                    setOpenEndModal(!openEndModal)
                }
            }
            if (actionApprove == "Refuse" && check == true) {
                let dataUpdate = { ...dataUser, refuseEndProfileDay: data.time, reasonForRefuseEndProfile: data.need, submitProfileStatus: STATUS_PROFILE.NIGHT }
                let result = await update(dataUpdate).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã từ chối yêu cầu nghỉ việc")
                    setOpen(!open)
                    setOpenEndModal(!openEndModal)
                }
            }
            if (actionApprove == "Refuse-Document_salary" && check == true) {
                let dataUpdate = { ...dataSalary, rejectionDate: data.time, reasonForRefusal: data.need, salaryIncreaseStatus: STATUS_All.FIVE }
                let result = await UpdateSalary(dataUpdate).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã từ chối đề xuất tăng lương ")
                    setOpen(!open)
                    setopenresitermodal(!openresitermodal)
                }
            }
            if (actionApprove == "Refuse-Document_process" && check == true) {
                let dataprocess = { ...process, rejectionDate: data.time, reasonForRefusal: data.need, processStatus: STATUS_PROFILE.FIVE }
                let result = await UpdateProcess(dataprocess).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã từ chối đề xuất tăng lương ")
                    setOpen(!open)
                    setopenresitermodal(!openresitermodal)
                }
            }
            if (actionApprove == "Refuse-Document_Proposal" && check == true) {
                let dataprocess = { ...proposal, rejectionDate: data.time, reasonForRefusal: data.need, proposalStatus: STATUS_PROFILE.FIVE }
                let result = await UpdateProposal(dataprocess).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã từ chối đề xuất tham mưu ")
                    setOpen(!open)
                    setopenresitermodal(!openresitermodal)
                }
            }
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        setData({ ...data, time: moment(new Date()).format("YYYY-MM-DD") })
    }, [open])

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className='fontWeight'>
                    <NameTitleApprove
                        actionApprove={actionApprove}
                    />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Grid container spacing={2}   >
                            <Grid item lg={12} sm={12} className='spacing' >
                                <Grid item xs={12} lg={12} className="mt" >
                                    {actionApprove == "User-Approve" || actionApprove == "End-Approve" || actionApprove == "Salary-Approve"
                                        || actionApprove == "Process-Approve" || actionApprove == "proposal-Approve" ?

                                        <Input
                                            label={"Ngày Phê duyệt"}
                                            type={"date"}
                                            value={data.time}
                                            FuntionOnchange={(event) => setData({ ...data, time: event.target.value })}
                                            Validate={validateApproveData.time}
                                            ErrorEmpty={ERROR_STATUS_EMPTY.THIRTYEIGHT}
                                        />
                                        :
                                        ""
                                    }
                                    {actionApprove == "Need-Document" || actionApprove == "Need-Document_Process" || actionApprove == "Need-Document_Proposal"
                                        ||
                                        actionApprove == "Need-Document_Proposal" || actionApprove == "Need-Document_salary" || actionApprove == "Need-Document_access"
                                        ||
                                        actionApprove == "Need-Document_access"
                                        ?
                                        <Grid item xs={12} lg={12}>
                                            <Input
                                                label={"Yêu cầu bổ xung chi tiết"}
                                                type={"text"}
                                                value={data.need}
                                                FuntionOnchange={(event) => setData({ ...data, need: event.target.value })}
                                                Validate={validateApproveData.need}
                                                ErrorEmpty={ERROR_STATUS_EMPTY.THIRTYNIGHT}
                                            />
                                        </Grid>
                                        :
                                        ""
                                    }
                                    {actionApprove == "Refuse" || actionApprove == "Refuse-Document_access" || actionApprove == "Refuse-Document_Proposal"
                                        ||
                                        actionApprove == "Refuse-Document_process" || actionApprove == "Refuse-Document_salary"

                                        ?
                                        <>
                                            <Grid container item spacing={2} className='spacing-input'>

                                                <Grid item xs={12} lg={12}>
                                                    <Input
                                                        label={"Ngày từ chối"}
                                                        type={"date"}
                                                        value={data.time}
                                                        FuntionOnchange={(event) => setData({ ...data, time: event.target.value })}
                                                        Validate={validateApproveData.time}
                                                        ErrorEmpty={ERROR_STATUS_EMPTY.FORTY}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} lg={12} className='spacing-reason'>
                                                    <Input
                                                        label={"Lý do từ chối"}
                                                        type={"text"}
                                                        value={data.need}
                                                        FuntionOnchange={(event) => setData({ ...data, need: event.target.value })}
                                                        Validate={validateApproveData.need}
                                                        ErrorEmpty={ERROR_STATUS_EMPTY.FORTYONE}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </>

                                        :
                                        ""
                                    }
                                </Grid>
                            </Grid>
                        </Grid>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" disableElevation onClick={() => handleApproveUser()} style={{
                        backgroundColor: "#7467ef",
                    }}>
                        Phê duyệt
                    </Button>


                    <Button variant="contained" disableElevation onClick={() => handleClose()} style={{
                        backgroundColor: "orange",
                    }}>
                        Thoát
                    </Button>
                </DialogActions>
            </Dialog>

        </div >

    );
}

export default ApproveDialog