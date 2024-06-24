import { useState } from "react";
import "./movies.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Name of Movie",
    type: "string",
    headerName: "Name of Movie",
    width: 250,
  },
  {
    field: "Description",
    type: "string",
    headerName: "Description",
    width: 300,
  },
  {
    field: "Genre",
    type: "string",
    headerName: "Genre",
    width: 200,
  },
  {
    field: "Director",
    headerName: "Director",
    type: "string",
    width: 200,
  },
  {
    field: "Release Date",
    headerName: "Release Date",
    width: 200,
    type: "string",
  },
  {
    field: "Rating",
    headerName: "Rating",
    width: 150,
    type: "String",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="products">
      <div className="info">
        <h1>Movies</h1>
        <button onClick={() => setOpen(true)}>Add New Movie</button>
      </div>
      <DataTable slug="movie" columns={columns} rows={products} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="movie" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
