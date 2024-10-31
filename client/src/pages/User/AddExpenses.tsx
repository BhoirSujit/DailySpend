import {SubmitHandler, useForm} from "react-hook-form"
import { addExpenses } from "../../api/expense.api";

interface IAddExpenseData {
  date: string,
  item : string,
  amount: number,
  category: string,
}

const AddExpenses = () => {
  const {handleSubmit, register, formState: {errors}} = useForm<IAddExpenseData>()

  const onsubmit: SubmitHandler<IAddExpenseData> = async (data) => {
      console.log(data);
      //add 
      const res = await addExpenses(data);
      console.log("see res : ",res);
  }


  return (
  
      <div>
        <form
          className=" flex flex-col justify-center border p-4   gap-3"
          onSubmit={handleSubmit(onsubmit)} autoComplete="false"
        >
          <div className="form-control flex flex-col">
            <label htmlFor="date">Date</label>
            <input
              className="border rounded-md p-1 mt-1 focus:outline-indigo-100 bg-transparent"
              id="date"
              type="date"
              {...register("date")}
              required
            />
          </div>
          <div className="form-control flex flex-col ">
            <div className="flex justify-between">
              <label htmlFor="item">Name of item</label>{" "}
            </div>

            <input
              className="border rounded-md p-1 mt-1  focus:outline-indigo-100 bg-transparent"
              {...register("item")}
              id="item"
              type="text"
              placeholder="iphone 16 pro"
              required
            />
          </div>
          <div className="form-control flex flex-col ">
            <div className="flex justify-between">
              <label htmlFor="cost">Cost of item</label>{" "}
            </div>

            <input
              className="border rounded-md p-1 mt-1  focus:outline-indigo-100 bg-transparent"
              {...register("amount")}
              id="cost"
              type="number"
              placeholder="79000"
              required
            />
          </div>
          <div className="form-control flex flex-col ">
            <div className="flex justify-between">
              <label htmlFor="category">Category</label>{" "}
            </div>

            <select
              className="border rounded-md p-1 mt-1  focus:outline-indigo-100 bg-transparent"
              { ...register("category")}
defaultValue={"Other"}
              id="category"
              required
            >
              <option>Food</option>
              <option>Travel</option>
              <option>Other</option>
            </select>
          </div>
          <button type="submit" className="w-full  bg-indigo-500 px-4 py-2 rounded-md mt-2 text-white">
            Add
          </button>
        </form>
      </div>
   
  );
};

export default AddExpenses;
