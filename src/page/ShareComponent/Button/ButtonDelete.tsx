import DeleteIcon from '@mui/icons-material/Delete';
import "./Button.scss"
interface IButtonDelete {
    handleFuntion: any
}
const ButtonDelete = (props: IButtonDelete) => {
    const { handleFuntion } = props
    return (
        <span onClick={handleFuntion} title='Xóa' className="de">
            <DeleteIcon />
        </span>
    )
}

export default ButtonDelete