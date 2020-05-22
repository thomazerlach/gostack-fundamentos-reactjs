import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  isActive?: 'list' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  isActive = 'list',
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link className={isActive === 'list' ? 'active' : undefined} to="/">
          Listagem
        </Link>
        <Link
          className={isActive === 'import' ? 'active' : undefined}
          to="/import"
        >
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
