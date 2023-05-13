import { StyleSheet, Text, View } from "react-native";
import BackButton from "./BackButton";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Aespa</Text>
      <BackButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 90,
    paddingTop:40,
    borderBottomColor: "#eaeaea",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
