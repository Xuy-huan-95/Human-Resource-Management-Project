import Resume from "../../../Component/Form/ResumeForm/ResumeForm"
import InfomationEmployee from "../../../Component/Form/InfomationEmployeeForm/InfomationEmployee"
import CertificateForm from "../../../Component/Form/CertificateForm/CertificateForm"
import SalaryIncreate from "../../../Component/Form/SalaryForm/SalaryForm"
import { IUser } from "../../../../interface/Employee.interface"
import { STATUS_All } from "../../Constants/StatusIfomation"

interface IContentSalaryForm {
    selectedIndex: number
    dataUser: IUser
    setDataUser: any
}

const ContentSalaryForm = (props: IContentSalaryForm | any) => {
    const { selectedIndex, dataUser, setDataUser } = props
    return (
        <div>
            {selectedIndex == STATUS_All.ZERO &&
                <SalaryIncreate />
            }
            {selectedIndex == STATUS_All.ONE &&
                <InfomationEmployee
                    dataUser={dataUser}
                    setDataUser={setDataUser}
                />
            }
            {selectedIndex == STATUS_All.TWO &&
                <Resume />
            }
            {selectedIndex == STATUS_All.THREE &&
                <CertificateForm />
            }
        </div>
    )
}

export default ContentSalaryForm