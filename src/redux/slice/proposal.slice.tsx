import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IProposal } from "../../interface/Proposal.interface"



interface IProposalIncreate {
    ProposalInfomation: IProposal
}
const initialSate: IProposalIncreate = {
    ProposalInfomation: {
        id: 0,
        employeeId: 0,
        proposalDate: "",
        content: "",
        note: "",
        type: "",
        detailedDescription: "",
        proposalStatus: "",
        acceptanceDate: "",
        additionalRequest: "",
        reasonForRefusal: "",
        rejectionDate: "",
        leaderId: "",
    }

}

const ProposalSlice = createSlice({
    name: "Proposal",
    initialState: initialSate,
    reducers: {
        GetResultProposal: (state, { payload }) => {
            state.ProposalInfomation = payload;
        },
    },

})
const DataProposalReducer = ProposalSlice.reducer

export const { GetResultProposal } = ProposalSlice.actions
export default ProposalSlice.reducer