import { TestimonialCard } from '@/components/cards';
import { Container, Section } from '../../shared';
import { Heading } from '../../ui';
import { getTestimonials } from '@/actions/testimonials';

const Testimonials = async () => {
  const testimonials = await getTestimonials();

  return (
    <Section>
      <Container>
        <Heading
          title="Today Deals"
          subTitle="Unmissable Daily Deals Await: Shop Now and Save"
        />
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.slice(0, 6).map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
