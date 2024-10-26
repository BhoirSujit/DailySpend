import { InferSchemaType, Schema, model } from "mongoose";

const expensesShema = new Schema(
  {
    item: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export type Expenses = InferSchemaType<typeof expensesShema>;

export default model<Expenses>("expenses", expensesShema)