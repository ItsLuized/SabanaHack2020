import React, { useState } from "react";
import { IonContent, IonPage, IonCol, IonRow, IonGrid, IonInput, IonButton, IonAlert} from '@ionic/react';
import styles from "./Profesional.module.css";
import { Redirect, useHistory } from "react-router";

const Profesional: React.FC = () => {

  const history = useHistory();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  function logInProfesional(){
    if(username === "profesional" && password === "1234"){
      console.log(username + " " + password);
      history.push("/scan")
    }
  }

  return (
    <IonPage>
      <IonContent className={styles.blue} >
        <IonGrid>
          <IonRow>
            <IonCol class="ion-text-center" className={styles.bigMar}>
              <h1>Ingrese sus credenciales</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="ion-text-center" className={styles.bigMar}>
              <IonInput value={username} placeholder="Usuario" onIonChange={e => setUsername(e.detail.value!)} className={styles.input} required></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="ion-text-center" className={styles.bigMar}>
              <IonInput value={password} placeholder="Contraseña" onIonChange={e => setPassword(e.detail.value!)} className={styles.input} required type="password"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow  className={styles.ingresar}>
            <IonCol class="ion-text-center" className={styles.button}>
              <IonButton expand="block" onClick={ logInProfesional } >
                Ingresar
                </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Profesional;