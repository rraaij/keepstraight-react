import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";
import React from "react";

const BmiResult: React.FC<{ result: number }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
              <h2>Your BMI:</h2>
            <h3>{props.result.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
