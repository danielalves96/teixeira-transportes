import Carrousel from '@/components/web/carrousel';
import Contact from '@/components/web/contact';
import EnterpriseClients from '@/components/web/enterpriseClients';
import EntrepriseNumbers from '@/components/web/enterpriseNumbers';
import EnterprisePicture from '@/components/web/enterprisePicture';
import EnterpriseServices from '@/components/web/enterpriseServices';
import Footer from '@/components/web/footer';
import Header from '@/components/web/header';
import ImageDivider from '@/components/web/imageDivider';
import Head from 'next/head';

import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import Loader from '@/components/web/loader';

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
        <Header />
        <Carrousel />
        <div id="services">
          <EnterpriseServices />
        </div>
        <ImageDivider />
        <div id="numbers">
          <EntrepriseNumbers appData={appData} />
        </div>
        <EnterprisePicture />
        <div id="clients">
          <EnterpriseClients />
        </div>
        <div id="budget">
          <Contact />
        </div>
        <div id="enterprise">
          <Footer appData={appData} />
        </div>
      </main>
    </>
  );
}
