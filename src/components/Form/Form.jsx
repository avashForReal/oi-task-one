import { useState } from "react";

const Form = () => {
  
  const [formData, setFormData] = useState({
    institute: '',
    days: '',
    csvFile: ''
  })

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({...formData, [name]:value})
  }

  //send to backend here
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(institute, days, csvfile);
    // console.log(typeof(days))
    alert(JSON.stringify(formData))
  };

  return (
    <>
      {/* <h1>{JSON.stringify(formData)}</h1> */}
      <div className="w-11/12 mx-auto mt-6">
        <form className="w-full">
          <div className="flex items-center mb-6">
            <label
              htmlFor="nameofinstitue"
              className="block text-gray-500 font-bold w-1/4"
            >
              Name of institute:
            </label>
            <input
              data-testid="institute"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              onChange={(e) => handleChange(e)}
              value={formData.institute}
              type="text"
              name="institute"
              placeholder="Enter the name of institute"
            />
          </div>
          <div className="flex items-center mb-6">
            <label
              htmlFor="numberofdays"
              className="block text-gray-500 font-bold w-1/4"
            >
              Number of days:
            </label>
            <input
             data-testid="days"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              onChange={(e) => handleChange(e)}
              value={formData.days}
              type="number"
              name="days"
              placeholder="0"
            />
          </div>
          <div className="flex items-center mb-6">
            <label
              htmlFor="nameofcsvfile"
              className="block text-gray-500 font-bold w-1/4"
            >
              Name of CSV file:
            </label>
            <input
            data-testid="csvfile"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              onChange={(e) => handleChange(e)}
              value={formData.csvfile}
              type="text"
              name="csvFile"
              placeholder="Enter the name of csvfile"
            />
          </div>
          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" onClick={handleSubmit}>
            Submit form
          </button>
        </form>
      </div>

      
    </>
  );
};

export default Form;
