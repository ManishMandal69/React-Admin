import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import "../styles/datatable.scss"
import { Link } from "react-router-dom"

import view from "../assets/view (1).svg"
import deleteIcon from "../assets/delete.svg"

type Props = {
    columns : GridColDef[],
    rows: object[],
    slug: string,
}

const DataTable = (props:Props) => {

    const handleDelete = (id : number) => {
        console.log("id" + "has been Deleted");
        
    }

    const actionColumn:GridColDef = {
        field:"action",
        headerName:"Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                    <img src={view} alt="" />
                    </Link>
                    <div className="delete" onClick={()=>handleDelete(params.row.id)}>
                    <img src={deleteIcon} alt="" />
                    </div>
                </div>
                
            )
        } 
    }
    
  return (
    <div className="dataTable " style={{maxWidth: "calc(100vw - 250px)"}}>
        <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500},
            },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  )
}

export default DataTable