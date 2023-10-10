import moment from "moment";
import { ERROR_CODE } from "../../page/ShareComponent/Constants/StatusCode"

export const ValidateDataApprove = (data, validateApproveData, setValidateApproveData, actionApprove) => {
    let check = true
    if (actionApprove == "User-Approve" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: ERROR_CODE.EMPTY })
        return false
    }
    if (actionApprove == "End-Approve" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: ERROR_CODE.EMPTY })
        return false
    }
    if (actionApprove == "Salary-Approve" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: ERROR_CODE.EMPTY })
        return false
    }
    if (actionApprove == "Process-Approve" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: ERROR_CODE.EMPTY })
        return false
    }
    if (actionApprove == "proposal-Approve" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: ERROR_CODE.EMPTY })
        return false
    }
    if (actionApprove == "Refuse-Document_access" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: ERROR_CODE.EMPTY })
        return false
    }
    if (actionApprove == "Refuse" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: ERROR_CODE.EMPTY })
        return false
    }
    if (actionApprove == "Refuse-Document_salary" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: ERROR_CODE.EMPTY })
        return false
    }
    if (actionApprove == "Refuse-Document_process" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: ERROR_CODE.EMPTY })
        return false
    }
    if (actionApprove == "Refuse-Document_Proposal" && !data['time']) {
        setValidateApproveData({ ...validateApproveData, time: ERROR_CODE.EMPTY })
        return false
    }
    if (moment(data['time']).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
        setValidateApproveData({ ...validateApproveData, time: ERROR_CODE.EMPTY })
        return false
    }
    if (actionApprove !== "User-Approve" && actionApprove !== "End-Approve" && actionApprove !== "Salary-Approve"
        && actionApprove !== "Process-Approve" && actionApprove !== "proposal-Approve" && !data['need']) {
        setValidateApproveData({ ...validateApproveData, need: ERROR_CODE.EMPTY })
        return false
    }
    return check
}