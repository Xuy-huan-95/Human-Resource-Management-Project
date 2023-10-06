import Resume from "../../../Component/Form/ResumeForm/ResumeForm"
import InfomationEmployee from "../../../Component/Form/InfomationEmployeeForm/InfomationEmployee"
import CertificateForm from "../../../Component/Form/CertificateForm/CertificateForm"
import { IUser } from "../../../../interface/Employee.interface"

interface IContentEmployeeForm {
    selectedIndex: number
    dataUser: IUser
    setDataUser: any
}

const ContentEmployeeForm = (props: IContentEmployeeForm | any) => {
    const { selectedIndex, dataUser, setDataUser } = props
    return (
        <div>
            {selectedIndex == 0 &&
                <Resume />
            }
            {selectedIndex == 1 &&
                <InfomationEmployee
                    dataUser={dataUser}
                    setDataUser={setDataUser}
                />
            }
            {selectedIndex == 2 &&
                <CertificateForm />
            }
        </div>
    )
}

export default ContentEmployeeForm