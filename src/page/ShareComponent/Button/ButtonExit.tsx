import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface IButtonExit {
    handleClose: () => void
}

const ButtonExit = (props: IButtonExit) => {
    const { handleClose } = props
    return (
        <>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                }}
            >
                <CloseIcon className='icon-exit' />
            </IconButton>
        </>
    )
}

export default ButtonExit