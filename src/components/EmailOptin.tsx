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
      className="flex flex-col mb-8 bg-brand-500 p-12 shadow-sm align-center"
    >
      <div className="md:w-64 md:mx-auto">
        <input type="hidden" name="form-name" value="newsletter" />
        <label
          htmlFor={firstNameId}
          className="flex flex-col mb-2 text-white uppercase font-bold font-body text-lg"
        >
          First name
          <input
            id={firstNameId}
            type="text"
            placeholder="Your first name"
            name="first_name"
            required
            ref={register({ required: true, maxLength: 80 })}
            className="mt-1 mb-2 py-1 px-2 uppercase font-bold font-body text-lg"
          />
        </label>
        <label
          htmlFor={emailId}
          className="flex flex-col mb-1 text-white uppercase font-bold font-body text-lg"
        >
          Email
          <input
            id={emailId}
            type="text"
            placeholder="Your email address"
            name="email"
            required
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            className="mt-1 mb-2 py-2 px-2 uppercase font-bold font-body text-lg"
          />
        </label>

        <input
          type="submit"
          className="py-1 border-solid text-white bg-accent-500 border-4 border-white mt-4 font-display text-xl uppercase w-full md:block md:mx-auto md:w-48"
        />
      </div>
    </form>
  );
};
