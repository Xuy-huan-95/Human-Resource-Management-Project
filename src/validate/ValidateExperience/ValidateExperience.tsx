import { ERROR_CODE } from "../../page/ShareComponent/Constants/StatusCode"


export const validateDataExperience = (experience, initStateExperience, validate, setValidate) => {
    let check = true
    console.log("experience", experience)
    if (JSON.stringify(experience) == JSON.stringify(initStateExperience)) {
        setValidate({ ...validate, startDate: ERROR_CODE.EMPTY, endDate: ERROR_CODE.EMPTY, companyName: ERROR_CODE.EMPTY, companyAddress: ERROR_CODE.EMPTY, jobDescription: ERROR_CODE.EMPTY })
        return false
    }
    if (!experience["startDate"]) {
        setValidate({ ...validate, startDate: ERROR_CODE.EMPTY })
        return false
    }

    if (!experience["endDate"]) {
        setValidate({ ...validate, endDate: ERROR_CODE.EMPTY })
        return false
    }
    if (!experience["companyName"]) {
        setValidate({ ...validate, companyName: ERROR_CODE.EMPTY })
        return false
    }
    if (experience["companyName"].length > 50) {
        setValidate({ ...validate, companyName: ERROR_CODE.EMPTY })
        return false
    }
    if (!experience["companyAddress"]) {
        setValidate({ ...validate, companyAddress: ERROR_CODE.EMPTY })
        return false
    }
    if (experience["companyAddress"].length > 50) {
        setValidate({ ...validate, companyAddress: ERROR_CODE.EMPTY })
        return false
    }

    if (!experience["jobDescription"]) {
        setValidate({ ...validate, jobDescription: ERROR_CODE.EMPTY })
        return false
    }
    if (experience["jobDescription"].length > 255) {
        setValidate({ ...validate, jobDescription: ERROR_CODE.EMPTY })
        return false
    }
    if (new Date(experience["startDate"]).getTime() > new Date(experience["endDate"]).getTime()) {
        setValidate({ ...validate, endDate: ERROR_CODE.SYNTAX })
        return false
    }
    return check
}