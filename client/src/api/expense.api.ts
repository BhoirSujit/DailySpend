import axios from "axios";
import { backendaddress } from "../config/config";

export interface IAddExpenseData {
  date: string;
  item: string;
  amount: number;
  category: string;
}

export interface IExpenseData {
  _id? : string,
  date: string;
  userId: string,
  item: string;
  amount: number;
  category: string;
}

export const addExpenses = async (data: IAddExpenseData) => {
  try {
    const res = await axios.post(backendaddress + "/api/v1/expenses", data);
    return res.data;
  } catch (error) {
    alert(error);
  }
};

export const getExpenses = async () : IExpenseData[] => {
  try {
    const res = await axios.get(backendaddress + "/api/v1/expenses");
    return res.data;
  } catch (error) {
    alert(error);
  }
}
