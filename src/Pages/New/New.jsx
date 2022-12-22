import "./new.scss"
import { useState } from "react";
import SideBar from "../../components/sideBar/Sidebar";
import NavBar from "../../components/navBAR/Navbar";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New=({inputs, title})=>{
    const [file, setFile]=useState("")
    return(
       <div className="new">
        <SideBar/>
        <div className="newContainer">
        <NavBar/>
        <div className="top">
            <h1>{title}</h1>
        </div>
        <div className="bottom">
           <div className="left">
            <img src={
                file 
                ? URL.createObjectURL(file)
             :"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAAB2CAMAAADle2GlAAAAV1BMVEXy8vJmZmb////6+vpVVVXd3d3o6OhOTk6AgID29vbs7OxpaWlbW1tjY2Ph4eHNzc3GxsaampqJiYmhoaHU1NSurq60tLSQkJC6urpwcHB5eXnAwMCnp6dKrCJBAAAERUlEQVR4nO2a3ZqyIBCAhVFzCFDQ/Mv7v84PzMqS1rZPbA94D3a3liffnQFmdImiQCAQCAQCgUAgEAgEAoHAtiCFbaDoQS5V2TaodHs9SeLDNsQk3VqOaq5YugVMcU23tuOE4TYwEm9uFx/ZRh/FjsHuU4Ld5+xkh5/tqnvYIWWJhE/8drBDmQkhuuIDP/92UHFBCBGHGn79Uf7tUmHlDIf818Hzboc1v8gR0buvZAoWe7FqvNtBNoXO6Dk3Gkh012npTLt/u/5uJx0RgjY2a0bEuUvPv5262RGHHMrLtBTHyPFb//OuuM47rhzhuSXe+dsddpTmoidc9Q2GqzuJz0s9/3YYNZwLwY+OWYfVPe2ELAfsUSsgH7Q6OzYNRDKzE93CZJcuABGcGxoqPgvdkS+qyTc7KMhj8oBInv6GL9phKsiTXfc05It2NHu2I0I9ynzPzhSJZzmzrVQPU+9rdpjwpZzh4dnEt+ww6hd5HUuGngfvW3a0dIeO8Hamt48dwlPbDtXBLWem3qxk7HLXg0ldP5QpZEdnXsd1m93H7VHJMDtwflCz8F07A3duh5vRDl0Au8x/rm8dHNQ/yJmRtxsQ//1ddOvgmmm+Y/qj3KwT9W2H2N9UzG4xXhWXReIpeNdO1LOdSessTryxrcqs43ypN20rfu3MgngwscnFalWOCHEpGV7tnuVGPawd9XWhl4FvO4z0IkwmuSsrdhp3As92sJQbowfvRI/bTtSf3TKt02U10DeiN24rHmP3qh5w9VZyhdlWvNnR18WKNxTql13AjTgHT3Zo59zxpZ7Gt5KbRn7sfizz7yZXaPRi93ij6tJ7K7m87jzYda6t5FkP6Wk9esKDHVmp8sTe+L+3cn3YvYNN7nr0vmVnk7veEGxv160ndkRkqyMdz6X+Eyjid/VW5eJi84MB0Har131Pvmt//x+YVZAl28A8yFm/bfDiFtiKkJ9Pwdr0uCjVPYJ4HvwsxQ/AQSSI0t4BTmsQK7vF2p+n15cHBNPwve0GBSi1DWB61zEvIJIMzd44fsVkvFNiyb5+WFYdWjvQjR7GiBUnqhrVn7Q6SpC96hKEpmmyHKqszDY/NbZiVwwgNW0HSnWFF7usoOyAUCjaJLQo6VlR6HLIUqjKPSclljntImPXSMRzPdlpidGRYqVAIuSKqhxBFamJMMv2thvsdTOGWNjVOtkxMtpBWncl1Sa5p0J2pVLdznaYamntIocdLfq8KmkmrV2iXx9g8GcHqjV2JrPtaRG7zk41qiqEsrArO/r9uZD/tENJGloWQJscF3ZIzyWtzZLJ8qi3Jyz2zmyETQOsP9d6fKcYZpkt1Tnr06hvTySHtimyatfYSWafY5u0pufzpUKwFKX5nmDEzNI171YpsDYpC8SqdZ0K8e4YjR3p/fWsathKkTcU+wSjv9lxQpn1jjMVfwVThv+uXCAQCAQCgcCn/APs4ktxZcqtsQAAAABJRU5ErkJggg==" } alt=""/>
            </div> 
           <div className="right">

            <form>
                <div className="formInput">
                <label htmlFor="file">
                Image:<DriveFolderUploadOutlinedIcon className="icon"/>
                </label>
                <input 
                type="file" id='file' 
                style={{display:"none"}}
                    onChange={e=>setFile(e.target.files[0])}
                />

                </div>
                {inputs.map((input) => {
                 return <div className="formInput" key={input.id}>
                <label>{input.label}</label> 
                <input type={input.type} placeholder={input.placeholder}/>

                </div>
                })}
                
                
                <button> Send</button>
            </form>
           </div>
        </div>

        </div>
       </div>
    )
}
export default New;