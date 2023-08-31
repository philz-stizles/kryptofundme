import {} from 'react-icons';
import { Container } from '..';
import { Logo } from '../../ui';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="text-slate-100 text-sm pt-28">
      <Container>
        <div className="grid grid-cols-6 gap-12 py-12">
          <div className=" col-span-2 ">
            <Logo className="mb-6" />
            <p className="text-sm font-light mb-5 w-10/12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              excepturi pariatur, cumque eos incidunt delectus dignissimos odio
              perferendis vero.
            </p>
            <div className="flex items-center gap-3 py-3">
              <div className="rounded-lg bg-slate-700 p-1">
                <IoLogoFacebook size={18} />
              </div>
              <div className="rounded-lg bg-slate-700 p-1">
                <IoLogoTwitter size={18} />
              </div>
              <div className="rounded-lg bg-slate-700 p-1">
                <IoLogoYoutube size={18} />
              </div>
              <div className="rounded-lg bg-slate-700 p-1">
                <IoLogoInstagram size={18} />
              </div>
            </div>
          </div>
          <FooterList
            title="Products"
            items={[
              'Find a Job',
              'Find Companies',
              "I'm a Company",
              'Accounts',
            ]}
          />
          <FooterList
            title="Company"
            items={['About Us', 'Blog', 'Careers', 'Our Team']}
          />

          <FooterList
            title="Support"
            items={[
              'Help Center',
              'Terms of Service',
              'Legal',
              'Privacy Policy',
            ]}
          />
          <FooterList title="Downloads" items={[]} />
        </div>
        <div className="border-t border-slate-600 flex justify-center items-center py-8">
          <p>
            Copyright &copy; | {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

const FooterList = ({ title, items }: { title?: string; items: string[] }) => {
  return (
    <div>
      <h3 className="text-base mb-4 font-semibold">{title}</h3>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li key={i} className="font-light">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
