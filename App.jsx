import { LogBox, View, Dimensions } from "react-native";

import { s } from "./App.style";

LogBox.ignoreLogs(["No native splash"]);

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get("screen")

export default function App() {
  return <></>
}