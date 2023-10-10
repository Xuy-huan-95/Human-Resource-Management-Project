import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./TabsList.scss"
import { STATUS_All } from "../../ShareComponent/Constants/StatusIfomation"

interface ITabsList {
    value: number
    handleChange: (event: React.SyntheticEvent, newValue: number) => void
    name: string
}

const TabsList = (props: ITabsList) => {
    const { value, handleChange, name } = props

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    return (
        <>
            {name == "CreateEmployee" &&
                <Tabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example" scrollButtons="auto" variant="scrollable" className='tabs'>
                    <Tab label="Thông tin nhân viên" {...a11yProps(STATUS_All.ZERO)} />
                    <Tab label="Thông tin văn bằng" {...a11yProps(STATUS_All.ONE)} />
                    <Tab label="Quan hệ gia đình" {...a11yProps(STATUS_All.TWO)} />

                </Tabs>
            }
            {name == "CreateProposal" &&
                <Tabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example" scrollButtons="auto" variant="scrollable" className='tabs'>
                    <Tab label="Yêu cầu tăng lương" {...a11yProps(STATUS_All.FOUR)} />
                    <Tab label="Yêu cầu thăng chức" {...a11yProps(STATUS_All.FIVE)} />
                    <Tab label="Đề xuất tham mưu" {...a11yProps(STATUS_All.SIX)} />
                </Tabs>
            }
            {name == "PendingApprove" &&
                <Tabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example" scrollButtons="auto" variant="scrollable">
                    <Tab className="colorText" label=" Đăng kí mới" {...a11yProps(STATUS_All.ZERO)} />
                    <Tab className="colorText" label=" Nghỉ việc" {...a11yProps(STATUS_All.ONE)} />
                    <Tab className="colorText" label=" Tăng lương" {...a11yProps(STATUS_All.TWO)} />
                    <Tab className="colorText" label=" Thăng chức" {...a11yProps(STATUS_All.THREE)} />
                    <Tab className="colorText" label=" Đề xuất tham mưu" {...a11yProps(STATUS_All.FOUR)} />
                </Tabs>
            }
            {name == "Employee_Doc" &&
                <Tabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example" scrollButtons="auto" variant="scrollable">
                    <Tab className="colorText" label=" Hồ sơ nhân viên" {...a11yProps(STATUS_All.ZERO)} />
                    <Tab className="colorText" label=" Sơ yếu lý lịch" {...a11yProps(STATUS_All.ONE)} />
                    <Tab className="colorText" label=" Văn bằng" {...a11yProps(STATUS_All.TWO)} />

                </Tabs>
            }
            {name == "Salary_Doc" &&
                <Tabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example" scrollButtons="auto" variant="scrollable">
                    <Tab className="colorText" label=" Biểu mẫu tăng lương" {...a11yProps(STATUS_All.ZERO)} />
                    <Tab className="colorText" label=" Sơ yếu lý lịch" {...a11yProps(STATUS_All.ONE)} />
                    <Tab className="colorText" label=" Hồ sơ nhân viên" {...a11yProps(STATUS_All.TWO)} />
                    <Tab className="colorText" label=" Văn bằng" {...a11yProps(STATUS_All.THREE)} />

                </Tabs>

            }
            {name == "Process_Doc" &&
                <Tabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example" scrollButtons="auto" variant="scrollable">
                    <Tab className="colorText" label=" Biểu mẫu thăng chức" {...a11yProps(STATUS_All.ZERO)} />
                    <Tab className="colorText" label=" Sơ yếu lý lịch" {...a11yProps(STATUS_All.ONE)} />
                    <Tab className="colorText" label=" Hồ sơ nhân viên" {...a11yProps(STATUS_All.TWO)} />
                    <Tab className="colorText" label=" Văn bằng" {...a11yProps(STATUS_All.THREE)} />

                </Tabs>
            }
            {name == "Propose_Doc" &&
                <Tabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example" scrollButtons="auto" variant="scrollable">
                    <Tab className="colorText" label=" Biểu mẫu đề xuất" {...a11yProps(STATUS_All.ZERO)} />
                    <Tab className="colorText" label=" Sơ yếu lý lịch" {...a11yProps(STATUS_All.ONE)} />
                    <Tab className="colorText" label=" Hồ sơ nhân viên" {...a11yProps(STATUS_All.TWO)} />
                    <Tab className="colorText" label=" Văn bằng" {...a11yProps(STATUS_All.THREE)} />
                </Tabs>
            }
            {name == "Recommend_Doc" &&
                <Tabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example" scrollButtons="auto" variant="scrollable">
                    <Tab className="colorText" label=" Biểu mẫu tiến cử" {...a11yProps(STATUS_All.ZERO)} />
                    <Tab className="colorText" label=" Sơ yếu lý lịch" {...a11yProps(STATUS_All.ONE)} />
                    <Tab className="colorText" label=" Hồ sơ nhân viên" {...a11yProps(STATUS_All.TWO)} />
                    <Tab className="colorText" label=" Văn bằng" {...a11yProps(STATUS_All.THREE)} />

                </Tabs>
            }
            {name == "Advisory_Doc" &&
                <Tabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example" scrollButtons="auto" variant="scrollable">
                    <Tab className="colorText" label=" Biểu mẫu tham mưu" {...a11yProps(STATUS_All.ZERO)} />
                    <Tab className="colorText" label=" Sơ yếu lý lịch" {...a11yProps(STATUS_All.ONE)} />
                    <Tab className="colorText" label=" Hồ sơ nhân viên" {...a11yProps(STATUS_All.TWO)} />
                    <Tab className="colorText" label=" Văn bằng" {...a11yProps(STATUS_All.THREE)} />

                </Tabs>
            }

        </>
    )
}

export default TabsList