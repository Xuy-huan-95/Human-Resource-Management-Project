import { ERROR_CODE } from "../../page/ShareComponent/Constants/StatusCode"
import { regx } from "../RegxValidate/RegxValidate"
import { regxPhone } from '../RegxValidate/RegxValidate'
import { regxName } from "../RegxValidate/RegxValidate"

export const validateUseRelative = (initRelativeInfo, fammilyData, validateFammilyData, setValidateFammilyData) => {
    let check = true
    if (JSON.stringify(fammilyData) === JSON.stringify(initRelativeInfo)) {
        setValidateFammilyData({
            ...validateFammilyData, name: ERROR_CODE.EMPTY, dateOfBirth: ERROR_CODE.EMPTY, relationShip: ERROR_CODE.EMPTY, gender: ERROR_CODE.EMPTY, email: ERROR_CODE.EMPTY,
            phoneNumber: ERROR_CODE.EMPTY, citizenIdentificationNumber: ERROR_CODE.EMPTY, address: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!fammilyData["name"]) {
        setValidateFammilyData({
            ...validateFammilyData, name: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!fammilyData["dateOfBirth"]) {
        setValidateFammilyData({
            ...validateFammilyData, dateOfBirth: ERROR_CODE.EMPTY
        })
        return false
    }

    if (!fammilyData["relationShip"]) {
        setValidateFammilyData({
            ...validateFammilyData, relationShip: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!fammilyData["gender"]) {
        setValidateFammilyData({
            ...validateFammilyData, gender: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!fammilyData["email"]) {
        setValidateFammilyData({
            ...validateFammilyData, email: ERROR_CODE.EMPTY
        })
        return false
    }

    if (!fammilyData["phoneNumber"]) {
        setValidateFammilyData({
            ...validateFammilyData, phoneNumber: ERROR_CODE.EMPTY
        })
        return false
    }

    if (!fammilyData["citizenIdentificationNumber"]) {
        setValidateFammilyData({
            ...validateFammilyData, citizenIdentificationNumber: ERROR_CODE.EMPTY
        })
        return false
    }

    if (!fammilyData["address"]) {
        setValidateFammilyData({
            ...validateFammilyData, address: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!regxName.test(fammilyData["name"])) {

        setValidateFammilyData({
            ...validateFammilyData, name: ERROR_CODE.SYNTAX
        })
        return false
    }
    if (new Date().getFullYear() - new Date(fammilyData["dateOfBirth"]).getFullYear() < 18) {
        setValidateFammilyData({
            ...validateFammilyData, dateOfBirth: ERROR_CODE.SYNTAX
        })
        return false
    }
    if (!regx.test(fammilyData["email"])) {
        setValidateFammilyData({
            ...validateFammilyData, email: ERROR_CODE.SYNTAX
        })
        return false
    }
    if (!regxPhone.test(fammilyData["phoneNumber"])) {
        setValidateFammilyData({
            ...validateFammilyData, phoneNumber: ERROR_CODE.SYNTAX
        })
        return false
    }
    if (fammilyData["citizenIdentificationNumber"].length < 9 || fammilyData["citizenIdentificationNumber"].length > 12) {
        setValidateFammilyData({
            ...validateFammilyData, citizenIdentificationNumber: ERROR_CODE.SYNTAX
        })
        return false
    }
    return check

}

export const handleOnChangeInputUserRelative = (name: string, value: any, fammilyData, setFammilyData, validateFammilyData, setValidateFammilyData) => {
    if (name == "name") {
        setFammilyData({ ...fammilyData, name: value })
        if (value && /^([^0-9]*)$/.test(value)) setValidateFammilyData({ ...validateFammilyData, name: "" })
        if (value && !/^([^0-9]*)$/.test(value)) setValidateFammilyData({ ...validateFammilyData, name: ERROR_CODE.SYNTAX })
        if (!value) setValidateFammilyData({ ...validateFammilyData, name: "" })
    }
    if (name == "dateOfBirth") {
        setFammilyData({ ...fammilyData, dateOfBirth: value })
        if (new Date().getFullYear() - new Date(value).getFullYear() < 18) setValidateFammilyData({ ...validateFammilyData, dateOfBirth: ERROR_CODE.SYNTAX })
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
        if (!value.includes("@gmail.com")) setValidateFammilyData({ ...validateFammilyData, email: ERROR_CODE.SYNTAX })
        if (value.includes("@gmail.com")) setValidateFammilyData({ ...validateFammilyData, email: "" })
        if (!value) setValidateFammilyData({ ...validateFammilyData, email: "" })
    }
    if (name == "phoneNumber") {
        setFammilyData({ ...fammilyData, phoneNumber: value })
        if (value.length < 10 || value.length > 10) setValidateFammilyData({ ...validateFammilyData, phoneNumber: ERROR_CODE.SYNTAX })
        if (value.length == 10) setValidateFammilyData({ ...validateFammilyData, phoneNumber: "" })
        if (!value) setValidateFammilyData({ ...validateFammilyData, phoneNumber: "" })
    }
    if (name == "citizenIdentificationNumber") {
        setFammilyData({ ...fammilyData, citizenIdentificationNumber: value })
        if (value.length < 9 || value.length > 13) setValidateFammilyData({ ...validateFammilyData, citizenIdentificationNumber: ERROR_CODE.SYNTAX })
        if (value.length > 9 && value.length < 13) setValidateFammilyData({ ...validateFammilyData, citizenIdentificationNumber: "" })
        if (!value) setValidateFammilyData({ ...validateFammilyData, citizenIdentificationNumber: "" })
    }
    if (name == "address") {
        setFammilyData({ ...fammilyData, address: value })
        if (value) setValidateFammilyData({ ...validateFammilyData, address: "" })
        if (!value) setValidateFammilyData({ ...validateFammilyData, address: "" })
    }

}