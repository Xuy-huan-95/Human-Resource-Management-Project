import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import "./EmployeeInfomationDialog.scss"
import Stack from "@mui/material/Stack";
import Avatar from '@mui/material/Avatar';
import { IUser } from "../../../../interface/Employee.interface"
import _ from "lodash"
import moment from 'moment';
import { uploadImage } from "../../../../api/api"
import { toast } from 'react-toastify';
import { handleOnChangeInputUserInfo } from "../../../../validate/validate"
import Input from "../../../ShareComponent/Input/Input"
import InputGenderSelecter from "../../../ShareComponent/Input/InputSelectet/InputGenderSelecter"
import InputTeamSelecter from "../../../ShareComponent/Input/InputSelectet/InputTeamSelecter"
import { RESPONSE_STATUS_CODE, ERROR_STATUS_EMPTY, ERROR_STATUS_SYNTAX } from "../../../ShareComponent/Constants/StatusCode"

interface IPropCreateUser {
    formDataCreate: Omit<IUser, 'id'>
    setFormDataCreate: any
    Validate: boolean
    previreImage: string
    setPrevireImage: any
    action: string
    imageUpdate: string
    DataUpdate: IUser,
    validateInput: any,
    setValidateInput: any,
}
const CreateEmployeeInfomationDialog = (props: IPropCreateUser | any) => {
    const { formDataCreate, setFormDataCreate, previreImage, setPrevireImage, action, imageUpdate, validateInput, setValidateInput } = props
    const handleFileUpload = async (file: any) => {
        if (!file[0].name.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
            toast.error("File bạn chọn không phải là file ảnh, Vui lòng chọn đúng file ảnh")
            return;
        }
        setPrevireImage(URL.createObjectURL(file[0]))
        const formData = new FormData();
        formData.append('file', file[0]);
        let dataCreateImage = await uploadImage(formData)
        if (dataCreateImage?.status === RESPONSE_STATUS_CODE.SUCCESS) setFormDataCreate({ ...formDataCreate, image: `https://em-v2.oceantech.com.vn/em//public/image/${dataCreateImage?.data?.name}` })
    }
    useEffect(() => {
        if (action === "Create") {
            setPrevireImage("")
        }
        if (action === "Update") {
            setPrevireImage(imageUpdate)
        }
    }, [action])

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={19} className='gird-all'  >
                    <Grid item lg={5} sm={19} >
                        <div className='left'>
                            <div className='icon-content'>

                                {previreImage ?
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={previreImage}
                                        sx={{ width: 300, height: 300, marginBottom: "20px" }}
                                    />
                                    : <AccountCircleIcon />}

                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <label htmlFor="upload-image">
                                        <Button variant="contained" component="span" className='btn-upload'>
                                            Tải ảnh lên
                                        </Button>
                                        <input
                                            id="upload-image"
                                            hidden
                                            accept="image/*"
                                            type="file"
                                            onChange={(event) => handleFileUpload(event.target.files)}
                                        />
                                    </label>
                                </Stack>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={13} sm={19} className='Width' >
                        <Grid container item spacing={2}>
                            <Grid item xs={6}>
                                <Input
                                    label={"Họ và tên"}
                                    type={"text"}
                                    value={formDataCreate.name}
                                    FuntionOnchange={(event) => handleOnChangeInputUserInfo("name", event.target.value, formDataCreate, setFormDataCreate, validateInput, setValidateInput)}
                                    Validate={validateInput.name}
                                    ErrorEmpty={ERROR_STATUS_EMPTY.ONE}
                                    ErrorSyntax={ERROR_STATUS_SYNTAX.ONE}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    label={"Mã nhân viên"}
                                    type={"text"}
                                    value={formDataCreate.code}
                                    FuntionOnchange={(event) => handleOnChangeInputUserInfo("code", event.target.value, formDataCreate, setFormDataCreate, validateInput, setValidateInput)}
                                    Validate={validateInput.code}
                                    ErrorEmpty={ERROR_STATUS_EMPTY.TWO}
                                    ErrorSyntax={ERROR_STATUS_SYNTAX.TWO}
                                />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container item spacing={2} className='gird-row'>
                            <Grid item xs={6} >
                                <Input
                                    label={"Email"}
                                    type={"text"}
                                    value={formDataCreate.email}
                                    FuntionOnchange={(event) => handleOnChangeInputUserInfo("email", event.target.value, formDataCreate, setFormDataCreate, validateInput, setValidateInput)}
                                    Validate={validateInput.email}
                                    ErrorEmpty={ERROR_STATUS_EMPTY.THREE}
                                    ErrorSyntax={ERROR_STATUS_SYNTAX.THREE}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    label={"Số điện thoại"}
                                    type={"text"}
                                    value={formDataCreate.phone}
                                    FuntionOnchange={(event) => handleOnChangeInputUserInfo("phone", event.target.value, formDataCreate, setFormDataCreate, validateInput, setValidateInput)}
                                    Validate={validateInput.phone}
                                    ErrorEmpty={ERROR_STATUS_EMPTY.FOUR}
                                    ErrorSyntax={ERROR_STATUS_SYNTAX.FOUR}
                                />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container item spacing={2} className='gird-row'>
                            <Grid item xs={12}>
                                <Input
                                    label={"Địa chỉ cụ thể"}
                                    type={"text"}
                                    value={formDataCreate.address}
                                    FuntionOnchange={(event) => handleOnChangeInputUserInfo("address", event.target.value, formDataCreate, setFormDataCreate, validateInput, setValidateInput)}
                                    Validate={validateInput.address}
                                    ErrorEmpty={ERROR_STATUS_EMPTY.FIVE}
                                />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container item spacing={2} >
                            <Grid item sm={4} >
                                <InputGenderSelecter
                                    label={"Chọn giới tính"}
                                    value={formDataCreate.gender as number}
                                    FuntionOnchange={(event) => handleOnChangeInputUserInfo("gender", event.target.value, formDataCreate, setFormDataCreate, validateInput, setValidateInput)}
                                    Validate={validateInput.gender}
                                    ErrorEmpty={ERROR_STATUS_EMPTY.SIX}
                                />
                            </Grid>
                            <Grid item xs={4} >
                                <InputTeamSelecter
                                    label={"Chọn Nhóm"}
                                    value={formDataCreate.team}
                                    FuntionOnchange={(event) => handleOnChangeInputUserInfo("team", event.target.value, formDataCreate, setFormDataCreate, validateInput, setValidateInput)}
                                    Validate={validateInput.team}
                                    ErrorEmpty={ERROR_STATUS_EMPTY.SEVEN}
                                />
                            </Grid>
                            <Grid item xs={4} className='date'>
                                <Input
                                    label={"Ngày sinh"}
                                    type={"date"}
                                    value={formDataCreate.dateOfBirth ? moment(formDataCreate?.dateOfBirth).format("YYYY-MM-DD") : ""}
                                    FuntionOnchange={(event) => handleOnChangeInputUserInfo("dateOfBirth", event.target.value, formDataCreate, setFormDataCreate, validateInput, setValidateInput)}
                                    Validate={validateInput.dateOfBirth}
                                    ErrorEmpty={ERROR_STATUS_EMPTY.EIGHT}
                                    ErrorSyntax={ERROR_STATUS_SYNTAX.EIGHT}
                                />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container item spacing={2} className='gird-row'>
                            <Grid item xs={4}>
                                <Grid item xs={12}>
                                    <Input
                                        label={"Số căn cước công dân"}
                                        type={"text"}
                                        value={formDataCreate?.citizenIdentificationNumber}
                                        FuntionOnchange={(event) => handleOnChangeInputUserInfo("citizenIdentificationNumber", event.target.value, formDataCreate, setFormDataCreate, validateInput, setValidateInput)}
                                        Validate={validateInput.citizenIdentificationNumber}
                                        ErrorEmpty={ERROR_STATUS_EMPTY.NIGHT}
                                        ErrorSyntax={ERROR_STATUS_SYNTAX.NIGHT}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={4} >
                                <Input
                                    label={"Ngày cấp"}
                                    type={"date"}
                                    value={formDataCreate.dateOfIssuanceCard ? moment(formDataCreate?.dateOfIssuanceCard).format("YYYY-MM-DD") : ""}
                                    FuntionOnchange={(event) => handleOnChangeInputUserInfo("dateOfIssuanceCard", event.target.value, formDataCreate, setFormDataCreate, validateInput, setValidateInput)}
                                    Validate={validateInput.dateOfIssuanceCard}
                                    ErrorEmpty={ERROR_STATUS_EMPTY.TEN}
                                    ErrorSyntax={ERROR_STATUS_SYNTAX.TEN}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Input
                                    label={"Nơi cấp"}
                                    type={"text"}
                                    value={formDataCreate?.placeOfIssueCard}
                                    FuntionOnchange={(event) => handleOnChangeInputUserInfo("placeOfIssueCard", event.target.value, formDataCreate, setFormDataCreate, validateInput, setValidateInput)}
                                    Validate={validateInput.placeOfIssueCard}
                                    ErrorEmpty={ERROR_STATUS_EMPTY.ELEVEN}
                                />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container item spacing={2} className='gird-row'>
                            <Grid item xs={6}>
                                <Input
                                    label={"Dân tộc"}
                                    type={"text"}
                                    value={formDataCreate?.ethnic}
                                    FuntionOnchange={(event) => handleOnChangeInputUserInfo("ethnic", event.target.value, formDataCreate, setFormDataCreate, validateInput, setValidateInput)}
                                    Validate={validateInput.ethnic}
                                    ErrorEmpty={ERROR_STATUS_EMPTY.TWELVE}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    label={"Tôn giáo"}
                                    type={"text"}
                                    value={formDataCreate?.religion}
                                    FuntionOnchange={(event) => handleOnChangeInputUserInfo("religion", event.target.value, formDataCreate, setFormDataCreate, validateInput, setValidateInput)}
                                    Validate={validateInput.religion}
                                    ErrorEmpty={ERROR_STATUS_EMPTY.THIRTEEN}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div >
    );
}

export default CreateEmployeeInfomationDialog