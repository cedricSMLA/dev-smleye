import React from "react";
import { createRoot } from "react-dom/client"; // Importer createRoot
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

// Trouvez le conteneur pour votre application React
const container = document.getElementById('root');

// Créez une racine.
const root = createRoot(container); // Utilisez createRoot pour créer la racine

// Rendu initial : Render l'application <App /> dans le conteneur racine
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Si vous voulez que votre application fonctionne hors ligne et charge plus rapidement,
// vous pouvez changer unregister() pour register() ci-dessous. Notez que cela vient avec certains pièges.
// En savoir plus sur les service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
