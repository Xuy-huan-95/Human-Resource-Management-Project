import { toast } from "react-toastify";
import moment from "moment";

export const validateUseInfo = (currentState, updateState, validate, setValidate) => {
    let check = true
    let result = updateState["code"].split("")
    let regx = /\S+@\S+\.\S+/;
    let regxPhone = /^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/;
    let regxName = /^([^0-9]*)$/;

    if (JSON.stringify(updateState) === JSON.stringify(currentState)) {
        setValidate({
            ...validate, name: "1", code: "1", gender: "1", dateOfBirth: "1", address: "1",
            team: "1", email: "1", phone: "1", ethnic: "1", religion: "1", dateOfIssuanceCard: "1",
            placeOfIssueCard: "1", citizenIdentificationNumber: "1"
        })
        return false
    }
    if (!updateState["name"]) {
        setValidate({
            ...validate, name: "1"
        })
        return false
    }
    if (!regxName.test(updateState["name"])) {

        setValidate({
            ...validate, name: "2"
        })
        return false
    }
    if (!updateState["code"]) {
        setValidate({
            ...validate, code: "1"
        })
        return false
    }
    if (result.length < 7) {
        setValidate({
            ...validate, code: "2"
        })
        return false
    }
    if (result[0] !== "N" || result[1] !== "V") {
        setValidate({
            ...validate, code: "2"
        })
        return false
    }
    if (result[2] !== "2" || result[3] !== "3") {
        setValidate({
            ...validate, code: "2"
        })
        return false
    }
    if (!updateState["email"]) {
        setValidate({
            ...validate, email: "1"
        })
        return false
    }
    if (!updateState["phone"]) {
        setValidate({
            ...validate, phone: "1"
        })
        return false
    }
    if (!updateState["address"]) {
        setValidate({
            ...validate, address: "1"
        })
        return false
    }
    if (!updateState["gender"]) {
        setValidate({
            ...validate, gender: "1"
        })
        return false
    }
    if (!updateState["dateOfBirth"]) {
        setValidate({
            ...validate, dateOfBirth: "1"
        })
        return false
    }
    if (!updateState["team"]) {
        setValidate({
            ...validate, team: "1"
        })
        return false
    }

    if (!updateState["ethnic"]) {
        setValidate({
            ...validate, ethnic: "1"
        })
        return false
    }
    if (!updateState["religion"]) {
        setValidate({
            ...validate, religion: "1"
        })
        return false
    }
    if (!updateState["dateOfIssuanceCard"]) {
        setValidate({
            ...validate, dateOfIssuanceCard: "1"
        })
        return false
    }
    if (!updateState["placeOfIssueCard"]) {
        setValidate({
            ...validate, placeOfIssueCard: "1"
        })
        return false
    }
    if (!updateState["citizenIdentificationNumber"]) {
        setValidate({
            ...validate, citizenIdentificationNumber: "1"
        })
        return false
    }
    if (!regx.test(updateState["email"])) {
        setValidate({
            ...validate, email: "2"
        })
        return false
    }
    if (!regxPhone.test(updateState["phone"])) {
        setValidate({
            ...validate, phone: "2"
        })
        return false
    }
    if (updateState["citizenIdentificationNumber"].length < 9 || updateState["citizenIdentificationNumber"].length > 12) {
        setValidate({
            ...validate, citizenIdentificationNumber: "2"
        })
        return false
    }
    if (new Date().getFullYear() - new Date(updateState["dateOfBirth"]).getFullYear() < 18) {
        setValidate({
            ...validate, dateOfBirth: "2"
        })
        return false
    }
    if (new Date().getTime() < new Date(updateState["dateOfIssuanceCard"]).getTime()) {
        setValidate({
            ...validate, dateOfIssuanceCard: "2"
        })
        return false
    }
    return check

}

export const handleOnChangeInputUserInfo = (name: string, value: any, formUpdate, setformUpdate, validateInput, setValidateInput) => {
    if (name == "name") {
        setformUpdate({ ...formUpdate, name: value })
        if (value && /^([^0-9]*)$/.test(value)) setValidateInput({ ...validateInput, name: "" })
        if (value && !/^([^0-9]*)$/.test(value)) setValidateInput({ ...validateInput, name: "2" })
        if (!value) setValidateInput({ ...validateInput, name: "" })
    }
    if (name == "code") {
        setformUpdate({ ...formUpdate, code: value })
        if (value && value.split("").length == 7) setValidateInput({ ...validateInput, code: "" })
        if (value && value.split("").length > 7 || value.split("").length > 1 && value.split("").length < 7) setValidateInput({ ...validateInput, code: "2" })
        if (value.split("")[0] == "n" && value.split("")[1] == "v") setValidateInput({ ...validateInput, code: "2" })
        if (value.split("")[2] !== "2") setValidateInput({ ...validateInput, code: "2" })
        if (value.split("")[3] !== "3") setValidateInput({ ...validateInput, code: "2" })
        if (!value) setValidateInput({ ...validateInput, code: "" })
    }
    if (name == "email") {
        setformUpdate({ ...formUpdate, email: value })
        if (!value.includes("@gmail.com")) setValidateInput({ ...validateInput, email: "2" })
        if (value.includes("@gmail.com")) setValidateInput({ ...validateInput, email: "" })
        if (!value) setValidateInput({ ...validateInput, email: "" })
    }
    if (name == "phone") {
        setformUpdate({ ...formUpdate, phone: value })
        if (value.length < 10 || value.length > 10) setValidateInput({ ...validateInput, phone: "2" })
        if (value.length == 10) setValidateInput({ ...validateInput, phone: "" })
        if (!value) setValidateInput({ ...validateInput, phone: "" })
    }
    if (name == "address") {
        setformUpdate({ ...formUpdate, address: value })
        if (value) setValidateInput({ ...validateInput, address: "" })
        if (!value) setValidateInput({ ...validateInput, address: "" })
    }
    if (name == "team") {
        setformUpdate({ ...formUpdate, team: value })
        if (value) setValidateInput({ ...validateInput, team: "" })
        if (!value) setValidateInput({ ...validateInput, team: "" })
    }
    if (name == "gender") {
        setformUpdate({ ...formUpdate, gender: value })
        if (value) setValidateInput({ ...validateInput, gender: "" })
        if (!value) setValidateInput({ ...validateInput, gender: "" })
    }
    if (name == "citizenIdentificationNumber") {
        setformUpdate({ ...formUpdate, citizenIdentificationNumber: value })
        if (value.length < 9 || value.length > 13) setValidateInput({ ...validateInput, citizenIdentificationNumber: "2" })
        if (value.length > 9 && value.length < 13) setValidateInput({ ...validateInput, citizenIdentificationNumber: "" })
        if (!value) setValidateInput({ ...validateInput, citizenIdentificationNumber: "" })
    }
    if (name == "dateOfBirth") {
        setformUpdate({ ...formUpdate, dateOfBirth: value })
        if (new Date().getFullYear() - new Date(value).getFullYear() < 18) setValidateInput({ ...validateInput, dateOfBirth: "2" })
        if (new Date().getFullYear() - new Date(value).getFullYear() > 18 || new Date().getFullYear() - new Date(value).getFullYear() == 18) setValidateInput({ ...validateInput, dateOfBirth: "" })
        if (!value) setValidateInput({ ...validateInput, dateOfBirth: "" })
    }
    if (name == "dateOfIssuanceCard") {
        setformUpdate({ ...formUpdate, dateOfIssuanceCard: value })
        if (new Date().getTime() < new Date(value).getTime()) setValidateInput({ ...validateInput, dateOfIssuanceCard: "2" })
        if (new Date().getTime() > new Date(value).getTime()) setValidateInput({ ...validateInput, dateOfIssuanceCard: "0" })
        if (!value) setValidateInput({ ...validateInput, dateOfIssuanceCard: "" })
    }
    if (name == "placeOfIssueCard") {
        setformUpdate({ ...formUpdate, placeOfIssueCard: value })
        if (value) setValidateInput({ ...validateInput, placeOfIssueCard: "" })
        if (!value) setValidateInput({ ...validateInput, placeOfIssueCard: "" })
    }
    if (name == "ethnic") {
        setformUpdate({ ...formUpdate, ethnic: value })
        if (value) setValidateInput({ ...validateInput, ethnic: "" })
        if (!value) setValidateInput({ ...validateInput, ethnic: "" })
    }

    if (name == "religion") {
        setformUpdate({ ...formUpdate, religion: value })
        if (value) setValidateInput({ ...validateInput, religion: "" })
        if (!value) setValidateInput({ ...validateInput, religion: "" })
    }
}

export const validateCertificate = (InitCertificateData, createCertificateData, setCreateCertificateData, validateCertificateData, setValidateCertificateData) => {
    let check = true
    if (JSON.stringify(createCertificateData) === JSON.stringify(InitCertificateData)) {
        setValidateCertificateData({
            ...validateCertificateData,
            certificateName: "1",
            content: "1",
            field: "1",
            issueDate: "1",
        })
        return false
    }
    if (!createCertificateData["certificateName"]) {
        setValidateCertificateData({ ...validateCertificateData, certificateName: "1", })
        return false
    }

    if (!createCertificateData["field"]) {
        setValidateCertificateData({ ...validateCertificateData, field: "1", })
        return false
    }
    if (!createCertificateData["issueDate"]) {
        setValidateCertificateData({ ...validateCertificateData, issueDate: "1", })
        return false
    }
    if (new Date().getTime() < new Date(createCertificateData["issueDate"]).getTime()) {
        setValidateCertificateData({ ...validateCertificateData, issueDate: "2", })

        return false
    }
    if (!createCertificateData["content"]) {
        setValidateCertificateData({ ...validateCertificateData, content: "1", })
        return false
    }
    return check
}

export const handleOnChangeInputCertificateInfo = (name: string, value: any, createCertificateData, setCreateCertificateData, validateCertificateData, setValidateCertificateData) => {
    if (name == "certificateName") {
        setCreateCertificateData({ ...createCertificateData, certificateName: value })
        if (!value) setValidateCertificateData({ ...validateCertificateData, certificateName: "" })
        if (value) setValidateCertificateData({ ...validateCertificateData, certificateName: "" })
    }
    if (name == "field") {
        setCreateCertificateData({ ...createCertificateData, field: value })
        if (!value) setValidateCertificateData({ ...validateCertificateData, field: "" })
        if (value) setValidateCertificateData({ ...validateCertificateData, field: "" })
    }
    if (name == "issueDate") {
        setCreateCertificateData({ ...createCertificateData, issueDate: value })
        if (new Date().getTime() < new Date(value).getTime()) setValidateCertificateData({ ...validateCertificateData, issueDate: "2" })
        if (new Date().getTime() > new Date(value).getTime()) setValidateCertificateData({ ...validateCertificateData, issueDate: "0" })
        if (!value) setValidateCertificateData({ ...validateCertificateData, issueDate: "" })
    }
    if (name == "content") {
        setCreateCertificateData({ ...createCertificateData, content: value })
        if (!value) setValidateCertificateData({ ...validateCertificateData, content: "" })
        if (value) setValidateCertificateData({ ...validateCertificateData, content: "" })
    }
}


export const validateUseRelative = (initRelativeInfo, fammilyData, validateFammilyData, setValidateFammilyData) => {
    let check = true
    let regx = /\S+@\S+\.\S+/;
    let regxPhone = /^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/;
    let regxName = /^([^0-9]*)$/;

    if (JSON.stringify(fammilyData) === JSON.stringify(initRelativeInfo)) {
        setValidateFammilyData({
            ...validateFammilyData, name: "1", dateOfBirth: "1", relationShip: "1", gender: "1", email: "1",
            phoneNumber: "1", citizenIdentificationNumber: "1", address: "1"
        })
        return false
    }
    if (!fammilyData["name"]) {
        setValidateFammilyData({
            ...validateFammilyData, name: "1"
        })
        return false
    }
    if (!fammilyData["dateOfBirth"]) {
        setValidateFammilyData({
            ...validateFammilyData, dateOfBirth: "1"
        })
        return false
    }

    if (!fammilyData["relationShip"]) {
        setValidateFammilyData({
            ...validateFammilyData, relationShip: "1"
        })
        return false
    }
    if (!fammilyData["gender"]) {
        setValidateFammilyData({
            ...validateFammilyData, gender: "1"
        })
        return false
    }
    if (!fammilyData["email"]) {
        setValidateFammilyData({
            ...validateFammilyData, email: "1"
        })
        return false
    }

    if (!fammilyData["phoneNumber"]) {
        setValidateFammilyData({
            ...validateFammilyData, phoneNumber: "1"
        })
        return false
    }

    if (!fammilyData["citizenIdentificationNumber"]) {
        setValidateFammilyData({
            ...validateFammilyData, citizenIdentificationNumber: "1"
        })
        return false
    }

    if (!fammilyData["address"]) {
        setValidateFammilyData({
            ...validateFammilyData, address: "1"
        })
        return false
    }
    if (!regxName.test(fammilyData["name"])) {

        setValidateFammilyData({
            ...validateFammilyData, name: "2"
        })
        return false
    }
    if (new Date().getFullYear() - new Date(fammilyData["dateOfBirth"]).getFullYear() < 18) {
        setValidateFammilyData({
            ...validateFammilyData, dateOfBirth: "2"
        })
        return false
    }
    if (!regx.test(fammilyData["email"])) {
        setValidateFammilyData({
            ...validateFammilyData, email: "2"
        })
        return false
    }
    if (!regxPhone.test(fammilyData["phoneNumber"])) {
        setValidateFammilyData({
            ...validateFammilyData, phoneNumber: "2"
        })
        return false
    }
    if (fammilyData["citizenIdentificationNumber"].length < 9 || fammilyData["citizenIdentificationNumber"].length > 12) {
        setValidateFammilyData({
            ...validateFammilyData, citizenIdentificationNumber: "2"
        })
        return false
    }
    return check

}

export const handleOnChangeInputUserRelative = (name: string, value: any, fammilyData, setFammilyData, validateFammilyData, setValidateFammilyData) => {
    if (name == "name") {
        setFammilyData({ ...fammilyData, name: value })
        if (value && /^([^0-9]*)$/.test(value)) setValidateFammilyData({ ...validateFammilyData, name: "" })
        if (value && !/^([^0-9]*)$/.test(value)) setValidateFammilyData({ ...validateFammilyData, name: "2" })
        if (!value) setValidateFammilyData({ ...validateFammilyData, name: "" })
    }
    if (name == "dateOfBirth") {
        setFammilyData({ ...fammilyData, dateOfBirth: value })
        if (new Date().getFullYear() - new Date(value).getFullYear() < 18) setValidateFammilyData({ ...validateFammilyData, dateOfBirth: "2" })
        if (new Date().getFullYear() - new Date(value).getFullYear() > 18 || new Date().getFullYear() - new Date(value).getFullYear() == 18) setValidateFammilyData({ ...validateFammilyData, dateOfBirth: "" })
        if (!value) setValidateFammilyData({ ...validateFammilyData, dateOfBirth: "" })
    }
    if (name == "relationShip") {
        setFammilyData({ ...fammilyData, relationShip: value })
        if (value) setValidateFammilyData({ ...validateFammilyData, relationShip: "" })
        if (!value) setValidateFammilyData({ ...validateFammilyData, relationShip: "" })
    }
    if (name == "gender") {
        setFammilyData({ ...fammilyData, gender: value })
        if (value) setValidateFammilyData({ ...validateFammilyData, gender: "" })
        if (!value) setValidateFammilyData({ ...validateFammilyData, gender: "" })
    }
    if (name == "email") {
        setFammilyData({ ...fammilyData, email: value })
        if (!value.includes("@gmail.com")) setValidateFammilyData({ ...validateFammilyData, email: "2" })
        if (value.includes("@gmail.com")) setValidateFammilyData({ ...validateFammilyData, email: "" })
        if (!value) setValidateFammilyData({ ...validateFammilyData, email: "" })
    }
    if (name == "phoneNumber") {
        setFammilyData({ ...fammilyData, phoneNumber: value })
        if (value.length < 10 || value.length > 10) setValidateFammilyData({ ...validateFammilyData, phoneNumber: "2" })
        if (value.length == 10) setValidateFammilyData({ ...validateFammilyData, phoneNumber: "" })
        if (!value) setValidateFammilyData({ ...validateFammilyData, phoneNumber: "" })
    }
    if (name == "citizenIdentificationNumber") {
        setFammilyData({ ...fammilyData, citizenIdentificationNumber: value })
        if (value.length < 9 || value.length > 13) setValidateFammilyData({ ...validateFammilyData, citizenIdentificationNumber: "2" })
        if (value.length > 9 && value.length < 13) setValidateFammilyData({ ...validateFammilyData, citizenIdentificationNumber: "" })
        if (!value) setValidateFammilyData({ ...validateFammilyData, citizenIdentificationNumber: "" })
    }
    if (name == "address") {
        setFammilyData({ ...fammilyData, address: value })
        if (value) setValidateFammilyData({ ...validateFammilyData, address: "" })
        if (!value) setValidateFammilyData({ ...validateFammilyData, address: "" })
    }

}

export const ValidateDataIncreateSalary = (dataSalaryIncrease, initIcreateSalary, validateSalaryIncrease, setValidateSalaryIncrease) => {
    let check = true
    if (JSON.stringify(dataSalaryIncrease) === JSON.stringify(initIcreateSalary)) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, reason: "1", note: "1", oldSalary: "1", newSalary: "1" })
        return false
    }

    if (dataSalaryIncrease["startDate"] < moment(new Date()).format("YYYY-MM-DD")) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, startDate: "2" })
        return false
    }
    if (!dataSalaryIncrease["reason"]) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, reason: "1" })
        return false
    }
    if (!dataSalaryIncrease["oldSalary"]) {

        setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: "1" })
        return false
    }
    if (!dataSalaryIncrease["newSalary"]) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: "1" })
        return false
    }
    if (dataSalaryIncrease["oldSalary"].length > 10) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: "2" })
        return false
    }
    if (dataSalaryIncrease["oldSalary"].length == 0) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: "2" })
        return false
    }
    if (dataSalaryIncrease["newSalary"].length > 10) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "2" })
        return false
    }
    if (dataSalaryIncrease["newSalary"].length == 10) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "2" })
        return false
    }

    if (dataSalaryIncrease["newSalary"] == dataSalaryIncrease["oldSalary"] && dataSalaryIncrease["newSalary"].length == dataSalaryIncrease["oldSalary"].length) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "2" })
        return false
    }
    if (dataSalaryIncrease["newSalary"] == dataSalaryIncrease["oldSalary"] && dataSalaryIncrease["newSalary"].length > dataSalaryIncrease["oldSalary"].length) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "" })
        return true
    }
    if (dataSalaryIncrease["newSalary"] > dataSalaryIncrease["oldSalary"] && dataSalaryIncrease["newSalary"].length > dataSalaryIncrease["oldSalary"].length) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "" })
        return true
    }
    if (dataSalaryIncrease["newSalary"] > dataSalaryIncrease["oldSalary"] && dataSalaryIncrease["newSalary"].length == dataSalaryIncrease["oldSalary"].length) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "" })
        return true
    }


    return check
}

export const ValidateInputSalaryIncreate = (name: string, value: any, dataSalaryIncrease, setDataSalaryIncrease, validateSalaryIncrease, setValidateSalaryIncrease) => {
    if (name == "oldSalary") {
        setDataSalaryIncrease({ ...dataSalaryIncrease, oldSalary: value })

        if (value.length > 9) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: "2" })
        }
        if (value.length < 9) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: "" })
        }
        if (!value) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: "" })
        }
    }
    if (name == "newSalary") {
        setDataSalaryIncrease({ ...dataSalaryIncrease, newSalary: value })
        if (!dataSalaryIncrease["oldSalary"]) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "2" })

        } if (value.length > 9) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "2" })
        }
        if (value.length <= 9) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "" })
        }
        if (value < dataSalaryIncrease["oldSalary"] || value === dataSalaryIncrease["oldSalary"] && value.length <= dataSalaryIncrease["oldSalary"].length) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "2" })
        }
        if (value.length > dataSalaryIncrease["oldSalary"].length) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "" })
        }
        if (!value) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "" })
        }
    }
    if (name == "startDate") {
        setDataSalaryIncrease({ ...dataSalaryIncrease, startDate: value })
        if (new Date(value).getTime() < new Date().getTime()) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, startDate: "2" })
        }
        if (new Date(value).getTime() > new Date().getTime()) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, startDate: "" })
        }

        if (!value) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, startDate: "" })
        }
    }
    if (name == "reason") {
        setDataSalaryIncrease({ ...dataSalaryIncrease, reason: value })
        if (!value) setValidateSalaryIncrease({ ...validateSalaryIncrease, reason: "" })
        if (value) setValidateSalaryIncrease({ ...validateSalaryIncrease, reason: "" })

    }
}

export const validateModalProcess = (dataProces, initProcesInfo, validate, setValidate) => {
    let check = true
    if (JSON.stringify(dataProces) == JSON.stringify(initProcesInfo)) {
        setValidate({ ...validate, newPosition: "1", promotionDay: "1" })
        return false
    }
    if (!dataProces["newPosition"]) {
        setValidate({ ...validate, newPosition: "1" })
        return false
    }
    if (moment(dataProces["promotionDay"]).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
        setValidate({ ...validate, promotionDay: "2" })
        return false
    }
    return check
}

export const validateInputProcess = (name: string, value: any, dataProces, setDataProces, validate, setValidate) => {
    if (name == "newPosition") {
        setDataProces({ ...dataProces, newPosition: value })
        if (value) {
            setValidate({ ...validate, newPosition: "" })
        }
    }
    if (name == "promotionDay") {
        setDataProces({ ...dataProces, promotionDay: value })
        if (new Date(value).getTime() < new Date().getTime()) {
            setValidate({ ...validate, promotionDay: "2" })
        }
        if (new Date(value).getTime() > new Date().getTime()) {
            setValidate({ ...validate, promotionDay: "" })
        }

    }
}

export const validateEndForm = (DataEnd) => {
    let check = true
    if (!DataEnd["endDay"]) {
        toast.error("Bạn vui lòng không để trống ngày nghỉ")
        return false
    }
    if (!DataEnd["reasonForEnding"]) {
        toast.error("Bạn vui lòng không để trống lý do nghỉ")
        return false
    }
    return check
}
export const validateProposalModal = (dataProposal, initProposal, validate, setValidate) => {
    let check = true
    if (JSON.stringify(dataProposal) == JSON.stringify(initProposal)) {
        setValidate({ ...validate, content: "1", type: "1", detailedDescription: "1" })
        return false
    }
    if (!dataProposal["content"]) {
        setValidate({ ...validate, content: "1" })
        return false
    }

    if (!dataProposal["type"]) {
        setValidate({ ...validate, type: "1" })
        return false
    }
    if (!dataProposal["detailedDescription"]) {
        setValidate({ ...validate, detailedDescription: "1" })
        return false
    }
    if (moment(dataProposal["proposalDate"]).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
        setValidate({ ...validate, proposalDate: "2" })
        return false
    }
    return check
}

export const ValidateOnChangeInputProposal = (name: string, value: any, dataProposal, setDataProposal, validate, setValidate) => {
    if (name == "proposalDate") {
        setDataProposal({ ...dataProposal, proposalDate: value })
        if (value) {
            setValidate({ ...validate, proposalDate: "" })
        }
        if (!value) {
            setValidate({ ...validate, proposalDate: "1" })
        }
        if (new Date(value).getTime() < new Date().getTime()) {
            setValidate({ ...validate, proposalDate: "2" })

        }
    }
    if (name == "type") {
        setDataProposal({ ...dataProposal, type: value })

        if (!value) {
            setValidate({ ...validate, type: "1" })
        }
        if (value) {
            setValidate({ ...validate, type: "" })
        }
    }
    if (name == "content") {
        setDataProposal({ ...dataProposal, content: value })

        if (!value) {
            setValidate({ ...validate, content: "1" })
        }
        if (value) {
            setValidate({ ...validate, content: "" })
        }
    }
    if (name == "detailedDescription") {
        setDataProposal({ ...dataProposal, detailedDescription: value })
        if (!value) {
            setValidate({ ...validate, detailedDescription: "1" })
        }
        if (value) {
            setValidate({ ...validate, detailedDescription: "" })
        }
    }
}

export const validateDataExperience = (experience, initStateExperience, validate, setValidate) => {
    let check = true
    if (JSON.stringify(experience) == JSON.stringify(initStateExperience)) {
        setValidate({ ...validate, startDate: "1", endDate: "1", companyName: "1", companyAddress: "1", jobDescription: "1" })
        return false
    }
    if (!experience["startDate"]) {
        setValidate({ ...validate, startDate: "1" })
        return false
    }

    if (!experience["endDate"]) {
        setValidate({ ...validate, endDate: "1" })
        return false
    }

    if (!experience["companyName"]) {
        setValidate({ ...validate, companyName: "1" })
        return false
    }

    if (!experience["companyAddress"]) {
        setValidate({ ...validate, companyAddress: "1" })
        return false
    }

    if (!experience["jobDescription"]) {
        setValidate({ ...validate, jobDescription: "1" })
        return false
    }


    if (new Date(experience["startDate"]).getTime() > new Date(experience["endDate"]).getTime()) {
        setValidate({ ...validate, endDate: "2" })
        return false
    }
    return check
}

export const validateDataDataSendToLeader = (dataSubmit, initDataSendtoLeader, validate, setValidate) => {
    let check = true
    if (JSON.stringify(dataSubmit) == JSON.stringify(initDataSendtoLeader)) {
        setValidate({ ...validate, leaderId: "1", SubmitDay: "1", note: "1" })
        return false
    }
    if (!dataSubmit['leaderId']) {
        setValidate({ ...validate, leaderId: "1" })
        return false
    }
    if (!dataSubmit['SubmitDay']) {
        setValidate({ ...validate, SubmitDay: "2" })
        return false
    }
    if (!dataSubmit['note']) {
        setValidate({ ...validate, SubmitDay: "1" })
        return false
    }

    if (moment(dataSubmit['SubmitDay']).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
        setValidate({ ...validate, SubmitDay: "2" })
        return false

    }
    return check
}


export const validateDataEndCode = (DataEnd, validate, setValidate) => {
    let check = true
    if (moment(DataEnd["decisionDay"]).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
        setValidate({ ...validate, decisionDay: "1" })

    }
    if (!DataEnd["numberSaved"]) {
        setValidate({ ...validate, numberSaved: "1" })
        return false
    }
    if (DataEnd["numberSaved"].length > 3) {
        setValidate({ ...validate, numberSaved: "1" })
        return false
    }

    return check
}

export const validateData = (data, validateApproveData, setValidateApproveData, actionApprove) => {
    let check = true
    if (actionApprove == "User-Approve" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: "1" })
        return false
    }
    if (actionApprove == "End-Approve" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: "1" })
        return false
    }
    if (actionApprove == "Salary-Approve" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: "1" })
        return false
    }
    if (actionApprove == "Process-Approve" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: "1" })
        return false
    }
    if (actionApprove == "proposal-Approve" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: "1" })
        return false
    }
    if (actionApprove == "Refuse-Document_access" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: "1" })
        return false
    }
    if (actionApprove == "Refuse" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: "1" })
        return false
    }
    if (actionApprove == "Refuse-Document_salary" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: "1" })
        return false
    }
    if (actionApprove == "Refuse-Document_process" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: "1" })
        return false
    }
    if (actionApprove == "Refuse-Document_Proposal" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: "1" })
        return false
    }
    if (moment(data['time']).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
        setValidateApproveData({ ...validateApproveData, time: "1" })
        return false
    }
    if (actionApprove !== "User-Approve" && actionApprove !== "End-Approve" && actionApprove !== "Salary-Approve"
        && actionApprove !== "Process-Approve" && actionApprove !== "proposal-Approve" && !data['need']) {
        setValidateApproveData({ ...validateApproveData, need: "1" })
        return false

    }
    return check
}