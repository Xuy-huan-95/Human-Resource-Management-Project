export const RESPONSE_STATUS_CODE = {
    SUCCESS: 200,
};


export const ERROR_CODE = {
    EMPTY: "1",
    SYNTAX: "2"
}

export const ERROR_STATUS_EMPTY = {
    ONE: "Bạn không được để trống Tên nhân viên",
    TWO: "Bạn không được để trống Mã nhân viên",
    THREE: "Bạn không được để trống Email",
    FOUR: "Bạn không được để trống Số Điện thoại",
    FIVE: "Bạn không được để trống Địa chỉ",
    SIX: "Bạn không được để trống Giới tính",
    SEVEN: "Bạn không được để trống Nhóm",
    EIGHT: "Bạn không được để trống Ngày sinh",
    NIGHT: "Bạn không được để trống Số CCCD",
    TEN: "Bạn không được để trống Ngày cấp",
    ELEVEN: "Bạn không được để trống Nơi cấp",
    TWELVE: "Bạn không được để trống Dân tộc",
    THIRTEEN: "Bạn không được để trống Tôn giáo",
    FOURTEEN: "Bạn không được để trống Tên văn bằng",
    FIFTEEN: "Bạn không được để trống Xếp loại",
    SIXTEEN: "Bạn không được để trống Ngày cấp",
    SEVENTEEN: "Bạn không được để trống Nội dung văn bằng",
    EIGHTEEN: "Bạn không được để trống Tên người thân",
    NIGHTEEN: "Bạn không được để trống Mối quan hệ",
    TWENTY: "Bạn không được để trống mức lương cũ",
    TWENTYONE: "Bạn không được để trống mức lương mới",
    TWENTYTWO: "Ngày hiệu lực không hợp lệ",
    TWENTYTHREE: "Bạn không được để trống lí do muốn tăng lương",
    TWENTYFOUR: "Bạn không được để trống vị trí chức vụ mới",
    TWENTYFIVE: "Bạn không được để trống ngày hiệu lực",
    TWENTYSIX: "Bạn không được bỏ trống lọai đề xuất",
    TWENTYSEVEN: "Bạn không được bỏ trống Nội dung",
    TWENTYEIGHT: "Bạn không được bỏ trống Mô tả chi tiết",
    TWENTYNIGHT: "Bạn không được để trống ngày bắt đầu",
    THIRTY: "Bạn không được để trống ngày kết thúc",
    THIRTYONE: "Bạn không được để trống tên công ty",
    THIRTYTWO: "Bạn không được để trống địa chỉ công ty",
    THIRTYTHREE: "Bạn không được để trống nội dung công việc",
    THIRTYFOUR: "Bạn không được để trống lãnh đạo cần trình",
    THIRTYFIVE: "Bạn không được để trống ghi chú",
    THIRTYSIX: "Ngày nộp lưu không được để trống và phải lớn hơn ngày hiện tại",
    THIRTYSEVEN: "Mã nộp lưu gồm 3 số bất kỳ và không được để trống",
    THIRTYEIGHT: "Ngày phê duyệt không được để trống và không được nhỏ hơn ngày hiện tại",
    THIRTYNIGHT: "Bạn không dược để trống lí do yêu cầu",
    FORTY: "Bạn không dược để trống ngày từ chối",
    FORTYONE: "Bạn không dược để trống lí do từ chối",



}

export const ERROR_STATUS_SYNTAX = {
    ONE: "Tên của nhân viên không có số bên trong",
    TWO: "Mã nhân viên định dạng NV + 23 + 3 số bất kỳ",
    THREE: "Định dạng Email là ABC123@gmail.com",
    FOUR: "Định dạng số điện là 10 số",
    EIGHT: "Người đăng ký vui lòng đủ 18 tuổi",
    NIGHT: "Số căn cước công dân phải lớn hơn 9 và nhỏ hơn 12 số",
    TEN: "Ngày cấp phải nhỏ hơn hoặc bằng ngày hiện tại",
    SIXTEEN: "Ngày cấp phải trước ngày hiện tại",
    EIGHTEEN: "Tên người thân không có số",
    TWENTY: "Mức lương cũ phải lớn hơn 0 và nhỏ hơn 1000000000 VND",
    TWENTYONE: "Mức lương mới phải lớn hơn 0 và nhỏ hơn 1000000000 VND và Mức lương mới cần phải lớn hơn mức lương cũ",
    TWENTYTWO: "Ngày hiệu lực phải lớn hơn ngày hiện tại",
    TWENTYFIVE: "Ngày hiệu lực phải lớn hơn ngày hiện tại",
    THIRTY: " Ngày kết thúc phải lớn hơn ngày bắt đầu",

}
