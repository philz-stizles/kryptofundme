'use client';

import { Button, Input } from '@/components/ui';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  const { firstname, lastname, email, password } = formValues;

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        setIsLoading(true);

        const res = await fetch('/api/auth/register', {
          method: 'POST',
          body: JSON.stringify(formValues),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        setIsLoading(false);

        if (!res.ok) {
          setError((await res.json()).message);
          return;
        }

        setFormValues(initialState);
        signIn(undefined, { callbackUrl: '/' });
      } catch (error: any) {
        setIsLoading(false);
        setError(error.message);
      }
    },
    [formValues]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const formIsInvalid = !email || !password || !firstname || !lastname;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Get Started for free
        </h1>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
          Already have an account?
          <Link className="ml-1 text-blue-600 dark:text-blue-400" href="/login">
            Login
          </Link>
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-4">
        <Input
          label="First Name"
          name="firstname"
          value={formValues.firstname}
          onChange={handleChange}
          disabled={isLoading}
        />
        <Input
          label="Last Name"
          name="lastname"
          value={formValues.lastname}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <Input
        label="Email address"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        disabled={isLoading}
      />
      <Input label="Password" name="password" onChange={handleChange} />
      <Button
        type="submit"
        disabled={isLoading || formIsInvalid}
        expanded
        label="Register"
      />
    </form>
  );
};

export default RegisterForm;
