import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">
        <ul className="flex justify-around items-center py-3 m-2 bg-purple-200 rounded-md">
          <li className="font-medium text-white text-sm bg-purple-700 hover:bg-purple-500 px-3 py-1 rounded-md" >
            {" "}
            <Link to="/">Upload File</Link>{" "}
          </li>
          <li className="font-medium text-white text-sm bg-purple-700 hover:bg-purple-500 px-3 py-1 rounded-md">
            {" "}
            <Link to="/table">View Table</Link>{" "}
          </li>
          <li className="font-medium text-white text-sm bg-purple-700 hover:bg-purple-500 px-3 py-1 rounded-md">
            {" "}
            <Link to="/form">Form</Link>{" "}
          </li>
          <li className="font-medium text-white text-sm bg-purple-700 hover:bg-purple-500 px-3 py-1 rounded-md">
            {" "}
            <Link to="/dashboard">Dashboard</Link>{" "}
          </li>
        </ul>
      </div>
    )
}

export default Nav
