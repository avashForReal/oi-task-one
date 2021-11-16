const Dropdown = () => {
  const csvNames = ["csv1", "csv2", "csv3", "csv4", "csv5"];

  return (
    <div className="mx-6">
        <div className="mt-10 mb-2 text-left">
            <p className="font-bold text-2xl text-gray-700">Dropdown</p>
        </div>

    <div className="w-3/12">
      <select name="csvFiles" id="csvFiles" className="w-full h-8 rounded-md text-center font-medium border-2 hover:border-blue-700  outline-none">
        {csvNames.map((csvName) => {
          return <option className="border-none" value={csvName}>{csvName}</option>;
        })}
      </select>
      </div>
    </div>
  );
};

export default Dropdown;
