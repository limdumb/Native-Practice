import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface LoginType {
  id: string;
  password: string;
}

export default function App() {
  const [loginValue, setLoginValue] = useState({ id: "", password: "" });

  const handleInputChange = (key: keyof LoginType, value: string) => {
    setLoginValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  console.log(loginValue)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        nativeID="id"
        style={styles.input}
        defaultValue={loginValue.id}
        onChangeText={(text) => {
          handleInputChange("id", text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    color: "pink",
    height: 40,
    width: 160,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
