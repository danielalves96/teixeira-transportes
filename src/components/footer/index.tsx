import React from 'react';
import * as S from './styles';

const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      <S.SectionsWrapper>
        <S.SectionOne>
          <S.Img src="assets/logoBgBlue.png" alt="" />
          <S.Title>Todos os destinos. </S.Title>
          <S.Title>Um só caminho.</S.Title>
          <S.Description>
            Procurando serviços de ligística? Conte com a Família Teixeita
            Transportes para te ajudar com o que necessita! Vamos onde você
            precisar estar.
          </S.Description>
        </S.SectionOne>
        <S.SectionTwo>
          <S.OurSite>Nosso site</S.OurSite>
          <S.List>
            <li>Início</li>
            <li>Serviços</li>
            <li>Conheça a empresa</li>
            <li>Nossos números</li>
            <li>Clientes</li>
            <li>Solicite um orçamento</li>
          </S.List>
        </S.SectionTwo>
        <S.SectionThree>
          <S.OurSite>Entre em contato</S.OurSite>
          <S.Contact>
            <S.ContactItem>
              <S.ContactIcon src="assets/location.png" />
              <S.ContactItemText>Curitiba/PR</S.ContactItemText>
            </S.ContactItem>
            <S.ContactItem>
              <S.ContactIcon src="assets/mail.png" />
              <S.ContactItemText>
                contato@fteixeiratransportes.com.br
              </S.ContactItemText>
            </S.ContactItem>
            <S.ContactItem>
              <S.ContactIcon src="assets/phone.png" />
              <S.ContactItemText>
                <span>(41) 9 9999-9999 | (41) 3333-3333 </span>
                <br />
                <span>Segunda a sexta: 08h às 18h</span>
                <br />
                <span>Sábados: 08 às 13h</span>
              </S.ContactItemText>
            </S.ContactItem>
          </S.Contact>
        </S.SectionThree>
      </S.SectionsWrapper>
      <S.Credits>
        <S.Rights>@ 2023 - Todos os direitos reservados</S.Rights>
        <S.Author>
          Desenvolvido por{' '}
          <a href="https://daniel-luiz-alves.vercel.app/" target="_blank">
            Daniel Alves
          </a>
        </S.Author>
      </S.Credits>
    </S.FooterWrapper>
  );
};

export default Footer;
