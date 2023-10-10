import CustomTabPanel from "../../../ShareComponent/CustomTabPanel/CustomTabPanel"
import { STATUS_All } from "../../Constants/StatusIfomation"
import Resume from "../../../Component/Form/ResumeForm/ResumeForm"
import InfomationEmployee from "../../../Component/Form/InfomationEmployeeForm/InfomationEmployee"
import CertificateForm from "../../../Component/Form/CertificateForm/CertificateForm"
import { IUser } from "../../../../interface/Employee.interface"
import SalaryIncreate from "../../../Component/Form/SalaryForm/SalaryForm"

interface IContentEmployeeFormResponesive {
    value: number
    dataUser: IUser
    setDataUser: any
}


const ContentSalaryFormResponesive = (props: IContentEmployeeFormResponesive) => {
    const { value, setDataUser, dataUser } = props
    return (
        <div>
            <CustomTabPanel value={value} index={STATUS_All.ZERO}>
                <SalaryIncreate />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={STATUS_All.ONE}>
                <Resume />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={STATUS_All.TWO}>
                <InfomationEmployee
                    dataUser={dataUser}
                    setDataUser={setDataUser}
                />            </CustomTabPanel>
            <CustomTabPanel value={value} index={STATUS_All.THREE}>
                <CertificateForm />
            </CustomTabPanel>
        </div>
    )
}

export default ContentSalaryFormResponesive