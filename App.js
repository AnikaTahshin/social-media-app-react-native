import AppNavigation from "./src/navigation/AppNavigation";
import ContextProvider from "./src/screens/ContextProvider";

export default function App() {
  return (
    <ContextProvider>
      <AppNavigation />
    </ContextProvider>
  );
}
