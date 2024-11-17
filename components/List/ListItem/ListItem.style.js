import { StyleSheet } from "react-native";
export const IMAGE_SIZE = {
    MAX: 300,
    MIN: 100
}
export const s = StyleSheet.create({
    image: {
        width: "100%",
        height : IMAGE_SIZE.MAX
    },
    textContainer: {
        padding: 10,
        backgroundColor: "#0000054",
        position:"absolute",
        flex: 1,
        alignItems: "center",
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        color: "white"
    },
    subtitle:{
        fontSize: 20,
        color: "white"
    }
});