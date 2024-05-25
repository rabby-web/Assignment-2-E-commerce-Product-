import { z } from "zod";

// order validation
const orderValidationSchema = z.object({
  email: z.string({
    required_error: "email is required",
    invalid_type_error: "email Must be a String",
  }),
  productId: z.string({
    required_error: "productId is required",
    invalid_type_error: "productId Must be a String",
  }),
  price: z.number({
    required_error: "price is required",
    invalid_type_error: "price Must be a Number",
  }),
  quantity: z.number({
    required_error: "quantity is required",
    invalid_type_error: "quantity Must be a Number",
  }),
});

export default orderValidationSchema;
