import AddCircleIcon from '@mui/icons-material/AddCircle';

interface IButtonAdd {
    handleFuntion: any
}

const ButtonAdd = (props: IButtonAdd) => {
    const { handleFuntion } = props
    return (
        <>
            <span onClick={handleFuntion} className="ad" title='Thêm mới '>
                <AddCircleIcon />
            </span>
        </>
    )
}

export default ButtonAdd