import "./list.scss";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { userRows } from "../../../dummyData.js";

export const UserList = ({ content }) => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const userColumns: GridColDef<(typeof rows)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'avatar',
            headerName: 'Avatar',
            width: 110,
            editable: true,
            renderCell: (params) => {
                return (
                    <div className="listIcon">
                        <img className="listImg" src={params.row.avatar} alt="" />
                    </div>
                )
            }
        },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'email',
            width: 250,
            editable: true,
        },
        {
            field: 'action',
            header: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div>
                        <Link to={"../user/" + params.row.id}>
                            <button className="listEdit">Edit</button>
                        </Link>
                        <i className="bi bi-trash listDelete" onClick={() => handleDelete(params.row.id)} />
                    </div>
                )
            }
        }
    ];

    return (
        <div className="list">
            <h2>UserList {content}</h2>
            <DataGrid
                rows={data}
                columns={userColumns}
                disableSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 20,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    )
}

export default UserList;