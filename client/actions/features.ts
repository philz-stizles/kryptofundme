import { FcBullish, FcGlobe, FcLock, FcMoneyTransfer } from 'react-icons/fc';

const features = [
  {
    id: '1',
    title: 'Software Developer',
    description:
      'Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.',
    icon: FcBullish,
  },
  {
    id: '2',
    title: '  Product Management',
    description:
      'Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.',
    icon: FcGlobe,
  },
  {
    id: '3',
    title: 'Finance & Account',
    description:
      'Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.',
    icon: FcLock,
  },
  {
    id: '4',
    title: 'Human Resources',
    description:
      'Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.',
    icon: FcMoneyTransfer,
  },
];

export const getFeatures = async () => {
  return features;
};
