import React from "react";

interface Context {
  visible: boolean,
  setVisible: (visible) => void;
}

export const HiddenCartContext = React.createContext<Context>({
  visible: true,
  setVisible: () =>
    console.warn(
      "** If you area reading this, likely you have forgotten to add the provider on top of your app"
    ),
});
