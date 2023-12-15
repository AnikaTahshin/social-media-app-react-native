import AppNavigation from "./src/navigation/AppNavigation";
import React from "react";

import Firebase, { FirebaseProvider } from "./config/Firebase";
export default function App() {
  return (
    <FirebaseProvider value={Firebase}>
      <AppNavigation />
    </FirebaseProvider>
  );
}
