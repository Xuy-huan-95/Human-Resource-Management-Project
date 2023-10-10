import CustomTabPanel from "../../../ShareComponent/CustomTabPanel/CustomTabPanel"
import { STATUS_All } from "../../Constants/StatusIfomation"
import Resume from "../../../Component/Form/ResumeForm/ResumeForm"
import InfomationEmployee from "../../../Component/Form/InfomationEmployeeForm/InfomationEmployee"
import CertificateForm from "../../../Component/Form/CertificateForm/CertificateForm"
import { IUser } from "../../../../interface/Employee.interface"

interface IContentEmployeeFormResponesive {
    value: number
    dataUser: IUser
    setDataUser: any
}


const ContentEmployeeFormResponesive = (props: IContentEmployeeFormResponesive) => {
    const { value, setDataUser, dataUser } = props
    return (
        <div>
            <CustomTabPanel value={value} index={STATUS_All.ZERO}>
                <InfomationEmployee
                    dataUser={dataUser}
                    setDataUser={setDataUser}
                />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={STATUS_All.ONE}>
                <Resume />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={STATUS_All.TWO}>
                <CertificateForm />
            </CustomTabPanel>
        </div>
    )
}

export default ContentEmployeeFormResponesive