import { IUser } from "../../../../interface/Employee.interface"
import moment from "moment"
import Signature from "../../../ShareComponent/Signature/Signature"
import "./EndEmployeeForm.scss"
import { STATUS_PROFILE, NAME_STATUS_PROFILE, STATUS_PROCESS, NAME_PROCESS } from "../../../ShareComponent/Constants/StatusIfomation"
import Input from "../../../ShareComponent/Input/Input";
import React from "react"

interface IEndEmployeeForm {
    dataUser: IUser
    DataEnd: IUser | Omit<IUser, "id">
    setDataEnd: any
}

const EndEmployeeForm = (props: IEndEmployeeForm) => {
    const { dataUser, DataEnd, setDataEnd } = props
    return (
        <div className="End-form-contianer">
            <div className="All">
                <div className="End-form-title">
                    <div className="title-left">
                        <div>CÔNG TY OCEANTECH</div>
                        <div>Số: 03/02-QĐ-TL</div>
                    </div>
                    <div className="title-right">
                        <div>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
                        <div>Độc lập - Tự do - Hạnh phúc</div>
                        <div>--------------------</div>
                    </div>
                </div>
                <div className="time-do">
                    Hà Nội, ngày 19 tháng 09 năm 2023
                </div>
                <div className="End-form-content">
                    <div className="decision">ĐƠN XIN NGHỈ VIỆC</div>
                    <div>Kính gửi: Ban Giám đốc công ty Oceantech</div>
                    <div className="name-end">
                        <div>Tôi tên là :</div>
                        <div>
                            <div>{dataUser.name}</div>
                        </div>
                    </div>
                    <div className="position-end">
                        <div>Chức vụ :</div>
                        <div>
                            <div>
                                {dataUser.currentPosition == STATUS_PROCESS.ONE && NAME_PROCESS.ONE}
                                {dataUser.currentPosition == STATUS_PROCESS.TWO && NAME_PROCESS.TWO}
                                {dataUser.currentPosition == STATUS_PROCESS.THREE && NAME_PROCESS.THREE}
                                {dataUser.currentPosition == STATUS_PROCESS.FOUR && NAME_PROCESS.FOUR}
                                {dataUser.currentPosition == STATUS_PROCESS.FIVE && NAME_PROCESS.FIVE}
                                {dataUser.currentPosition == STATUS_PROCESS.SIX && NAME_PROCESS.SIX}
                                {dataUser.currentPosition == STATUS_PROCESS.SEVEN && NAME_PROCESS.SEVEN}
                            </div>
                        </div>
                    </div>
                    <div className="time-end">
                        <div>Nay tôi làm đơn này, kính xin Ban Giám đốc cho tôi được thôi việc kể từ :</div>
                        <div>
                            {dataUser?.submitProfileStatus == STATUS_PROFILE.SIX ?
                                <div>{moment(DataEnd.endDay).format("YYYY-MM-DD")}</div>
                                :
                                <div>
                                    <Input
                                        type={"date"}
                                        value={DataEnd.endDay ? moment(DataEnd.endDay).format("YYYY-MM-DD") : ""}
                                        sx={{ border: 'none', "& fieldset": { border: 'none' }, }}
                                        FuntionOnchange={(event) => setDataEnd({ ...DataEnd, endDay: event.target.value })}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="reason-end">
                        <div>Lý do xin nghỉ việc:</div>
                        <div>
                            {dataUser?.submitProfileStatus == STATUS_PROFILE.SIX ?
                                <div>{DataEnd.reasonForEnding}</div>
                                :
                                <div>
                                    <Input
                                        type={"text"}
                                        value={DataEnd.reasonForEnding}
                                        sx={{ border: 'none', "& fieldset": { border: 'none' }, }}
                                        FuntionOnchange={(event) => setDataEnd({ ...DataEnd, reasonForEnding: event.target.value })}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                    <div>
                        Tôi xin cam đoan đã bàn giao công việc lại cho bộ phận có liên quan trước khi nghỉ việc.
                    </div>
                    <div>
                        Rất mong Ban Giám đốc xem xét và chấp thuận cho tôi được phép thôi việc. Tôi xin chân thành cảm ơn.
                    </div>
                </div>
                <div>

                </div>
                <div>
                    <Signature
                        NameUser={dataUser.name}
                    />
                </div>
            </div>
        </div>
    )
}

export default EndEmployeeForm