import React from "react";
import UserLayout from "../../Layout/UserLayout";
import { Link } from "react-router-dom";

const ManageExpenses = () => {
  return (
    <div>
      <UserLayout title={"Manage Expenses"}>
        <div className="border p-2">
          <table className="w-full border-collapse  p-2">
            <thead className="bg-indigo-400 text-white">
              <th>Sr.no</th>
              <th>Category Name</th>
              <th>Item Name</th>
              <th>Cost</th>
              <th>Date</th>
              <th>Action</th>
            </thead>
          </table>
        </div>
      </UserLayout>
    </div>
  );
};

export default ManageExpenses;
