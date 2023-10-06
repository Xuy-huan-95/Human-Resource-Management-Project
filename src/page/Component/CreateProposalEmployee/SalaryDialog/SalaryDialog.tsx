import "./SalaryDialog.scss"
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useGetSalarybyEmployeeIdQuery, useCreateSalaryMutation, useUpdateSalaryMutation } from "../../../../redux/slice/Salary_increate/index"
import moment from "moment";
import { initIcreateSalary } from "../../../InitData/InitData"
import { toast } from "react-toastify";
import DeleteModal from "../DeleteProposalEmployeeDialog"
import { ISalaryIncreate } from "../../../../interface/SalaryIncreate.interface"
import RegistrationForms from "../../Form/Form"
import { validatecreateSalary } from "../../../InitData/InitData"
import { ValidateDataIncreateSalary, ValidateInputSalaryIncreate } from "../../../../validate/validate"
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { GetResultDataSalary } from "../../../../redux/slice/Increate_Salary.slice "
import Input from "../../../ShareComponent/Input/Input"
import { ERROR_STATUS_EMPTY, ERROR_STATUS_SYNTAX, RESPONSE_STATUS_CODE } from "../../../ShareComponent/Constants/StatusCode"
import TableSalaryIncrease from "../../Table/TableSalaryIncrease/TableSalaryIncrease"
import ButtonSubmit from "../../../ShareComponent/Button/ButtonSubmit"
import ButtonCancel from "../../../ShareComponent/Button/ButtonCancel"
import { STATUS_PROFILE } from "../../../ShareComponent/Constants/StatusIfomation"

const ModalSalaryIncrease = () => {
    const dispatch = useAppDispatch()
    const dataUser = useAppSelector((state) => state.registerUser.userInfomation)
    const [dataSalaryIncrease, setDataSalaryIncrease] = useState(initIcreateSalary)
    const [validateSalaryIncrease, setValidateSalaryIncrease] = useState(validatecreateSalary)
    const [create] = useCreateSalaryMutation()
    const [update] = useUpdateSalaryMutation()
    const { data } = useGetSalarybyEmployeeIdQuery(dataUser.id)
    const [actionState, setActionState] = useState<string>("")
    const [showhideDeleteSalaryIncreaseModal, setShowhideDeleteSalaryIncreaseModal] = useState<boolean>(false)
    const [showhideRegisterForm, setShowhideRegisterForm] = useState<boolean>(false)
    const [option, setOption] = useState<string>("")
    const [ActionDelete, setActionDelete] = useState<string>("")
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleSubmit = async () => {
        try {
            let check = ValidateDataIncreateSalary(dataSalaryIncrease, initIcreateSalary, validateSalaryIncrease, setValidateSalaryIncrease)
            if (check == true) {
                let result = await create({
                    employeId: dataUser.id,
                    data: [dataSalaryIncrease]
                })
                if (Object.values(result)[0].code === RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã thêm đề xuất tăng lương thành công")
                    dispatch(GetResultDataSalary(Object.values(result)[0].data[0]))
                    setOption("salary_Increate")
                    setValidateSalaryIncrease(validatecreateSalary)
                    setShowhideRegisterForm(!showhideRegisterForm)
                    setDataSalaryIncrease({ ...dataSalaryIncrease, reason: "", oldSalary: "", newSalary: "", startDate: moment(new Date()).format("YYYY-MM-DD") })
                }
            }
        } catch (error) {
            console.log("error", error)
        }
    }
    const handleEdit = (item: any) => {
        dispatch(GetResultDataSalary(item))
        setActionState("Update")
        if (item) setDataSalaryIncrease({
            ...item, startDate: moment(item.startDate).format("YYYY-MM-DD")
        })
    }
    const handleUpdateState = async () => {
        try {
            let check = ValidateDataIncreateSalary(dataSalaryIncrease, initIcreateSalary, validateSalaryIncrease, setValidateSalaryIncrease)
            if (check == true) {
                let result = await update(dataSalaryIncrease as ISalaryIncreate).unwrap()
                if (Object.values(result)[0] === RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã cập nhật thông tin tăng lương thàng công")
                    setDataSalaryIncrease(initIcreateSalary)
                    setActionState("")
                    dispatch(GetResultDataSalary(Object.values(result)[2]))
                    setOption("salary_Increate")
                    setValidateSalaryIncrease(validatecreateSalary)
                    setShowhideRegisterForm(!showhideRegisterForm)
                    setDataSalaryIncrease({ ...dataSalaryIncrease, reason: "", oldSalary: "", newSalary: "", startDate: moment(new Date()).format("YYYY-MM-DD") })
                } else {
                    if (result.code == 418) {
                        toast.error("Mức lương cũ lớn hơn mức lương mới")
                        setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "2" })
                    }
                }
            }
        } catch (result) {
            console.log(result)
        }
    }


    const handleDelete = () => {
        setDataSalaryIncrease({ ...dataSalaryIncrease, reason: "", oldSalary: "", newSalary: "", startDate: moment(new Date()).format("YYYY-MM-DD") })
        setActionState("")
        setValidateSalaryIncrease(validatecreateSalary)
    }
    const handleShowhideModalDelete = (item: any) => {
        dispatch(GetResultDataSalary(item))
        setShowhideDeleteSalaryIncreaseModal(!showhideDeleteSalaryIncreaseModal)
        setActionDelete("Delete-salary")

    }
    const handleShowhideRegisterFrom = (item: any) => {
        dispatch(GetResultDataSalary(item))
        setShowhideRegisterForm(!showhideRegisterForm)
        setOption("salary_Increate")
    }

    useEffect(() => {
        setDataSalaryIncrease({ ...dataSalaryIncrease, startDate: moment(new Date()).format("YYYY-MM-DD") })
    }, [open])

    return (
        <div className="height">
            <Box sx={{ flexGrow: 1 }}>
                {dataUser.submitProfileStatus !== STATUS_PROFILE.SIX &&
                    <>
                        <Grid item lg={24} sm={24}  >
                            <Grid container item spacing={2}>
                                <Grid item xs={4}>
                                    <Input
                                        label={"Lương cũ"}
                                        type={"text"}
                                        value={dataSalaryIncrease.oldSalary}
                                        FuntionOnchange={(event) => ValidateInputSalaryIncreate("oldSalary", event.target.value, dataSalaryIncrease, setDataSalaryIncrease, validateSalaryIncrease, setValidateSalaryIncrease)}
                                        Validate={validateSalaryIncrease.oldSalary}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTY}
                                        ErrorSyntax={ERROR_STATUS_SYNTAX.TWENTY}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Input
                                        label={"Lương mới"}
                                        type={"text"}
                                        value={dataSalaryIncrease.newSalary}
                                        FuntionOnchange={(event) => ValidateInputSalaryIncreate("newSalary", event.target.value, dataSalaryIncrease, setDataSalaryIncrease, validateSalaryIncrease, setValidateSalaryIncrease)}
                                        Validate={validateSalaryIncrease.newSalary}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYONE}
                                        ErrorSyntax={ERROR_STATUS_SYNTAX.TWENTYONE}

                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Input
                                        label={"Ngày hiệu lực"}
                                        type={"date"}
                                        value={dataSalaryIncrease.startDate}
                                        FuntionOnchange={(event) => ValidateInputSalaryIncreate("startDate", event.target.value, dataSalaryIncrease, setDataSalaryIncrease, validateSalaryIncrease, setValidateSalaryIncrease)}
                                        Validate={validateSalaryIncrease.startDate && validateSalaryIncrease.startDate}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYTWO}
                                        ErrorSyntax={ERROR_STATUS_SYNTAX.TWENTYTWO}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid item xs={24}>
                                <Input
                                    label={"Lý do tăng lương"}
                                    type={"text"}
                                    value={dataSalaryIncrease.reason}
                                    FuntionOnchange={(event) => ValidateInputSalaryIncreate("reason", event.target.value, dataSalaryIncrease, setDataSalaryIncrease, validateSalaryIncrease, setValidateSalaryIncrease)}
                                    Validate={validateSalaryIncrease.reason}
                                    ErrorEmpty={ERROR_STATUS_EMPTY.TWENTYTHREE}
                                />
                            </Grid>

                        </Grid>
                        <div className='btn-save'>
                            {actionState == "Update" ?
                                <ButtonSubmit
                                    handleFuntion={handleUpdateState}
                                    name={"Cập nhật"}
                                />
                                :
                                <ButtonSubmit
                                    handleFuntion={handleSubmit}
                                    name={"Lưu"}
                                />
                            }
                            <ButtonCancel
                                handleCancel={handleDelete}
                            />
                        </div>
                    </>
                }
                <div>
                    <TableSalaryIncrease
                        data={data}
                        dataUser={dataUser}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                        handleEdit={handleEdit}
                        handleShowhideModalDelete={handleShowhideModalDelete}
                        handleShowhideRegisterFrom={handleShowhideRegisterFrom}
                        page={page}
                        rowsPerPage={rowsPerPage}
                    />
                </div>
            </Box>
            <DeleteModal
                open={showhideDeleteSalaryIncreaseModal}
                setOpen={setShowhideDeleteSalaryIncreaseModal}
                ActionDelete={ActionDelete}
            />
            <RegistrationForms
                open={showhideRegisterForm}
                setOpen={setShowhideRegisterForm}
                option={option}
                setOption={setOption}
            />
        </div >
    );
}

export default ModalSalaryIncrease