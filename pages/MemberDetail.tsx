import { RouteProp } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { Member } from "./Home";

type MemberDetailProps = {
  route: RouteProp<RootStackParamList, "MemberDetail">;
};

const MemberDetail = ({ route }: MemberDetailProps) => {
  
  const memberProps: Member = route.params.member;

  return (
    <View style={styles.container}>
      <Image source={memberProps.image} style={styles.memberImage} />
      <Text style={styles.memberName}>{memberProps.name}</Text>
      <Text>멤버 소개 페이지</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: 393,
    alignItems: "center",
  },
  memberImage: { width: 150, height: 150 },
  memberName: {},
});

export default MemberDetail;
