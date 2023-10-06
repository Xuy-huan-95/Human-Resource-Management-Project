import Button from '@mui/material/Button';
import React from 'react';
import "./Button.scss"
interface IButtonCancel {
    handleCancel: () => void
}

const ButtonCancel = (props: IButtonCancel) => {
    const { handleCancel } = props
    return (
        <>
            < Button variant="contained" onClick={() => handleCancel()} disableElevation className='cancel'>
                Hủy
            </Button>
        </>
    )
}

export default ButtonCancel