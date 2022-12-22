import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables=()=>{
    const rows=[
        {
            id:3456,
            product:'i phone',
            img:"data:image/jpeg;base64,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",
            customer:"onu",
            date:"ist march",
            amount: 765,
            method:'cash on delivery',
            status: "approved",
        }, 
        {
            id:876,
            product:'i phone',
            img:"data:image/jpeg;base64,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",
            customer:"Ijeoma",
            date:"4th march",
            amount: 7650,
            method:'cash on delivery',
            status: "undecided",
        },
        {
            id:8799,
            product:'ps4',
            img:"data:image/jpeg;base64,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",
            customer:"Toochukwu",
            date:"4th dec",
            amount: 7650,
            method:'cash on delivery',
            status: "approved",
        }, 
        {
            id:8799,
            product:'ps4',
            img:"data:image/jpeg;base64,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",
            customer:"Michael",
            date:"4th dec",
            amount: 7650,
            method:'cash on delivery',
            status: "pending",
        }
    ]
   
    return(
        
<TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  className="tableCell">Tracking id</TableCell>
            <TableCell  className="tableCell">product</TableCell>
            <TableCell  className="tableCell">customer</TableCell>
            <TableCell  className="tableCell">date</TableCell>
            <TableCell  className="tableCell">Amount</TableCell>
            <TableCell  className="tableCell">payment</TableCell>
            <TableCell  className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
             
            >
              <TableCell className="tableCell">
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
              <div className="wrapper">
              <img className="images" src={row.img} alt="images"/>
              {row.product}
              </div>
             
              </TableCell>
              <TableCell  className="tableCell">{row.customer}</TableCell>
              <TableCell  className="tableCell">{row.date}</TableCell>
              <TableCell  className="tableCell">{row.amount}</TableCell>
              <TableCell  className="tableCell">{row.method}</TableCell>
              <TableCell >
              <span className={`status ${row.status}`}>{row.status}</span>
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
    )
}
export default Tables;