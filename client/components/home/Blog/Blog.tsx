import { getBlog } from '@/actions/blog';
import BLOGS from '../../../data/blogs';
import { useFetch } from '../../../hooks/use-fetch';
import BlogCard, { Blog } from '../../cards/BlogCard/BlogCard';
import { Container, Section } from '../../shared';
import { Heading } from '../../ui';

const Blogs = async () => {
  const blog = await getBlog();

  return (
    <Section>
      <Container>
        <Heading title="Blog" subTitle="Our Latest Blog & News" />
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
          {blog.slice(0, 2).map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Blogs;
