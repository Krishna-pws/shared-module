export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    stock: number;
  }
  
  export interface ProductFormValues {
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    stock: number;
  }
  
  export interface ProductFormProps {
    product?: Product;
    onSuccess?: (data: ProductFormValues | Product) => void;
  }
  
  export interface ProductCardProps {
    product: Product;
    onEdit: (product: Product) => void;
    onDelete: (id: number) => void;
  }
  
  export interface AppError {
    message: string;
    code?: number;
  }
  
  export interface ProductState {
    products: Product[];
    isLoading: boolean;
    error: string | null;
  }