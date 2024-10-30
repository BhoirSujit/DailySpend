import { useEffect, useState } from "react";
import { getExpenses, IExpenseData } from "../../api/expense.api";

const ManageExpenses = () => {
  const [data, setData] = useState<IExpenseData[]>();

  useEffect(() => {
    async function inner() {
      const res: IExpenseData[] = await getExpenses();
      console.log(res);
      setData(res);
    }

    inner();
  }, []);

  return (
    <div>
      <div className="border p-2">
        <table className="w-full border-collapse  p-2">
          <thead className="bg-indigo-400  text-white">
            <tr className=" ">
              <th>Sr.no</th>
              <th>Item Name</th>
              <th>Category Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {data?.map((d, i) => {
              return (
                <tr className=" even:bg-indigo-100" key={d._id}>
                  <td>{i + 1}</td>
                  <td>{d.item}</td>
                  <td>{d.category}</td>
                  <td>{d.amount}</td>
                  <td>{d.date}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageExpenses;
