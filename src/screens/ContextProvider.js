import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const DataContext = createContext(null);

export default function ContextProvider({ children }) {
  const [token, setToken] = useState(
    AsyncStorage.getItem("token") ? AsyncStorage.getItem("token") : null
  );
  const [userDetails, setUserDetails] = useState({});
  const [detailsPost, setDetailsPost] = useState({});
  return (
    <DataContext.Provider
      value={{
        token,
        setToken,
        userDetails,
        setUserDetails,
        detailsPost,
        setDetailsPost,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
