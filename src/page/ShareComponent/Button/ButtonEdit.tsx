import EditIcon from '@mui/icons-material/Edit';
import "./Button.scss"
interface IButtonEdit {
    handleFuntion: any
}
const ButtonEdit = (props: IButtonEdit) => {
    const { handleFuntion } = props
    return (
        <span onClick={handleFuntion} className="ed" title='Cập nhật'>
            <EditIcon />
        </span>
    )
}

export default ButtonEdit