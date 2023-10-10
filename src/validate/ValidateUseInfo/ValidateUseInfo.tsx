import { ERROR_CODE } from "../../page/ShareComponent/Constants/StatusCode"
import { regx } from "../RegxValidate/RegxValidate"
import { regxPhone } from '../RegxValidate/RegxValidate'
import { regxName } from "../RegxValidate/RegxValidate"
import { year } from "../RegxValidate/RegxValidate"

export const validateUseInfo = (currentState, updateState, validate, setValidate) => {
    let check = true
    let result = updateState["code"].split("")


    if (JSON.stringify(updateState) === JSON.stringify(currentState)) {
        setValidate({
            ...validate, name: ERROR_CODE.EMPTY, code: ERROR_CODE.EMPTY, gender: ERROR_CODE.EMPTY, dateOfBirth: ERROR_CODE.EMPTY, address: ERROR_CODE.EMPTY,
            team: ERROR_CODE.EMPTY, email: ERROR_CODE.EMPTY, phone: ERROR_CODE.EMPTY, ethnic: ERROR_CODE.EMPTY, religion: ERROR_CODE.EMPTY, dateOfIssuanceCard: ERROR_CODE.EMPTY,
            placeOfIssueCard: ERROR_CODE.EMPTY, citizenIdentificationNumber: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!updateState["name"]) {
        setValidate({
            ...validate, name: ERROR_CODE.EMPTY
        })
        return false
    }
    if (updateState["name"].length > 50) {
        setValidate({
            ...validate, name: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!regxName.test(updateState["name"])) {

        setValidate({
            ...validate, name: ERROR_CODE.SYNTAX
        })
        return false
    }
    if (!updateState["code"]) {
        setValidate({
            ...validate, code: ERROR_CODE.EMPTY
        })
        return false
    }
    if (result.length < 7) {
        setValidate({
            ...validate, code: ERROR_CODE.SYNTAX
        })
        return false
    }
    if (result[0] !== "N" || result[1] !== "V") {
        setValidate({
            ...validate, code: ERROR_CODE.SYNTAX
        })
        return false
    }
    if (result[2] !== year[2] || result[3] !== year[3]) {
        setValidate({
            ...validate, code: ERROR_CODE.SYNTAX
        })
        return false
    }
    if (!updateState["email"]) {
        setValidate({
            ...validate, email: ERROR_CODE.EMPTY
        })
        return false
    }
    if (updateState["email"].length > 255) {
        setValidate({
            ...validate, email: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!updateState["phone"]) {
        setValidate({
            ...validate, phone: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!updateState["address"]) {
        setValidate({
            ...validate, address: ERROR_CODE.EMPTY
        })
        return false
    }
    if (updateState["address"].length > 255) {
        setValidate({
            ...validate, address: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!updateState["gender"]) {
        setValidate({
            ...validate, gender: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!updateState["dateOfBirth"]) {
        setValidate({
            ...validate, dateOfBirth: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!updateState["team"]) {
        setValidate({
            ...validate, team: ERROR_CODE.EMPTY
        })
        return false
    }

    if (!updateState["ethnic"]) {
        setValidate({
            ...validate, ethnic: ERROR_CODE.EMPTY
        })
        return false
    }
    if (updateState["ethnic"].length > 255) {
        setValidate({
            ...validate, ethnic: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!updateState["religion"]) {
        setValidate({
            ...validate, religion: ERROR_CODE.EMPTY
        })
        return false
    }
    if (updateState["religion"].length > 255) {
        setValidate({
            ...validate, religion: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!updateState["dateOfIssuanceCard"]) {
        setValidate({
            ...validate, dateOfIssuanceCard: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!updateState["placeOfIssueCard"]) {
        setValidate({
            ...validate, placeOfIssueCard: ERROR_CODE.EMPTY
        })
        return false
    }
    if (updateState["placeOfIssueCard"].length > 255) {
        setValidate({
            ...validate, placeOfIssueCard: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!updateState["citizenIdentificationNumber"]) {
        setValidate({
            ...validate, citizenIdentificationNumber: ERROR_CODE.EMPTY
        })
        return false
    }
    if (!regx.test(updateState["email"])) {
        setValidate({
            ...validate, email: ERROR_CODE.SYNTAX
        })
        return false
    }
    if (!regxPhone.test(updateState["phone"])) {
        setValidate({
            ...validate, phone: ERROR_CODE.SYNTAX
        })
        return false
    }
    if (updateState["citizenIdentificationNumber"].length < 9 || updateState["citizenIdentificationNumber"].length > 12) {
        setValidate({
            ...validate, citizenIdentificationNumber: ERROR_CODE.SYNTAX
        })
        return false
    }
    if (new Date().getFullYear() - new Date(updateState["dateOfBirth"]).getFullYear() < 18) {
        setValidate({
            ...validate, dateOfBirth: ERROR_CODE.SYNTAX
        })
        return false
    }

    if (new Date().getTime() < new Date(updateState["dateOfIssuanceCard"]).getTime()) {
        setValidate({
            ...validate, dateOfIssuanceCard: ERROR_CODE.SYNTAX
        })
        return false
    }
    return check

}

export const handleOnChangeInputUserInfo = (name: string, value: any, formUpdate, setformUpdate, validateInput, setValidateInput) => {
    if (name == "name") {
        setformUpdate({ ...formUpdate, name: value })
        if (value && /^([^0-9]*)$/.test(value)) setValidateInput({ ...validateInput, name: "" })
        if (value && !/^([^0-9]*)$/.test(value)) setValidateInput({ ...validateInput, name: ERROR_CODE.SYNTAX })
        if (!value) setValidateInput({ ...validateInput, name: "" })
        if (value.length > 50) setValidateInput({ ...validateInput, name: ERROR_CODE.EMPTY })

    }
    if (name == "code") {
        setformUpdate({ ...formUpdate, code: value })
        if (value && value.split("").length == 7) setValidateInput({ ...validateInput, code: "" })
        if (value && value.split("").length > 7 || value.split("").length > 1 && value.split("").length < 7) setValidateInput({ ...validateInput, code: ERROR_CODE.SYNTAX })
        if (value.split("")[0] == "n" && value.split("")[1] == "v") setValidateInput({ ...validateInput, code: ERROR_CODE.SYNTAX })
        if (value.split("")[2] !== ERROR_CODE.SYNTAX) setValidateInput({ ...validateInput, code: ERROR_CODE.SYNTAX })
        if (value.split("")[3] !== ERROR_CODE.OTHER) setValidateInput({ ...validateInput, code: ERROR_CODE.SYNTAX })
        if (!value) setValidateInput({ ...validateInput, code: "" })
    }
    if (name == "email") {
        setformUpdate({ ...formUpdate, email: value })
        if (!value.includes("@gmail.com")) setValidateInput({ ...validateInput, email: ERROR_CODE.SYNTAX })
        if (value.includes("@gmail.com")) setValidateInput({ ...validateInput, email: "" })
        if (!value) setValidateInput({ ...validateInput, email: "" })
        if (value.length > 255) setValidateInput({ ...validateInput, email: ERROR_CODE.EMPTY })

    }
    if (name == "phone") {
        setformUpdate({ ...formUpdate, phone: value })
        if (value.length < 10 || value.length > 10) setValidateInput({ ...validateInput, phone: ERROR_CODE.SYNTAX })
        if (value.length == 10) setValidateInput({ ...validateInput, phone: "" })
        if (!value) setValidateInput({ ...validateInput, phone: "" })
    }
    if (name == "address") {
        setformUpdate({ ...formUpdate, address: value })
        if (value) setValidateInput({ ...validateInput, address: "" })
        if (!value) setValidateInput({ ...validateInput, address: "" })
        if (value.length > 255) setValidateInput({ ...validateInput, address: "1" })

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
        if (value.length < 9 || value.length > 13) setValidateInput({ ...validateInput, citizenIdentificationNumber: ERROR_CODE.SYNTAX })
        if (value.length > 9 && value.length < 13) setValidateInput({ ...validateInput, citizenIdentificationNumber: "" })
        if (!value) setValidateInput({ ...validateInput, citizenIdentificationNumber: "" })
    }
    if (name == "dateOfBirth") {
        setformUpdate({ ...formUpdate, dateOfBirth: value })
        if (new Date().getFullYear() - new Date(value).getFullYear() < 18) setValidateInput({ ...validateInput, dateOfBirth: ERROR_CODE.SYNTAX })
        if (new Date().getFullYear() - new Date(value).getFullYear() > 18) setValidateInput({ ...validateInput, dateOfBirth: "" })
        if (new Date().getFullYear() - new Date(value).getFullYear() == 18) setValidateInput({ ...validateInput, dateOfBirth: "" })
        if (!value) setValidateInput({ ...validateInput, dateOfBirth: "" })
    }
    if (name == "dateOfIssuanceCard") {
        setformUpdate({ ...formUpdate, dateOfIssuanceCard: value })
        if (new Date().getTime() < new Date(value).getTime()) setValidateInput({ ...validateInput, dateOfIssuanceCard: ERROR_CODE.SYNTAX })
        if (new Date().getTime() > new Date(value).getTime()) setValidateInput({ ...validateInput, dateOfIssuanceCard: "0" })
        if (!value) setValidateInput({ ...validateInput, dateOfIssuanceCard: "" })
    }
    if (name == "placeOfIssueCard") {
        setformUpdate({ ...formUpdate, placeOfIssueCard: value })
        if (value) setValidateInput({ ...validateInput, placeOfIssueCard: "" })
        if (!value) setValidateInput({ ...validateInput, placeOfIssueCard: "" })
        if (value.length > 255) setValidateInput({ ...validateInput, placeOfIssueCard: ERROR_CODE.EMPTY })
    }
    if (name == "ethnic") {
        setformUpdate({ ...formUpdate, ethnic: value })
        if (value) setValidateInput({ ...validateInput, ethnic: "" })
        if (!value) setValidateInput({ ...validateInput, ethnic: "" })
        if (value.length > 255) setValidateInput({ ...validateInput, ethnic: ERROR_CODE.EMPTY })
    }
    if (name == "religion") {
        setformUpdate({ ...formUpdate, religion: value })
        if (value) setValidateInput({ ...validateInput, religion: "" })
        if (!value) setValidateInput({ ...validateInput, religion: "" })
        if (value.length > 255) setValidateInput({ ...validateInput, religion: ERROR_CODE.EMPTY })

    }
}