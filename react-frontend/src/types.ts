export interface FormFieldProps {
    id: string;
    [key: string]: any;
  }
  
  export interface FormField {
    comp: string;
    isRequired: boolean;
    valuePath: string;
    props?: FormFieldProps;
  }
  
  export interface ApiResponse {
    message: string;
    data: FormField[];
  }
  