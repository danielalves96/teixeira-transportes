import React from 'react';
import * as S from './styles';

const Contact: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>Venha cair na estrada com a gente!</S.Title>
      <S.Subitle>
        Ficou interessado em nossos serviços? Conte-nos o que precisa e
        enviaremos uma proposta de orçamento.
      </S.Subitle>
      <S.Form>
        <input type="text" placeholder="Qual o seu nome?" />
        <input type="text" placeholder="Qual o seu email?" />
        <input type="text" placeholder="Qual o seu telefone?" />
        <textarea
          placeholder="Como podemos ajudá-lo?"
          cols={30}
          rows={30}
        ></textarea>
        <button>Enviar mensagem</button>
      </S.Form>
    </S.Wrapper>
  );
};

export default Contact;
