import "./new.scss"
import SideBar from "../../components/sideBar/Sidebar";
import NavBar from "../../components/navBAR/Navbar";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New=()=>{
    return(
       <div className="new">
        <SideBar/>
        <div className="newContainer">
        <NavBar/>
        <div className="top">
            <h1>Add New User</h1>
        </div>
        <div className="bottom">
           <div className="left">
            <img src="data:image/jpeg;base64,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" alt="nothing"/>
            </div> 
           <div className="right">

            <form>
                <div className="formInput">
                <label htmlFor="file">
                Image:<DriveFolderUploadOutlinedIcon className="icon"/>
                </label>
                <input type="file" id='file' style={{display:"none"}}/>

                </div>
                <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="onu Princeley"/>

                </div>
                <div className="formInput">
                <label>Name and Surname</label>
                <input type="text" placeholder="onu Princeley"/>
                
                </div>
                <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="onu@gmail.com"/>
                
                </div>
                <div className="formInput">
                <label>Phone Number</label>
                <input type="text" placeholder="+23 486 75 96"/>
                
                </div>
                <div className="formInput">
                <label>Password</label>
                <input type="password" />
                
                </div>
                <div className="formInput">
                <label>Address</label>
                <input type="text"  placeholder="no 7 fempark Nsukka"/>
                
                </div>
                <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Nigeria"/>
                
                </div>
                <button> Send</button>
            </form>
           </div>
        </div>

        </div>
       </div>
    )
}
export default New;