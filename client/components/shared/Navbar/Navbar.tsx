'use client';

import { useCallback, useEffect, useState } from 'react';
import Container from '../container/container';
import { Button, Logo } from '../../ui';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  const handleRegister = useCallback(() => {
    router.push('/register');
  }, [router]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 transition ${
        colorChange
          ? 'py-3 bg-white app-shadow-b text-black'
          : 'py-5 text-slate-200'
      }`}
    >
      <Container className="flex justify-between items-center gap-6">
        <Logo
          className={classNames(colorChange ? ' text-black' : 'text-slate-200')}
        />
        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <NavItem href="#features" label="Features" />
            <NavItem href="#testimonials" label="Testimonials" />
            <NavItem href="#about" label="About" />
            <NavItem href="#blog" label="Blog" />
            <NavItem href="/login" label="Login" />
          </ul>

          <Button label="Get Started" onClick={handleRegister} />
        </nav>
      </Container>
    </div>
  );
};

type NavItemProps = {
  label: string;
  href: string;
  className?: string;
};

const NavItem = ({ label, href, className }: NavItemProps) => {
  return (
    <li className={classNames('text-sm', className)}>
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default Navbar;
