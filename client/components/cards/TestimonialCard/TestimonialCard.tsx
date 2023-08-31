import Avatar from '@/components/ui/avatar/avatar';
import Image from 'next/image';

export type Testimonial = {
  id: string;
  content: string;
  imageUrl: string;
  handle: string;
  category: string;
  createdAt: string;
};

type Props = {
  item: Testimonial;
};

const TestimonialCard = ({ item: { imageUrl, content} }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
      <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
        <div className="flex gap-4">
          <Avatar src={imageUrl} />
          <div>
            <h3 className="text-lg font-medium text-gray-700 dark:text-white">
              Daniella Doe
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">@hundler</p>
          </div>
        </div>
        <p className='font-extralight text-sm text-slate-300'>
          {content}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
