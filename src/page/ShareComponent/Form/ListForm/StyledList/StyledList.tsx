
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

export const StyledList = styled(List)({
    // selected and (selected + hover) states
    '&& .Mui-selected, && .Mui-selected:hover': {
        backgroundColor: '#dedada',
        '&, & .MuiListItemIcon-root': {
            color: 'balck',
        },
    },
    // hover states
    '& .MuiListItemButton-root:hover': {
        backgroundColor: '#f5f5f5',
        '&, & .MuiListItemIcon-root': {
            color: 'black',
        },
    },
});