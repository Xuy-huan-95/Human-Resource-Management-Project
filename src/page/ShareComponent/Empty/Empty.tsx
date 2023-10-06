import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import "./Empty.scss"
const Empty = () => {
    return (
        <TableBody >
            <TableRow hover role="checkbox" tabIndex={-1} >
                <TableCell colSpan={12} className='empty-row'>
                    <div>Không có dữ liệu</div>
                </TableCell>

            </TableRow>

        </TableBody>
    );
}

export default Empty