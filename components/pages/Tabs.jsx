import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { analyticsOutline, calculatorOutline, radioButtonOffOutline, calendarOutline, cubeOutline } from 'ionicons/icons';


import Home from './Emergencies';
import Lists from './Lists';
import Reports from './Reports'
import ListDetail from './ListDetail';
import Calendar from './Calendar';
import Converter from './Converter';
import Login from './Login';
import Settings from './Settings';
import Account from './Account';
import About from './About';
import Help from './Help';
import Privacy from './Privacy';
import Assets from './Assets'
import Chat from './Chat';

import Register from './Register';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/converter" render={() => <Converter />} exact={true} />
        <Route path="/tabs/reports" render={() => <Reports />} exact={true} />
        <Route path="/tabs/lists/:listId" render={() => <ListDetail />} exact={true} />
        <Route path="/tabs/emergencies" render={() => <Home />} exact={true} />
        <Route path="/tabs/calendar" render={() => <Calendar />} exact={true} />
        <Route path="/tabs/assets" render={() => <Assets />} exact={true} />
        <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
        <Route path="/tabs/account" render={() => <Account />} exact={true} />
        <Route path="/tabs/about" render={() => <About/>} exact={true} />
        <Route path="/tabs/help" render={() => <Help/>} exact={true} />
        <Route path="/tabs/privacy" render={() => <Privacy/>} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/login" />} exact={true} />
        <Route path="/tabs/login" render={() => <Login />} exact={true} />

        <Route path="/tabs/register" render={() => <Register />} exact={true} />
        <Route path="/tabs/chat" render={() => <Chat />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/converter">
          <IonIcon icon={calculatorOutline}/>
          <IonLabel>Converter</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/reports">
          <IonIcon icon={analyticsOutline} />
          <IonLabel>Reports</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/emergencies">
          <IonIcon icon={radioButtonOffOutline} />
          <IonLabel>Emergencies</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/tabs/calendar">
          <IonIcon icon={calendarOutline} />
          <IonLabel>Calendar</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab5" href="/tabs/assets">
          <IonIcon icon={cubeOutline} />
          <IonLabel>Assets</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
