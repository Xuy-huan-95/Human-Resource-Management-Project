import { ERROR_CODE } from "../../page/ShareComponent/Constants/StatusCode"

export const validateCertificate = (InitCertificateData, createCertificateData, setCreateCertificateData, validateCertificateData, setValidateCertificateData) => {
    let check = true
    if (JSON.stringify(createCertificateData) === JSON.stringify(InitCertificateData)) {
        setValidateCertificateData({
            ...validateCertificateData,
            certificateName: ERROR_CODE.EMPTY,
            content: ERROR_CODE.EMPTY,
            field: ERROR_CODE.EMPTY,
            issueDate: ERROR_CODE.EMPTY,
        })
        return false
    }
    if (!createCertificateData["certificateName"]) {
        setValidateCertificateData({ ...validateCertificateData, certificateName: ERROR_CODE.EMPTY, })
        return false
    }

    if (!createCertificateData["field"]) {
        setValidateCertificateData({ ...validateCertificateData, field: ERROR_CODE.EMPTY, })
        return false
    }
    if (!createCertificateData["issueDate"]) {
        setValidateCertificateData({ ...validateCertificateData, issueDate: ERROR_CODE.EMPTY, })
        return false
    }
    if (new Date().getTime() < new Date(createCertificateData["issueDate"]).getTime()) {
        setValidateCertificateData({ ...validateCertificateData, issueDate: ERROR_CODE.SYNTAX, })

        return false
    }
    if (!createCertificateData["content"]) {
        setValidateCertificateData({ ...validateCertificateData, content: ERROR_CODE.EMPTY, })
        return false
    }
    return check
}

export const handleOnChangeInputCertificateInfo = (name: string, value: any, createCertificateData, setCreateCertificateData, validateCertificateData, setValidateCertificateData) => {
    if (name == "certificateName") {
        setCreateCertificateData({ ...createCertificateData, certificateName: value })
        if (!value) setValidateCertificateData({ ...validateCertificateData, certificateName: "" })
        if (value) setValidateCertificateData({ ...validateCertificateData, certificateName: "" })
    }
    if (name == "field") {
        setCreateCertificateData({ ...createCertificateData, field: value })
        if (!value) setValidateCertificateData({ ...validateCertificateData, field: "" })
        if (value) setValidateCertificateData({ ...validateCertificateData, field: "" })
    }
    if (name == "issueDate") {
        setCreateCertificateData({ ...createCertificateData, issueDate: value })
        if (new Date().getTime() < new Date(value).getTime()) setValidateCertificateData({ ...validateCertificateData, issueDate: ERROR_CODE.SYNTAX })
        if (new Date().getTime() > new Date(value).getTime()) setValidateCertificateData({ ...validateCertificateData, issueDate: "0" })
        if (!value) setValidateCertificateData({ ...validateCertificateData, issueDate: "" })
    }
    if (name == "content") {
        setCreateCertificateData({ ...createCertificateData, content: value })
        if (!value) setValidateCertificateData({ ...validateCertificateData, content: "" })
        if (value) setValidateCertificateData({ ...validateCertificateData, content: "" })
    }
}