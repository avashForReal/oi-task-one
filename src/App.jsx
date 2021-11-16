import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import UploadFile from "./components/FileUpload/UploadFile";
import ViewTable from "./components/Table/ViewTable";
import Form from "./components/Form/Form";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <div className="nav">
        <Nav />
      </div>

      <div className="app">
        <Routes>
          <Route path="/" element={<UploadFile />} />
          <Route path="/table" element={<ViewTable />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
