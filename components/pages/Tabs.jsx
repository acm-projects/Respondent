import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { analyticsOutline, calculatorOutline, radioButtonOffOutline, calendarOutline, cubeOutline } from 'ionicons/icons';


import Home from './Emergencies';
import Lists from './Lists';
import ListDetail from './ListDetail';
import Settings from './Settings';
import Calendar from './Calendar';
import Converter from './Converter';
import Login from './Login'

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/converter" render={() => <Converter />} exact={true} />
        <Route path="/tabs/lists" render={() => <Lists />} exact={true} />
        <Route path="/tabs/lists/:listId" render={() => <ListDetail />} exact={true} />
        <Route path="/tabs/emergencies" render={() => <Home />} exact={true} />
        <Route path="/tabs/calendar" render={() => <Calendar />} exact={true} />
        <Route path="/tabs/assets" render={() => <Lists />} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/emergencies" />} exact={true} />
        <Route path="/tabs/login" render={() => <Login />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/converter">
          <IonIcon icon={calculatorOutline}/>
          <IonLabel>Converter</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/lists">
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
