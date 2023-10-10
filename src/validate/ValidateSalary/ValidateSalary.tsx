import { ERROR_CODE } from "../../page/ShareComponent/Constants/StatusCode"
import moment from "moment"

export const ValidateDataIncreateSalary = (dataSalaryIncrease, validateSalaryIncrease, setValidateSalaryIncrease) => {
    let check = true
    if (!dataSalaryIncrease["oldSalary"] && !dataSalaryIncrease["newSalary"] && !dataSalaryIncrease["reason"]) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, reason: ERROR_CODE.EMPTY, oldSalary: ERROR_CODE.EMPTY, newSalary: ERROR_CODE.EMPTY })
        return false
    }

    if (moment(dataSalaryIncrease["startDate"]).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, startDate: ERROR_CODE.SYNTAX })
        return false
    }
    if (!dataSalaryIncrease["reason"]) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, reason: ERROR_CODE.EMPTY })
        return false
    }
    if (dataSalaryIncrease["reason"].length > 255) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, reason: ERROR_CODE.EMPTY })
        return false
    }
    if (!dataSalaryIncrease["oldSalary"]) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: ERROR_CODE.EMPTY })
        return false
    }
    if (!dataSalaryIncrease["newSalary"]) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: ERROR_CODE.EMPTY })
        return false
    }
    if (dataSalaryIncrease["oldSalary"].length > 10) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: ERROR_CODE.SYNTAX })
        return false
    }
    if (dataSalaryIncrease["newSalary"].length > 10) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: ERROR_CODE.SYNTAX })
        return false
    }
    if (Math.floor(dataSalaryIncrease["newSalary"]) < Math.floor(dataSalaryIncrease["oldSalary"])) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: ERROR_CODE.SYNTAX })
        return false
    }
    if (Math.floor(dataSalaryIncrease["newSalary"]) === Math.floor(dataSalaryIncrease["oldSalary"])) {
        setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: ERROR_CODE.SYNTAX })
        return false
    }
    return check
}

export const ValidateInputSalaryIncreate = (name: string, value: any, dataSalaryIncrease, setDataSalaryIncrease, validateSalaryIncrease, setValidateSalaryIncrease) => {
    if (name == "oldSalary") {
        setDataSalaryIncrease({ ...dataSalaryIncrease, oldSalary: value })
        if (value.length > 9) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: ERROR_CODE.SYNTAX })
        }
        if (value.length < 9) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: "" })
        }
        if (dataSalaryIncrease["newSalary"] > 0 && Math.floor(value) > Math.floor(dataSalaryIncrease["newSalary"])) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: ERROR_CODE.SYNTAX })
        }
        if (dataSalaryIncrease["newSalary"] && Math.floor(value) == Math.floor(dataSalaryIncrease["newSalary"])) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: ERROR_CODE.SYNTAX })
        }
        if (dataSalaryIncrease["newSalary"] > 0 && Math.floor(value) < Math.floor(dataSalaryIncrease["newSalary"])) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: "" })
        }
        if (!value) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, oldSalary: "" })
        }
    }
    if (name == "newSalary") {
        setDataSalaryIncrease({ ...dataSalaryIncrease, newSalary: value })
        if (!dataSalaryIncrease["oldSalary"]) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: ERROR_CODE.SYNTAX })

        } if (value.length > 9) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: ERROR_CODE.SYNTAX })
        }
        if (value.length <= 9) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "" })
        }
        if (Math.floor(value) < Math.floor(dataSalaryIncrease["oldSalary"])) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: ERROR_CODE.SYNTAX })
        }
        if (Math.floor(value) == Math.floor(dataSalaryIncrease["oldSalary"])) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: ERROR_CODE.SYNTAX })
        }
        if (Math.floor(value) > Math.floor(dataSalaryIncrease["oldSalary"])) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "", oldSalary: "" })
        }
        if (!value) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, newSalary: "" })
        }
    }
    if (name == "startDate") {
        setDataSalaryIncrease({ ...dataSalaryIncrease, startDate: value })
        if (new Date(value).getTime() < new Date().getTime()) {
            setValidateSalaryIncrease({ ...validateSalaryIncrease, startDate: ERROR_CODE.SYNTAX })
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
        if (value.length > 255) setValidateSalaryIncrease({ ...validateSalaryIncrease, reason: ERROR_CODE.EMPTY })
    }
}