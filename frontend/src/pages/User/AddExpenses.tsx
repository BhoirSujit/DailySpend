import React from 'react'
import UserLayout from '../../Layout/UserLayout'
import { Link } from 'react-router-dom'

const AddExpenses = () => {
  return (
    <div>
      <UserLayout title={'Add Expenses'}>
<div>
<form className=" flex flex-col justify-center border p-4   gap-3" action="">
          <div className="form-control flex flex-col">
            <label htmlFor="date">Date</label>
            <input
              className="border rounded-md p-1 mt-1 focus:outline-indigo-100"
              name="date"
              id="date"
              type="date"
              placeholder="emaple@gmail.com"
            />
          </div>
          <div className="form-control flex flex-col ">
            <div className="flex justify-between">
              <label htmlFor="item">Name of item</label>{" "}
              
            </div>

            <input
              className="border rounded-md p-1 mt-1  focus:outline-indigo-100"
              name="item"
              id="item"
              type="text"
              placeholder="iphone 16 pro"
            />
          </div>
          <div className="form-control flex flex-col ">
            <div className="flex justify-between">
              <label htmlFor="cost">Cost of item</label>{" "}
              
            </div>

            <input
              className="border rounded-md p-1 mt-1  focus:outline-indigo-100"
              name="cost"
              id="cost"
              type="number"
              placeholder="79000"
            />
          </div>
          <div className="form-control flex flex-col ">
            <div className="flex justify-between">
              <label htmlFor="category">Category</label>{" "}
              
            </div>

            <select
              className="border rounded-md p-1 mt-1  focus:outline-indigo-100"
              name="category"
              id="category"
            >
                <option selected>Other</option>
            </select>
          </div>
          <button className="w-full  bg-indigo-500 px-4 py-2 rounded-md mt-2 text-white">
            Add 
          </button>

          
        </form>
</div>
      </UserLayout>
    </div>
  )
}

export default AddExpenses
