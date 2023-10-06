import VisibilityIcon from '@mui/icons-material/Visibility';
import "./Button.scss"
interface IButtonView {
    handleFuntion: any
}
const ButtonView = (props: IButtonView) => {
    const { handleFuntion } = props
    return (
        <span onClick={handleFuntion} title='Xem chi tiết' className="vi">
            <VisibilityIcon />
        </span>
    )
}

export default ButtonView