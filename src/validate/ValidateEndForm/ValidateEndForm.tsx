
import { toast } from "react-toastify"
import moment from "moment"

export const validateEndForm = (DataEnd) => {
    let check = true
    if (!DataEnd["endDay"]) {
        toast.error("Bạn vui lòng không để trống ngày nghỉ")
        return false
    }
    if (moment(DataEnd["endDay"]).format("DD/MM/YYYY") == moment(new Date()).format("DD/MM/YYYY")) {
        toast.error("Ngày bạn muốn nghỉ phải sau ngày hiện tại ")
        return false
    }
    if (moment(DataEnd["endDay"]).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
        toast.error("Ngày bạn muốn nghỉ phải sau ngày hiện tại ")
        return false
    }
    if (!DataEnd["reasonForEnding"]) {
        toast.error("Bạn vui lòng không để trống lý do nghỉ")
        return false
    }
    return check
}
