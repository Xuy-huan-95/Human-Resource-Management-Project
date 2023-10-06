import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { toast } from 'react-toastify';
import { useDeleteSalaryMutation } from "../../../redux/slice/Salary_increate/index"
import { useDeleteProcessMutation } from "../../../redux/slice/Proccess/index"
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { useDeleteProposalMutation } from "../../../redux/slice/Proposal/index"
import { RESPONSE_STATUS_CODE } from "../../ShareComponent/Constants/StatusCode"
import ButtonSubmit from "../../ShareComponent/Button/ButtonSubmit"
import ButtonCancel from "../../ShareComponent/Button/ButtonCancel"
interface IDeleteSalary {
    open: boolean,
    setOpen: any,
    ActionDelete: string
}


const DeleteModal = (props: IDeleteSalary) => {
    const { open, setOpen, ActionDelete } = props
    const dataSalary = useAppSelector((state) => state.salary.SalaryInfomation)
    const dataProcess = useAppSelector((state) => state.process.ProcessInfomation)
    const dataProposal = useAppSelector((state) => state.Proposal.ProposalInfomation)
    const [DeleteSalary] = useDeleteSalaryMutation()
    const [DeleteProcess] = useDeleteProcessMutation()
    const [DeleteProposal] = useDeleteProposalMutation()
    const handleDeleteSalary = async () => {
        let result = await DeleteSalary(dataSalary.id).unwrap()
        if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
            toast.success("Bạn đã xóa thành công đề xuất tăng lương")
            setOpen(!open)
        }
    }

    const handleDeleteProcess = async () => {
        let result = await DeleteProcess(dataProcess.id).unwrap()
        if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
            toast.success("Bạn đã xóa thành công đề xuất thăng chức")
            setOpen(!open)
        }
    }

    const handleDeleteProposal = async () => {
        let result = await DeleteProposal(dataProposal.id).unwrap()
        if (result.code == RESPONSE_STATUS_CODE.SUCCESS) {
            toast.success("Bạn đã xóa thành công đề xuất tham mưu")
            setOpen(!open)
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
                <DialogTitle>{"Xóa đề xuất"}</DialogTitle>
                <DialogContent>
                    {ActionDelete == "Delete-salary" &&
                        <DialogContentText id="alert-dialog-slide-description">
                            Bạn có muốn xóa đề xuất tăng lương này
                        </DialogContentText>
                    }
                    {ActionDelete == "Delete-process" &&
                        <DialogContentText id="alert-dialog-slide-description">
                            Bạn có muốn xóa đề xuất thăng chức này
                        </DialogContentText>
                    }
                    {ActionDelete == "Delete-proposal" &&
                        <DialogContentText id="alert-dialog-slide-description">
                            Bạn có muốn xóa đề xuất tham mưu này
                        </DialogContentText>
                    }

                </DialogContent>

                <DialogActions>
                    {ActionDelete == "Delete-salary" &&

                        <ButtonSubmit
                            handleFuntion={() => handleDeleteSalary()}
                            name={"Xóa"}
                        />
                    }
                    {ActionDelete == "Delete-process" &&
                        <ButtonSubmit
                            handleFuntion={() => handleDeleteProcess()}
                            name={"Xóa"}
                        />
                    }
                    {ActionDelete == "Delete-proposal" &&
                        <ButtonSubmit
                            handleFuntion={() => handleDeleteProposal()}
                            name={"Xóa"}
                        />
                    }

                    <ButtonCancel
                        handleCancel={handleClose}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default DeleteModal