import { User } from "./user.interface";

export interface ProfileFormData {
    name: string;
    email: string;
    password: string;
    image: string;
  }
  
  export interface ProfileFormProps {
    formData: Omit<ProfileFormData, "image">;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    loading: boolean;
  }
  
  export interface ProfileImageUploadProps {
    image: string | null;
    onImageChange: (image: string) => void;
    loading: boolean;
  }
  
  export interface ProfileEditModalProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    formData: ProfileFormData;
    imagePreview: string | null;
    loading: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onImageChange: (image: string) => void;
    onSubmit: (e: React.FormEvent) => void;
  }
  
  export interface ProfileState {
    user: User | null;
    loading: boolean;
    error: string | null;
    message: string | null;
  }