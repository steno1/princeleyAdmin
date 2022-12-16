
import "./list.scss"
import Sidebar from "../../components/sideBar/Sidebar.jsx"
import NavBar from "../../components/navBAR/Navbar"
import Datatable from "../../components/dataTable/dataTable"
const List=()=>{
    return(
       <div className="list">
       
       <Sidebar/>
       
       
        <div className="listContainer">
        <NavBar/>
        <Datatable/>

        </div>
       </div>
    )
}
export default List;