import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widget=({type})=>{
    let data;
    //temporary
    const amount=100;
    const diff=20;
    switch (type) {
        case "user"://if type is user
            data={
                title:"USERS",
                isMoney:false,
                link:"see all Users",
                icon: <Person3OutlinedIcon className="icon"/>

            }
            
            break;
    
       
            case "order":// if type is user
                data={
                    title:"ORDER",
                    isMoney:false,
                    link:"view all orders",
                    icon:<ShoppingBasketIcon className="icon"/>
    
                }
                
                break;
                case "earning":// if type is earning
                data={
                    title:"EARNING",
                    isMoney:true,
                    link:"view net earning",
                    icon: <AttachMoneyOutlinedIcon className="icon"/>
    
                }
                
                break;
                case "balance": //if type is balance
                data={
                    title:"Balance",
                    isMoney:true,
                    link:"see details",
                    icon:<AccountBalanceWalletOutlinedIcon className="icon"/>
    
                }
                
                break;
                default:
                    break;
                    
    }
    return(
        <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
        <div className="percentage positive">
        <KeyboardArrowUpOutlinedIcon/>
        {diff}%
        </div>
        
        {data.icon}
            
        </div>

        </div>
    )
}
export default Widget;