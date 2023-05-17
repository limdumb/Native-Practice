import { ScrollView } from "react-native";
import { RootStackParamList } from "../App";
import { RouteProp } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";

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
      name: "유지민 🐰",
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
      name: "우치나카 애리 👾",
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
      age: 22,
      name: "김민정 🦋",
      native: "부산광역시 중구 남포동",
      nationality: "🇰🇷 대한민국",
      profile: { tall: 164, bloodType: "A형", MBTI: "ISFJ" },
      position: "메인보컬",
      albumImage: [
        "https://i.namu.wiki/i/-ldboWR2mzeSADuHHHWJ30rvZGGFjvY25-lXKwftM2DjadhdFJq2hP_YdYthICjcoQspPP6mqoeoY_hQMMFpWVoy8fLNn-9K_Na7N-E3HBGGzgEcndzYT7rIPfDSNmhgWBrNdYmMwvxqvL7Z5G7G_A.webp",
        "https://i.namu.wiki/i/Ocd66YyhaULkH8n-7Cmlh9eeg3A9rtBNZvP0i6Ec7IsyvQ4KFlQ477uFt0lBdPNFnIT7lPBQIsfF9ackIVu7G1YG3N6G_D5GLktuPi1wuUVifeplvYRxck4tD58bv0Wq3ulcExqaXt7UjtokOsTF5w.webp",
      ],
    },
    {
      id: 4,
      age: 20,
      name: "닝이줘 🐼",
      native: "헤이룽장성 하얼빈시",
      nationality: "🇨🇳 중국",
      profile: { tall: 161, bloodType: "O형", MBTI: "INFP" },
      position: "메인보컬",
      albumImage: [
        "https://i.namu.wiki/i/9QyxdDUpa-d8vJIP9mtJJKem8RHTYY8w1kxcJvngug9rXpvWtsR0DR33UajhQb12935xOYBUcGr6b7cspr-j7L5fADsfXH6H5owhTMcssNBq5krFz1CWiPeAKiotlLjAsv0B9LFXip2_c9yUepAmRg.webp",
        "https://i.namu.wiki/i/9fGDZhiAhsS4eQXNtC198yjqSl2yBBc5hNkshACjFGk5PLJQHV5OtrQFm1sanr6whp0s88piyh4SL0hPDb3qtheW7gmo2yNvldPgDu8G7F_cIDU_Tt6QuwY56vavKvuVgwBBt74ZhyWKazQ4-MnhWQ.webp",
      ],
    },
  ];

  const clickMemberInfo = memberDetail.filter((member) => {
    return route.params.member.id === member.id;
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.test}>
        {clickMemberInfo.map((el) => {
          return (
            <View key={el.id}>
              <Image source={route.params.member.image} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{el.name}</Text>
                <Text style={styles.position}>{el.position}</Text>
                <Text style={styles.age}>{el.age}살</Text>
                <Text style={styles.native}>{el.native}</Text>
                <Text style={styles.nationality}>{el.nationality}</Text>
                <Text style={styles.tall}>키: {el.profile.tall}cm</Text>
                <Text style={styles.bloodType}>
                  혈액형: {el.profile.bloodType}
                </Text>
                <Text style={styles.mbti}>MBTI: {el.profile.MBTI}</Text>
              </View>
              <View style={styles.albumContainer}>
                <Image
                  source={{ uri: el.albumImage[0] }}
                  style={styles.albumImage}
                />
                <Image
                  source={{ uri: el.albumImage[1] }}
                  style={styles.albumImage}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  test: { width: "100%" },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 400,
  },
  infoContainer: {
    paddingVertical: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  position: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 5,
  },
  age: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  native: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  nationality: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  tall: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  bloodType: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  mbti: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  albumContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  albumImage: {
    width: "50%",
    height: 400,
  },
});

export default MemberDetail;
