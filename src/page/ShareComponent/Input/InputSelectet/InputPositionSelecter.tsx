import TextField from '@mui/material/TextField';
import { ERROR_CODE } from "../../Constants/StatusCode"
import MenuItem from '@mui/material/MenuItem';

interface IInputTeamSelecter {
    label: string,
    value: number,
    SetValue: any,
    FuntionOnchange: any,
    Validate: any,
    SetValidate: any
    ErrorEmpty: string,
    ErrorSyntax?: string,
    valueDiable?: boolean
}
const InputPositionSelecter = (Props: IInputTeamSelecter | any) => {
    const { label, value, FuntionOnchange, Validate, ErrorEmpty, valueDiable } = Props
    return (
        <>
            <TextField
                id="outlined-select-currency"
                select
                label={label}
                fullWidth
                value={value ? value : ""}
                onChange={FuntionOnchange}
                size='small'
                error={Validate === ERROR_CODE.EMPTY}
                helperText={Validate === ERROR_CODE.EMPTY && ErrorEmpty}
                disabled={valueDiable ? valueDiable : false}
            >
                <MenuItem value={1} >
                    Nhân viên Ba
                </MenuItem>
                <MenuItem value={2} >
                    Nhân viên It
                </MenuItem>
                <MenuItem value={3} >
                    Nhân viên Tester
                </MenuItem>
                <MenuItem value={4} >
                    Trưởng nhóm Tester
                </MenuItem>
                <MenuItem value={5} >
                    Trưởng nhóm It
                </MenuItem>
                <MenuItem value={6} >
                    Trưởng nhóm Ba
                </MenuItem>
                <MenuItem value={7} >
                    Quản lý dự án
                </MenuItem>
            </TextField>
        </>
    )
}

export default InputPositionSelecter 