import { Logo } from '@/components/ui';
import RegisterForm from './form';

const RegisterPage = () => {
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <div className="w-full py-6">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
          <div className="sm:mx-auto sm:w-2/3 md:w-1/2 lg:w-2/5">
            <div className="mb-10 flex justify-center items-center">
              <Logo />
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
              <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                <RegisterForm  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
