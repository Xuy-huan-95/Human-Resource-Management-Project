import React, { useEffect, useState } from 'react';
import "./InfomationEmployee.scss"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WcIcon from '@mui/icons-material/Wc';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DeleteExperience from "../../ExperienceEmployee/DeleteExperienceEmployeeDialog/DeleteExperienceEmployeeDialog"
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';
import { useGetExperieceByemployeeIdQuery } from "../../../../redux/slice/Experience/index"
import moment from 'moment';
import { IExperience } from "../../../../interface/Experiece.interface"
import { IUser } from "../../../../interface/Employee.interface"
import { initStateExperience } from "../../../InitData/InitData"
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import CreateRelativeEmployeeDialog from "../../ExperienceEmployee/CreateExperienceEmployeeDialog/CreateExperienceEmployeeDialog"
import ExperienceEmployee from "../../ExperienceEmployee/ExperienceEmployee/ExperienceEmployee"
import Input from '../../../ShareComponent/Input/Input';
import { STATUS_All, NAME_TEAM, NAME_GENDER, STATUS_PROFILE } from "../../../ShareComponent/Constants/StatusIfomation"
interface IInfomationEmployee {
    dataUser: IUser
    setDataUser: any
}
const InfomationEmployee = (props: IInfomationEmployee) => {
    const { dataUser, setDataUser } = props
    const dataToSendLeader = useAppSelector((state) => state.registerUser.userInfomation)
    const [openCreatExperience, setOpenCreatExperience] = useState(false)
    const [action, setAction] = useState<string>("")
    const [dataUpdateExperience, setDataupdateExperience] = useState<IExperience>(initStateExperience)
    const [idDeleteExperience, setIdDeleteExperience] = useState<number>(0)
    const [openDeleteExperience, setOpenDeleteExperience] = useState(false)
    const { data } = useGetExperieceByemployeeIdQuery(dataToSendLeader.id)
    const handleShowhideModalDeleteExperience = (value: any) => {
        setOpenDeleteExperience(!openDeleteExperience)
        setIdDeleteExperience(value.id)
    }
    const handleShowhideModalCreateExperience = () => {
        setOpenCreatExperience(!openCreatExperience)
        setAction("Create")
    }
    const handleShowhideModalUpdateExperience = (value: any) => {
        setDataupdateExperience(value)
        setOpenCreatExperience(!openCreatExperience)
        setAction("Update")
    }

    return (
        <div className='InfomationUser-container'>
            <div className='content'>
                <div className='lef-content'>
                    <div className='image'>
                        <Avatar
                            alt="Remy Sharp"
                            src={dataToSendLeader?.image}
                            className='avata-cv'
                        />
                    </div>
                    <div className='infomation'>
                        <div className='email'>
                            <div className="icon">
                                <EmailIcon />
                            </div>
                            <div>
                                {dataToSendLeader?.email}
                            </div>
                        </div>
                        <div className='phone'>
                            <div className="icon">
                                <LocalPhoneIcon />
                            </div>
                            <div>
                                {dataToSendLeader?.phone}
                            </div>
                        </div>
                    </div>
                    <div className='Skill'>
                        <div className="Skill-title">
                            KỸ NĂNG
                        </div>
                        <div className='content'>
                            {dataToSendLeader?.submitProfileStatus === STATUS_PROFILE.ONE || dataToSendLeader?.submitProfileStatus === STATUS_PROFILE.FOUR || dataToSendLeader?.submitProfileStatus === STATUS_PROFILE.FIVE ?
                                <div className='content-item'>
                                    <Input
                                        label={"Vui lòng nhập Kỹ năng"}
                                        type={"text"}
                                        value={dataToSendLeader?.skill}
                                        FuntionOnchange={(event) => setDataUser({ ...dataToSendLeader, skill: event.target.value })}
                                    />
                                </div>
                                :
                                <div className='content-item'>
                                    {dataToSendLeader?.skill?.split("\n").filter((item) => item !== "") && dataToSendLeader?.skill?.split("\n").filter((item) => item !== "").length > 0 &&
                                        dataToSendLeader?.skill?.split("\n").filter((item) => item !== "").map((item, index) => {
                                            return (
                                                <div className='container' key={`item-${index}`}>
                                                    <div className='icon'>
                                                        <FiberManualRecordIcon />
                                                    </div>
                                                    <div className='text'>
                                                        {item}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }

                        </div>
                        <div className='English'>
                            <div className='English-title'>
                                NGOẠI NGỮ
                            </div>
                            <div className='english-item'>
                                <div className='english-item_title'>Tiếng Anh</div>
                                <div className='icon'>
                                    <span></span>
                                    <span></span>
                                    <span></span>

                                </div>
                            </div>
                            <div className='china-item'>
                                <div className='china-item-title'>Tiếng Trung</div>
                                <div className='icon'>
                                    <span></span>
                                    <span></span>
                                    <span></span>

                                </div>
                            </div>
                        </div>
                        <div className='Computer'>
                            <div className='computer-item-title'>Tin học</div>
                            <div className='Work-item'>
                                <div className='Work-item_title'>Word</div>
                                <div className='icon'>
                                    <span></span>
                                    <span></span>
                                    <span></span>

                                </div>
                            </div>
                            <div className='Excel-item'>
                                <div className='Excel-item_title'>Excel</div>
                                <div className='icon'>
                                    <span></span>
                                    <span></span>
                                    <span></span>

                                </div>
                            </div>
                        </div>
                        <div className="process">
                            <div className="process-tittle">
                                HOẠT ĐỘNG
                            </div>
                            {dataToSendLeader?.submitProfileStatus === STATUS_PROFILE.ONE || dataToSendLeader?.submitProfileStatus === STATUS_PROFILE.FOUR || dataToSendLeader?.submitProfileStatus === STATUS_PROFILE.FIVE ?

                                <div className='process-item'>
                                    <Input
                                        label={"Vui lòng nhập hoạt động"}
                                        type={"text"}
                                        value={dataToSendLeader?.activity}
                                        FuntionOnchange={(event) => setDataUser({ ...dataToSendLeader, activity: event.target.value })}
                                    />
                                </div>
                                :
                                <div className='process-item'>
                                    {dataToSendLeader?.activity?.split("\n").filter((item) => item !== "") && dataToSendLeader?.activity?.split("\n").filter((item) => item !== "").length > 0 &&
                                        dataUser?.activity?.split("\n").filter((item) => item !== "").map((item, index) => {
                                            return (
                                                <div className='container' key={`item-${index}`}>
                                                    <div className='icon'>
                                                        <FiberManualRecordIcon />
                                                    </div>
                                                    <div className='text'>
                                                        {item}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            }
                        </div>
                        <div className='knowledge'>
                            <div className='knowledge-title'>
                                HIỂU BIẾT
                            </div>
                            {dataToSendLeader?.submitProfileStatus === STATUS_PROFILE.ONE || dataToSendLeader?.submitProfileStatus === STATUS_PROFILE.FOUR || dataToSendLeader?.submitProfileStatus === STATUS_PROFILE.FIVE ?
                                <div className='knowledge-content'>
                                    <Input
                                        label={"Vui lòng nhập hiểu biết"}
                                        type={"text"}
                                        value={dataToSendLeader?.knowledge}
                                        FuntionOnchange={(event) => setDataUser({ ...dataToSendLeader, knowledge: event.target.value })}
                                    />
                                </div>
                                :
                                <div className='knowledge-content'>
                                    {dataToSendLeader?.knowledge?.split("\n").filter((item) => item !== "") && dataToSendLeader?.knowledge?.split("\n").filter((item) => item !== "").length > 0 &&
                                        dataToSendLeader?.knowledge?.split("\n").filter((item) => item !== "").map((item, index) => {
                                            return (
                                                <div className='container' key={`item-${index}`}>
                                                    <div className='icon'>
                                                        <FiberManualRecordIcon />
                                                    </div>
                                                    <div className='text'>
                                                        {item}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className='right-content'>
                    <div className='User-name'>
                        <div className='User-name-title'>
                            {dataToSendLeader?.name}
                        </div>
                        <div className='team'>
                            {dataToSendLeader?.team == STATUS_All.ONE && NAME_TEAM.ONE}
                            {dataToSendLeader?.team == STATUS_All.TWO && NAME_TEAM.TWO}
                            {dataToSendLeader?.team == STATUS_All.THREE && NAME_TEAM.THREE}
                            {dataToSendLeader?.team == STATUS_All.FOUR && NAME_TEAM.FOUR}
                        </div>
                    </div>
                    <div className='Contact'>
                        <div className='Contact-item'>
                            <div className='icon'>
                                <WcIcon />
                            </div>
                            <div className='text'>
                                {dataToSendLeader?.gender == STATUS_All.ZERO && NAME_GENDER.ZERO}
                                {dataToSendLeader?.gender == STATUS_All.ONE && NAME_GENDER.ONE}
                                {dataToSendLeader?.gender == STATUS_All.TWO && NAME_GENDER.TWO}
                                {dataToSendLeader?.gender == STATUS_All.THREE && NAME_GENDER.THREE}
                            </div>
                        </div>
                        <div className='Contact-item'>
                            <div className='icon'>
                                <CalendarMonthIcon />
                            </div>
                            <div className='text'>
                                {moment(dataToSendLeader?.dateOfBirth).format("DD/MM/YYYY")}
                            </div>
                        </div>
                        <div className='Contact-item'>
                            <div className='icon'>
                                <LocationOnIcon />
                            </div>
                            <div className='text'>
                                {dataToSendLeader?.address}
                            </div>
                        </div>
                    </div>
                    <div className='Career-Objective'>
                        <div className='Career-Objective-title'>
                            MỤC TIÊU NGHỀ NGHIỆP
                        </div>
                        <div className='Career-Objective-content'>
                            Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về thị trường để trở thành một nhân viên bán hàng chuyên nghiệp, mang đến nhiều giá trị cho khách hàng.
                            Từ đó giúp cồn ty tăng số lượng khách hàng và mở rộng tập khách hàng.
                        </div>

                    </div>
                    <ExperienceEmployee
                        data={data}
                        dataToSendLeader={dataToSendLeader}
                        handleShowhideModalCreateExperience={handleShowhideModalCreateExperience}
                        handleShowhideModalDeleteExperience={handleShowhideModalDeleteExperience}
                        handleShowhideModalUpdateExperience={handleShowhideModalUpdateExperience}
                    />
                    <div className='Certificate'>
                        <div className="Certificate-title">
                            CHỨNG CHỈ
                        </div>

                        <div className='Certificate-content'>
                            <ul>
                                <li>toeic 900</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <CreateRelativeEmployeeDialog
                open={openCreatExperience}
                setOpen={setOpenCreatExperience}
                action={action}
                setAction={setAction}
                id={dataUser.id}
                dataUpdateExperience={dataUpdateExperience}
            />
            <DeleteExperience
                open={openDeleteExperience}
                setOpen={setOpenDeleteExperience}
                idDeleteExperience={idDeleteExperience}
            />

        </div >

    );
}

export default InfomationEmployee

