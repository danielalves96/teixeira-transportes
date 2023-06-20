import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import * as S from './styles';

const MobileCarrousel = () => {
  return (
    <div id="home">
      <S.CarrouselWrapper>
        <S.Copy>
          Procurando serviços de logística? A Família Teixeira transportes é a
          empresa que pode te ajudar a encontrar o que precisa.
        </S.Copy>
      </S.CarrouselWrapper>
      <Carousel
        showThumbs={false}
        dynamicHeight={false}
        autoPlay={true}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        interval={5000}
        stopOnHover={false}
      >
        <S.CarrouselImgWrapper>
          <S.CarrouselImage src="/assets/img1.jpg" alt="teste" />
        </S.CarrouselImgWrapper>
        <S.CarrouselImgWrapper>
          <S.CarrouselImage src="/assets/img2.jpg" alt="teste" />
        </S.CarrouselImgWrapper>
        <S.CarrouselImgWrapper>
          <S.CarrouselImage src="/assets/img3.jpg" alt="teste" />
        </S.CarrouselImgWrapper>
      </Carousel>
    </div>
  );
};

export default MobileCarrousel;
