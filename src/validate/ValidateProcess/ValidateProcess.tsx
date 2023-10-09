import { ERROR_CODE } from "../../page/ShareComponent/Constants/StatusCode"
import moment from "moment"

export const validateModalProcess = (dataProces, initProcesInfo, validate, setValidate) => {
    let check = true
    if (JSON.stringify(dataProces) == JSON.stringify(initProcesInfo)) {
        setValidate({ ...validate, newPosition: ERROR_CODE.EMPTY, promotionDay: ERROR_CODE.EMPTY })
        return false
    }
    if (!dataProces["newPosition"]) {
        setValidate({ ...validate, newPosition: ERROR_CODE.EMPTY })
        return false
    }
    if (moment(dataProces["promotionDay"]).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
        setValidate({ ...validate, promotionDay: ERROR_CODE.SYNTAX })
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
        if (moment(value).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
            setValidate({ ...validate, promotionDay: ERROR_CODE.SYNTAX })
        }
        if (moment(value).format("DD/MM/YYYY") > moment(new Date()).format("DD/MM/YYYY")) {
            setValidate({ ...validate, promotionDay: "" })
        }
        if (moment(value).format("DD/MM/YYYY") == moment(new Date()).format("DD/MM/YYYY")) {
            setValidate({ ...validate, promotionDay: "" })
        }
    }
}