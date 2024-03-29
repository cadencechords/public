import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';

export default function Home() {
  const router = useRouter();
  const [setlistCode, setSetlistCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLookupSetlist = e => {
    e.preventDefault();
    if (setlistCode && setlistCode !== '') {
      setLoading(true);
      router.push(`/setlists/${setlistCode}`);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 justify-center min-h-screen py-2 max-w-lg mx-auto px-3 md:px-0">
      <Head>
        <title>Cadence</title>
      </Head>
      <form onSubmit={handleLookupSetlist} className="w-full">
        <Input
          placeholder="Enter the key"
          value={setlistCode}
          onChange={setSetlistCode}
        />
        <Button loading={loading}>Enter</Button>
      </form>
    </div>
  );
}
