import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";

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

import Bookmark from "./Tabs/Bookmark";
import Submit from "./Tabs/Submit";
import Search from "./Tabs/Search";
import Profile from "./Tabs/Profile";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Forgot from "./Auth/Forget";
import EditProfile from "./Auth/EditProfile";
import {
  		search,
  		personCircle,
  		create,
  		addCircle,
  		library,
  	} from "ionicons/icons";

/* Theme variables */
import './theme/variables.css';

const App = () => (
  <IonApp>
    <IonReactRouter>
    <IonTabs>
       <IonRouterOutlet>
        <Route path="/"
                render={() => <Redirect to="/Bookmark" />}
                exact={true} />
              <Route path="/Bookmark" component={Bookmark} />
              <Route path="/submit" component={Submit} />
              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <Route path="/edit-profile" component={EditProfile} />
              <Route path="/register" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forget" component={Forget} />
              <Route component={() => <Redirect to="/news" />} />
       </IonRouterOutlet>
           <IonTabBar slot="bottom">
              <IonTabButton tab="Bookmark" href="/Bookmark">
              <IonIcon icon={library} />
              <IonLabel>Bookmark</IonLabel>
              </IonTabButton>
              <IonTabButton tab="submit" href="/submit">
                <IonIcon icon={addCircle} />
                <IonLabel>Add</IonLabel>
              </IonTabButton>
              <IonTabButton tab="search" href="/search">
                <IonIcon icon={search} />
                <IonLabel>Search</IonLabel>
              </IonTabButton>
              <IonTabButton tab="profile" href="/profile">
                <IonIcon icon={personCircle} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>              
           </IonTabBar>   
     </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
