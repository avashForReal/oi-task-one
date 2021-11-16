import faker from "faker";

let tasks = [];
for (let i = 0; i < 10; i++) {
  tasks[i] = {
    name: faker.lorem.sentence(),
    deadline: faker.date.future(),
  };
}

const RunTask = () => {

    const handleClick = () => {
        alert("running task")
    }

  return (
      <>
    <div className="mx-6">
      <div className="mt-10 mb-2 text-left">
        <p className="font-bold text-2xl text-gray-700">Run Task</p>
      </div>

      <div>
      <div class="flex flex-col">
          <div className="border-b border-gray-200 shadow">
            <table className="text-left">
              <thead className="bg-gray-300">
                <tr>
                  <th className="px-6 py-2 text-xs text-gray-500">Task name</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Task deadline</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Action</th>
                 
                </tr>
              </thead>
              <tbody className="bg-white">
                {tasks.map((task) => (
                  <tr className="whitespace-nowrap border-b">
                    <td className="px-6 py-4 text-sm text-gray-800 font-semibold">
                      {task.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {JSON.stringify(task.deadline)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-1 px-2 rounded">Run Task</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RunTask;
