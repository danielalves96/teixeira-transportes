import React from 'react';
import * as S from './styles';

const EntrepriseNumbers: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>Um pouco sobre nossos números.</S.Title>
      <S.Subitle>
        São mais de duas décadas de história e muitos serviços concluídos com
        sucesso. E os números nos ajudam a compreender a extensão desse
        trabalho!
      </S.Subitle>
      <S.Numbers>
        <S.Number>
          <S.ContentTitle>
            10<span>+</span>
          </S.ContentTitle>
          <S.ContentSubtitle>Veículos ativos</S.ContentSubtitle>
          <S.ContentDescription>
            Cavalos mecânicos e semirreboques.
          </S.ContentDescription>
        </S.Number>
        <S.Divider></S.Divider>
        <S.Number>
          <S.ContentTitle>
            70<span>+</span>
          </S.ContentTitle>
          <S.ContentSubtitle>KMs precorridos por mês</S.ContentSubtitle>
          <S.ContentDescription>
            Atualmente, contamos com uma media de 700 viagens realizadas todos
            os meses.
          </S.ContentDescription>
        </S.Number>
        <S.Divider></S.Divider>
        <S.Number>
          <S.ContentTitle>
            50mil<span>+</span>
          </S.ContentTitle>
          <S.ContentSubtitle>Viagens/mês</S.ContentSubtitle>
          <S.ContentDescription>
            Ao mês são percorridos pela empresa o equivalente a,
            aproximadamente, 10 voltas ao redor da terra.
          </S.ContentDescription>
        </S.Number>
      </S.Numbers>
    </S.Wrapper>
  );
};

export default EntrepriseNumbers;
