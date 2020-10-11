import React, {Component} from 'react';
import { IonContent, IonPage } from '@ionic/react';
import styles from "./Splash.module.css";
import { Redirect } from 'react-router';



class Splash extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    setTimeout(() => this.setState({ redirect : true}), 2000);
  }

  render() {
    return this.state.redirect
    ? <Redirect to="/home" />
    :
      <IonPage className={styles.white}>
        <IonContent fullscreen>
          <div className={styles.verticalCenter}>
            <div className={styles.center}>
              <img className={styles.img} src="assets/img/Clinica_USabana.png" alt="Logo Clinica U Sabana"/>
            </div>
          </div>
        </IonContent>
      </IonPage>
    
  };
}

export default Splash;