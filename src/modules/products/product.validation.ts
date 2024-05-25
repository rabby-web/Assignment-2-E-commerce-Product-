import { z } from "zod";

// variant validation schema with zod
const variationValidationSchema = z.object({
  type: z.string({
    required_error: "type is required",
    invalid_type_error: "type Must be a String",
  }),
  value: z.string({
    required_error: "value is required",
    invalid_type_error: "value Must be a String",
  }),
});

// inventory validation schema with zod
const inventoryValidationSchema = z.object({
  quantity: z.number({
    required_error: "quantity is required",
    invalid_type_error: "quantity Must be a Number",
  }),
  inStock: z.boolean({
    required_error: "inStock is required",
    invalid_type_error: "inStock Must be a Boolean",
  }),
});

// product validation schema with zod
const productValidationSchema = z.object({
  name: z.string({
    required_error: "name is required",
    invalid_type_error: "name Must be a String",
  }),
  description: z.string({
    required_error: "description is required",
    invalid_type_error: "description Must be a String",
  }),
  price: z.number({
    required_error: "price is required",
    invalid_type_error: "price Must be a Number",
  }),
  category: z.string({
    required_error: "category is required",
    invalid_type_error: "category Must be a String",
  }),
  tags: z.array(z.string()),
  variants: z.array(variationValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
