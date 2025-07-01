import { StyleProp, Text, TextProps, TextStyle } from "react-native";

const Typography = {
  regular: ({
    children,
    size,
    style,
    ...props
  }: {
    children: React.ReactNode;
    size: number;
    style?: StyleProp<TextStyle>;
  } & TextProps) => (
    <Text
      {...props}
      style={[{ fontFamily: "DMSans_400Regular", fontSize: size }, style]}
    >
      {children}
    </Text>
  ),
  medium: ({
    children,
    size,
    style,
    ...props
  }: {
    children: React.ReactNode;
    size: number;
    style?: StyleProp<TextStyle>;
  } & TextProps) => (
    <Text
      {...props}
      style={[{ fontFamily: "DMSans_500Medium", fontSize: size }, style]}
    >
      {children}
    </Text>
  ),
  semiBold: ({
    children,
    size,
    style,
    ...props
  }: {
    children: React.ReactNode;
    size: number;
    style?: StyleProp<TextStyle>;
  } & TextProps) => (
    <Text
      {...props}
      style={[{ fontFamily: "DMSans_600SemiBold", fontSize: size }, style]}
    >
      {children}
    </Text>
  ),
  bold: ({
    children,
    size,
    style,
    ...props
  }: {
    children: React.ReactNode;
    size: number;
    style?: StyleProp<TextStyle>;
  } & TextProps) => (
    <Text
      {...props}
      style={[{ fontFamily: "DMSans_700Bold", fontSize: size }, style]}
    >
      {children}
    </Text>
  ),
};

export default Typography;
