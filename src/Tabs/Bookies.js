import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
} from "@ionic/react";
import LinkList from "../components/Link/LinkList";

const Bookies = (props) => {
  return (
    <IonPage>
       <IonHeader>
           <IonToolbar>
 			 <IonTitle>Bookies</IonTitle>
           </IonToolbar>
       </IonHeader>
      <IonContent fullscreen>
        <LinkList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default Bookies;
