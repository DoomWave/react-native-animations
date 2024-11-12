import { LogBox, View, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {List} from "./components/List/List"
import { s } from "./App.style";

LogBox.ignoreLogs(["No native splash"]);

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get("screen")

export default function App() {
  return <View style={{ flex:1 }}>
    <List />
  </View>
}