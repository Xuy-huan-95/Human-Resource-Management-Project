import TextField from '@mui/material/TextField';
import { ERROR_CODE } from "../../Constants/StatusCode"
import MenuItem from '@mui/material/MenuItem';

interface IInputTeamSelecter {
    label: string,
    value: any,
    SetValue: any,
    FuntionOnchange: any,
    Validate: any,
    SetValidate: any
    ErrorEmpty: string,
    ErrorSyntax?: string,
}
const InputTeamSelecter = (Props: IInputTeamSelecter | any) => {
    const { label, value, FuntionOnchange, Validate, ErrorEmpty } = Props
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
            >
                <MenuItem value={1} >
                    Reactjs
                </MenuItem>
                <MenuItem value={2} >
                    Java
                </MenuItem>
                <MenuItem value={3} >
                    Mobile
                </MenuItem>
                <MenuItem value={4} >
                    Tester
                </MenuItem>
                <MenuItem value={5} >
                    NHÂN VIÊN KINH DOANH
                </MenuItem>
            </TextField>
        </>
    )
}

export default InputTeamSelecter