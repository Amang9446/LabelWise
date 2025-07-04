import Button from "@/components/common/Button";
import Typography from "@/components/common/Typography";
import { color } from "@/utils/color";
import { normalize } from "@/utils/normilize";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/get-started.png")}
        style={{ width: "100%", height: "100%" }}
      />
      <View style={[styles.textContainer, { height: "100%" }]}>
        <Typography.bold size={32} color={color.textPrimary}>
          LabelWise
        </Typography.bold>
        <Typography.regular
          style={{ textAlign: "center" }}
          size={16}
          color={color.textPrimary}
        >
          One scan. All the facts.
        </Typography.regular>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Get Started"
          textSize={20}
          onPress={() => {}}
          textStyle={styles.buttonText}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    marginTop: normalize(80),
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: normalize(40),
    paddingHorizontal: normalize(20),
  },
  button: {
    backgroundColor: color.primary,
    borderRadius: normalize(10),
    paddingVertical: normalize(15),
    paddingHorizontal: normalize(20),
  },
  buttonText: {
    textAlign: "center",
  },
});
