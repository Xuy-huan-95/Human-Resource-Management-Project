import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ISalaryIncreate } from "../../interface/SalaryIncreate.interface"



interface IdataSalary {
    SalaryInfomation: ISalaryIncreate
}
const initialSate: IdataSalary = {
    SalaryInfomation: {
        id: 0,
        startDate: "",
        times: "",
        reason: "",
        currentPosition: "",
        note: "",
        oldSalary: "",
        newSalary: "",
        salaryIncreaseStatus: 0,
        acceptanceDate: "",
        additionalRequest: "",
        reasonForRefusal: "",
        rejectionDate: "",
        leaderId: "",
        employeeId: 0,
    }

}

const IncreateSlice = createSlice({
    name: "Salaryfomation",
    initialState: initialSate,
    reducers: {
        GetResultDataSalary: (state, { payload }) => {
            state.SalaryInfomation = payload;
        },
    },
})
const DataSalaryReducer = IncreateSlice.reducer

export const { GetResultDataSalary } = IncreateSlice.actions
export default IncreateSlice.reducer