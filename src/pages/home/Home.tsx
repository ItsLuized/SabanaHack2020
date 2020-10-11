import { IonContent, IonPage, IonCol, IonRow, IonGrid, IonButton } from '@ionic/react';
import React from 'react';
import styles from "./Home.module.css"

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="dark">
        <IonGrid>
          <IonRow class="ion-align-items-center">
            <IonCol className={styles.blueTop} size="12"/>
          </IonRow>
          <IonRow class="ion-align-items-center">
            <IonCol class="ion-margin-top" className={styles.marginTitle}>
              <h1 className={styles.title}>Centro de Comunicacion</h1>
              <h1 className={styles.title}>Clínica Unisabana</h1>
            </IonCol>
          </IonRow>
          <IonRow />
          <div className={styles.space} />
          <div className={styles.space} />
          <IonRow class="ion-align-items-center">
            <IonCol size="12" class="ion-text-center">
              <IonButton shape="round" routerLink="/profesional">Profesional</IonButton>
            </IonCol>
            <div className={styles.space} />
            <IonCol size="12" class="ion-text-center ion-margin-top">
              <IonButton shape="round" href="/familiar">Familiar</IonButton>
            </IonCol>
          </IonRow>
          <div className={styles.space} />
          <IonRow>
            <IonCol size="12" class="ion-text-center" >
              <img className={styles.img} src="assets/img/Clinica_USabana.png" alt="Logo Clinica U Sabana"/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className={styles.blueBottom} size="12"/>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
