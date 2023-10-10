import CustomTabPanel from "../../CustomTabPanel/CustomTabPanel"
import { STATUS_All } from "../../Constants/StatusIfomation"
import Resume from "../../../Component/Form/ResumeForm/ResumeForm"
import InfomationEmployee from "../../../Component/Form/InfomationEmployeeForm/InfomationEmployee"
import CertificateForm from "../../../Component/Form/CertificateForm/CertificateForm"
import { IUser } from "../../../../interface/Employee.interface"
import ProcessIncreate from "../../../Component/Form/ProcessForm/ProcessIncrease"

interface IContentProcessFormResponesive {
    value: number
    dataUser: IUser
    setDataUser: any
}


const ContentProcessFormResponesive = (props: IContentProcessFormResponesive) => {
    const { value, setDataUser, dataUser } = props
    return (
        <div>
            <CustomTabPanel value={value} index={STATUS_All.ZERO}>
                <ProcessIncreate />
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

export default ContentProcessFormResponesive