import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDeleteExperieceMutation } from "../../../../redux/slice/Experience"
import { toast } from 'react-toastify';
import { RESPONSE_STATUS_CODE } from "../../../ShareComponent/Constants/StatusCode"
import ButtonSubmit from "../../../ShareComponent/Button/ButtonSubmit"
import ButtonCancel from "../../../ShareComponent/Button/ButtonCancel"
interface IDeleteExperience {
    open: boolean,
    setOpen: any,
    idDeleteExperience: number

}
const DeleteExperienceEmployeeDialog = (props: IDeleteExperience) => {
    const { open, setOpen, idDeleteExperience } = props
    const [Delete] = useDeleteExperieceMutation()

    const handleDeleteExperience = async () => {
        let result = await Delete(idDeleteExperience).unwrap()
        if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
            toast.success("Bạn đã xóa thành công kinh nghiệm")
            setOpen(false);
        }
    }
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                className="Container-Delete"
            >
                <DialogTitle>{"Xóa kinh nghiệm làm việc"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Bạn có muốn xóa kinh nghiệm này ????
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ButtonSubmit
                        handleFuntion={() => handleDeleteExperience()}
                        name={"Xóa"}
                    />
                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default DeleteExperienceEmployeeDialog