import "./Button.scss"
import MenuBookIcon from '@mui/icons-material/MenuBook';

interface IButtonEndCode {
    handleFuntion: any
}
const ButtonEndCode = (props: IButtonEndCode) => {
    const { handleFuntion } = props
    return (
        <span onClick={handleFuntion} title='Xem chi tiết' className="ec">
            <MenuBookIcon />
        </span>
    )
}

export default ButtonEndCode