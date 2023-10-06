import TextField from '@mui/material/TextField';
import { ERROR_CODE } from "../../Constants/StatusCode"
import MenuItem from '@mui/material/MenuItem';

interface IInputGenderSelecter {
    label: string,
    value: number,
    SetValue: any,
    FuntionOnchange: any,
    Validate: any,
    SetValidate: any
    ErrorEmpty: string,
    ErrorSyntax?: string,
}
const InputGenderSelecter = (Props: IInputGenderSelecter | any) => {
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
                    Nam
                </MenuItem>
                <MenuItem value={2} >
                    Nữ
                </MenuItem>
                <MenuItem value={3} >
                    Khác
                </MenuItem>



            </TextField >
        </>
    )
}

export default InputGenderSelecter