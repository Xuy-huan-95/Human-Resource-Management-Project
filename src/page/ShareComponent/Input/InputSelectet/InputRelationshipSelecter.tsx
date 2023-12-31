import TextField from '@mui/material/TextField';
import { ERROR_CODE } from "../../Constants/StatusCode"
import MenuItem from '@mui/material/MenuItem';

interface IInputRelationshipSelecter {
    label: string,
    value: number,
    SetValue: any,
    FuntionOnchange: any,
    Validate: any,
    SetValidate: any
    ErrorEmpty: string,
    ErrorSyntax?: string,
}
const InputRelationshipSelecter = (Props: IInputRelationshipSelecter | any) => {
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
                    Ông/bà
                </MenuItem>
                <MenuItem value={2} >
                    Cha/mẹ
                </MenuItem>
                <MenuItem value={3} >
                    Cô/gì/chú/bác
                </MenuItem>
                <MenuItem value={4} >
                    Anh/chị/em
                </MenuItem>
                <MenuItem value={5} >
                    Vợ
                </MenuItem>
            </TextField>
        </>
    )
}

export default InputRelationshipSelecter