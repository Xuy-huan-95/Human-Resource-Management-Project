import moment from "moment";
import { ERROR_CODE } from "../../page/ShareComponent/Constants/StatusCode"

export const validateDataEndCode = (DataEnd, validate, setValidate) => {
    let check = true
    if (moment(DataEnd["decisionDay"]).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
        setValidate({ ...validate, decisionDay: ERROR_CODE.EMPTY })

    }
    if (!DataEnd["numberSaved"]) {
        setValidate({ ...validate, numberSaved: ERROR_CODE.EMPTY })
        return false
    }
    if (DataEnd["numberSaved"].length > 3) {
        setValidate({ ...validate, numberSaved: ERROR_CODE.EMPTY })
        return false
    }

    return check
}
