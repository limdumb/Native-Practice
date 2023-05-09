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

type Member = {
  name: string;
  image: any;
};

const ImageWrapper = styled.View<{ index: number }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-right: ${(props) => (props.index === 0 || props.index === 2 ? "30" : 0)};
`;

const members: Member[] = [
  { name: "카리나", image: require("./images/karina.jpg") },
  { name: "지젤", image: require("./images/gigel.jpg") },
  { name: "윈터", image: require("./images/winter.jpg") },
  { name: "닝닝", image: require("./images/ningning.jpg") },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>aespa</Text>
      </View>
      <ScrollView>
        <Text style={styles.mainTitle}>Aespa 미니3집 My World</Text>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require("./images/myworldLogo.jpg")}
          />
        </View>
        <View style={styles.body}>
          {members.map((member, index) => (
            <View>
              <Image source={member.image} style={styles.memberImage} />
              <Text style={styles.memberName}>{member.name}</Text>
            </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 80,
    borderBottomColor: "#eaeaea",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  mainTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "800",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
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
    height: 100,
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

export default App;
