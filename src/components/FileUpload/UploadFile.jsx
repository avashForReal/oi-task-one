// import axios from "axios";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { GoDesktopDownload } from "react-icons/go";

const UploadFile = () => {
  const [file, setFile] = useState(undefined);

  //update file state when file is dropped
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    // console.log(fileRejections);
  }, []);

  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      onDrop,
      accept: "text/csv",
      maxFiles: 1
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  // const rejectedFileItems = fileRejections.map(({ file, errors }) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //     <ul>
  //       {errors.map((e) => (
  //         <li key={e.code}>{e.message}</li>
  //       ))}
  //     </ul>
  //   </li>
  // ));

  // const uploadFile = () => {};

  const handleSubmit = async () => {
    // console.log(acceptedFiles);
    // console.log(fileRejections);
    // console.log(file);
    const fileData = new FormData();
    fileData.append('file', file);

    alert(fileData)
    
    // try{
    //   //send data here

    //   // const response = await axios.post('https://httpbin.org/post', formData)
    //   // console.log(response);
    // }catch(error){
    //   console.log(error);
    // }

  };

  return (
    <div className="mt-6 w-11/12 mx-auto">
      <div className=" bg-gray-300 border-dashed border-4 border-blue-500 h-36" {...getRootProps()}>
        <input data-testid="fileinput" {...getInputProps()} />
        <p data-testid="droptext" className="text-center font-normal italic mt-10">Drop your files here or click to select your file.</p>
        <GoDesktopDownload className="w-12 h-12 mx-auto"/>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <button data-testid="upload-btn" className="border-2 border-blue-700 rounded-md py-2 px-4" onClick={handleSubmit} disabled={fileRejections.length > 0 || acceptedFiles.length<=0}>
          Upload File
        </button>
      </div>

      <div>
        <h4 className="font-semibold text-xl text-gray-700">To upload:</h4>
        {
          acceptedFiles.length<=0? <p className="text-gray-700">No file choosen to upload.</p> : <ul className="text-gray-700">{acceptedFileItems}</ul>
        }
        
        {/* refactor to popup message */}
        {
          fileRejections.length > 0 ? <p className="text-red-600">You can only upload .csv files!</p> : null
        }
      </div>
    </div>
  );
};

export default UploadFile;
