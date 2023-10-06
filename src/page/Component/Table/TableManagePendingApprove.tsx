import { useState } from "react"
import "./Manage.scss"
import Box from '@mui/material/Box';
import Access from "../PendingApprove/Access"
import End from "../PendingApprove/End"
import Promotion from "../PendingApprove/Process"
import Salary from "../PendingApprove/Salary"
import Proposal from "../PendingApprove/Proposal"
import BreadcrumbsModal from "../../ShareComponent/Breadcrumbs/Breadcrumbs"
import TabsList from "../../ShareComponent/Tabslist/TabsList"
import CustomTabPanel from "../../ShareComponent/CustomTabPanel/CustomTabPanel"
import SearchShare from "../../ShareComponent/Search/Search"
import { STATUS_All } from "../../ShareComponent/Constants/StatusIfomation"

const TableManagePendingApprove = () => {
  const [search, setSearch] = useState<string>("");

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <BreadcrumbsModal
        NameBreadcrumbs="Chờ duyệt"
      />
      <div className='title'>
        <div className='name-title'>
          Danh sách chờ duyệt
        </div>
        {value === STATUS_All.ZERO || value === STATUS_All.ONE ?
          <SearchShare
            search={search}
            setSearch={setSearch}
          />
          :
          ""
        }

      </div>
      <div className="body-table">
        <div className="tab-list">
          <Box  >
            <Box >
              <TabsList
                value={value}
                handleChange={handleChange}
                name={"PendingApprove"}
              />
            </Box>
            <CustomTabPanel value={value} index={STATUS_All.ZERO}>
              <Access
                search={search}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={STATUS_All.ONE}>
              <End
                search={search}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={STATUS_All.TWO}>
              <Salary
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={STATUS_All.THREE}>
              <Promotion
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={STATUS_All.FOUR}>
              <Proposal
              />
            </CustomTabPanel>
          </Box>
        </div>
      </div>
    </div >
  );
}


export default TableManagePendingApprove