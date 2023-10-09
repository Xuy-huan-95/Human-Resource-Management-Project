import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCreateFamilyMutation, useGetFamilyByemployeeIdQuery, useDeleteFamilyMutation, useUpdateFamilyMutation } from "../../../../redux/slice/fammily/index"
import { useEffect, useState } from 'react';
import { IFamily } from "../../../../interface/Family.interface"
import { toast } from 'react-toastify';
import moment from 'moment';
import { initRelativeInfo, InitValidateRelativeInfo } from "../../../InitData/InitData"
import { validateUseRelative, handleOnChangeInputUserRelative } from "../../../../validate/ValidateUseRelative/ValidateUseRelative"
import { useAppSelector } from "../../../../redux/hook";
import ButtonSubmit from "../../../ShareComponent/Button/ButtonSubmit"
import ButtonCancel from "../../../ShareComponent/Button/ButtonCancel"
import Input from "../../../ShareComponent/Input/Input"
import { ERROR_STATUS_EMPTY, ERROR_STATUS_SYNTAX } from "../../../ShareComponent/Constants/StatusCode"
import InputGenderSelecter from "../../../ShareComponent/Input/InputSelectet/InputGenderSelecter"
import InputRelationshipSelecter from "../../../ShareComponent/Input/InputSelectet/InputRelationshipSelecter"
import TableRelative from "../../Table/TableRelative/TableRelative"
import { RESPONSE_STATUS_CODE, ERROR_CODE } from "../../../ShareComponent/Constants/StatusCode"
const RelativeEmployeeDialog = () => {
    const dataToSendLeader = useAppSelector((state) => state.registerUser.userInfomation)
    const [fammilyData, setFammilyData] = useState(initRelativeInfo)
    const [validateFammilyData, setValidateFammilyData] = useState(InitValidateRelativeInfo)
    const [actionRelative, setActionRelative] = useState<string>("")
    const [create] = useCreateFamilyMutation()
    const { data } = useGetFamilyByemployeeIdQuery(dataToSendLeader.id, { refetchOnMountOrArgChange: true })
    const [Delete] = useDeleteFamilyMutation()
    const [Update] = useUpdateFamilyMutation()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleCreateRelative = async () => {
        try {
            let check = validateUseRelative(initRelativeInfo, fammilyData, validateFammilyData, setValidateFammilyData)
            if (check === true) {
                let result = await create({
                    employeeId: dataToSendLeader.id,
                    data: [fammilyData]
                })
                if (Object.values(result)[0].code == RESPONSE_STATUS_CODE.SUCCESS) {
                    toast.success("bạn đã thêm thành công quan hệ gia đình")
                    setFammilyData(initRelativeInfo)
                    setValidateFammilyData(InitValidateRelativeInfo)
                    setActionRelative("")
                }
                if (Object.values(result)[0].code == RESPONSE_STATUS_CODE.WRONGEMAIL) {
                    setValidateFammilyData({ ...InitValidateRelativeInfo, email: ERROR_CODE.SYNTAX })
                }
                if (Object.values(result)[0].code == RESPONSE_STATUS_CODE.WRONGCITIZENIDENTIFICATIONNUMBER) {
                    setValidateFammilyData({ ...InitValidateRelativeInfo, citizenIdentificationNumber: ERROR_CODE.SYNTAX })
                }
            }
        } catch (error) {
            console.log(error)
        }

    }
    const handleDelete = async (item: any) => {
        try {
            let result = await Delete(item.id)
            if (Object.values(result)[0].code == RESPONSE_STATUS_CODE.SUCCESS) {
                setActionRelative("")
                toast.success("bạn đã xóa thành công")
            }
        } catch (error) {
            console.log(error)
        }

    }
    const handleSelectActionUpdate = async (item: any) => {
        if (item) setFammilyData({ ...item, dateOfBirth: moment(item.dateOfBirth).format("YYYY-MM-DD") })
        setActionRelative("Update")
        setValidateFammilyData(InitValidateRelativeInfo)
    }
    const handleUpdateRelative = async () => {
        let check = validateUseRelative(initRelativeInfo, fammilyData, validateFammilyData, setValidateFammilyData)
        if (check == true) {
            const result = await Update({
                id: (fammilyData as IFamily).id,
                data: fammilyData as IFamily
            })
            if (Object.values(result)[0].code == RESPONSE_STATUS_CODE.SUCCESS) {
                toast.success("Bạn đã cập nhật thông tin thành công")
                setActionRelative("")
                setFammilyData(initRelativeInfo)
            }
        }
    }
    const handleExit = () => {
        setActionRelative("")
        setFammilyData(initRelativeInfo)
        setValidateFammilyData(InitValidateRelativeInfo)
    }


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid  >
                    <Grid container item spacing={1}>
                        <Grid item xs={3}>
                            <Input
                                label={"Họ và tên"}
                                type={"text"}
                                value={fammilyData.name}
                                FuntionOnchange={(event) => handleOnChangeInputUserRelative("name", event.target.value, fammilyData, setFammilyData, validateFammilyData, setValidateFammilyData)}
                                Validate={validateFammilyData.name}
                                ErrorEmpty={ERROR_STATUS_EMPTY.EIGHTEEN}
                                ErrorSyntax={ERROR_STATUS_SYNTAX.EIGHTEEN}
                            />
                        </Grid>
                        <Grid item xs={3} className='date'>
                            <Input
                                label={"Ngày sinh"}
                                type={"date"}
                                value={fammilyData.dateOfBirth}
                                FuntionOnchange={(event) => handleOnChangeInputUserRelative("dateOfBirth", event.target.value, fammilyData, setFammilyData, validateFammilyData, setValidateFammilyData)}
                                Validate={validateFammilyData.dateOfBirth}
                                ErrorEmpty={ERROR_STATUS_EMPTY.EIGHT}
                                ErrorSyntax={ERROR_STATUS_SYNTAX.EIGHT}
                            />
                        </Grid>
                        <Grid item xs={3} >
                            <InputRelationshipSelecter
                                label={"Chọn mối quan hệ"}
                                value={fammilyData.relationShip}
                                FuntionOnchange={(event) => handleOnChangeInputUserRelative("relationShip", event.target.value, fammilyData, setFammilyData, validateFammilyData, setValidateFammilyData)}
                                Validate={validateFammilyData.relationShip}
                                ErrorEmpty={ERROR_STATUS_EMPTY.NIGHTEEN}
                            />
                        </Grid>
                        <Grid item xs={3} >
                            <InputGenderSelecter
                                label={"Chọn giới tính"}
                                value={fammilyData.gender}
                                FuntionOnchange={(event) => handleOnChangeInputUserRelative("gender", event.target.value, fammilyData, setFammilyData, validateFammilyData, setValidateFammilyData)}
                                Validate={validateFammilyData.gender}
                                ErrorEmpty={ERROR_STATUS_EMPTY.SIX}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <Grid >
                    <Grid container item spacing={1}>
                        <Grid item xs={3}>
                            <Input
                                label={"Email"}
                                type={"text"}
                                value={fammilyData.email}
                                FuntionOnchange={(event) => handleOnChangeInputUserRelative("email", event.target.value, fammilyData, setFammilyData, validateFammilyData, setValidateFammilyData)}
                                Validate={validateFammilyData.email}
                                ErrorEmpty={ERROR_STATUS_EMPTY.THREE}
                                ErrorSyntax={ERROR_STATUS_SYNTAX.THREE}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Input
                                label={"Số điện thoại"}
                                type={"number"}
                                value={fammilyData.phoneNumber}
                                FuntionOnchange={(event) => handleOnChangeInputUserRelative("phoneNumber", event.target.value, fammilyData, setFammilyData, validateFammilyData, setValidateFammilyData)}
                                Validate={validateFammilyData.phoneNumber}
                                ErrorEmpty={ERROR_STATUS_EMPTY.FOUR}
                                ErrorSyntax={ERROR_STATUS_SYNTAX.FOUR}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Input
                                label={"Số căn cước công dân"}
                                type={"number"}
                                value={fammilyData.citizenIdentificationNumber}
                                FuntionOnchange={(event) => handleOnChangeInputUserRelative("citizenIdentificationNumber", event.target.value, fammilyData, setFammilyData, validateFammilyData, setValidateFammilyData)}
                                Validate={validateFammilyData.citizenIdentificationNumber}
                                ErrorEmpty={ERROR_STATUS_EMPTY.NIGHT}
                                ErrorSyntax={ERROR_STATUS_SYNTAX.NIGHT}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Input
                                label={"Địa chỉ"}
                                type={"text"}
                                value={fammilyData.address}
                                FuntionOnchange={(event) => handleOnChangeInputUserRelative("address", event.target.value, fammilyData, setFammilyData, validateFammilyData, setValidateFammilyData)}
                                Validate={validateFammilyData.address}
                                ErrorEmpty={ERROR_STATUS_EMPTY.FIVE}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <div className='btn-save'>
                    {actionRelative === "Update" ?
                        <ButtonSubmit
                            handleFuntion={handleUpdateRelative}
                            name={"Cập nhật"}
                        />
                        :
                        <ButtonSubmit
                            handleFuntion={handleCreateRelative}
                            name={"Lưu"}
                        />
                    }
                    <ButtonCancel
                        handleCancel={handleExit}
                    />
                </div>
                <div>
                    <TableRelative
                        data={data}
                        handleSelectActionUpdate={handleSelectActionUpdate}
                        handleDelete={handleDelete}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </div>
            </Box >
        </div >
    );
}

export default RelativeEmployeeDialog