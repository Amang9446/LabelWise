import Typography from "@/components/common/Typography";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          marginTop: 32,
          marginBottom: 16,
        }}
      >
        <Image
          source={require("@/assets/images/login.jpg")}
          style={{ width: 400, height: 300 }}
          onError={(error) => {
            console.log(error);
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          padding: 16,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/login.jpg")}
            style={{ width: 50, height: 50 }}
          />
          <Typography.bold size={24} style={{ textAlign: "left" }}>
            Label
            <Typography.semiBold size={24} style={{ textAlign: "left" }}>
              wise
            </Typography.semiBold>
          </Typography.bold>
        </View>
        <View style={{ marginTop: 16, gap: 10 }}>
          <Typography.bold size={28}>
            Your Pocket Nutrition Checker.
          </Typography.bold>
          <Typography.regular size={14} color="gray">
            Discover what’s really inside your food. Just scan a barcode to get
            instant ratings based on ingredients, nutrition facts, and additives
            — so you can make healthier, smarter choices every time you shop.
          </Typography.regular>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 20,
            marginTop: 32,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              paddingVertical: 20,
              borderRadius: 999,
            }}
          >
            <Typography.regular
              size={16}
              color="white"
              style={{ textAlign: "center" }}
            >
              Login
            </Typography.regular>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              paddingVertical: 20,
              borderRadius: 999,
              borderWidth: 1,
              borderColor: "gray",
            }}
          >
            <Typography.regular
              size={16}
              color="black"
              style={{ textAlign: "center" }}
            >
              Sign up
            </Typography.regular>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
});
