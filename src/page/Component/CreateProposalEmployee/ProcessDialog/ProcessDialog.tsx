import "./ProcessDialog.scss"
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from "react";
import { initProcesInfo } from "../../../InitData/InitData"
import { useAddProcessByEmpMutation, useGetProcessByEmpQuery, useUpdateProcessMutation } from "../../../../redux/slice/Proccess"
import moment from "moment";
import { toast } from "react-toastify";
import { IProccess } from "../../../../interface/Proccess.interface"
import DeleteModal from "../DeleteProposalEmployeeDialog"
import RegistrationForms from "../../Form/Form"
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { GetResultProcess } from "../../../../redux/slice/process.slice"
import { GetResultData } from "../../../../redux/slice/RegisterUser.slice"
import { validateProcess } from "../../../InitData/InitData"
import { validateModalProcess, validateInputProcess } from "../../../../validate/ValidateProcess/ValidateProcess"
import Input from "../../../ShareComponent/Input/Input"
import InputPositionSelecter from "../../../ShareComponent/Input/InputSelectet/InputPositionSelecter"
import { ERROR_STATUS_EMPTY, ERROR_STATUS_SYNTAX, RESPONSE_STATUS_CODE } from "../../../ShareComponent/Constants/StatusCode"
import { STATUS_PROFILE } from "../../../ShareComponent/Constants/StatusIfomation"
import ButtonSubmit from "../../../ShareComponent/Button/ButtonSubmit"
import ButtonCancel from "../../../ShareComponent/Button/ButtonCancel"
import TableProcess from "../../Table/TableProcess/TableProcess"
import { STATUS_PROCESS, NAME_PROCESS } from "../../../ShareComponent/Constants/StatusIfomation"
import { useGetEmployeeByIdQuery } from "../../../../redux/slice/Employee/index"
const ModalProcess = () => {
    const dispatch = useAppDispatch()
    const dataUser = useAppSelector((state) => state.registerUser.userInfomation)
    const [dataProces, setDataProces] = useState(initProcesInfo)
    const [actionStateProcess, setActionStateProcess] = useState<string>("")
    const [showhideDeleteProcessModal, setShowhideDeleteProcessModal] = useState<boolean>(false)
    const [Create] = useAddProcessByEmpMutation()
    const { data } = useGetProcessByEmpQuery(dataUser.id, { refetchOnMountOrArgChange: true })
    const { data: getCurrentUserStatus } = useGetEmployeeByIdQuery(dataUser.id, { refetchOnMountOrArgChange: true })
    const [Update] = useUpdateProcessMutation()
    const [ActionDelete, setActionDelete] = useState<string>("")
    const [showhideRegisterForm, setShowhideRegisterForm] = useState<boolean>(false)
    const [option, setOption] = useState<string>("")
    const [validate, setValidate] = useState(validateProcess)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleCreateProcess = async () => {
        try {
            let check = validateModalProcess(dataProces, initProcesInfo, validate, setValidate)
            if (check == true) {
                let result = await Create({
                    id: dataUser.id,
                    data: [dataProces]
                }).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    dispatch(GetResultProcess(result.data[0]))
                    toast.success("Bạn đã thêm thành công đề xuất tăng chức")
                    setShowhideRegisterForm(!showhideRegisterForm)
                    setOption("Process_increate")
                    setDataProces({ ...dataProces, newPosition: "", promotionDay: moment(new Date()).format("YYYY-MM-DD") })
                    setValidate(validateProcess)
                }
                else toast.error("Vui lòng kiểm tra lại thông tin")
            }
        } catch (error) {
            console.log(error)
        }


    }
    const handleUpdate = (item) => {
        dispatch(GetResultProcess(item))
        setActionStateProcess("Update")
        setDataProces({ ...item, promotionDay: moment(item.promotionDay).format("YYYY-MM-DD") })
    }
    const handleSubmitUpdate = async () => {
        try {
            let check = validateModalProcess(dataProces, initProcesInfo, validate, setValidate)
            if (check == true) {
                let result = await Update(dataProces as IProccess).unwrap()
                if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
                    dispatch(GetResultProcess(result.data))
                    toast.success("Bạn đã cập nhật thông tin thành công")
                    setShowhideRegisterForm(!showhideRegisterForm)
                    setOption("Process_increate")
                    setDataProces({ ...dataProces, newPosition: "", promotionDay: moment(new Date()).format("YYYY-MM-DD") })
                    setValidate(validateProcess)
                }
            }
        } catch (error) {
        }
    }
    const handleCancelUpdate = () => {
        setActionStateProcess("")
        setDataProces({ ...dataProces, newPosition: "", promotionDay: moment(new Date()).format("YYYY-MM-DD") })
        setValidate(validateProcess)
    }
    const handleShowhideModalDelete = (item) => {
        dispatch(GetResultProcess(item))
        setShowhideDeleteProcessModal(!showhideDeleteProcessModal)
        setActionDelete("Delete-process")
    }
    const handleShowhideRegisterFrom = (item: any) => {
        dispatch(GetResultProcess(item))
        setShowhideRegisterForm(!showhideRegisterForm)
        setOption("Process_increate")
    }

    useEffect(() => {
        setDataProces({ ...dataProces, promotionDay: moment(new Date()).format("YYYY-MM-DD") })
    }, [])

    useEffect(() => {
        dispatch(GetResultData({ ...dataUser, currentPosition: getCurrentUserStatus?.data?.currentPosition }))
    }, [getCurrentUserStatus])
    return (
        <div className="height">

            <Box sx={{ flexGrow: 1 }}>
                {dataUser.submitProfileStatus !== STATUS_PROFILE.SIX && data?.data.some((item) => item.processStatus == "2") == false
                    ?
                    <>
                        <Grid item lg={24} sm={24}  >
                            <Grid container item spacing={2}>
                                <Grid item xs={4}>
                                    <Input
                                        label={"Chức vụ hiện tại"}
                                        disabled
                                        value={
                                            dataUser.currentPosition == STATUS_PROCESS.ONE && NAME_PROCESS.ONE ||
                                            dataUser.currentPosition == STATUS_PROCESS.TWO && NAME_PROCESS.TWO ||
                                            dataUser.currentPosition == STATUS_PROCESS.THREE && NAME_PROCESS.THREE ||
                                            dataUser.currentPosition == STATUS_PROCESS.FOUR && NAME_PROCESS.FOUR ||
                                            dataUser.currentPosition == STATUS_PROCESS.FIVE && NAME_PROCESS.FIVE ||
                                            dataUser.currentPosition == STATUS_PROCESS.SIX && NAME_PROCESS.SIX ||
                                            dataUser.currentPosition == STATUS_PROCESS.SEVEN && NAME_PROCESS.SEVEN
                                        }

                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <InputPositionSelecter
                                        label={"Chức vụ mới"}
                                        value={dataProces.newPosition}
                                        FuntionOnchange={(event) => validateInputProcess("newPosition", event.target.value, dataProces, setDataProces, validate, setValidate)}
                                        Validate={validate.newPosition}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYFOUR}

                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Input
                                        label={"Ngày hiệu lực"}
                                        type={"date"}
                                        value={dataProces.promotionDay}
                                        FuntionOnchange={(event) => validateInputProcess("promotionDay", event.target.value, dataProces, setDataProces, validate, setValidate)}
                                        Validate={validate.promotionDay}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYFIVE}
                                        ErrorSyntax={ERROR_STATUS_SYNTAX.TWENTYFIVE}

                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <div className='btn-save'>
                            {!actionStateProcess ?
                                <ButtonSubmit
                                    handleFuntion={handleCreateProcess}
                                    name={"Lưu"}
                                />
                                :
                                <ButtonSubmit
                                    handleFuntion={handleSubmitUpdate}
                                    name={"Cập nhật"}
                                />
                            }
                            <ButtonCancel
                                handleCancel={handleCancelUpdate}
                            />
                        </div>
                    </>
                    :
                    <>
                        <Grid item lg={24} sm={24}  >
                            <Grid container item spacing={2}>
                                <Grid item xs={4}>
                                    <Input
                                        label={"Chức vụ cũ"}
                                        disabled
                                        value={
                                            dataUser.currentPosition == STATUS_PROCESS.ONE && NAME_PROCESS.ONE ||
                                            dataUser.currentPosition == STATUS_PROCESS.TWO && NAME_PROCESS.TWO ||
                                            dataUser.currentPosition == STATUS_PROCESS.THREE && NAME_PROCESS.THREE ||
                                            dataUser.currentPosition == STATUS_PROCESS.FOUR && NAME_PROCESS.FOUR ||
                                            dataUser.currentPosition == STATUS_PROCESS.FIVE && NAME_PROCESS.FIVE ||
                                            dataUser.currentPosition == STATUS_PROCESS.SIX && NAME_PROCESS.SIX ||
                                            dataUser.currentPosition == STATUS_PROCESS.SEVEN && NAME_PROCESS.SEVEN
                                        }
                                        valueDisable={true}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <InputPositionSelecter
                                        label={"Chức vụ mới"}
                                        value={dataProces.newPosition}
                                        FuntionOnchange={(event) => validateInputProcess("newPosition", event.target.value, dataProces, setDataProces, validate, setValidate)}
                                        Validate={validate.newPosition}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYFOUR}
                                        valueDiable={true}

                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Input
                                        label={"Ngày hiệu lực"}
                                        type={"date"}
                                        value={dataProces.promotionDay}
                                        FuntionOnchange={(event) => validateInputProcess("promotionDay", event.target.value, dataProces, setDataProces, validate, setValidate)}
                                        Validate={validate.promotionDay}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYFIVE}
                                        ErrorSyntax={ERROR_STATUS_SYNTAX.TWENTYFIVE}
                                        valueDisable={true}

                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                }
                <div>
                    <br />
                    <TableProcess
                        data={data}
                        dataUser={dataUser}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                        handleShowhideModalDelete={handleShowhideModalDelete}
                        handleShowhideRegisterFrom={handleShowhideRegisterFrom}
                        handleUpdate={handleUpdate}
                        page={page}
                        rowsPerPage={rowsPerPage}
                    />

                </div>
            </Box>
            <DeleteModal
                open={showhideDeleteProcessModal}
                setOpen={setShowhideDeleteProcessModal}
                ActionDelete={ActionDelete}
            />
            <RegistrationForms
                open={showhideRegisterForm}
                setOpen={setShowhideRegisterForm}
                option={option}
                setOption={setOption}
                dataProcessSendToLeader={dataProces}
                setDataProcessIncrease={setDataProces}

            />
        </div >
    );
}

export default ModalProcess