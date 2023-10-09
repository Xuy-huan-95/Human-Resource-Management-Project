import { IUser } from "../../../../interface/Employee.interface"
import DialogActions from '@mui/material/DialogActions';
import ButtonSubmit from "../../../ShareComponent/Button/ButtonSubmit"
import ButtonCancel from "../../../ShareComponent/Button/ButtonCancel"
import ButtonResfuse from "../../../ShareComponent/Button/ButtonResfuse"
import { IProccess } from "../../../../interface/Proccess.interface"
import { ISalaryIncreate } from "../../../../interface/SalaryIncreate.interface"
import { IProposal } from "../../../../interface/Proposal.interface"
import { STATUS_PROFILE, STATUS_SALARY } from "../../../ShareComponent/Constants/StatusIfomation"
import React, { useEffect } from "react";

interface IButtonActionForm {
    dataToSendLeader: IUser
    name: string
    option: string
    handleSaveInfomationUser: () => Promise<void>
    process: IProccess
    handleShowHideModalSendDataToLeader: () => void
    handleClose: () => void
    dataSalry: ISalaryIncreate
    handleShowHideModalApprove: () => void
    handlShowHideModalNeedToApprove: () => void
    handlShowHideModalRefuse: () => void
    proposal: IProposal
    handleShowHideModalApproveSalary: () => void
    handlShowHideModalNeedToApproveSalary: () => void
    handlShowHideModalRefuseSalary: () => void
    handleShowHideModalApproveProcess: () => void
    handlShowHideModalNeedToApproveProcess: () => void
    handlShowHideModalRefuseProcess: () => void
    handleShowHideModalSendDataEnd: () => void
    handleShowHideModalApproveProposal: () => void
    handlShowHideModalNeedToApproveProposal: () => void
    handlShowHideModalRefuseProposal: () => void
}

const ButtonActionForm = (props: IButtonActionForm) => {
    const { dataToSendLeader, option, name, handleSaveInfomationUser, process, handleShowHideModalSendDataToLeader,
        handleClose, dataSalry, handleShowHideModalApprove, handlShowHideModalNeedToApprove, handlShowHideModalRefuse,
        proposal, handleShowHideModalApproveSalary, handlShowHideModalNeedToApproveSalary, handlShowHideModalRefuseSalary,
        handleShowHideModalApproveProcess, handlShowHideModalNeedToApproveProcess, handlShowHideModalRefuseProcess,
        handleShowHideModalSendDataEnd, handleShowHideModalApproveProposal, handlShowHideModalNeedToApproveProposal,
        handlShowHideModalRefuseProposal
    } = props



    return (
        <>
            {dataToSendLeader && name == "user" && dataToSendLeader.submitProfileStatus !== STATUS_PROFILE.TWO && dataToSendLeader.submitProfileStatus !== STATUS_PROFILE.SIX
                && dataToSendLeader.submitProfileStatus !== STATUS_PROFILE.ZERO && dataToSendLeader.submitProfileStatus !== STATUS_PROFILE.SEVEN
                && option !== "Recommend" && option !== "Propose" && option !== "Advisory" &&
                <DialogActions>
                    {option !== "salary_Increate" && option !== "Process_increate" && dataToSendLeader.submitProfileStatus == STATUS_PROFILE.ONE &&
                        < ButtonSubmit
                            handleFuntion={() => handleSaveInfomationUser()}
                            name={"Lưu lại"}
                        />
                    }

                    {dataToSendLeader.submitProfileStatus == STATUS_PROFILE.FOUR &&
                        < ButtonSubmit
                            handleFuntion={() => handleSaveInfomationUser()}
                            name={"Lưu lại"}
                        />
                    }
                    {dataToSendLeader.submitProfileStatus == STATUS_PROFILE.FIVE &&
                        < ButtonSubmit
                            handleFuntion={() => handleSaveInfomationUser()}
                            name={"Lưu lại"}
                        />
                    }
                    {!option || option == "Process_increate" && process && process.processStatus !== STATUS_PROFILE.TWO && process.processStatus !== STATUS_PROFILE.THREE
                        ?
                        <>
                            <ButtonSubmit
                                handleFuntion={() => handleShowHideModalSendDataToLeader()}
                                name={"Trình lãnh đạo"}
                            />
                            < ButtonCancel
                                handleCancel={handleClose}
                            />
                        </>

                        :
                        ""
                    }
                    {option == "salary_Increate" && dataSalry && dataSalry.salaryIncreaseStatus !== STATUS_SALARY.TWO ?
                        <>
                            <ButtonSubmit
                                handleFuntion={() => handleShowHideModalSendDataToLeader()}
                                name={"Trình lãnh đạo"}
                            />
                            < ButtonCancel
                                handleCancel={handleClose}
                            />
                        </>
                        :
                        ""
                    }
                </DialogActions>
            }
            {
                option == "Approve-User" &&
                <DialogActions>
                    <ButtonSubmit
                        handleFuntion={() => handleShowHideModalApprove()}
                        name={"Phê duyệt"}
                    />
                    <ButtonSubmit
                        handleFuntion={() => handlShowHideModalNeedToApprove()}
                        name={"Yêu cầu bổ xung"}
                    />
                    <ButtonResfuse
                        handleFuntion={() => handlShowHideModalRefuse()}
                    />
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
            }
            {
                name == "manage" && option == "Approve-salary" &&
                <DialogActions>
                    <ButtonSubmit
                        handleFuntion={() => handleShowHideModalApproveSalary()}
                        name={"Phê duyệt"}
                    />
                    <ButtonSubmit
                        handleFuntion={() => handlShowHideModalNeedToApproveSalary()}
                        name={"Yêu cầu bổ xung"}
                    />
                    <ButtonResfuse
                        handleFuntion={() => handlShowHideModalRefuseSalary()}
                    />
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
            }
            {
                name == "manage" && option == "Approve-process" &&
                <DialogActions>
                    <ButtonSubmit
                        handleFuntion={() => handleShowHideModalApproveProcess()}
                        name={"Phê duyệt"}
                    />
                    <ButtonSubmit
                        handleFuntion={() => handlShowHideModalNeedToApproveProcess()}
                        name={" Yêu cầu bổ xung"}
                    />
                    <ButtonResfuse
                        handleFuntion={() => handlShowHideModalRefuseProcess()}
                    />
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
            }
            {
                dataToSendLeader && dataToSendLeader.submitProfileStatus == STATUS_PROFILE.SEVEN && name == "user" &&
                <DialogActions>
                    <ButtonSubmit
                        handleFuntion={() => handleShowHideModalSendDataEnd()}
                        name={"Nộp lưu hồ sơ"}
                    />
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
            }
            {
                option == "Recommend" && proposal.proposalStatus == STATUS_PROFILE.ONE &&
                < DialogActions >
                    <ButtonSubmit
                        handleFuntion={() => handleShowHideModalSendDataToLeader()}
                        name={"Trình lãnh đạo"}
                    />
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
            }
            {
                option == "Advisory" && proposal.proposalStatus == STATUS_PROFILE.ONE &&
                < DialogActions >
                    <ButtonSubmit
                        handleFuntion={() => handleShowHideModalSendDataToLeader()}
                        name={"Trình lãnh đạo"}
                    />
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
            }

            {
                option == "Propose" && proposal.proposalStatus == STATUS_PROFILE.ONE &&
                < DialogActions >
                    <ButtonSubmit
                        handleFuntion={() => handleShowHideModalSendDataToLeader()}
                        name={"Trình lãnh đạo"}
                    />
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
            }

            {
                option == "Propose" && proposal.proposalStatus == STATUS_PROFILE.FOUR &&
                < DialogActions >
                    <ButtonSubmit
                        handleFuntion={() => handleShowHideModalSendDataToLeader()}
                        name={"Trình lãnh đạo"}
                    />
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
            }
            {
                option == "Propose" && proposal.proposalStatus == STATUS_PROFILE.FIVE &&
                < DialogActions >
                    <ButtonSubmit
                        handleFuntion={() => handleShowHideModalSendDataToLeader()}
                        name={"Trình lãnh đạo"}
                    />
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
            }
            {
                name == "manage" && proposal.proposalStatus == STATUS_PROFILE.TWO && option == "Approve-Proposal" &&
                < DialogActions >
                    <ButtonSubmit
                        handleFuntion={() => handleShowHideModalApproveProposal()}
                        name={"Phê duyệt"}
                    />
                    <ButtonSubmit
                        handleFuntion={() => handlShowHideModalNeedToApproveProposal()}
                        name={"Yêu cầu bổ xung"}
                    />
                    <ButtonResfuse
                        handleFuntion={() => handlShowHideModalRefuseProposal()}
                    />
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
            }


        </>
    )
}

export default ButtonActionForm