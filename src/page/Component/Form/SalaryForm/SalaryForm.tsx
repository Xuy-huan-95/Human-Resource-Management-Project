import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import "./SalaryForm.scss"
import Signature from "../../../ShareComponent/Signature/Signature"

const SalaryForm = () => {
    const dataToSendLeader = useAppSelector((state) => state.registerUser.userInfomation)
    const dataSalry = useAppSelector((state) => state.salary.SalaryInfomation)
    return (
        <div className="SalaryIncreate-contanier">
            <div className="all">
                <div className="title">
                    <div className="title-left">
                        <div className="company-name">
                            CÔNG TY OCEANTECH
                        </div>
                        <div className="Number-Decision">
                            Số: 03/02-QĐ-TL
                        </div>
                    </div>
                    <div className="title-right">
                        <div className="country-name">
                            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                        </div>
                        <div className="Slogan">
                            Độc lập - Tự do - Hạnh phúc
                        </div>
                        <div>
                            ----------------------------
                        </div>
                    </div>
                </div>
                <div className="time-do">
                    Hà Nội, ngày 18 tháng 09 năm 2023
                </div>
                <div className="name-decision">
                    <div>QUYẾT ĐỊNH</div>
                    <div>Về việc tăng lương cho Nhân viên</div>
                </div>
                <div className="content-decision">
                    <div className="item">- Căn cứ Giấy chứng ĐKKD số 0106145319 ngày 08 tháng 04 năm 2013 của Công ty OCEANTECH</div>
                    <div className="item">
                        - Căn cứ vào hợp đồng lao động với người lao động
                    </div>
                    <div className="item">
                        - Căn cứ những đóng góp thực tế của Ông/Bà <b>{dataToSendLeader?.name}</b> đối với sự phát triển của Công ty OCEANTECH.
                    </div>
                    <div className="item">
                        - Xét đề nghị của Trưởng phòng nhân sự.
                    </div>
                </div>
                <div className="responsibility">
                    <div className="responsibility-title">
                        QUYẾT ĐỊNH
                    </div>
                    <div className="responsibility-content">
                        <div> Điều 1: Kể từ ngày 18 tháng 09 năm 2023, mức lương chính thức của Ông/Bà: <b>{dataToSendLeader?.name}</b> sẽ là: <b>{dataSalry.newSalary}</b> VND</div>
                        <div>Điều 2: Các ông/bà Phòng Nhân sự, Phòng Tài chính Kế toán và Ông/Bà : <b>{dataToSendLeader?.name}</b> căn cứ quyết định thi hành.</div>
                    </div>
                </div>
                <Signature
                    NameUser={dataToSendLeader?.name}
                />
            </div>
        </div>
    );
}

export default SalaryForm