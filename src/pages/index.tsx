import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { MainBar } from "../components/MainBar";
import { MainList } from "../components/MainList";
import { MenuActions } from "../components/DrawerMenu";
import { scan } from "../services/gree-service";
import { useState } from 'react';
import { DeviceInfo } from 'gree-lib';


const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  const [scannedDevices, setScannedDevices] = useState<DeviceInfo[]>();

  const onActionClick = async (menuAction: string) => {
    switch(menuAction) {
      case MenuActions.scan:
        const result = await scan();
        if (result) {
          setScannedDevices(result);  
        }
              
        break;
  
      default:
        console.log("Invalid action item");
    }
  }
  
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
          <MainList scannedDevices={scannedDevices} />
        </div>
      </main>
    </>
  );
}
