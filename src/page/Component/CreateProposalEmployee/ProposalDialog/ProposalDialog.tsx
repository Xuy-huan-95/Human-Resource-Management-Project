import "./ProposalDialog.scss"
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useAddProposalByEmpMutation, useGetProposalByEmpQuery, useUpdateLeaderMutation } from "../../../../redux/slice/Proposal/index"
import { initProposal, validateProposal } from "../../../InitData/InitData"
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import moment from "moment";
import { toast } from "react-toastify";
import { IProposal } from "../../../../interface/Proposal.interface"
import DeleteModal from "../DeleteProposalEmployeeDialog"
import { GetResultProposal } from "../../../../redux/slice/proposal.slice"
import RegistrationForms from "../../Form/Form"
import { validateProposalModal, ValidateOnChangeInputProposal } from "../../../../validate/ValidateProposal/ValidateProposal"
import Input from "../../../ShareComponent/Input/Input"
import { ERROR_STATUS_EMPTY, ERROR_STATUS_SYNTAX, RESPONSE_STATUS_CODE } from "../../../ShareComponent/Constants/StatusCode"
import InputTypeProposalselect from "../../../ShareComponent/Input/InputSelectet/InputTypeProposalselect"
import ButtonSubmit from "../../../ShareComponent/Button/ButtonSubmit"
import ButtonCancel from "../../../ShareComponent/Button/ButtonCancel"
import TableProposal from "../../Table/TableProposal/TableProposal"
import { STATUS_All, STATUS_PROFILE } from "../../../ShareComponent/Constants/StatusIfomation"

const ProposalDialog = () => {
    const dispatch = useAppDispatch()
    const [dataProposal, setDataProposal] = useState(initProposal)
    const dataUser = useAppSelector((state) => state.registerUser.userInfomation)
    const [Create] = useAddProposalByEmpMutation()
    const { data } = useGetProposalByEmpQuery(dataUser.id, { refetchOnMountOrArgChange: true })
    const [update] = useUpdateLeaderMutation()
    const [actionProposal, setActionProposal] = useState<string>("")
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
    const [ActionDelete, setActionDelete] = useState<string>("")
    const [openRegisterForm, setOpenRegisterForm] = useState<boolean>(false)
    const [option, setOption] = useState<string>("")
    const [validate, setValidate] = useState(validateProposal)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleSubmitProposal = async () => {
        try {
            let check = validateProposalModal(dataProposal, initProposal, validate, setValidate)
            if (check == true) {
                let result = await Create({
                    employeeId: dataUser.id,
                    data: [dataProposal]
                }).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã thêm thành công đề xuất tham mưu")
                    setDataProposal({ ...dataProposal, type: STATUS_All.ZERO, detailedDescription: "", content: "", proposalDate: moment(new Date()).format("YYYY-MM-DD") })
                    setValidate(validateProposal)
                    setOpenRegisterForm(!openRegisterForm)
                    dispatch(GetResultProposal(result.data[0]))
                    if (result.data[0].type == STATUS_All.ONE) setOption("Propose")
                    if (result.data[0].type == STATUS_All.TWO) setOption("Recommend")
                    if (result.data[0].type == STATUS_All.THREE) setOption("Advisory")
                }
            }
        } catch (error) {
        }
    }
    const handleShowhideRegister = (item) => {
        setOpenRegisterForm(!openRegisterForm)
        dispatch(GetResultProposal(item))
        if (item.type == STATUS_All.ONE) setOption("Propose")
        if (item.type == STATUS_All.TWO) setOption("Recommend")
        if (item.type == STATUS_All.THREE) setOption("Advisory")
    }
    const handleShowHideModalDelete = (item) => {
        dispatch(GetResultProposal(item))
        setOpenModalDelete(!openModalDelete)
        setActionDelete("Delete-proposal")
    }
    const handleEdit = (item) => {
        setDataProposal({
            ...item, proposalDate: moment(item.proposalDate).format("YYYY-MM-DD")
        })
        setActionProposal("Update")
    }
    const handleUpdateProposal = async () => {
        try {
            let check = validateProposalModal(dataProposal, initProposal, validate, setValidate)
            if (check == true) {
                let result = await update(dataProposal as IProposal).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    console.log("result.data[0]", result.data)
                    toast.success("Bạn đã cập nhật thông tin thành công")
                    setActionProposal("")
                    setDataProposal({ ...dataProposal, type: 0, detailedDescription: "", content: "", proposalDate: moment(new Date()).format("YYYY-MM-DD") })
                    setValidate(validateProposal)
                    setOpenRegisterForm(!openRegisterForm)
                    dispatch(GetResultProposal(result.data))
                    if (result.data.type == STATUS_All.ONE) setOption("Propose")
                    if (result.data.type == STATUS_All.TWO) setOption("Recommend")
                    if (result.data.type == STATUS_All.THREE) setOption("Advisory")
                }
            }
        } catch (error) {
        }
    }
    const handleDeleteInput = () => {
        setDataProposal({ ...dataProposal, proposalDate: moment(new Date()).format("YYYY-MM-DD") })
        setActionProposal("")
        setValidate(validateProposal)
    }

    useEffect(() => {
        setDataProposal({ ...dataProposal, proposalDate: moment(new Date()).format("YYYY-MM-DD") })
    }, [])

    return (
        <div className="height">
            <Box >
                {dataUser.submitProfileStatus !== STATUS_PROFILE.SIX && data?.data.some((item) => item.proposalStatus == STATUS_PROFILE.TWO) == false &&
                    <>
                        <Grid item lg={24} sm={24}  >
                            <Grid container item spacing={2}>
                                <Grid item xs={6}>
                                    <Input
                                        label={"Ngày hiệu lực"}
                                        type={"date"}
                                        value={dataProposal.proposalDate ? dataProposal.proposalDate : moment(new Date).format("YYYY-MM-DD")}
                                        FuntionOnchange={(event) => ValidateOnChangeInputProposal("proposalDate", event.target.value, dataProposal, setDataProposal, validate, setValidate)}
                                        Validate={validate.proposalDate}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYTWO}
                                        ErrorSyntax={ERROR_STATUS_SYNTAX.TWENTYFIVE}
                                    />
                                </Grid>
                                <Grid item xs={6} >
                                    <InputTypeProposalselect
                                        label={"Loại đề xuất"}
                                        value={dataProposal.type}
                                        FuntionOnchange={(event) => ValidateOnChangeInputProposal("type", event.target.value, dataProposal, setDataProposal, validate, setValidate)}
                                        Validate={validate.type}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYSIX}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid item lg={24} sm={24}  >
                            <Grid container item spacing={2}>
                                <Grid item xs={6}>
                                    <Input
                                        label={"Nội dung"}
                                        type={"text"}
                                        value={dataProposal.content}
                                        FuntionOnchange={(event) => ValidateOnChangeInputProposal("content", event.target.value, dataProposal, setDataProposal, validate, setValidate)}
                                        Validate={validate.content}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYSEVEN}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Input
                                        label={"Mô tả chi tiết"}
                                        type={"text"}
                                        value={dataProposal.detailedDescription}
                                        FuntionOnchange={(event) => ValidateOnChangeInputProposal("detailedDescription", event.target.value, dataProposal, setDataProposal, validate, setValidate)}
                                        Validate={validate.detailedDescription}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYEIGHT}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <div className='btn-save'>
                            {actionProposal !== "Update" ?
                                <ButtonSubmit
                                    handleFuntion={handleSubmitProposal}
                                    name={"Lưu"}
                                />
                                :
                                <ButtonSubmit
                                    handleFuntion={handleUpdateProposal}
                                    name={"Cập nhật"}
                                />
                            }
                            <ButtonCancel
                                handleCancel={handleDeleteInput}
                            />
                        </div>
                    </>
                }
                {dataUser.submitProfileStatus !== STATUS_PROFILE.SIX && data?.data.some((item) => item.proposalStatus == STATUS_PROFILE.TWO) == true &&
                    <>
                        <Grid item lg={24} sm={24}  >
                            <Grid container item spacing={2}>
                                <Grid item xs={6}>
                                    <Input
                                        label={"Ngày hiệu lực"}
                                        type={"date"}
                                        value={dataProposal.proposalDate ? dataProposal.proposalDate : moment(new Date).format("YYYY-MM-DD")}
                                        FuntionOnchange={(event) => ValidateOnChangeInputProposal("proposalDate", event.target.value, dataProposal, setDataProposal, validate, setValidate)}
                                        Validate={validate.proposalDate}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYTWO}
                                        ErrorSyntax={ERROR_STATUS_SYNTAX.TWENTYFIVE}
                                        valueDisable={true}
                                    />
                                </Grid>
                                <Grid item sm={6} >
                                    <InputTypeProposalselect
                                        label={"Loại đề xuất"}
                                        value={dataProposal.type}
                                        FuntionOnchange={(event) => ValidateOnChangeInputProposal("type", event.target.value, dataProposal, setDataProposal, validate, setValidate)}
                                        Validate={validate.type}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYSIX}
                                        valueDiable={true}

                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid item lg={24} sm={24}  >
                            <Grid container item spacing={2}>
                                <Grid item xs={6}>
                                    <Input
                                        label={"Nội dung"}
                                        type={"text"}
                                        value={dataProposal.content}
                                        FuntionOnchange={(event) => ValidateOnChangeInputProposal("content", event.target.value, dataProposal, setDataProposal, validate, setValidate)}
                                        Validate={validate.content}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYSEVEN}
                                        valueDisable={true}

                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Input
                                        label={"Mô tả chi tiết"}
                                        type={"text"}
                                        value={dataProposal.detailedDescription}
                                        FuntionOnchange={(event) => ValidateOnChangeInputProposal("detailedDescription", event.target.value, dataProposal, setDataProposal, validate, setValidate)}
                                        Validate={validate.detailedDescription}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYEIGHT}
                                        valueDisable={true}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                    </>
                }
                <br />
                <div>
                    <TableProposal
                        data={data}
                        dataUser={dataUser}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                        handleEdit={handleEdit}
                        handleShowHideModalDelete={handleShowHideModalDelete}
                        handleShowhideRegister={handleShowhideRegister}
                        page={page}
                        rowsPerPage={rowsPerPage}
                    />
                </div>
            </Box>
            <DeleteModal
                open={openModalDelete}
                setOpen={setOpenModalDelete}
                ActionDelete={ActionDelete}
            />
            <RegistrationForms
                open={openRegisterForm}
                setOpen={setOpenRegisterForm}
                option={option}
                setOption={setOption}
            />
        </div >
    );
}

export default ProposalDialog