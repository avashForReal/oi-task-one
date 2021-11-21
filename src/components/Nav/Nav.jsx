import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">
        <ul className="flex justify-around items-center py-3 m-2 bg-purple-200 rounded-md">
          <li data-testid="uploadfile" className="font-medium text-white text-sm bg-purple-700 hover:bg-purple-500 px-3 py-1 rounded-md" >
            {" "}
            <Link id="upload-file" to="/">Upload File</Link>{" "}
          </li>
          <li className="font-medium text-white text-sm bg-purple-700 hover:bg-purple-500 px-3 py-1 rounded-md">
            {" "}
            <Link data-testid="viewtable" to="/table">View Table</Link>{" "}
          </li>
          <li className="font-medium text-white text-sm bg-purple-700 hover:bg-purple-500 px-3 py-1 rounded-md">
            {" "}
            <Link data-testid="form" to="/form">Form</Link>{" "}
          </li>
          <li className="font-medium text-white text-sm bg-purple-700 hover:bg-purple-500 px-3 py-1 rounded-md">
            {" "}
            <Link data-testid="dashboard" to="/dashboard">Dashboard</Link>{" "}
          </li>
        </ul>
      </div>
    )
}

export default Nav
