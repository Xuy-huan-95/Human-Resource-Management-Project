import "./ProcessIncrease.scss"
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import Signature from "../../../ShareComponent/Signature/Signature"
import React from "react";
import { NAME_PROCESS, STATUS_PROFILE } from "../../../ShareComponent/Constants/StatusIfomation"

const ProcessIncrease = () => {
    const dataToSendLeader = useAppSelector((state) => state.registerUser.userInfomation)
    const dataProcess = useAppSelector((state) => state.process.ProcessInfomation)
    return (
        <div className="Process-Increate-container">
            <div className="All">
                <div className="title">
                    <div className="title-left">
                        <div>CÔNG TY OCEANTECH</div>
                        <div>Số: 03/02-QĐ-TL</div>
                    </div>
                    <div className="title-right">
                        <div>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
                        <div>Độc lập - Tự do - Hạnh phúc</div>
                        <div>----------------------</div>
                    </div>
                </div>
                <div className="Process-time-do">
                    Hà Nội, ngày 19 tháng 09 năm 2023
                </div>
                <div className="decision">
                    <div className="decision-title">
                        <div>QUYẾT ĐỊNH</div>
                        <div>Về việc bổ nhiệm cán bộ, công chức</div>
                    </div>
                    <div className="decision-content">
                        <div>
                            - Căn cứ vào quy định của Luật lao động về việc bổ nhiệm chức vụ cho nhân viên.
                        </div>
                        <div>
                            - Căn cứ vào hợp đồng lao động với nhân viên.
                        </div>
                        <div>
                            - Căn cứ vào năng lực, kinh nghiệm và đóng góp của nhân viên <b>{dataToSendLeader.name}</b> đối với sự phát triển của Công ty OCEANTECH.
                        </div>
                        <div>
                            - Xét đề nghị của Trưởng phòng nhân sự.
                        </div>
                    </div>
                    <div className="decision-do">
                        <div className="decision-do-title">
                            QUYẾT ĐỊNH
                        </div>
                        <div className="decision-do-content">
                            <div>
                                <b>Điều 1:</b>  Kể từ ngày <b>19</b>  tháng <b>09</b> năm <b>2023</b>, chức vụ chính thức của Ông/Bà <b>{dataToSendLeader.name}</b> sẽ là <b>
                                    {dataProcess.newPosition == STATUS_PROFILE.ONE && NAME_PROCESS.ONE}
                                    {dataProcess.newPosition == STATUS_PROFILE.TWO && NAME_PROCESS.TWO}
                                    {dataProcess.newPosition == STATUS_PROFILE.THREE && NAME_PROCESS.THREE}
                                    {dataProcess.newPosition == STATUS_PROFILE.FOUR && NAME_PROCESS.FOUR}
                                    {dataProcess.newPosition == STATUS_PROFILE.FIVE && NAME_PROCESS.FIVE}
                                    {dataProcess.newPosition == STATUS_PROFILE.SIX && NAME_PROCESS.SIX}
                                    {dataProcess.newPosition == STATUS_PROFILE.SEVEN && NAME_PROCESS.SEVEN}
                                </b>
                            </div>
                            <div>
                                <b>Điều 2:</b>  Các ông/bà Phòng Nhân sự, Phòng Tài chính Kế toán và Ông/Bà : <b>{dataToSendLeader.name}</b> căn cứ quyết định thi hành.
                            </div>
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

export default ProcessIncrease