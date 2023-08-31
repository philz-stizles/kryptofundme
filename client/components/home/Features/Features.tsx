import { Container, Section } from '../../shared';
import Heading from '../../ui/heading/heading';
import { FeatureCard } from '../../cards';
import { getFeatures } from '@/actions/features';
import Image from 'next/image';

const Features = async () => {
  const features = await getFeatures();

  return (
    <Section id="features">
      <Container className="">
        <Heading
          title="Features"
          subTitle="Browse by Job Categories"
          description=""
          className="text-center justify-center"
        />
        <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {features.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Features;
