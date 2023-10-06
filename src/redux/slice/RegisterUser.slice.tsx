import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../interface/Employee.interface"



interface IdataUser {
    userInfomation: IUser
}
const initialSate: IdataUser = {
    userInfomation: {
        activity: "",
        additionalRequest: "",
        additionalRequestTermination: "",
        address: "",
        appointmentDate: "",
        certificatesDto: [],
        code: "",
        currentPosition: "",
        dateOfBirth: "",
        dateOfIssuanceCard: "",
        decisionDay: "",
        email: "",
        employeeFamilyDtos: [],
        endDay: "",
        ethnic: "",
        gender: 0,
        id: 0,
        image: "",
        knowledge: "",
        leaderId: 0,
        leaderName: "",
        leaderPosition: "",
        name: "",
        numberSaved: "",
        phone: "",
        placeOfIssueCard: "",
        reasonForEnding: "",
        reasonForRefuseEndProfile: "",
        reasonForRejection: "",
        refuseEndProfileDay: "",
        rejectionDate: "",
        religion: "",
        skill: "",
        submitContent: "",
        submitDay: "",
        submitProfileStatus: "",
        team: 0,
        terminationAppointmentDate: "",
        citizenIdentificationNumber: ""
    }

}

const DataUserSlice = createSlice({
    name: "datainfomation",
    initialState: initialSate,
    reducers: {
        GetResultData: (state, { payload }) => {
            state.userInfomation = payload;
        },
    },
})
const DataUserReducer = DataUserSlice.reducer

export const { GetResultData } = DataUserSlice.actions
export default DataUserSlice.reducer