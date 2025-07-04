import { color } from "@/utils/color";
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import Typography from "./Typography";

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textSize?: number;
};

export default function Button({
  title,
  onPress,
  style,
  textStyle,
  textSize,
}: ButtonProps) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Typography.bold
        size={textSize ?? 16}
        color={color.textPrimary}
        style={textStyle}
      >
        {title}
      </Typography.bold>
    </TouchableOpacity>
  );
}
