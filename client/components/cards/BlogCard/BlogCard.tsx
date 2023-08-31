import { Calendar, User } from 'lucide-react';
import Image from 'next/image';
import Avatar from '../../ui/avatar/avatar';

export type Blog = {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  author: {
    name: string;
  };
  createdAt: string;
};

type Props = {
  item: Blog;
};

const BlogCard = ({
  item: { title, imageUrl, category, author, createdAt },
}: Props) => {
  return (
    <div className="cursor-pointer overflow-visible">
      <div className="overflow-hidden rounded-tl-md rounded-tr-md">
        <figure className="relative block aspect-video transition-all hover:scale-125">
          <Image fill objectFit="cover" src={imageUrl} alt={title} />
        </figure>
      </div>

      <div className="bg-gray-100 p-8 dark:bg-gray-900 border dark:border-gray-700 rounded-bl-md rounded-br-md">
        <span className="inline-block text-xs font-medium tracking-wider uppercase text-blue-600">
          {category}
        </span>

        <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
          {title}
        </h2>
        <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
          <a href="/author/mario-sanchez">
            <div className="flex items-center gap-3">
              <Avatar
                className="relative h-5 w-5 flex-shrink-0"
                src="https://i.pravatar.cc/300?img=45"
              />

              <span className="truncate text-sm">Mario Sanchez</span>
            </div>
          </a>
          <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
          <time
            className="truncate text-sm"
            dateTime="2022-10-21T15:48:00.000Z"
          >
            October 21, 2022
          </time>
        </div>
      </div>
      {/* <div className="p-4">
          <div className="mb-1">
            <span className="text-sm text-slate-600 font-light bg-slate-100 rounded-md p-1">
              {category}
            </span>
          </div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <div className="flex justify-between items-start text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <User size={18} /> <span>by {author?.name}</span>
            </div>
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{createdAt}</span>
            </span>
          </div>
        </div> */}
    </div>
  );
};

export default BlogCard;
