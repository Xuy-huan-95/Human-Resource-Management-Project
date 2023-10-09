import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./Form.scss"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SendLeaderModal from "../Modal/SendLeaderModal/SendLeaderModal"
import { useUpdateEmployeeMutation } from "../../../redux/slice/Employee/index"
import { toast } from 'react-toastify';
import SendInfomationToEnd from "../Modal/SaveEndCodeModal/SaveEndCodeModal"
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { dataUpdateInistateWithId, initSalaryToSendLeader } from "../../InitData/InitData"
import { GetResultData } from "../../../redux/slice/RegisterUser.slice"
import moment from 'moment';
import { useGetEmployeeByIdQuery } from "../../../redux/slice/Employee/index"
import ApproveActionModal from "../PendingApprove/ApproveDialog/ApproveDialog"
import ButtonExit from "../../ShareComponent/Button/ButtonExit"
import ListEmployeeForm from "../../ShareComponent/Form/ListForm/ListEmployeeForm"
import ListSalaryForm from "../../ShareComponent/Form/ListForm/ListSalaryForm"
import ListProcessForm from "../../ShareComponent/Form/ListForm/ListProcessForm"
import ListProposalForm from "../../ShareComponent/Form/ListForm/ListProposalForm"
import ListRecommentForm from "../../ShareComponent/Form/ListForm/ListRecommentForm"
import ListAdvisoryForm from "../../ShareComponent/Form/ListForm/ListAdvisoryForm"
import ContentEmployeeForm from "../../ShareComponent/Form/ContentForm/ContentEmployeeForm"
import ContentSalaryForm from "../../ShareComponent/Form/ContentForm/ContentSalaryForm"
import ContentProcessForm from "../../ShareComponent/Form/ContentForm/ContentProcessForm"
import ContentRecomementForm from "../../ShareComponent/Form/ContentForm/ContentRecomendForm"
import { STATUS_All, NAME_GENDER, STATUS_PROFILE } from "../../ShareComponent/Constants/StatusIfomation"
import { RESPONSE_STATUS_CODE } from "../../ShareComponent/Constants/StatusCode"
import IButtonActionForm from "../Form/ButtonActionForm/ButtonActionForm"
interface IForm {
    open: boolean,
    setOpen: any
    option: string
    setOption: any
}
const Form = (props: IForm | any) => {
    const dispatch = useAppDispatch()
    const name = useAppSelector((state) => state.permission.name)
    const dataToSendLeader = useAppSelector((state) => state.registerUser.userInfomation)
    const dataSalry = useAppSelector((state) => state.salary.SalaryInfomation)
    const process = useAppSelector((state) => state.process.ProcessInfomation)
    const proposal = useAppSelector((state) => state.Proposal.ProposalInfomation)
    const { open, setOpen, option, setOption, openCreateModal, setOpenCreateModal } = props
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [openModalSendDataToLead, setOpenModalSendDataToLead] = useState<boolean>(false)
    const [openModalSendDataEnd, setOpenModalSendDataEnd] = useState<boolean>(false)
    const [update] = useUpdateEmployeeMutation()
    const [dataUser, setDataUser] = useState(dataUpdateInistateWithId)
    const [id, setId] = useState(0)
    const { data } = useGetEmployeeByIdQuery(id, { refetchOnMountOrArgChange: true })
    const [openApproveModal, setOpenApproveModal] = useState<boolean>(false)
    const [actionApprove, setActionApprove] = useState<string>("")
    useEffect(() => {
        if (data && data.code == RESPONSE_STATUS_CODE.SUCCESS) {
            dispatch(GetResultData(data?.data))
        }
    }, [data])

    useEffect(() => {
        if (option == "Approve-salary") {
            setId(dataSalry.employeeId)
        }
        if (option == "Approve-process") {
            setId(process.employeeId)
        }
        if (option == "Approve-Proposal") {
            setId(proposal.employeeId)
        }
    }, [open])

    useEffect(() => {
        setDataUser(dataToSendLeader)
    }, [dataToSendLeader])

    const handleListItemClick = (index: number) => {
        setSelectedIndex(index);
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedIndex(0)
    };
    const handleShowHideModalSendDataToLeader = () => {
        setOpenModalSendDataToLead(!openModalSendDataToLead)
    }
    const handleShowHideModalSendDataEnd = () => {
        setOpenModalSendDataEnd(!openModalSendDataEnd)
    }
    const handleShowHideModalApprove = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("User-Approve")
    }

    const handlShowHideModalNeedToApprove = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("Need-Document_access")
    }

    const handlShowHideModalRefuse = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("Refuse-Document_access")
    }
    const handleShowHideModalApproveSalary = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("Salary-Approve")
    }
    const handleShowHideModalApproveProposal = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("proposal-Approve")
    }
    const handleShowHideModalApproveProcess = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("Process-Approve")
    }
    const handlShowHideModalNeedToApproveProcess = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("Need-Document_Process")
    }
    const handlShowHideModalNeedToApproveProposal = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("Need-Document_Proposal")
    }
    const handlShowHideModalNeedToApproveSalary = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("Need-Document_salary")
    }
    const handlShowHideModalRefuseSalary = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("Refuse-Document_salary")
    }
    const handlShowHideModalRefuseProcess = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("Refuse-Document_process")
    }
    const handlShowHideModalRefuseProposal = () => {
        setOpenApproveModal(!openApproveModal)
        setActionApprove("Refuse-Document_Proposal")
    }
    const handleSaveInfomationUser = async () => {
        try {
            const data = { ...dataUser, dateOfBirth: new Date(dataUser.dateOfBirth), dateOfIssuanceCard: new Date(dataUser.dateOfBirth) }
            let result = await update(data).unwrap()
            if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                toast.success("Bạn đã cập nhật thông tin nhân viên thành công")
                dispatch(GetResultData(result.data))
            }
            else toast.error("Vui lòng kiểm tra lại thông tin trước khi cập nhật")
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xl"
                className='container-registration-Forms '
                fullWidth

            >
                <DialogTitle id="customized-dialog-title" className='title-page'>
                    <span>Hồ sơ  nhân viên</span>
                    {dataToSendLeader.submitProfileStatus == STATUS_PROFILE.ZERO &&
                        <span>Số lưu: {dataToSendLeader.numberSaved} - Ngày lưu: {moment(dataToSendLeader.decisionDay).format("DD/MM/YYYY")}</span>
                    }
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={1} columns={12}>
                                <Grid item xs={4} className='sidebar'>
                                    {!option || option == "Approve-User" || option == "View-End" || option == "End-Infomation" || option == "View-Profile"
                                        ?
                                        <ListEmployeeForm
                                            selectedIndex={selectedIndex}
                                            handleListItemClick={handleListItemClick}
                                        />
                                        :
                                        ""
                                    }
                                    {option === "salary_Increate" || option === "Approve-salary" ?
                                        <ListSalaryForm
                                            selectedIndex={selectedIndex}
                                            handleListItemClick={handleListItemClick}
                                        />
                                        :
                                        ""
                                    }
                                    {option == "Process_increate" || option == "Approve-process" ?
                                        <ListProcessForm
                                            selectedIndex={selectedIndex}
                                            handleListItemClick={handleListItemClick}
                                        />
                                        :
                                        ""
                                    }

                                    {option == "Propose" || option == "Approve-Proposal" && proposal.type == STATUS_All.ONE || option == "ProposalView" && proposal.type == STATUS_All.ONE ?
                                        <ListProposalForm
                                            selectedIndex={selectedIndex}
                                            handleListItemClick={handleListItemClick}
                                        />
                                        :
                                        ""
                                    }
                                    {option == "Recommend" || option == "Approve-Proposal" && proposal.type == STATUS_All.TWO || option == "ProposalView" && proposal.type == STATUS_All.TWO ?
                                        <ListRecommentForm
                                            selectedIndex={selectedIndex}
                                            handleListItemClick={handleListItemClick}
                                        />
                                        :
                                        ""
                                    }
                                    {option == "Advisory" || option == "Approve-Proposal" && proposal.type == STATUS_All.THREE || option == "ProposalView" && proposal.type == STATUS_All.THREE ?
                                        <ListAdvisoryForm
                                            selectedIndex={selectedIndex}
                                            handleListItemClick={handleListItemClick}
                                        />
                                        :
                                        ""
                                    }
                                </Grid>
                                <Grid item xs={12} className='Form-content'>
                                    {!option || option == "Approve-User" || option == "View-End" || option == "End-Infomation" || option == "View-Profile" ?
                                        < ContentEmployeeForm
                                            selectedIndex={selectedIndex}
                                            dataUser={dataUser}
                                            setDataUser={setDataUser}
                                        />
                                        :
                                        ""
                                    }
                                    {option == "salary_Increate" || option == "Approve-salary" ?
                                        <div className='wrapper'>
                                            <ContentSalaryForm
                                                selectedIndex={selectedIndex}
                                                dataUser={dataUser}
                                                setDataUser={setDataUser}
                                            />
                                        </div>
                                        :
                                        ""
                                    }

                                    {option == "Process_increate" || option == "Approve-process" ?
                                        <div className='wrapper'>
                                            <ContentProcessForm
                                                selectedIndex={selectedIndex}
                                                dataUser={dataUser}
                                                setDataUser={setDataUser}
                                            />
                                        </div>
                                        :
                                        ""
                                    }
                                    {option == "Recommend" || option == "Approve-Proposal" && proposal.type == STATUS_All.ONE || option == "Propose"
                                        ||
                                        option == "Approve-Proposal" && proposal.type == STATUS_All.TWO || option == "Advisory" || option == "Approve-Proposal" && proposal.type == STATUS_All.THREE
                                        || option == "ProposalView"
                                        ?
                                        <div className='wrapper'>
                                            <ContentRecomementForm
                                                selectedIndex={selectedIndex}
                                                dataUser={dataUser}
                                                setDataUser={setDataUser}
                                            />
                                        </div>
                                        :
                                        ""
                                    }
                                </Grid>
                            </Grid>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <div>
                </div>
                <ButtonExit
                    handleClose={handleClose}
                />
                <IButtonActionForm
                    dataSalry={dataSalry}
                    dataToSendLeader={dataToSendLeader}
                    handlShowHideModalNeedToApprove={handlShowHideModalNeedToApprove}
                    handlShowHideModalNeedToApproveProcess={handlShowHideModalNeedToApproveProcess}
                    handlShowHideModalNeedToApproveProposal={handlShowHideModalNeedToApproveProposal}
                    handlShowHideModalNeedToApproveSalary={handlShowHideModalNeedToApproveSalary}
                    handlShowHideModalRefuse={handlShowHideModalRefuse}
                    handlShowHideModalRefuseProcess={handlShowHideModalRefuseProcess}
                    handlShowHideModalRefuseProposal={handlShowHideModalRefuseProposal}
                    handlShowHideModalRefuseSalary={handlShowHideModalRefuseSalary}
                    handleClose={handleClose}
                    handleSaveInfomationUser={handleSaveInfomationUser}
                    handleShowHideModalApprove={handleShowHideModalApprove}
                    handleShowHideModalApproveProcess={handleShowHideModalApproveProcess}
                    handleShowHideModalApproveProposal={handleShowHideModalApproveProposal}
                    handleShowHideModalApproveSalary={handleShowHideModalApproveSalary}
                    handleShowHideModalSendDataEnd={handleShowHideModalSendDataEnd}
                    handleShowHideModalSendDataToLeader={handleShowHideModalSendDataToLeader}
                    name={name}
                    option={option}
                    process={process}
                    proposal={proposal}
                />
                <div>
                    <SendLeaderModal
                        open={openModalSendDataToLead}
                        setOpen={setOpenModalSendDataToLead}
                        option={option}
                        openCreateModal={openCreateModal}
                        setOpenCreateModal={setOpenCreateModal}
                        openModalRegister={open}
                        setOpenModalRegister={setOpen}
                    />
                    <SendInfomationToEnd
                        open={openModalSendDataEnd}
                        setOpen={setOpenModalSendDataEnd}
                        openModalRegister={open}
                        setOpenModalRegister={setOpen}
                    />
                    <ApproveActionModal
                        open={openApproveModal}
                        setOpen={setOpenApproveModal}
                        actionApprove={actionApprove}
                        openresitermodal={open}
                        setopenresitermodal={setOpen}
                    />
                </div>

            </Dialog>

        </div >

    );
}
export default Form