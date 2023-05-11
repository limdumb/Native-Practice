import { RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
type RootStackParamList = {
  Home: undefined;
  MemberDetail: { index: number };
};

interface MemberDetailProps {
  route: RouteProp<RootStackParamList, "MemberDetail">;
}

const MemberDetail: React.FC<MemberDetailProps> = ({ route }) => {
  console.log(route)
  return (
    <View style={styles.container}>
      {/* <Image source={route.image} style={styles.memberImage} /> */}
      <Text style={styles.memberName}>{route.name}</Text>
      <Text>멤버 소개 페이지</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  memberImage: {},
  memberName: {},
});

export default MemberDetail