import React from "react";
import {IonGrid, IonCol, IonRow, IonPage, IonContent, IonButton} from '@ionic/react'
import styles from "./Scan.module.css";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


const Scan: React.FC = () => {

  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  };

  return (
    <IonContent className={styles.white}>
      <IonGrid>
        <IonRow>
          <IonCol className={styles.upper} />
        </IonRow>
        <IonRow>
          <IonCol>
            <h1 className={styles.title}>Escanee el código del paciente</h1>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
              <IonButton onClick={openScanner}>Escanear QR</IonButton>
          </IonCol>
        </IonRow>
        <IonRow >
          <IonCol className={styles.bottom} />
        </IonRow>
      </IonGrid>
    </IonContent>
  );

}

export default Scan;