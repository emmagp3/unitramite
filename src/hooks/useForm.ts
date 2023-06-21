import { useState } from 'react';

export default function useForm(fields?: any) {
  const [formState, setFormState] = useState(fields);
  const [error, setError] = useState<string>();

  const onChangeFields = ({ target }: any) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    onChangeFields,
    formState,
    error,
    setError,
  };
}
