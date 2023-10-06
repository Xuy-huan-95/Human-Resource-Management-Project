import "./CreateProposalEmployeeDialog.scss"
import React, { useEffect, useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import RegistrationForms from "../Form/Form"
import Grid from '@mui/material/Grid';
import WcIcon from '@mui/icons-material/Wc';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ModalSalaryIncrease from "./SalaryDialog/SalaryDialog";
import ModalProcess from "./ProcessDialog/ProcessDialog"
import ProposalDialog from "./ProposalDialog/ProposalDialog"
import Avatar from '@mui/material/Avatar';
import moment from "moment";
import EndFormModal from "../EndEmployee/EndEmployeeDialog"
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import CustomTabPanel from "../../ShareComponent/CustomTabPanel/CustomTabPanel"
import TabsList from "../../ShareComponent/Tabslist/TabsList"
import ButtonExit from "../../ShareComponent/Button/ButtonExit"
import ButtonSubmit from '../../ShareComponent/Button/ButtonSubmit'
import ButtonCancel from "../../ShareComponent/Button/ButtonCancel"
import { STATUS_PROFILE, NAME_STATUS_PROFILE, STATUS_TYPE, NAME_TYPE } from "../../ShareComponent/Constants/StatusIfomation"
import { STATUS_All, NAME_GENDER } from "../../ShareComponent/Constants/StatusIfomation"

export interface Iprop {
    open: boolean,
    setOpen: any
}

const ModalUpdatedevelopments = (props: Iprop | any) => {
    const dataUser = useAppSelector((state) => state.registerUser.userInfomation)
    const { open, setOpen } = props
    const [value, setValue] = useState(0);
    const [openRegistration, setOpenRegistration] = useState(false);
    const [openEndFrom, setOpenEndFrom] = useState(false);
    const [option, setOption] = useState<string>("");

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleShowhideRegistrationFrom = () => {
        setOpenRegistration(!openRegistration)
        setOption("View-Profile")
    }
    const handleShowHideEndFormModal = () => {
        setOpenEndFrom(!openEndFrom)
    }
    return (
        <div className="Height" >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xl"
                className='modal-Updatedevelopments-container'

            >
                <DialogTitle id="customized-dialog-title">
                    Cập nhật diễn biến
                </DialogTitle>
                <div>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} columns={20} className='gird-all' >
                            <Grid item lg={5} sm={20} className="left-modal" >
                                <Grid container spacing={2} columns={12}  >
                                    <Grid item lg={12} sm={6} >
                                        <div className='icon-content'>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={dataUser.image}
                                                sx={{ width: 250, height: 250, marginBottom: "20px" }}
                                            />
                                        </div>
                                        <div className="name-user">
                                            <div>{dataUser.name}</div>

                                        </div>
                                    </Grid>
                                    <Grid item lg={12} sm={6} className="spacing " >
                                        <div className='user-infomation'>
                                            <div className="container">
                                                <div className="item">
                                                    <div className="icon-item">
                                                        <WcIcon />
                                                    </div>
                                                    <div className="">
                                                        {dataUser.gender == STATUS_All.ONE && NAME_GENDER.ONE || dataUser.gender == STATUS_All.ZERO && NAME_GENDER.ONE}
                                                        {dataUser.gender == STATUS_All.TWO && NAME_GENDER.TWO}
                                                        {dataUser.gender == STATUS_All.THREE && NAME_GENDER.THREE}
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="icon-item">
                                                        <AlternateEmailIcon />
                                                    </div>
                                                    <div className=" Text">
                                                        {dataUser.email}
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="icon-item">
                                                        <LocalPhoneIcon />
                                                    </div>
                                                    <div className=" Text">
                                                        {dataUser.phone}
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="icon-item" >
                                                        <DateRangeIcon />
                                                    </div>
                                                    <div className=" Text">
                                                        {moment(dataUser.dateOfBirth).format("DD/MM/YYYY")}
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="icon-item">
                                                        <GpsFixedIcon />
                                                    </div>
                                                    <div className=" Text" title={dataUser.address}>
                                                        {dataUser.address}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item lg={15} sm={20} className="margin" >
                                <div className="right">
                                    <Box >
                                        <Box >
                                            <TabsList
                                                value={value}
                                                handleChange={handleChange}
                                                name={"CreateProposal"}
                                            />
                                        </Box>
                                        <CustomTabPanel value={value} index={STATUS_All.ZERO}>
                                            <ModalSalaryIncrease
                                            />
                                        </CustomTabPanel>
                                        <CustomTabPanel value={value} index={STATUS_All.ONE}>
                                            <ModalProcess />
                                        </CustomTabPanel>
                                        <CustomTabPanel value={value} index={STATUS_All.TWO}>
                                            <ProposalDialog />
                                        </CustomTabPanel>
                                    </Box>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div >

                <ButtonExit
                    handleClose={handleClose}
                />
                <DialogActions>
                    {dataUser.submitProfileStatus !== STATUS_PROFILE.SIX &&
                        <ButtonSubmit
                            handleFuntion={handleShowHideEndFormModal}
                            name={"Kết thúc"}
                        />
                    }
                    <ButtonSubmit
                        handleFuntion={handleShowhideRegistrationFrom}
                        name={"Xem hồ sơ"}
                    />
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
                <RegistrationForms
                    open={openRegistration}
                    setOpen={setOpenRegistration}
                    option={option}
                />
                <EndFormModal
                    open={openEndFrom}
                    setOpen={setOpenEndFrom}
                    openModalProposal={open}
                    setOpenModalProposal={setOpen}
                />
            </Dialog>

        </div>
    );
}

export default ModalUpdatedevelopments