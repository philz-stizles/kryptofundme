import { Container, Navbar } from '..';
import { Button } from '../../ui';

const Header = () => {
  return (
    <header className="min-h-screen relative">
      <Navbar />
      <Container>
        <div className="absolute top-1/4 w-6/12 -translate-y-1/5 flex flex-col items-start gap-8">
          <h2 className=" text-5xl font-bold leading-snug">
            The Future of{' '}
            <strong className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Finance
            </strong>{' '}
            Support Innovation with
            <strong className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {' '}
              Crypto Fund Me!
            </strong>
          </h2>
          <p className=" text-lg font-light">
            Be a part of the next evolution in fundraising? Introducing Crypto
            Fund Me, the cutting-edge platform that&apos;s revolutionizing the
            way we fund projects, dreams, and ideas.
          </p>
          <div className="flex items-center gap-6">
            <Button className="btn-gradient" size="lg">
              Let&apos;s get started
            </Button>
            <Button className="bg-slate-800 border border-slate-700" size="lg">
              Learn more
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
