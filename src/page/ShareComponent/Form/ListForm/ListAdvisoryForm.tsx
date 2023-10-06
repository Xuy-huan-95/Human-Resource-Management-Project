import ListItemButton from '@mui/material/ListItemButton';
import { StyledList } from "./StyledList/StyledList"
import ListItemText from '@mui/material/ListItemText';
import { IListForm } from "./ListFormType/ListFormType"
import { STATUS_All } from "../../Constants/StatusIfomation"

const ListAdvisoryForm = (props: IListForm | any) => {
    const { selectedIndex, handleListItemClick } = props

    return (
        <>
            <StyledList >
                <ListItemButton
                    selected={selectedIndex === STATUS_All.ZERO}
                    onClick={() => handleListItemClick(STATUS_All.ZERO)}
                >
                    <ListItemText primary="Biểu mẫu tham mưu"
                        className='registration-Forms-item'
                    />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === STATUS_All.ONE}
                    onClick={() => handleListItemClick(STATUS_All.ONE)}
                >
                    <ListItemText primary="Hồ sơ nhân viên"
                        className='registration-Forms-item'
                    />
                </ListItemButton>
                <ListItemButton
                    className='registration-Forms-item'
                    selected={selectedIndex === STATUS_All.TWO}
                    onClick={() => handleListItemClick(STATUS_All.TWO)}
                >
                    <ListItemText primary="Sơ yếu lý lịch"
                        className='registration-Forms-item'
                    />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === STATUS_All.THREE}
                    onClick={() => handleListItemClick(STATUS_All.THREE)}
                >
                    <ListItemText primary="Văn bằng"
                        className='registration-Forms-item'
                    />
                </ListItemButton>
            </StyledList>
        </>
    )
}

export default ListAdvisoryForm