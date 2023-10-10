import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IUser } from "../../../../interface/Employee.interface"
import ButtonExit from "../../../ShareComponent/Button/ButtonExit"
import { STATUS_All, NAME_GENDER, STATUS_PROFILE } from "../../../ShareComponent/Constants/StatusIfomation"
import React, { useEffect } from 'react';

interface IReasonForRefuseModal {
    open: boolean,
    setOpen: any
    dataReasonRefuse: IUser
}
const ReasonModal = (props: IReasonForRefuseModal | any) => {
    const { open, setOpen, dataReasonRefuse } = props
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        console.log("dataReasonRefuse", dataReasonRefuse)
    }, [open])
    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xs"
                fullWidth
            >
                <DialogTitle id="customized-dialog-title">
                    {dataReasonRefuse.submitProfileStatus == STATUS_PROFILE.NIGHT && "Lý do từ chối kết thúc hồ sơ"}
                    {dataReasonRefuse.submitProfileStatus == STATUS_PROFILE.EIGHT && "Lý do Bổ sung kết thúc hồ sơ"}
                    {dataReasonRefuse.submitProfileStatus == STATUS_PROFILE.FIVE && "Lý do từ chối thêm mới nhân viên"}
                    {dataReasonRefuse.submitProfileStatus == STATUS_PROFILE.FOUR && "Lý do bổ xung thêm mới nhân viên"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dataReasonRefuse.submitProfileStatus == STATUS_PROFILE.NIGHT && dataReasonRefuse?.reasonForRefuseEndProfile}
                        {dataReasonRefuse.submitProfileStatus == STATUS_PROFILE.EIGHT && dataReasonRefuse?.additionalRequestTermination}
                        {dataReasonRefuse.submitProfileStatus == STATUS_PROFILE.FIVE && dataReasonRefuse?.reasonForRejection}
                        {dataReasonRefuse.submitProfileStatus == STATUS_PROFILE.FOUR && dataReasonRefuse?.additionalRequest}

                    </DialogContentText>
                </DialogContent>
                <ButtonExit
                    handleClose={handleClose}
                />
                <div>
                </div>
            </Dialog>

        </div >

    );
}

export default ReasonModal