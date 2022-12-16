import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const SideBar=()=>{
    return(
        <div className="sidebar">
        <div className="top"><span className="logo">Princeley_Admin</span></div>
        <hr/>
        <div className="center">
<ul>
<p className="title">MAIN</p>
    <li>
    <DashboardIcon className="icon"/>
        <span> DashBoard</span>
    </li>
    <p className="title">LIST</p>
    <li>
    <Person2OutlinedIcon className="icon"/>
        <span> Users</span>
    </li>
    <li>
    <ProductionQuantityLimitsOutlinedIcon className="icon"/>
        <span> Products</span>
    </li>
    <li>
    <ShoppingBasketIcon className="icon"/>
        <span> Orders</span>
    </li>
    <li>
    <LocalShippingIcon className="icon"/>
        <span> Delivery</span>
    </li>
    <p className="title">USEFUL</p>
    <li>
    <AnalyticsIcon className="icon"/>
        <span>Stats</span>
    </li>
    <p className="title">SERVICE</p>
    <li>
    <NotificationsNoneIcon className="icon"/>
        <span> Notification</span>
    </li>
    <li>
    <HealthAndSafetyIcon className="icon"/>
        <span>System Health</span>
    </li>
    <li>
    <VpnKeyIcon className="icon"/>
        <span> Logs</span>
    </li>
    <li>
    <SettingsIcon className="icon"/>
        <span>Settings</span>
    </li>
    <p className="title">USER</p>
    <li>
    <Person3OutlinedIcon className="icon"/>
        <span> Profile</span>
    </li>
    <li>
    <LogoutOutlinedIcon className="icon"/>
        <span> Logout</span>
    </li>
</ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
        </div>
    )
}
export default SideBar;