import React from 'react';
import * as S from './styles';
import { Link } from 'react-scroll';

const MobileHeader: React.FC = () => {
  return (
    <>
      <S.HeaderWrapper>
        <S.Logo src="/assets/vertical-logo.png" alt="logo" />
        <S.Controls>
          <Link to="budget" smooth={true} duration={500}>
            <S.Button>Solicite um orçamento</S.Button>
          </Link>
        </S.Controls>
      </S.HeaderWrapper>
    </>
  );
};

export default MobileHeader;
