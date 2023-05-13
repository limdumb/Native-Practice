import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { RootStackParamList } from "../App";

const ImageTouchWrapper = styled.TouchableOpacity<{ index: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props: { index: number }) =>
    props.index === 0 || props.index === 1 ? 30 : 0};
  margin-right: ${(props: { index: number }) =>
    props.index === 0 || props.index === 2 ? 30 : 0};
`;

export type Member = {
  name: string;
  image: any;
};

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, "Home">;

const Home = () => {

  const navigation: HomeScreenNavigationProp =
    useNavigation<HomeScreenNavigationProp>();

  const members: Member[] = [
    { name: "카리나", image: require("../images/karina.jpg") },
    { name: "지젤", image: require("../images/gigel.jpg") },
    { name: "윈터", image: require("../images/winter.jpg") },
    { name: "닝닝", image: require("../images/ningning.jpg") },
  ];

  const ImageWrapper: React.FC<{
    index: number;
    children: React.ReactNode;
    member: Member;
  }> = ({ index, children, member }) => {
    return (
      <ImageTouchWrapper
        onPress={() => {
          navigation.navigate("MemberDetail", {
            member: member,
          });
        }}
        index={index}
      >
        {children}
      </ImageTouchWrapper>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitle}>Aespa 미니3집 My World</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require("../images/myworldLogo.jpg")}
          />
        </View>
        <View style={styles.body}>
          {members.map((member, index) => (
            <ImageWrapper
              key={index}
              index={index}
              member={member}
              children={
                <>
                  <Image source={member.image} style={styles.memberImage} />
                  <Text style={styles.memberName}>{member.name}</Text>
                </>
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: 393,
  },
  mainTitleContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  mainTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "800",
    color: "#4fd163",
  },
  body: {
    flex: 1,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    backgroundColor: "#fff",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    flex: 1,
    marginTop: 30,
    width: "100%",
    height: 200,
  },
  memberContainer: {
    alignItems: "center",
    marginVertical: 20,
    gap: 10,
    marginBottom: 10,
  },
  memberImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  memberName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});
export default Home;
