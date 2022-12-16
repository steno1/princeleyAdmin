import "./home.scss"
import NavBar from "../../components/navBAR/Navbar";
import SideBar from "../../components/sideBar/Sidebar";
import Widget from "../../components/Widget/Widget";
import Chart from "../../components/chartNormal/Chart";
import Features from "../../components/featuresChart/FeaturesChart";
import Tables from "../../components/table/Table";
const Home=()=>{
    return(
       <div className="Home">
        <SideBar/>
        <div className="HomeContainer">
        <NavBar/>
<div className="widget">

    <Widget type="user"/>
    <Widget type="order"/>
    <Widget type="earning"/>
    <Widget type="balance"/>
</div>
<div className="charting">
<Features/>
<Chart/>
</div>
<div className="listContainer">
<div className="list">
Latest transaction
<Tables/>
</div>
    
</div>
        </div>
       </div>
    )
}
export default Home;