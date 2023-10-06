import FmdBadIcon from '@mui/icons-material/FmdBad';
import "./Button.scss"
interface IButtonViewReason {
    handleFuntion: any
}
const ButtonViewReason = (props: IButtonViewReason) => {
    const { handleFuntion } = props
    return (
        <span onClick={handleFuntion} title='Xem chi tiết' className="ss">
            <FmdBadIcon />
        </span>
    )
}

export default ButtonViewReason