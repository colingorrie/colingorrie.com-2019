import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  idPrefix: string;
};

export const EmailOptin: FunctionComponent<Props> = ({ idPrefix }) => {
  const { register } = useForm();

  const firstNameId = `${idPrefix}-first-name`;
  const emailId = `${idPrefix}-email`;

  return (
    <form
      name="newsletter"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="flex flex-col mb-8 bg-gray-300 p-4 shadow-sm"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <label htmlFor={firstNameId} className="flex flex-col mb-1 text-gray-800">
        First name
        <input
          id={firstNameId}
          type="text"
          placeholder="Your first name"
          name="first_name"
          required
          ref={register({ required: true, maxLength: 80 })}
          className="w-64 mb-2 border-2 border-solid border-gray-400 py-1 px-2"
        />
      </label>
      <label htmlFor={emailId} className="flex flex-col mb-1 text-gray-800">
        Email
        <input
          id={emailId}
          type="text"
          placeholder="Your email address"
          name="email"
          required
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          className="w-64 mb-2 border-2 border-solid border-gray-400 py-1 px-2"
        />
      </label>

      <input
        type="submit"
        className="w-24 py-1 border-solid text-white bg-teal-700 shadow-md border-t-2 border-teal-600 my-2"
      />
    </form>
  );
};
