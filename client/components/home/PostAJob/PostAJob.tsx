import { Container, Section } from '../../shared';
import Article from '../../ui/article/article';
import Avatar from '../../ui/avatar/avatar';

const PostAJob = () => {
  return (
    <Section>
      <Container>
        {/* <Heading
          title="Today Deals"
          subTitle="Unmissable Daily Deals Await: Shop Now and Save"
        /> */}

        <div className="grid grid-cols-2 gap-12">
          <div className="aspect-square flex items-center">
            <Article
              title="So Many People are Engaged all Over Africa"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia omnis, architecto tempore quae nam ipsa voluptates et quos, quam aliquid ratione saepe exercitationem asperiores itaque amet tenetur laudantium officia? Facere."
            />
          </div>
          <div className="aspect-square p-6">
            <div className="relative border border-dashed border-rose-400 w-full h-full rounded-full p-16">
              <div className=" bg-indigo-400 w-full h-full rounded-full p-12">
                <div className="relative bg-orange-50 w-full h-full rounded-full">
                  <Avatar className="absolute -left-3.5 bottom-1/4" />
                  <Avatar className="absolute right-1/2 translate-x-1/2  -top-3.5" />
                  <Avatar className="absolute -right-3.5 bottom-1/4" />
                </div>
              </div>
              <Avatar className="absolute left-0 top-1/4" />
              <Avatar className="absolute right-1/2 translate-x-1/2  -top-3.5" />
              <Avatar className="absolute right-0 top-1/4" />
              <Avatar className="absolute right-0 bottom-1/4" />
              <Avatar className="absolute right-1/2 translate-x-1/2  -bottom-3.5" />
              <Avatar className="absolute left-0 bottom-1/4" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PostAJob;
