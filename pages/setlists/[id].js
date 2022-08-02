import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SetlistDisplay from '../../components/SetlistDisplay';

export default function Setlist({ setlist }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading!</div>;
  } else if (!setlist) {
    return <div>Could not find that setlist</div>;
  } else {
    return (
      <>
        <Head>
          <title>Songs | Cadence</title>
          <meta property="og:title" content="Songs | Cadence"></meta>
          <meta
            property="og:image"
            content="https://public.cadencechords.com/logo.png"
          ></meta>
          <meta property="og:image:width" content="579"></meta>
          <meta property="og:image:height" content="773"></meta>
        </Head>
        <SetlistDisplay setlist={setlist} />
      </>
    );
  }
}

export async function getStaticProps(props) {
  const { id } = props.params;

  try {
    const result = await axios.get(`${API_URL}/public_setlists/${id}`);
    const setlist = result.data;
    return { props: { setlist } };
  } catch (error) {
    return { props: { setlist: null } };
  }
}

export async function getStaticPaths() {
  const result = await axios.get(API_URL + '/public_setlists');
  const setlists = result.data;

  const paths = setlists?.map(setlist => ({
    params: { id: setlist.public_link },
  }));

  return { paths, fallback: true };
}

const API_URL = process.env.API_URL;
