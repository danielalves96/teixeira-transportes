import React from 'react';
import * as S from './styles';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  const names = [
    { name: 'Serviços', id: 'services' },
    { name: 'Conheça a empresa', id: `enterprise` },
    { name: 'Nossos números', id: 'numbers' },
    { name: 'Clientes', id: 'clients' },
  ];
  return (
    <>
      <S.HeaderWrapper>
        <S.Logo src="/assets/vertical-logo.png" alt="logo" />
        <S.Controls>
          <S.List>
            {names.map((name, index) => (
              <S.ListItem key={index}>
                <Link to={name.id} smooth={true} duration={500}>
                  {name.name}
                </Link>
              </S.ListItem>
            ))}
          </S.List>

          <Link to="budget" smooth={true} duration={500}>
            <S.Button>Solicite um orçamento</S.Button>
          </Link>
        </S.Controls>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
