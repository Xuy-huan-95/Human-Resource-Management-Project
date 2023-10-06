import TextField from '@mui/material/TextField';
import { ERROR_CODE } from "../Constants/StatusCode"
import moment from 'moment';
interface IInput {
    label?: string,
    value?: any,
    SetValue?: any,
    type?: string,
    FuntionOnchange?: any,
    Validate?: any,
    SetValidate?: any
    ErrorEmpty?: string,
    ErrorSyntax?: string,
    sx?: string
    multiline?: any
    defaultValue: any
}
const Input = (Props: IInput | any) => {
    const { label, value, type, FuntionOnchange, Validate, ErrorEmpty, ErrorSyntax, sx, defaultValue } = Props
    return (
        <>
            {label == "Nội dung công việc" || label == "Vui lòng nhập Kỹ năng" || label == "Vui lòng nhập hoạt động" || label == "Vui lòng nhập hiểu biết" ?
                <TextField
                    required
                    id="outlined-required"
                    label={label}
                    type={type}
                    fullWidth
                    defaultValue={defaultValue}
                    value={type == "date" && label == "Ngày hiệu lực" && !value ? moment(new Date()).format("YYYY-MM-DD") : value}
                    onChange={FuntionOnchange}
                    size='small'
                    sx={sx}
                    error={Validate === ERROR_CODE.EMPTY || Validate === ERROR_CODE.SYNTAX}
                    helperText={Validate === ERROR_CODE.EMPTY && ErrorEmpty || Validate === ERROR_CODE.SYNTAX && ErrorSyntax}
                    maxRows={5}
                    multiline

                />
                :
                <TextField
                    required
                    id="outlined-required"
                    label={label}
                    type={type}
                    fullWidth
                    value={value}
                    onChange={FuntionOnchange}
                    size='small'
                    sx={sx}
                    error={Validate === ERROR_CODE.EMPTY || Validate === ERROR_CODE.SYNTAX}
                    helperText={Validate === ERROR_CODE.EMPTY && ErrorEmpty || Validate === ERROR_CODE.SYNTAX && ErrorSyntax}
                />
            }

        </>
    )
}

export default Input