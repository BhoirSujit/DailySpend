import { useEffect, useState } from "react";
import {
  deleteExpense,
  getExpenses,
  updateExpense, 
  IExpenseData,
} from "../../api/expense.api";
import { useForm } from "react-hook-form";

type RowEditProps = {
  d: IExpenseData;
  i: number;
  handleDelete: (expenseId: string) => Promise<void>;
  handleUpdate: (expenseId: string, updatedData: IExpenseData) => Promise<void>;
};

const RowEdit = ({ d, i, handleDelete, handleUpdate }: RowEditProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const { handleSubmit, register, formState: { errors } } = useForm<IExpenseData>({
    defaultValues: {
      item: d.item,
      category: d.category,
      amount: d.amount,
      date: d.date,
      userId: d.userId,
    }
  });

  const onSubmit = async (data: IExpenseData) => {
    await handleUpdate(d._id!, data);
    setIsEdit(false);
  };

  return (
    <tr className="even:bg-indigo-100 dark:even:bg-indigo-950">
      {isEdit ? (
        <>
          <td className="w-1/12 p-1 text-left">{i + 1}</td>
          <td className="w-3/12 p-1 text-left">
            <input
              className="bg-transparent px-2 border w-full max-w-xs rounded-md focus:outline-indigo-100"
              type="text"
              {...register("item", { required: true })}
            />
            {errors.item && <span className="text-red-600 text-xs">Item name is required</span>}
          </td>
          <td className="w-2/12 p-1 text-left">
            <select
              className="bg-transparent px-2 border w-full max-w-xs rounded-md focus:outline-indigo-100"
              {...register("category", { required: true })}
            >
              <option>Food</option>
              <option>Travel</option>
              <option>Other</option>
            </select>
            {errors.category && <span className="text-red-600 text-xs">Category is required</span>}
          </td>
          <td className="w-2/12 p-1 text-left">
            <input
              className="bg-transparent px-2 border w-full max-w-xs rounded-md focus:outline-indigo-100"
              type="number"
              {...register("amount", { required: true })}
            />
            {errors.amount && <span className="text-red-600 text-xs">Amount is required</span>}
          </td>
          <td className="w-2/12 p-1 text-left">
            <input
              className="bg-transparent px-2 border w-full max-w-xs rounded-md focus:outline-indigo-100"
              type="date"
              {...register("date", { required: true })}
            />
            {errors.date && <span className="text-red-600 text-xs">Date is required</span>}
          </td>
          <td className="w-2/12 p-1 flex gap-2 text-left">
            <button
              className="bg-black text-white rounded-md px-2 py-1"
              onClick={() => setIsEdit(false)}
            >
              Close
            </button>
            <button
              className="bg-indigo-700 text-white rounded-md px-2 py-1"
              onClick={handleSubmit(onSubmit)}
            >
              Update
            </button>
          </td>
        </>
      ) : (
        <>
          <td className="w-1/12 p-1 text-left">{i + 1}</td>
          <td className="w-3/12 p-1 text-left">{d.item}</td>
          <td className="w-2/12 p-1 text-left">{d.category}</td>
          <td className="w-2/12 p-1 text-left">{d.amount}</td>
          <td className="w-2/12 p-1 text-left">{d.date}</td>
          <td className="w-2/12 p-1 flex gap-2 text-left">
            <button
              className="bg-indigo-700 text-white rounded-md px-2 py-1"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-700 text-white rounded-md px-2 py-1"
              onClick={() => handleDelete(d._id!)}
            >
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

const ManageExpenses = () => {
  const [data, setData] = useState<IExpenseData[]>([]);

  const handleDelete = async (expenseId: string) => {
    const success = await deleteExpense(expenseId);
    if (success) {
      setData((prevData) => prevData.filter((item) => item._id !== expenseId));
    }
  };

  const handleUpdate = async (expenseId: string, updatedData: IExpenseData) => {
    try {
      const updatedExpense: IExpenseData | undefined = await updateExpense(expenseId, updatedData);
  
      if (updatedExpense && updatedExpense._id) {
        setData((prevData) =>
          prevData.map((item) => (item._id === expenseId ? updatedExpense : item))
        );
      } else {
        console.error("Failed to update: Invalid data received.");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  useEffect(() => {
    async function fetchExpenses() {
      const res = await getExpenses();
      setData(res);
    }

    fetchExpenses();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="border p-2">
        <table className="w-full border-collapse p-2">
          <thead className="bg-indigo-400 text-white">
            <tr>
              <th className="p-1 text-left">Sr.no</th>
              <th className="p-1 text-left">Item Name</th>
              <th className="p-1 text-left">Category Name</th>
              <th className="p-1 text-left">Amount</th>
              <th className="p-1 text-left">Date</th>
              <th className="p-1 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <RowEdit
                key={d._id}
                d={d}
                i={i}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageExpenses;
