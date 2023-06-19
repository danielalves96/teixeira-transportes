import React from 'react';
import * as S from './styles';
import { enterpriseClients } from './clients';
const EnterpriseClients: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>Mais do que números: conexão.</S.Title>
      <S.Logos>
        {enterpriseClients.map((client) => (
          <div key={client.icon}>
            <S.Logo src={client.icon} />
          </div>
        ))}
      </S.Logos>
    </S.Wrapper>
  );
};

export default EnterpriseClients;
