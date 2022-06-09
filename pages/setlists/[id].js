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
          <title>Songs</title>
        </Head>
        <SetlistDisplay setlist={setlist} />
      </>
    );
  }
}

export async function getStaticProps(props) {
  const params = props.params;

  try {
    const result = await axios.get(`${API_URL}/public_setlists/${params.id}`);
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
    params: { id: setlist.code },
  }));

  return { paths, fallback: true };
}

const API_URL = process.env.API_URL;
