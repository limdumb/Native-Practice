import { RouteProp } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";

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
      id: 2,
      age: 22,
      name: "우치나카 애리",
      native: "일본 도쿄도",
      nationality: "🇯🇵 일본",
      profile: { tall: 164, bloodType: "O형", MBTI: "ENFP" },
      position: "서브 보컬",
      albumImage: [
        "https://image.fmkorea.com/files/attach/new3/20230508/3655109/3035547727/5747394892/1d0c4dcea032e63791e889365ace2891.jpeg",
        "https://i.namu.wiki/i/aUrtraC84UMPyRxbdaYpqLxJ5_Ss_5J4zl-odDHJSrvYEOirDXkb08pfh862uHoBmFjpmFGDVgP5VEqwj3Equw.webp",
      ],
    },
    {
      id: 3,
      age: 20,
      name: "닝이줘",
      native: "헤이룽장성 하얼빈시",
      nationality: "🇨🇳 중국",
      profile: { tall: 161, bloodType: "O형", MBTI: "INFP" },
      position: "메인보칼",
      albumImage: [
        "https://i.namu.wiki/i/9QyxdDUpa-d8vJIP9mtJJKem8RHTYY8w1kxcJvngug9rXpvWtsR0DR33UajhQb12935xOYBUcGr6b7cspr-j7L5fADsfXH6H5owhTMcssNBq5krFz1CWiPeAKiotlLjAsv0B9LFXip2_c9yUepAmRg.webp",
        "https://i.namu.wiki/i/9fGDZhiAhsS4eQXNtC198yjqSl2yBBc5hNkshACjFGk5PLJQHV5OtrQFm1sanr6whp0s88piyh4SL0hPDb3qtheW7gmo2yNvldPgDu8G7F_cIDU_Tt6QuwY56vavKvuVgwBBt74ZhyWKazQ4-MnhWQ.webp",
      ],
    },
    {
      id: 4,
      age: 22,
      name: "김민정",
      native: "부산광역시 중구 남포동",
      nationality: "🇰🇷 대한민국",
      profile: { tall: 164, bloodType: "A형", MBTI: "ISFJ" },
      position: "메인보컬",
      albumImage: [
        "https://i.namu.wiki/i/-ldboWR2mzeSADuHHHWJ30rvZGGFjvY25-lXKwftM2DjadhdFJq2hP_YdYthICjcoQspPP6mqoeoY_hQMMFpWVoy8fLNn-9K_Na7N-E3HBGGzgEcndzYT7rIPfDSNmhgWBrNdYmMwvxqvL7Z5G7G_A.webp",
        "https://i.namu.wiki/i/Ocd66YyhaULkH8n-7Cmlh9eeg3A9rtBNZvP0i6Ec7IsyvQ4KFlQ477uFt0lBdPNFnIT7lPBQIsfF9ackIVu7G1YG3N6G_D5GLktuPi1wuUVifeplvYRxck4tD58bv0Wq3ulcExqaXt7UjtokOsTF5w.webp",
      ],
    },
  ];

  const clickMemberInfo = memberDetail.filter((member) => {
    return route.params.member.id === member.id;
  });
  console.log(clickMemberInfo);

  return (
    <View style={styles.container}>
      <Image source={route.params.member.image} style={styles.memberImage} />
      <Text style={styles.memberName}>{route.params.member.nickName}</Text>
      <Text>멤버 소개 페이지</Text>
      {clickMemberInfo.map((el)=>{
        return(<></>)
      })}
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
