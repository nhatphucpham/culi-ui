export type FormField = {
    name: string;
    label: string;
    type: string;
    required?: boolean;
};

export interface FormValues {
    [key: string]: any;
}

export type FormProps = {
    fields: FormField[];
    onSubmit: (values: FormValues) => void;
};