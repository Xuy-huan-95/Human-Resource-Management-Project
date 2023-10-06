import "./Signature.scss"
interface ISignature {
    NameUser: any
}
const Signature = (props: ISignature) => {
    const { NameUser } = props
    return (
        <>
            <div className="Signature-container">
                <div>Hà Nội, ngày 19 tháng 09 năm 2023</div>
                <div>NGƯỜI LÀM ĐƠN</div>
                <div>(Ký, ghi rõ họ tên)</div>
                <div>
                    <div>
                        {NameUser}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signature