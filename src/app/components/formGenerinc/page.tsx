"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";

interface Field {
  label: string;
  name: string;
  type: string;
}

interface Props {
  fields: Field[];
  initialState: Record<string, any>;
  onSubmit: (formData: Record<string, any>) => void;
}

const FormGeneric: React.FC<Props> = ({ fields, initialState, onSubmit }) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formState);
    setFormState(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
    {fields.map((field) => (
      <div key={field.name}>
        <label>{field.label}</label>
        <input
          type={field.type}
          name={field.name}
          value={formState[field.name]}
          onChange={handleChange}
        />
      </div>
    ))}
    <button type="submit">Enviar</button>
  </form>
        );
    };

export default FormGeneric;