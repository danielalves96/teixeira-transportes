import React from 'react';
import * as S from './styles';
import { enterpriseServices } from './services';
const EnterpriseServices: React.FC = () => {
  return (
    <>
      <S.ServicesWrapper>
        <S.Title>Diferencial no atendimento aos clientes.</S.Title>
        <S.Subtitle>
          Conectando empresas aos seus clientes e novos mercados
        </S.Subtitle>
        <S.ServiceSection>
          {enterpriseServices.map((service) => (
            <div key={service.description}>
              <S.ServiceWrapper>
                <S.Icon src={service.icon} alt={service.description} />
                <span>{service.description}</span>
              </S.ServiceWrapper>
            </div>
          ))}
        </S.ServiceSection>
      </S.ServicesWrapper>
    </>
  );
};

export default EnterpriseServices;
