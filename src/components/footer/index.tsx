import React from 'react';
import * as S from './styles';
import { Link } from 'react-scroll';

const Footer: React.FC<any> = (data: any) => {
  const { appData } = data;
  return (
    <S.FooterWrapper>
      <S.SectionsWrapper>
        <S.SectionOne>
          <S.Img src="assets/logoBgBlue.png" alt="" />
          <S.Title>Todos os destinos. </S.Title>
          <S.Title>Um só caminho.</S.Title>
          <S.Description>
            Procurando serviços de logística? Conte com a Família Teixeita
            Transportes para te ajudar com o que necessita! Vamos onde você
            precisar estar.
          </S.Description>
        </S.SectionOne>
        <S.SectionTwo>
          <S.OurSite>Nosso site</S.OurSite>
          <S.List>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Início
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>
                Serviços
              </Link>
            </li>
            <li>
              <Link to="numbers" smooth={true} duration={500}>
                Nossos números
              </Link>
            </li>
            <li>
              <Link to="clients" smooth={true} duration={500}>
                Clientes
              </Link>
            </li>
            <li>
              <Link to="budget" smooth={true} duration={500}>
                Solicite um orçamento
              </Link>
            </li>
          </S.List>
        </S.SectionTwo>
        <S.SectionThree>
          <S.OurSite>Entre em contato</S.OurSite>
          <S.Contact>
            <S.ContactItem>
              <S.ContactIcon src="assets/location.png" />
              <S.ContactItemText>{appData.address}</S.ContactItemText>
            </S.ContactItem>
            <S.ContactItem>
              <S.ContactIcon src="assets/mail.png" />
              <S.ContactItemText>{appData.mail}</S.ContactItemText>
            </S.ContactItem>
            <S.ContactItem>
              <S.ContactIcon src="assets/phone.png" />
              <S.ContactItemText>
                <span>
                  {appData.phone1} | {appData.phone2}{' '}
                </span>
                <br />
                <span>{appData.weekOpenedHours}</span>
                <br />
                <span>{appData.weekendOpenedHours}</span>
              </S.ContactItemText>
            </S.ContactItem>
          </S.Contact>
        </S.SectionThree>
      </S.SectionsWrapper>
      <S.Credits>
        <S.Rights>
          © {new Date().getFullYear()} - Todos os direitos reservados
        </S.Rights>
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
