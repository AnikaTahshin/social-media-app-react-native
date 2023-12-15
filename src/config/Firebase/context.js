import React, { createContext } from "react";

const FirebaseContext = createContext({});

export const FirebaseProvider = FirebaseContext.Provider;

export const FirebaseConsumer = FirebaseContext.Consumer;

export const withFirebaseHOC = (SignUpScreen) => (props) =>
  (
    <FirebaseConsumer>
      {(state) => <SignUpScreen {...props} firebase={state} />}
    </FirebaseConsumer>
  );

// export default withFirebaseHOC(SignUpScreen);
