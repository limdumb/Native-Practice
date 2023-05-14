import { RouteProp } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { Member } from "./Home";

type MemberDetailProps = {
  route: RouteProp<RootStackParamList, "MemberDetail">;
};

interface MemberDetailType {
  id: number;
  age: number;
  name: string;
  native: string;
  nationality: string;
  profile: { tall: number; bloodType: string; MBTI: string };
  position: string;
  albumImage: any[];
}

const MemberDetail = ({ route }: MemberDetailProps) => {
  const memberDetail: MemberDetailType[] = [
    {
      id: 1,
      age: 23,
      name: "유지민",
      native: "경기도 성남시 분당구 정자동",
      nationality: "🇰🇷 대한민국",
      profile: { tall: 168, bloodType: "B형", MBTI: "ENFP" },
      position: "리더",
      albumImage: [
        "https://pbs.twimg.com/media/FvmEAVqagAAVRbi.jpg",
        "https://image.fmkorea.com/files/attach/new3/20230508/3655109/3035547727/5747394148/c5f819a9197bfb0182b8799557b89bb1.jpeg",
      ],
    },
    {
      id: 0,
      age: 0,
      name: "",
      native: "",
      nationality: "",
      profile: { tall: 0, bloodType: "", MBTI: "" },
      position: "",
      albumImage: ["", ""],
    },
    {
      id: 0,
      age: 0,
      name: "",
      native: "",
      nationality: "",
      profile: { tall: 0, bloodType: "", MBTI: "" },
      position: "",
      albumImage: ["", ""],
    },
    {
      id: 0,
      age: 0,
      name: "",
      native: "",
      nationality: "",
      profile: { tall: 0, bloodType: "", MBTI: "" },
      position: "",
      albumImage: ["", ""],
    },
  ];

  return (
    <View style={styles.container}>
      <Image source={route.params.member.image} style={styles.memberImage} />
      <Text style={styles.memberName}>{route.name}</Text>
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
    paddingTop: 30,
  },
  memberImage: { width: 150, height: 150 },
  memberName: {},
});

export default MemberDetail;
