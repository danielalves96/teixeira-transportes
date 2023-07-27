import React, { useRef } from 'react';
import * as S from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import InputMask from 'react-input-mask';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'mailService',
        'template_mail_id',
        form.current,
        '93JpVJlQe7raXLSVC',
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Mensagem enviada com sucesso!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          resetForm();
        },
        (error) => {
          console.log(error.text);
          toast.error(
            'Ocorreu um erro ao enviar a mensagem, tente novamente.',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            },
          );
        },
      );
  };

  const resetForm = () => {
    form.current.reset();
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>Venha cair na estrada com a gente!</S.Title>
        <S.Subitle>
          Ficou interessado em nossos serviços? Conte-nos o que precisa e
          enviaremos uma proposta de orçamento.
        </S.Subitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Qual o seu nome?"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Qual o seu email?"
            name="mail"
            required
          />
          <input
            type="text"
            placeholder="Qual o seu telefone?"
            name="phone"
            required
          />
          <InputMask
            mask="(99) 99999-9999"
            maskChar=" "
            id="telefone"
            name="telefone"
            placeholder="Qual o seu telefone?"
            required
          />
          <textarea
            placeholder="Como podemos ajudá-lo?"
            cols={30}
            rows={30}
            name="message"
            required
          />
          <button type="submit" value="Send">
            Enviar mensagem
          </button>
        </S.Form>
      </S.Wrapper>
      <ToastContainer />
    </>
  );
};

export default Contact;
