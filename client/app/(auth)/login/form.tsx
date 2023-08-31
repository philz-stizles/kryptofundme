'use client';

import { Button, Input } from '@/components/ui';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        setIsLoading(true);

        const res = await signIn('credentials', {
          redirect: false,
          email,
          password,
          callbackUrl,
        });

        setIsLoading(false);

        console.log(res);
        if (!res?.error) {
          router.push(callbackUrl);
        } else {
          setError('invalid email or password');
        }
      } catch (error: any) {
        setIsLoading(false);
      }
    },
    [callbackUrl, email, password, router]
  );

  const formIsInvalid = !email || !password;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Login in to your account.
        </h1>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
          <span>Don&apos;t have an account?</span>
          <Link className="text-blue-600 dark:text-blue-400" href="/register">
            Register
          </Link>
          <span>for free.</span>
        </p>
      </div>

      <Input
        label="Email address"
        disabled={isLoading}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <Input
        type="password"
        label="Password"
        disabled={isLoading}
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <Button expanded label="Login" disabled={isLoading || formIsInvalid} />
      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-slate-500 before:mt-0.5 after:flex-1 after:border-t after:border-slate-500 after:mt-0.5">
        <p className="text-center text-sm font-semibold mx-4 mb-0">OR</p>
      </div>
      <Button iconLeft={FcGoogle} expanded label="Continue with Google" />
    </form>
  );
};

export default LoginForm;
