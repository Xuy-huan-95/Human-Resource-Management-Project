import { NAME_STATUS_APPROVE } from "../../../../ShareComponent/Constants/StatusIfomation"

interface INameTitleApprove {
    actionApprove: string
}
const NameTitleApprove = (props: INameTitleApprove) => {
    const { actionApprove } = props
    return (
        <>
            {actionApprove == "Refuse-Document_access" && NAME_STATUS_APPROVE.ONE}
            {actionApprove == "Need-Document_access" && NAME_STATUS_APPROVE.TWO}
            {actionApprove == "User-Approve" && NAME_STATUS_APPROVE.THREE}
            {actionApprove == "End-Approve" && NAME_STATUS_APPROVE.FOUR}
            {actionApprove == "Need-Document" && NAME_STATUS_APPROVE.FIVE}
            {actionApprove == "Refuse" && NAME_STATUS_APPROVE.SIX}
            {actionApprove == "Salary-Approve" && NAME_STATUS_APPROVE.SEVEN}
            {actionApprove == "Process-Approve" && NAME_STATUS_APPROVE.EIGHT}
            {actionApprove == "Need-Document_salary" && NAME_STATUS_APPROVE.NIGHT}
            {actionApprove == "Refuse-Document_salary" && NAME_STATUS_APPROVE.TEN}
            {actionApprove == "Need-Document_Process" && NAME_STATUS_APPROVE.ELEVEN}
            {actionApprove == "Refuse-Document_process" && NAME_STATUS_APPROVE.TWELE}
            {actionApprove == "proposal-Approve" && NAME_STATUS_APPROVE.THIRTEEN}
            {actionApprove == "Need-Document_Proposal" && NAME_STATUS_APPROVE.FOURTEEN}
            {actionApprove == "Refuse-Document_Proposal" && NAME_STATUS_APPROVE.FIFTEEN}
        </>
    )
}

export default NameTitleApprove