export const RESPONSE_STATUS_CODE = {
    SUCCESS: 200,
    WRONGEMAIL: 4301,
    WRONGCITIZENIDENTIFICATIONNUMBER: 4517,
    WRONGPHONE: 4315
};



export const ERROR_CODE = {
    EMPTY: "1",
    SYNTAX: "2",
    OTHER: "3"
}

export const ERROR_STATUS_EMPTY = {
    ONE: "Bạn không được để trống Tên nhân viên và tên nhân viên không được vượt quá 50 ký tự",
    TWO: "Bạn không được để trống Mã nhân viên",
    THREE: "Bạn không được để trống Email và Email không được vượt quá 255 ký tự",
    FOUR: "Bạn không được để trống Số Điện thoại",
    FIVE: "Bạn không được để trống Địa chỉ và Địa chỉ không được vượt quá 255 ký tự",
    SIX: "Bạn không được để trống Giới tính",
    SEVEN: "Bạn không được để trống Nhóm",
    EIGHT: "Bạn không được để trống Ngày sinh",
    NIGHT: "Bạn không được để trống Số CCCD",
    TEN: "Bạn không được để trống Ngày cấp",
    ELEVEN: "Bạn không được để trống Nơi cấp và Nơi cấp không được vượt quá 255 ký tự",
    TWELVE: "Bạn không được để trống Dân tộc và Tên dân tộc không được vượt quá 255 ký tự",
    THIRTEEN: "Bạn không được để trống Tôn giáo và Tên tôn giáo không được vượt quá 255 ký tự",
    FOURTEEN: "Bạn không được để trống Tên văn bằng và Tên văn bằng không được vượt quá 50 ký tự ",
    FIFTEEN: "Bạn không được để trống Xếp loại và Xếp loại không được vượt quá 255 ký tự ",
    SIXTEEN: "Bạn không được để trống Ngày cấp",
    SEVENTEEN: "Bạn không được để trống Nội dung văn bằng và Nội dung văn bằng không được vượt quá 255 ký tự",
    EIGHTEEN: "Bạn không được để trống Tên người thân và Tên người thân không được vượt quá 50 ký tự",
    NIGHTEEN: "Bạn không được để trống Mối quan hệ",
    TWENTY: "Bạn không được để trống mức lương cũ ",
    TWENTYONE: "Bạn không được để trống mức lương mới",
    TWENTYTWO: "Ngày hiệu lực không hợp lệ",
    TWENTYTHREE: "Bạn không được để trống lí do muốn tăng lương và Lí do muốn tăng lương không được vượt quá 255 ký tự",
    TWENTYFOUR: "Bạn không được để trống vị trí chức vụ mới",
    TWENTYFIVE: "Bạn không được để trống ngày hiệu lực",
    TWENTYSIX: "Bạn không được bỏ trống lọai đề xuất và Loại đề xuất không được vượt quá 255 ký tự",
    TWENTYSEVEN: "Bạn không được bỏ trống Nội dung và Nội dung không được vượt quá 255 ký tự",
    TWENTYEIGHT: "Bạn không được bỏ trống Mô tả chi tiết và Mô tả chi tiết không được vượt quá 255 ký tự",
    TWENTYNIGHT: "Bạn không được để trống ngày bắt đầu",
    THIRTY: "Bạn không được để trống ngày kết thúc",
    THIRTYONE: "Bạn không được để trống tên công ty và Tên công ty không được vượt quá 50 ký tự",
    THIRTYTWO: "Bạn không được để trống địa chỉ công ty và Địa chỉ công ty công ty không được vượt quá 255 ký tự",
    THIRTYTHREE: "Bạn không được để trống nội dung công việc và Nội dung công việc không được vượt quá 255 ký tự",
    THIRTYFOUR: "Bạn không được để trống lãnh đạo cần trình",
    THIRTYFIVE: "Bạn không được để trống ghi chú và Ghi chú không được vượt quá 255 ký tự",
    THIRTYSIX: "Ngày nộp lưu không được để trống và phải lớn hơn ngày hiện tại",
    THIRTYSEVEN: "Mã nộp lưu gồm 3 số bất kỳ và không được để trống",
    THIRTYEIGHT: "Ngày phê duyệt không được để trống và không được nhỏ hơn ngày hiện tại",
    THIRTYNIGHT: "Bạn không dược để trống lí do yêu cầu và Lí do yêu cầu không được vượt quá 255 ký tự",
    FORTY: "Bạn không dược để trống ngày từ chối",
    FORTYONE: "Bạn không dược để trống và Lí do từ chối không được vượt quá 255 ký tự",
}

export const ERROR_STATUS_SYNTAX = {
    ONE: "Tên của nhân viên không có số bên trong",
    TWO: "Mã nhân viên định dạng NV + 2 số cuối năm hiện tại + 3 số bất kỳ",
    THREE: "Định dạng Email là ABC123@gmail.com và email không viết chữ có dấu",
    FOUR: "Định dạng số điện là 10 số và bắt đầu là số 0",
    EIGHT: "Người đăng ký vui lòng đủ 18 tuổi",
    NIGHT: "Số căn cước công dân phải lớn hơn 9 và nhỏ hơn 12 số và tất cả là số ",
    TEN: "Ngày cấp phải nhỏ hơn hoặc bằng ngày hiện tại",
    SIXTEEN: "Ngày cấp phải trước ngày hiện tại",
    EIGHTEEN: "Tên người thân không có số",
    TWENTY: "Mức lương cũ phải lớn hơn 0 và nhỏ hơn 1000000000 VND và phải nhỏ hơn mức lương mới",
    TWENTYONE: "Mức lương mới phải lớn hơn 0 và nhỏ hơn 1000000000 VND và Mức lương mới cần phải lớn hơn mức lương cũ",
    TWENTYTWO: "Ngày hiệu lực phải lớn hơn ngày hiện tại",
    TWENTYFIVE: "Ngày hiệu lực phải lớn hơn ngày hiện tại",
    THIRTY: " Ngày kết thúc phải lớn hơn ngày bắt đầu",

}


export const OVER_LENGHT = {
    ONE: "Trường nhập không được vượt quá 50 ký tự",
    TWO: "Trường nhập không được vượt quá 255 ký tự"

}
