import React from 'react';
import * as S from './styles';

const MobileEntrepriseNumbers: React.FC<any> = (data: any) => {
  const { appData } = data;
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
            {appData.dataOneValue}
            <span>+</span>
          </S.ContentTitle>
          <S.ContentSubtitle> {appData.dataOneTitle}</S.ContentSubtitle>
          <S.ContentDescription>
            {appData.dataOneDescription}
          </S.ContentDescription>
        </S.Number>
        <S.Divider></S.Divider>
        <S.Number>
          <S.ContentTitle>
            {appData.dataTwoValue}
            <span>+</span>
          </S.ContentTitle>
          <S.ContentSubtitle>{appData.dataTwoTitle}</S.ContentSubtitle>
          <S.ContentDescription>
            {appData.dataTwoDescription}
          </S.ContentDescription>
        </S.Number>
        <S.Divider></S.Divider>
        <S.Number>
          <S.ContentTitle>
            {appData.dataTreeValue}
            <span>+</span>
          </S.ContentTitle>
          <S.ContentSubtitle>{appData.dataTreeTitle}</S.ContentSubtitle>
          <S.ContentDescription>
            {appData.dataTreeDescription}
          </S.ContentDescription>
        </S.Number>
      </S.Numbers>
    </S.Wrapper>
  );
};

export default MobileEntrepriseNumbers;
