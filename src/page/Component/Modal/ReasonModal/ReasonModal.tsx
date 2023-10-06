import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { IUser } from "../../../../interface/Employee.interface"
import ButtonExit from "../../../ShareComponent/Button/ButtonExit"
import { STATUS_All, NAME_GENDER, STATUS_PROFILE } from "../../../ShareComponent/Constants/StatusIfomation"
import React from 'react';

interface IReasonForRefuseModal {
    open: boolean,
    setOpen: any
    dataReasonRefuse: IUser
}
const ReasonModal = (props: IReasonForRefuseModal | any) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));
    const { open, setOpen, dataReasonRefuse } = props
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xs"
                fullWidth
            >
                <DialogTitle id="customized-dialog-title">
                    {dataReasonRefuse.submitProfileStatus == STATUS_PROFILE.NIGHT ? "Lý do từ chối kết thúc hồ sơ" : "Lý do Bổ sung kết thúc hồ sơ"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dataReasonRefuse.submitProfileStatus == STATUS_PROFILE.NIGHT ? dataReasonRefuse?.reasonForRefuseEndProfile : dataReasonRefuse?.additionalRequestTermination}
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