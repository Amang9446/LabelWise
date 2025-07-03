import { StyleProp, Text, TextProps, TextStyle } from "react-native";

type TypographyProps = {
  children: React.ReactNode;
  size: number;
  style?: StyleProp<TextStyle>;
  color?: string;
};

const Typography = {
  regular: ({
    children,
    size,
    style,
    color = "black",
    ...props
  }: TypographyProps & TextProps) => (
    <Text
      {...props}
      style={[
        { fontFamily: "Montserrat_400Regular", fontSize: size, color },
        style,
      ]}
    >
      {children}
    </Text>
  ),
  medium: ({
    children,
    size,
    style,
    color = "black",
    ...props
  }: TypographyProps & TextProps) => (
    <Text
      {...props}
      style={[
        { fontFamily: "Montserrat_500Medium", fontSize: size, color },
        style,
      ]}
    >
      {children}
    </Text>
  ),
  semiBold: ({
    children,
    size,
    style,
    color = "black",
    ...props
  }: TypographyProps & TextProps) => (
    <Text
      {...props}
      style={[
        { fontFamily: "Montserrat_600SemiBold", fontSize: size, color },
        style,
      ]}
    >
      {children}
    </Text>
  ),
  bold: ({
    children,
    size,
    style,
    color = "black",
    ...props
  }: TypographyProps & TextProps) => (
    <Text
      {...props}
      style={[
        { fontFamily: "Montserrat_700Bold", fontSize: size, color },
        style,
      ]}
    >
      {children}
    </Text>
  ),
};

export default Typography;
