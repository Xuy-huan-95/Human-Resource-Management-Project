import Button from '@mui/material/Button';
import React from 'react';
import "./Button.scss"
interface IButtonSubmit {
    handleFuntion: any
    name: string
}

const ButtonSubmit = (props: IButtonSubmit) => {
    const { handleFuntion, name } = props
    return (
        <>
            < Button variant="contained" onClick={() => handleFuntion()} disableElevation className='Submit'>
                {name}
            </Button>
        </>
    )
}

export default ButtonSubmit