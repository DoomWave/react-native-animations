import { TouchableOpacity } from "react-native-gesture-handler";
import { IMAGE_SIZE, s } from "./ListItem.style";
import Animated, {
    Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { View, Text } from "react-native";
export function ListItem({ image, scrollY, index }) {
  const imgAnimStyle = useAnimatedStyle(() => {
    const height = interpolate(
        scrollY.value, 
        [index*IMAGE_SIZE.MAX,index * IMAGE_SIZE.MAX - IMAGE_SIZE.MAX ], 
        [IMAGE_SIZE.MAX,IMAGE_SIZE.MIN],
        Extrapolate.CLAMP
    );

    return {
      height,
    };
  });
  return (
    <TouchableOpacity onPress={()=>alert("You clicked!")}>
    <Animated.Image source={image.picture} style={[s.image, imgAnimStyle]} />
    <View style={s.textContainer}>
      <Text style={s.title}>{image.subtitle}</Text>
      <Text style={s.subtitle}>{image.subtitle}</Text>
    </View>
    </TouchableOpacity>
  );
}