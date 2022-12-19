import "./dataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "./datatableSource";   
const Datatable=()=>{
  const actionColumns=[
    {field: 'action',
     headerName: 'Action', 
     width: 200,
    renderCell:(params)=>{
      return(
        <div className="cellAction">
<div className="viewButton">View</div>
<div className="deleteButton">Delete</div>
        </div>
      )
    }},
  ]
      
    return(
        <div className="dataTable">
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid  className="grid"
          rows={userRows}
          columns={ userColumns.concat(actionColumns)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      </div>
    )
}
export default Datatable;