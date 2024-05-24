export type TVariant = {
    type: string;
    value: string;
  };
  
  type TInventory = {
    quantity: number;
    inStock: boolean;
  };
  
  type TProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: TVariant[];
    inventory: TInventory;
  };

