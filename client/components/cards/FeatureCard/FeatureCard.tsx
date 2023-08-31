import { FcCurrencyExchange } from 'react-icons/fc';
import Image from 'next/image';

export type Feature = {
  id: string;
  icon: any;
  title: string;
  description: string;
};

type Props = {
  item: Feature;
};

const FeatureCard = ({ item: { title, icon: Icon, description } }: Props) => {
  return (
    <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
      <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
        {/* <Image
          src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
          className="w-12"
          width="512"
          height="512"
          alt="burger illustration"
        /> */}
        <Icon size={42} />

        <div className="space-y-2">
          <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
            More features
          </h5>
          <p className="text-gray-600 dark:text-gray-300">
            Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center justify-between group-hover:text-secondary"
        >
          <span className="text-sm">Read more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            <path
              fill-rule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    // <div className="flex flex-col gap-8 px-8 py-10 border border-slate-800 ">
    //   <Icon strokeWidth={1.5} size={36} />
    //   <div>
    //     <h2 className="text-base font-semibold text-slate-200 mb-3">{title}</h2>
    //     <p className="text-sm font-light text-slate-400">{description}</p>
    //   </div>
    //   <small>Read more</small>
    // </div>
  );
};

export default FeatureCard;
