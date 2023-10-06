import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';


interface IBreadcrumbs {
    NameBreadcrumbs: string
}
const BreadcrumbsModal = (props: IBreadcrumbs) => {
    const { NameBreadcrumbs } = props

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" >
            <div className='icon-tabs'><HomeIcon /></div>
        </Link>,
        <Typography key="3" color="text.primary">
            {NameBreadcrumbs}
        </Typography>,
    ];

    return (
        <div className="Breadcrumbs">
            <Stack spacing={2}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
        </div>
    )
}

export default BreadcrumbsModal