import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IProccess } from "../../interface/Proccess.interface"



interface IProccessIncreate {
    ProcessInfomation: IProccess
}
const initialSate: IProccessIncreate = {
    ProcessInfomation: {
        id: 0,
        promotionDay: "",
        times: "",
        currentPosition: "",
        newPosition: "",
        note: "",
        processStatus: "",
        acceptanceDate: "",
        additionalRequest: "",
        reasonForRefusal: "",
        rejectionDate: "",
        leaderId: "",
        employeeId: 0,
    }

}

const ProcessSlice = createSlice({
    name: "process",
    initialState: initialSate,
    reducers: {
        GetResultProcess: (state, { payload }) => {
            state.ProcessInfomation = payload;
        },
    },

})
const DataProcessReducer = ProcessSlice.reducer

export const { GetResultProcess } = ProcessSlice.actions
export default ProcessSlice.reducer