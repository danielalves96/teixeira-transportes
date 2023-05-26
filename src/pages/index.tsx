import Carrousel from '@/components/carrousel';
import Contact from '@/components/contact';
import EnterpriseClients from '@/components/enterpriseClients';
import EntrepriseNumbers from '@/components/enterpriseNumbers';
import EnterprisePicture from '@/components/enterprisePicture';
import EnterpriseServices from '@/components/enterpriseServices';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ImageDivider from '@/components/imageDivider';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>TypeScript starter for Next.js</title>
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
          <EntrepriseNumbers />
        </div>
        <EnterprisePicture />
        <div id="clients">
          <EnterpriseClients />
        </div>
        <div id="budget">
          <Contact />
        </div>
        <div id="enterprise">
          <Footer />
        </div>
      </main>
    </>
  );
}
