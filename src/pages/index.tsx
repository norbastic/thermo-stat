import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { MainBar } from "../components/MainBar";
import { MainList } from "../components/MainList";
import { MenuActions } from "../components/DrawerMenu";
import { scan } from "../services/gree-service";


const inter = Inter({ subsets: ['latin'] });

const onActionClick = async (menuAction: string) => {
  switch(menuAction) {
    case MenuActions.scan:
      await scan();
      console.log("Scanning devices");
      break;

    default:
      console.log("Invalid action item");
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Thermo Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <MainBar onActionClick={onActionClick} />
          <MainList />
        </div>
      </main>
    </>
  );
}
