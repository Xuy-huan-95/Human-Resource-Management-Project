import { IUser } from "../../../../interface/Employee.interface"
import "./ExperienceEmployee.scss"
import ButtonAdd from "../../../ShareComponent/Button/ButtonAdd"
import { STATUS_PROFILE } from "../../../ShareComponent/Constants/StatusIfomation"
import moment from "moment"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ButtonEdit from "../../../ShareComponent/Button/ButtonEdit"
import ButtonDelete from "../../../ShareComponent/Button/ButtonDelete"
import React from "react"

interface IExperienceEmployee {
    dataToSendLeader: IUser
    handleShowhideModalCreateExperience: () => void
    data: any
    handleShowhideModalUpdateExperience: (value: any) => void
    handleShowhideModalDeleteExperience: (value: any) => void
}
const ExperienceEmployee = (props: IExperienceEmployee) => {
    const { dataToSendLeader, handleShowhideModalCreateExperience, data, handleShowhideModalUpdateExperience, handleShowhideModalDeleteExperience } = props
    return (
        <div className='Exprience'>
            <div className="Exprience-title">
                KINH NGIỆM LÀM VIỆC
                {dataToSendLeader.submitProfileStatus == STATUS_PROFILE.ONE || dataToSendLeader.submitProfileStatus == STATUS_PROFILE.FOUR || dataToSendLeader.submitProfileStatus == STATUS_PROFILE.FIVE
                    ?
                    <div className="btn-add">
                        <ButtonAdd
                            handleFuntion={() => handleShowhideModalCreateExperience()}
                        />
                    </div>
                    :
                    ""
                }
            </div>
            {data?.data && data?.data.length > 0 &&
                data?.data.map((item: any, index: number) => {
                    return (
                        <div className='exprience-item' key={`item-${index}`}>
                            <div className="action-exp">
                                <div className='time-NameCompany'>
                                    <div className='time-exprience'>{moment(item.startDate).format("MM/YYYY")} - {moment(item.endDate).format("MM/YYYY")}</div>
                                    <div className='dot-icon'>
                                        <FiberManualRecordIcon />
                                    </div>
                                    <div className='NameCompany'>{item.companyName}</div>
                                </div>
                                <div className="position">
                                    <div className='detail-position'>{item.companyAddress} </div>

                                </div>
                                {dataToSendLeader.submitProfileStatus !== "2"
                                    &&
                                    <div className='edit-delete'>
                                        <ButtonEdit
                                            handleFuntion={() => handleShowhideModalUpdateExperience(item)}
                                        />
                                        <ButtonDelete
                                            handleFuntion={() => handleShowhideModalDeleteExperience(item)}
                                        />
                                    </div>
                                }
                                <div className='content'>
                                    {item.jobDescription.split("\n").filter((item) => item !== "").map((item) => {
                                        return (
                                            <div className='exprience-content' key={`item-${item.id}`}>
                                                <div className='icon'>
                                                    <FiberManualRecordIcon />
                                                </div>
                                                <div className='text-experience'>
                                                    {item}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ExperienceEmployee