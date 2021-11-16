import faker from "faker";

let users = [];
for (let i = 0; i < 10; i++) {
  users[i] = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    jobTitle: faker.name.jobDescriptor(),
    company: faker.company.companyName(),
  };
}
// console.log(users);

const ViewTable = () => {
  return (
    <>
      <div class="container flex justify-center mx-auto">
        <div class="flex flex-col">
          <div className="border-b border-gray-200 shadow">
            <table className="text-left">
              <thead className="bg-gray-300">
                <tr>
                  <th className="px-6 py-2 text-xs text-gray-500">Name</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Email</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Phone</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Job title</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Company</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {users.map((user) => (
                  <tr className="whitespace-nowrap border-b">
                    <td className="px-6 py-4 text-sm text-gray-800 font-semibold">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {user.phone}
                    </td>
                    <td className="px-6 py-4 text-sm text-blue-500">
                      {user.jobTitle}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {user.company}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewTable;
