import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import "./ProposalForm.scss"
import moment from "moment";
import Signature from "../../../ShareComponent/Signature/Signature"
import { NAME_TYPE, STATUS_PROFILE, STATUS_All } from "../../../ShareComponent/Constants/StatusIfomation"

const Recomement = () => {
    const dataToSendLeader = useAppSelector((state) => state.registerUser.userInfomation)
    const proposalData = useAppSelector((state) => state.Proposal.ProposalInfomation)

    return (
        <div className="container-Recomement">
            <div className="All">
                <div className="title-Recomement">
                    <div className="tittle-left">
                        <div>
                            CÔNG TY OCEANTECH
                        </div>
                        <div>
                            Số: 03/02-QĐ-TL
                        </div>
                    </div>
                    <div className="title-right">
                        <div>
                            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                        </div>
                        <div>
                            Độc lập - Tự do - Hạnh phúc
                        </div>
                        <div>
                            -------------------------
                        </div>
                    </div>
                </div>
                <div className="time-do">
                    Hà Nội, ngày 25 tháng 09 năm 2023
                </div>
                <div className="body-recommend">
                    <div className="title">
                        {proposalData.type == STATUS_All.ONE && NAME_TYPE.ONE}
                        {proposalData.type == STATUS_All.TWO && NAME_TYPE.TWO}
                        {proposalData.type == STATUS_All.THREE && NAME_TYPE.THREE}
                    </div>
                    <div className="detail-text">
                        <div>
                            Kính gửi: Cơ quan cấp trên, lãnh đạo công ty OCEANTECH
                        </div>
                        <div className="detail-item-one">
                            <div>Tôi tên là:</div>
                            <div>
                                <div>
                                    {dataToSendLeader.name}
                                </div>
                            </div>
                        </div>
                        <div className="detail-item-two">
                            <div>Sinh ngày:</div>
                            <div>
                                <div>
                                    {moment(dataToSendLeader.dateOfBirth).format("DD/MM/YYYY")}
                                </div>
                            </div>
                        </div>
                        <div className="detail-item-two">
                            <div>Mã nv:</div>
                            <div>
                                <div>
                                    {dataToSendLeader.code}
                                </div>
                            </div>
                        </div>
                        <div className="detail-item-three">
                            <div>
                                Tôi viết đơn này để đề xuất tham mưu về việc:
                            </div>
                            <div>
                                <div>
                                    {proposalData.content}
                                </div>
                            </div>

                        </div>
                        <div className="detail-item-four">
                            <div>Nội dụng:</div>
                            <div>
                                <div>
                                    {proposalData.detailedDescription}
                                </div>
                            </div>
                        </div>
                        <div>
                            Rất mong nhận được sự xem xét, quan tâm và giải quyết đề nghị trên của tôi.
                        </div>
                        <div>
                            Xin trân trọng cảm ơn!
                        </div>
                    </div>
                    <Signature
                        NameUser={dataToSendLeader?.name}
                    />
                </div>
            </div>
        </div>
    );
}

export default Recomement