import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "userName",
    type: "string",
    headerName: "User name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "preferences",
    headerName: "Preferences",
    width: 200,
    type: "string",
  },
];

const fetchAllUsers = async () => {
  const response = await axios.get("http://localhost:7676/api/auth/users");
  return response.data.map((user: any) => ({
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    email: user.email,
    preferences: user.preferences.join(", "),
  }));
};

const Users = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, data, error } = useQuery(['allUsers'], fetchAllUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading users: {error.message}</div>;
  }

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        {/* <button onClick={() => setOpen(true)}>Add New User</button> */}
      </div>
      <DataTable slug="users" columns={columns} rows={data} />
      {/* {open && <Add slug="user" columns={columns} setOpen={setOpen} />} */}
    </div>
  );
};

export default Users;
