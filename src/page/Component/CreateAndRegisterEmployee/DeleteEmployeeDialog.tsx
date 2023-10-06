import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDeleteEmployeeApiMutation } from "../../../redux/slice/Employee"
import ButtonCancel from "../../ShareComponent/Button/ButtonCancel"
import ButtonSubmit from "../../ShareComponent/Button/ButtonSubmit"

interface Iprop {
    open: boolean,
    setOpen: any
    DataDelete: any
}
const DeleteUser = (props: Iprop) => {
    const { open, setOpen, DataDelete } = props
    const [Delete] = useDeleteEmployeeApiMutation()
    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete = async () => {
        await Delete(DataDelete.id)
        handleClose()
    }
    return (
        <div>

            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                className="Container-Delete"
            >
                <DialogTitle>{"Xóa người dùng"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Bạn có muốn xóa người dùng <b>{DataDelete.name}</b> này
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ButtonSubmit
                        handleFuntion={() => handleDelete()}
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


export default DeleteUser