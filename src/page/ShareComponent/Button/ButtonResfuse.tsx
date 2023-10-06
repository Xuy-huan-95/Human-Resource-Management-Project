import Button from '@mui/material/Button';
import "./Button.scss"
interface IButtonDelete {
    handleFuntion: any
}
const ButtonResfuse = (props: IButtonDelete) => {
    const { handleFuntion } = props
    return (
        < Button variant="contained" onClick={() => handleFuntion()} disableElevation className='Resfuse'>
            Từ chối
        </Button>
    )
}

export default ButtonResfuse