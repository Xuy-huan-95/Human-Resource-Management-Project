import { ERROR_CODE } from "../../page/ShareComponent/Constants/StatusCode"
import moment from "moment"

export const validateDataDataSendToLeader = (dataSubmit, initDataSendtoLeader, validate, setValidate) => {
    let check = true
    if (JSON.stringify(dataSubmit) == JSON.stringify(initDataSendtoLeader)) {
        setValidate({ ...validate, leaderId: ERROR_CODE.EMPTY, SubmitDay: ERROR_CODE.EMPTY, note: ERROR_CODE.EMPTY })
        return false
    }
    if (!dataSubmit['leaderId']) {
        setValidate({ ...validate, leaderId: ERROR_CODE.EMPTY })
        return false
    }
    if (!dataSubmit['SubmitDay']) {
        setValidate({ ...validate, SubmitDay: ERROR_CODE.SYNTAX })
        return false
    }
    if (!dataSubmit['note']) {
        setValidate({ ...validate, note: ERROR_CODE.EMPTY })
        return false
    }
    if (dataSubmit['note'].length > 255) {
        setValidate({ ...validate, note: ERROR_CODE.EMPTY })
        return false
    }
    if (moment(dataSubmit['SubmitDay']).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
        setValidate({ ...validate, SubmitDay: ERROR_CODE.SYNTAX })
        return false
    }
    return check
}