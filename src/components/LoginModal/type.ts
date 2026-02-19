export type FormFields = {
  username: string;
  password: string;
  remember: string;
};

export interface LoginModalProps {
  onSubmit: (fields: FormFields) => void;
  loading: boolean;
  errorMessage: string;
}
