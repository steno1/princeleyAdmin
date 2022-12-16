
import "./features.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const percentage = 75;
const Features=()=>{
    return(
        <div className="features">
<div className="top">
   <h1 className="title">Total Revenue</h1> 
   <MoreVertOutlinedIcon/>
</div>
<div className="bottom">
<div className="featuredChart">
<CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={4} />
</div>
<p className="title">Total sales made today</p>
<p className="amount">$450</p>
<p className="desc">
previous transaction processing. last payments may be included
</p>

<div className="summary">
<div className="items">
<div className="itemTitle">Target</div>
<div className="itemResult positive">
    <KeyboardArrowUpOutlinedIcon fontSize="small"/>
</div>
<div className="itemAmount">
$12k
</div>

</div>

<div className="items">
<div className="itemTitle">Last week</div>
<div className="itemResult negative">
    <KeyboardArrowDownOutlinedIcon fontSize="small"/>
</div>
<div className="itemAmount">
$12k
</div>

</div>
<div className="items">
<div className="itemTitle">Last month</div>
<div className="itemResult negative">
    <KeyboardArrowDownOutlinedIcon />
</div>
<div className="itemAmount">
$12k
</div>

</div>

</div>
        </div>
        </div>
    )
}
export default Features;