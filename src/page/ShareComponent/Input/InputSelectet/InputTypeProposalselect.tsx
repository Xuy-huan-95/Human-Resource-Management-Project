import TextField from '@mui/material/TextField';
import { ERROR_CODE } from "../../Constants/StatusCode"
import MenuItem from '@mui/material/MenuItem';

interface IInputTypeProposalselect {
    label: string,
    value: number,
    SetValue: any,
    FuntionOnchange: any,
    Validate: any,
    SetValidate: any
    ErrorEmpty: string,
    ErrorSyntax?: string,
}
const InputTypeProposalselect = (Props: IInputTypeProposalselect | any) => {
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
                    Đề xuất
                </MenuItem>
                <MenuItem value={2} >
                    Tiến cử
                </MenuItem>
                <MenuItem value={3} >
                    Tham mưu
                </MenuItem>
            </TextField >
        </>
    )
}

export default InputTypeProposalselect