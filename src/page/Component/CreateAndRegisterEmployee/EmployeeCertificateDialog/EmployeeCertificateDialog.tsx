import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import "./EmployeeCertificateDialog.scss"
import Grid from '@mui/material/Grid';
import { ICertificate } from "../../../../interface/Certificate.interface"
import { useCreateCertificateMutation, useGetCertificateByEmployeeIdQuery } from "../../../../redux/slice/Certificate/index"
import { toast } from 'react-toastify';
import moment from 'moment';
import { useDeleteCertificateMutation, useUpdateCertificateMutation } from "../../../../redux/slice/Certificate/index"
import { InitCertificateData, InitValidateCertificate } from "../../../InitData/InitData"
import { validateCertificate, handleOnChangeInputCertificateInfo } from "../../../../validate/ValidateCertificate/ValidateCertificate"
import { useAppSelector } from "../../../../redux/hook";
import ButtonSubmit from "../../../ShareComponent/Button/ButtonSubmit"
import ButtonCancel from "../../../ShareComponent/Button/ButtonCancel"
import Input from "../../../ShareComponent/Input/Input"
import { RESPONSE_STATUS_CODE, ERROR_STATUS_EMPTY, ERROR_STATUS_SYNTAX } from "../../../ShareComponent/Constants/StatusCode"
import TableCertificate from "../../Table/TableCertificate/TableCertificate"

const EmployeeCertificateDialog = () => {
    const dataToSendLeader = useAppSelector((state) => state.registerUser.userInfomation)
    const [createCertificateData, setCreateCertificateData] = useState(InitCertificateData)
    const [validateCertificateData, setValidateCertificateData] = useState(InitValidateCertificate)
    const [CreateCertificate] = useCreateCertificateMutation()
    const [Delete] = useDeleteCertificateMutation()
    const [update] = useUpdateCertificateMutation()
    const { data } = useGetCertificateByEmployeeIdQuery(dataToSendLeader.id, { refetchOnMountOrArgChange: true })
    const [acitonCertificate, setAcitonCertificate] = useState<string>("")
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleCreateCertificate = async () => {
        try {
            let check = validateCertificate(InitCertificateData, createCertificateData, setCreateCertificateData, validateCertificateData, setValidateCertificateData)
            if (check === true) {
                let result = await CreateCertificate({
                    employeeId: dataToSendLeader.id,
                    data: [createCertificateData]
                }).unwrap()
                if (result.code === RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã thêm mới văn bằng")
                    setCreateCertificateData(InitCertificateData)
                    setValidateCertificateData(InitValidateCertificate)
                }
                else {
                    toast.error("Vui lòng kiểm tra lại thông tin trước khi thêm mới")

                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleSetActionEdit = (value: any) => {
        setAcitonCertificate("Edit")
        if (value) setCreateCertificateData({ ...value, issueDate: moment(value.issueDate).format("YYYY-MM-DD") })
    }
    const handleEdit = async () => {
        try {
            let check = validateCertificate(InitCertificateData, createCertificateData, setCreateCertificateData, validateCertificateData, setValidateCertificateData)
            if (createCertificateData && check === true) {
                let result = await update(createCertificateData as ICertificate)
                if (Object.values(result)[0].code === RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("Bạn đã chỉnh sửa thành công")
                    setAcitonCertificate("")
                    setCreateCertificateData(InitCertificateData)
                    setValidateCertificateData(InitValidateCertificate)
                } toast.error("Vui lòng kiểm tra lại thông tin trước khi cập nhật")

            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = async (value: any) => {
        try {
            if (value) {
                let result = await Delete(value.id)
                if (Object.values(result)[0].code === RESPONSE_STATUS_CODE.SUCCESS) {
                    setValidateCertificateData(InitValidateCertificate)
                    setAcitonCertificate("")
                    setCreateCertificateData(InitCertificateData)
                } toast.error("Vui lòng kiểm tra lại thông tin trước khi xóa")
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleResetInput = () => {
        setCreateCertificateData(InitCertificateData)
        setValidateCertificateData(InitValidateCertificate)
        setAcitonCertificate("")
    }
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container item spacing={1}>
                    <Grid item xs={3}>
                        <Input
                            label={"Tên văn bằng"}
                            type={"text"}
                            value={createCertificateData.certificateName}
                            FuntionOnchange={(event) => handleOnChangeInputCertificateInfo("certificateName", event.target.value, createCertificateData, setCreateCertificateData, validateCertificateData, setValidateCertificateData)}
                            Validate={validateCertificateData.certificateName}
                            ErrorEmpty={ERROR_STATUS_EMPTY.FOURTEEN}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Input
                            label={"Xếp loại"}
                            type={"text"}
                            value={createCertificateData.field}
                            FuntionOnchange={(event) => handleOnChangeInputCertificateInfo("field", event.target.value, createCertificateData, setCreateCertificateData, validateCertificateData, setValidateCertificateData)}
                            Validate={validateCertificateData.field}
                            ErrorEmpty={ERROR_STATUS_EMPTY.FIFTEEN}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Input
                            label={"Chọn ngày cấp"}
                            type={"date"}
                            value={createCertificateData.issueDate}
                            FuntionOnchange={(event) => handleOnChangeInputCertificateInfo("issueDate", event.target.value, createCertificateData, setCreateCertificateData, validateCertificateData, setValidateCertificateData)}
                            Validate={validateCertificateData.issueDate}
                            ErrorEmpty={ERROR_STATUS_EMPTY.SIXTEEN}
                            ErrorSyntax={ERROR_STATUS_SYNTAX.SIXTEEN}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Input
                            label={"Nội dung văn bằng"}
                            type={"text"}
                            value={createCertificateData.content}
                            FuntionOnchange={(event) => handleOnChangeInputCertificateInfo("content", event.target.value, createCertificateData, setCreateCertificateData, validateCertificateData, setValidateCertificateData)}
                            Validate={validateCertificateData.content}
                            ErrorEmpty={ERROR_STATUS_EMPTY.SEVENTEEN}
                        />
                    </Grid>
                </Grid>
                <div className='btn-save'>
                    {acitonCertificate === "Edit" ?
                        <ButtonSubmit
                            handleFuntion={handleEdit}
                            name={"Cập nhật"}
                        />
                        :
                        <ButtonSubmit
                            handleFuntion={handleCreateCertificate}
                            name={"Lưu"}
                        />
                    }
                    <ButtonCancel
                        handleCancel={handleResetInput}
                    />
                </div>
                <div>
                    <TableCertificate
                        data={data}
                        handleSetActionEdit={handleSetActionEdit}
                        handleDelete={handleDelete}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </div>

            </Box>
        </div >
    );
}

export default EmployeeCertificateDialog