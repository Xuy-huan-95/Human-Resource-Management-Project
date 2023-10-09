import { ERROR_CODE } from "../../page/ShareComponent/Constants/StatusCode"
import moment from "moment"

export const validateProposalModal = (dataProposal, initProposal, validate, setValidate) => {
    let check = true
    if (!dataProposal["content"] && !dataProposal["type"] && !dataProposal["detailedDescription"]) {
        setValidate({ ...validate, content: ERROR_CODE.EMPTY, type: ERROR_CODE.EMPTY, detailedDescription: ERROR_CODE.EMPTY })
        return false
    }
    if (!dataProposal["content"]) {
        setValidate({ ...validate, content: ERROR_CODE.EMPTY })
        return false
    }

    if (!dataProposal["type"]) {
        setValidate({ ...validate, type: ERROR_CODE.EMPTY })
        return false
    }
    if (!dataProposal["detailedDescription"]) {
        setValidate({ ...validate, detailedDescription: ERROR_CODE.EMPTY })
        return false
    }
    if (moment(dataProposal["proposalDate"]).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
        setValidate({ ...validate, proposalDate: ERROR_CODE.SYNTAX })
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
            setValidate({ ...validate, proposalDate: ERROR_CODE.EMPTY })
        }
        if (moment(value).format("DD/MM/YYYY") < moment(new Date()).format("DD/MM/YYYY")) {
            setValidate({ ...validate, proposalDate: ERROR_CODE.SYNTAX })

        }
    }
    if (name == "type") {
        setDataProposal({ ...dataProposal, type: value })

        if (!value) {
            setValidate({ ...validate, type: ERROR_CODE.EMPTY })
        }
        if (value) {
            setValidate({ ...validate, type: "" })
        }
    }
    if (name == "content") {
        setDataProposal({ ...dataProposal, content: value })

        if (!value) {
            setValidate({ ...validate, content: ERROR_CODE.EMPTY })
        }
        if (value) {
            setValidate({ ...validate, content: "" })
        }
    }
    if (name == "detailedDescription") {
        setDataProposal({ ...dataProposal, detailedDescription: value })
        if (!value) {
            setValidate({ ...validate, detailedDescription: ERROR_CODE.EMPTY })
        }
        if (value) {
            setValidate({ ...validate, detailedDescription: "" })
        }
    }
}