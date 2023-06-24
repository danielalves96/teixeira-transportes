import * as React from 'react';
import Button from '@mui/material/Button';
import {
  AppBar,
  Container,
  Divider,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';

import { useQuery, gql, useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AppData {
  id: string;
  address: string;
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
      weekOpenedHours
      weekendOpenedHours
    }
  }
`;

export default function MyApp() {
  const { loading, error, data } = useQuery<Data>(APPDATA_QUERY);

  const [dataOneValue, setDataOneValue] = React.useState('');
  const [dataOneTitle, setDataOneTitle] = React.useState('');
  const [dataOneDescription, setDataOneDescription] = React.useState('');
  const [dataTwoValue, setDataTwoValue] = React.useState('');
  const [dataTwoTitle, setDataTwoTitle] = React.useState('');
  const [dataTwoDescription, setDataTwoDescription] = React.useState('');
  const [dataTreeValue, setDataTreeValue] = React.useState('');
  const [dataTreeTitle, setDataTreeTitle] = React.useState('');
  const [dataTreeDescription, setDataTreeDescription] = React.useState('');

  const [mail, setMail] = React.useState('');
  const [phone1, setPhone1] = React.useState('');
  const [phone2, setPhone2] = React.useState('');
  const [weekOpenedHours, setWeekOpenedHours] = React.useState('');
  const [weekendOpenedHours, setWeekendOpenedHours] = React.useState('');
  const [address, setAddress] = React.useState('');

  useEffect(() => {
    if (error) {
      console.log(error);
    }

    setDataOneValue(data?.appData?.dataOneValue as string);
    setDataOneTitle(data?.appData?.dataOneTitle as string);
    setDataOneDescription(data?.appData?.dataOneDescription as string);

    setDataTwoValue(data?.appData?.dataTwoValue as string);
    setDataTwoTitle(data?.appData?.dataTwoTitle as string);
    setDataTwoDescription(data?.appData?.dataTwoDescription as string);

    setDataTreeValue(data?.appData?.dataTreeValue as string);
    setDataTreeTitle(data?.appData?.dataTreeTitle as string);
    setDataTreeDescription(data?.appData?.dataTreeDescription as string);

    setAddress(data?.appData?.address as string);
    setMail(data?.appData?.mail as string);
    setPhone1(data?.appData?.phone1 as string);
    setPhone2(data?.appData?.phone2 as string);
    setWeekOpenedHours(data?.appData?.weekOpenedHours as string);
    setWeekendOpenedHours(data?.appData?.weekendOpenedHours as string);
  }, [loading, error, data]);

  const UPDATE_APP_DATA = gql`
    mutation UpdateAppData($input: AppDataUpdateInput!) {
      updateAppData(data: $input, where: { id: "cliz5hgh91acv0bm1kluxpx9j" }) {
        id
      }
    }
  `;

  const PUBLISH_APP_DATA = gql`
    mutation PublishAppData {
      publishAppData(where: { id: "cliz5hgh91acv0bm1kluxpx9j" }) {
        id
      }
    }
  `;

  const [updateAppData] = useMutation(UPDATE_APP_DATA);
  const [publishAppData] = useMutation(PUBLISH_APP_DATA);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newData = {
      dataOneValue,
      dataOneTitle,
      dataOneDescription,
      dataTwoValue,
      dataTwoTitle,
      dataTwoDescription,
      dataTreeValue,
      dataTreeTitle,
      dataTreeDescription,
      mail,
      phone1,
      phone2,
      weekOpenedHours,
      weekendOpenedHours,
      address,
    };

    console.log(newData);

    try {
      const { data } = await updateAppData({
        variables: {
          input: {
            ...newData,
          },
        },
      });

      try {
        await publishAppData();
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
      } catch (error) {
        toast.error('Ocorreu um erro, tente novamente.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        console.log(error);
      }
    } catch (error) {
      toast.error('Ocorreu um erro, tente novamente.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      console.log(error);
    }
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Edição de dados do site
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ marginTop: '30px' }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6">Card 1</Typography>
          <TextField
            required
            name="dataOneValue"
            label="Valor do primeiro card"
            fullWidth
            margin="normal"
            variant="outlined"
            value={dataOneValue}
            onChange={(e) => setDataOneValue(e.target.value)}
          />

          <TextField
            required
            name="dataOneTitle"
            label="Título do primeiro card"
            fullWidth
            margin="normal"
            variant="outlined"
            value={dataOneTitle}
            onChange={(e) => setDataOneTitle(e.target.value)}
          />

          <TextField
            required
            name="dataOneDescription"
            label="Descrição do primeiro card"
            fullWidth
            margin="normal"
            variant="outlined"
            value={dataOneDescription}
            onChange={(e) => setDataOneDescription(e.target.value)}
          />

          <Divider sx={{ marginTop: 3, marginBottom: 3 }} />

          <Typography variant="h6">Card 2</Typography>
          <TextField
            required
            name="dataTwoValue"
            label="Valor do primeiro card"
            fullWidth
            margin="normal"
            variant="outlined"
            value={dataTwoValue}
            onChange={(e) => setDataTwoValue(e.target.value)}
          />

          <TextField
            required
            name="dataTwoTitle"
            label="Título do segundo card"
            fullWidth
            margin="normal"
            variant="outlined"
            value={dataTwoTitle}
            onChange={(e) => setDataTwoTitle(e.target.value)}
          />

          <TextField
            required
            name="dataTwoDescription"
            label="Descrição do primeiro card"
            fullWidth
            margin="normal"
            variant="outlined"
            value={dataTwoDescription}
            onChange={(e) => setDataTwoDescription(e.target.value)}
          />

          <Divider sx={{ marginTop: 3, marginBottom: 3 }} />

          <Typography variant="h6">Card 3</Typography>
          <TextField
            required
            name="dataTreeValue"
            label="Valor do terceiro card"
            fullWidth
            margin="normal"
            variant="outlined"
            value={dataTreeValue}
            onChange={(e) => setDataTreeValue(e.target.value)}
          />

          <TextField
            required
            name="dataTreeTitle"
            label="Título do primeiro card"
            fullWidth
            margin="normal"
            variant="outlined"
            value={dataTreeTitle}
            onChange={(e) => setDataTreeTitle(e.target.value)}
          />

          <TextField
            required
            name="dataTreeDescription"
            label="Descrição do primeiro card"
            fullWidth
            margin="normal"
            variant="outlined"
            value={dataTreeDescription}
            onChange={(e) => setDataTreeDescription(e.target.value)}
          />
          <Divider sx={{ marginTop: 3, marginBottom: 3 }} />

          <Typography variant="h6">Endereço e contato</Typography>
          <TextField
            required
            name="address"
            label="Endereço"
            fullWidth
            margin="normal"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <TextField
            required
            name="mail"
            label="E-mail"
            fullWidth
            margin="normal"
            variant="outlined"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />

          <TextField
            required
            name="phone1"
            label="Telefone 1"
            fullWidth
            margin="normal"
            variant="outlined"
            value={phone1}
            onChange={(e) => setPhone1(e.target.value)}
          />

          <TextField
            required
            name="phone2"
            label="Telefone 2"
            fullWidth
            margin="normal"
            variant="outlined"
            value={phone2}
            onChange={(e) => setPhone2(e.target.value)}
          />

          <TextField
            required
            name="weekOpenedHours"
            label="Horário dia de semana"
            fullWidth
            margin="normal"
            variant="outlined"
            value={weekOpenedHours}
            onChange={(e) => setWeekOpenedHours(e.target.value)}
          />

          <TextField
            required
            name="weekendOpenedHours"
            label="Horário dia de semana"
            fullWidth
            margin="normal"
            variant="outlined"
            value={weekendOpenedHours}
            onChange={(e) => setWeekendOpenedHours(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: 3, marginBottom: 3 }}
          >
            Salvar
          </Button>
        </form>
      </Container>
      <ToastContainer />
    </>
  );
}
