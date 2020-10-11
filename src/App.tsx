import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* TSX Pages */
import Home from './pages/home/Home';
import Splash from './pages/Splash';
import Profesional from "./pages/profesional/Profesional"
import Scan from "./pages/scan/Scan"


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter forceRefresh>
      <IonRouterOutlet>
        <Route path="/" component={Splash} exact={true} />
        <Route path="/home" component={Home} />
        <Route path="/profesional" component={Profesional} />
        <Route path="/scan" component={Scan} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
