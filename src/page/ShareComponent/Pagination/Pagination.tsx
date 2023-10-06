import TablePagination from '@mui/material/TablePagination';

interface IPagination {
    data: any
    rowsPerPage: number
    page: number
    handleChangePage: (event: unknown, newPage: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Pagination = (props: IPagination | any) => {
    const { data, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } = props
    return (
        <>
            <TablePagination
                style={{ background: "#f5f5f5" }}
                rowsPerPageOptions={[1, 2, 3, 5, 10, 25, 100]}
                component="div"
                count={data?.totalElements as number ? data?.totalElements as number : (data as any)?.data?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage={"Số hàng mỗi trang:"}
                labelDisplayedRows={({ from, to, count }) =>
                    `${from}-${to} trong ${count}`
                }

            />
        </>
    )
}

export default Pagination