import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  idPrefix: string;
};

export const EmailOptin: FunctionComponent<Props> = ({ idPrefix }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  const firstNameId = `${idPrefix}-first-name`;
  const emailId = `${idPrefix}-email`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mb-8 bg-gray-300 p-4"
    >
      <label htmlFor={firstNameId} className="flex flex-col mb-1">
        First name
        <input
          id={firstNameId}
          type="text"
          placeholder="Enter your first name here"
          name="First name"
          required
          ref={register({ required: true, maxLength: 80 })}
          className="w-64 mb-2 border-2 border-solid border-gray-500 py-1 px-2"
        />
      </label>
      <label htmlFor={emailId} className="flex flex-col mb-1">
        Email
        <input
          id={emailId}
          type="text"
          placeholder="your.email@example.com"
          name="Email"
          required
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          className="w-64 mb-2 border-2 border-solid border-gray-500 py-1 px-2"
        />
      </label>

      <input
        type="submit"
        className="w-24 py-1 border-solid text-white bg-teal-700 shadow-sm border-t-2 border-teal-600 mt-2"
      />
    </form>
  );
};
