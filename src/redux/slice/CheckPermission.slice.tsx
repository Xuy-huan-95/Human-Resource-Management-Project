import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



interface IProccessIncreate {
    name: string
}
const initialSate: IProccessIncreate = {
    name: ""
}

const PermissionSlice = createSlice({
    name: "Permission",
    initialState: initialSate,
    reducers: {
        GetPermisson: (state, { payload }) => {
            state.name = payload;
        },
    },

})
const PermissionReducer = PermissionSlice.reducer

export const { GetPermisson } = PermissionSlice.actions
export default PermissionSlice.reducer