import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>뒤로 가기</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
