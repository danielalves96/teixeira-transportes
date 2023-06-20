import Carrousel from '@/components/web/carrousel';
import Contact from '@/components/web/contact';
import MobileContact from '@/components/mobile/contact';
import EnterpriseClients from '@/components/web/enterpriseClients';
import EntrepriseNumbers from '@/components/web/enterpriseNumbers';
import EnterprisePicture from '@/components/web/enterprisePicture';
import EnterpriseServices from '@/components/web/enterpriseServices';
import Footer from '@/components/web/footer';
import Header from '@/components/web/header';
import ImageDivider from '@/components/web/imageDivider';
import Head from 'next/head';

import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import Loader from '@/components/web/loader';
import MobileHeader from '@/components/mobile/header';
import MobileCarrousel from '@/components/mobile/carrousel';
import MobileEnterpriseServices from '@/components/mobile/enterpriseServices';
import MobileImageDivider from '@/components/mobile/imageDivider';
import MobileEntrepriseNumbers from '@/components/mobile/enterpriseNumbers';
import MobileEnterprisePicture from '@/components/mobile/enterprisePicture';
import MobileEnterpriseClients from '@/components/mobile/enterpriseClients';
import MobileFooter from '@/components/mobile/footer';

interface AppData {
  id: string;
  address: string;
  createdAt: string;
  dataOneDescription: string;
  dataOneTitle: string;
  dataOneValue: string;
  dataTreeDescription: string;
  dataTreeTitle: string;
  dataTreeValue: string;
  dataTwoDescription: string;
  dataTwoTitle: string;
  dataTwoValue: string;
  mail: string;
  phone1: string;
  phone2: string;
  publishedAt: string;
  updatedAt: string;
  weekOpenedHours: string;
  weekendOpenedHours: string;
}

interface Data {
  appData: AppData;
}

const APPDATA_QUERY = gql`
  query AppDatas {
    appData(where: { id: "cliz5hgh91acv0bm1kluxpx9j" }) {
      id
      address
      createdAt
      dataOneDescription
      dataOneTitle
      dataOneValue
      dataTreeDescription
      dataTreeTitle
      dataTreeValue
      dataTwoDescription
      dataTwoTitle
      dataTwoValue
      mail
      phone1
      phone2
      publishedAt
      updatedAt
      weekOpenedHours
      weekendOpenedHours
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery<Data>(APPDATA_QUERY);

  const [screenWidth, setScreenWidth] = useState<any>(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [loading, error, data]);

  const appData = data?.appData;

  if (loading) return <Loader />;

  return (
    <>
      <Head>
        <title>Família Teixeira Transportes</title>
        <meta name="description" content="Teixeira transportes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {screenWidth < 1000 ? <MobileHeader /> : <Header />}
        {screenWidth < 1000 ? <MobileCarrousel /> : <Carrousel />}
        {screenWidth < 1000 ? (
          <div id="services">
            <MobileEnterpriseServices />
          </div>
        ) : (
          <div id="services">
            <EnterpriseServices />
          </div>
        )}
        {screenWidth < 1000 ? <MobileImageDivider /> : <ImageDivider />}

        {screenWidth < 1000 ? (
          <div id="numbers">
            <MobileEntrepriseNumbers appData={appData} />
          </div>
        ) : (
          <div id="numbers">
            <EntrepriseNumbers appData={appData} />
          </div>
        )}

        {screenWidth < 1000 ? (
          <MobileEnterprisePicture />
        ) : (
          <EnterprisePicture />
        )}

        {screenWidth < 1000 ? (
          <div id="clients">
            <MobileEnterpriseClients />
          </div>
        ) : (
          <div id="clients">
            <EnterpriseClients />
          </div>
        )}
        {screenWidth < 1000 ? (
          <div id="budget">
            <MobileContact />
          </div>
        ) : (
          <div id="budget">
            <Contact />
          </div>
        )}

        {screenWidth < 1000 ? (
          <div id="enterprise">
            <MobileFooter appData={appData} />
          </div>
        ) : (
          <div id="enterprise">
            <Footer appData={appData} />
          </div>
        )}
      </main>
    </>
  );
}
