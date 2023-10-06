import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TableAddNewUser from "../../Component/Table/TableAddUser"
import TableManageUser from "../../Component/Table/TableManageUser"
import TableEnd from "../../Component/Table/TableEndUser"
import TableManagePendingApprove from "../../Component/Table/TableManagePendingApprove"
import TableLeaderApproved from "../../Component/Table/TableLeaderApproved"
import { STATUS_All } from "../Constants/StatusIfomation"

interface ICenterTable {
    name: string
    selectedIndex: number
}
const CenterComponent = (props: ICenterTable) => {
    const { selectedIndex, name } = props
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));
    return (
        <div>
            {name == "user" ?
                <>
                    <DrawerHeader />
                    <Typography paragraph>
                        {selectedIndex === STATUS_All.ONE &&
                            <TableAddNewUser />
                        }
                        {selectedIndex === STATUS_All.TWO &&
                            <TableManageUser />
                        }

                        {selectedIndex === STATUS_All.THREE &&
                            <TableEnd />
                        }
                    </Typography>
                </>
                :
                <>
                    <DrawerHeader />
                    <Typography paragraph>

                        {selectedIndex === STATUS_All.ONE &&
                            <TableManagePendingApprove />
                        }
                        {selectedIndex === STATUS_All.TWO &&
                            <TableLeaderApproved />
                        }
                    </Typography>
                </>

            }
        </div>
    )
}

export default CenterComponent