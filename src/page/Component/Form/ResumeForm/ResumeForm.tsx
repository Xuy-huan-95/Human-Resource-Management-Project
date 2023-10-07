import "./ResumeForm.scss"
import Grid from '@mui/material/Grid';
import { useGetEmployeeByIdQuery } from "../../../../redux/slice/Employee/index"
import moment from 'moment';
import Avatar from '@mui/material/Avatar';
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import Signature from "../../../ShareComponent/Signature/Signature"
import TableResume from "../../Table/TableResume/TableResume"
import { STATUS_All, NAME_GENDER } from "../../../ShareComponent/Constants/StatusIfomation"
import React, { useEffect } from "react";

const ResumeForm = () => {
    const dataToSendLeader = useAppSelector((state) => state.registerUser.userInfomation)
    const { data } = useGetEmployeeByIdQuery(dataToSendLeader.id, { refetchOnMountOrArgChange: true })

    return (
        <div className='resume-container'>
            <div className='resume-content'>
                <Grid container spacing={2} className='resume-body-header'>
                    <Grid item xs={3} md={6} className='image-user'>
                        <div className='image'>
                            <Avatar
                                alt="Remy Sharp"
                                src={data?.data?.image}
                                sx={{ width: 180, height: 180, marginBottom: "20px" }}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={6} md={6} className='title'>
                        <div className='title-one'>
                            <div> Cộng hòa xã hội chủ nghĩa Việt Nam</div>
                            <div> Độc lập - Tự do - Hạnh phúc</div>
                            <div>---------------------</div>
                            <h2>Sơ yếu lý lịch</h2>
                        </div>
                    </Grid>

                </Grid>

                <div className='resume-body-content'>
                    <div className='user-info'>
                        <h4 className="one">
                            I-Thông tin nhân viên
                        </h4>
                        <div className='two'>
                            <div className='item-one'>
                                <div className='container'>

                                    <div className='row'>
                                        <div className='title'>
                                            <div>1.</div>
                                            <div>Họ tên :</div>
                                        </div>

                                        <div className='value'>
                                            <div>{data?.data?.name}</div>
                                        </div>
                                    </div>
                                    <div className='row_two'>
                                        <div className='title'>
                                            Giới tính :
                                        </div>
                                        <div className="value">
                                            <div>{data?.data?.gender == STATUS_All.ZERO && NAME_GENDER.ZERO}</div>
                                            <div>{data?.data?.gender == STATUS_All.ONE && NAME_GENDER.ONE}</div>
                                            <div>{data?.data?.gender == STATUS_All.TWO && NAME_GENDER.TWO}</div>
                                            <div>{data?.data?.gender == STATUS_All.THREE && NAME_GENDER.THREE}</div>

                                        </div>
                                    </div>
                                </div>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='title'>
                                            <div>2.</div>
                                            <div>Nơi sinh :</div>
                                        </div>

                                        <div className='value'>
                                            <div>{data?.data?.address}</div>
                                        </div>
                                    </div>

                                    <div className='row_two'>
                                        <div className='title'>
                                            Ngày sinh :
                                        </div>
                                        <div className="value">
                                            <div>{moment(data?.data?.dateOfBirth).format("DD/MM/YYYY")}</div>
                                        </div>

                                    </div>
                                </div>

                                <div className='container'>
                                    <div className='row_three'>
                                        <div className='title'>
                                            <div>3.</div>
                                            <div>Địa chỉ :</div>
                                        </div>

                                        <div className='value'>
                                            <div>{data?.data?.address}</div>
                                        </div>
                                    </div>

                                </div>
                                <div className='container'>

                                    <div className='row'>
                                        <div className='title'>
                                            <div>4.</div>
                                            <div>Email :</div>
                                        </div>

                                        <div className='value'>
                                            <div>{data?.data?.email}</div>
                                        </div>
                                    </div>

                                    <div className='row_two'>
                                        <div className='title'>
                                            Điện thoại :
                                        </div>
                                        <div className="value">
                                            <div>{data?.data?.phone}</div>
                                        </div>

                                    </div>

                                </div>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='title'>
                                            <div>5.</div>
                                            <div>Dân tộc :</div>
                                        </div>

                                        <div className='value'>
                                            <div>{data?.data?.ethnic}</div>
                                        </div>
                                    </div>

                                    <div className='row_two'>
                                        <div className='title'>
                                            Tôn giáo :
                                        </div>
                                        <div className="value">
                                            <div>{data?.data?.religion}</div>
                                        </div>

                                    </div>

                                </div>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='title'>
                                            <div>6.</div>
                                            <div>CCCD :</div>
                                        </div>

                                        <div className='value'>
                                            <div>{data?.data?.citizenIdentificationNumber}</div>
                                        </div>
                                    </div>

                                    <div className='row_two'>
                                        <div className='title'>
                                            Ngày cấp :
                                        </div>
                                        <div className="value">
                                            <div>{moment(data?.data?.dateOfIssuanceCard).format("DD/MM/YYYY")}</div>
                                        </div>
                                    </div>


                                </div>
                                <div className='container'>
                                    <div className='row_three'>
                                        <div className='title'>
                                            <div>7.</div>
                                            <div>Nơi cấp :</div>
                                        </div>

                                        <div className='value'>
                                            <div>{data?.data?.placeOfIssueCard}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <h4 className="three">
                            II-Quan hệ gia đình
                        </h4>
                        <div className="four">
                            <TableResume
                                data={data}
                            />
                        </div>
                        <b className='five'>
                            Tôi xin cam đoan bản khai sơ yếu lý lịch trên đúng dự thật , nếu có điều gì không đúng
                            tôi chịu trách nhiệm trước pháp luật về lời khai của mình
                        </b>

                        <Signature
                            NameUser={data?.data?.name}
                        />
                    </div>
                </div>
            </div >

        </div >
    );
}

export default ResumeForm