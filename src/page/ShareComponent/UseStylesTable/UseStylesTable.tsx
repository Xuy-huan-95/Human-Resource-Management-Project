import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    table: {
        minWidth: 650,
        "& .MuiTableCell-root": {
            border: '1px solid #e6e0df',
        },
    },
    ul: {
        "& .muipaginationitem-root": {
            color: "#fff"
        }
    }
});