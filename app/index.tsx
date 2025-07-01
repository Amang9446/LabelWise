import Typography from "@/components/common/Typography";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography.regular size={24}>Hello World</Typography.regular>
    </View>
  );
}
