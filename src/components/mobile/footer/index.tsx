import React from 'react';
import * as S from './styles';
import { Link } from 'react-scroll';

const MobileFooter: React.FC<any> = (data: any) => {
  const { appData } = data;
  return (
    <S.FooterWrapper>
      <S.SectionsWrapper>
        <S.SectionOne>
          <S.Img src="assets/logoBgBlue.png" alt="" />
        </S.SectionOne>
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

export default MobileFooter;
