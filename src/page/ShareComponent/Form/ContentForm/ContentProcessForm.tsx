import Resume from "../../../Component/Form/ResumeForm/ResumeForm"
import InfomationEmployee from "../../../Component/Form/InfomationEmployeeForm/InfomationEmployee"
import CertificateForm from "../../../Component/Form/CertificateForm/CertificateForm"
import ProcessIncreate from "../../../Component/Form/ProcessForm/ProcessIncrease"
import { IUser } from "../../../../interface/Employee.interface"

interface IContentEmployeeForm {
    selectedIndex: number
    dataUser: IUser
    setDataUser: any
}

const ContentProcessForm = (props: IContentEmployeeForm | any) => {
    const { selectedIndex, dataUser, setDataUser } = props
    return (
        <div>
            {selectedIndex == 0 &&
                <ProcessIncreate />
            }
            {selectedIndex == 1 &&
                <InfomationEmployee
                    dataUser={dataUser}
                    setDataUser={setDataUser}
                />
            }
            {selectedIndex == 2 &&
                <Resume />
            }
            {selectedIndex == 3 &&
                <CertificateForm />
            }
        </div>
    )
}

export default ContentProcessForm