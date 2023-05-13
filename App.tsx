import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home, { Member } from "./pages/Home";
import {
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from "@react-navigation/stack";
import React from "react";
import MemberDetail from "./pages/MemberDetail";
import Header from "./components/Header";

export type RootStackParamList = {
  Home: undefined;
  MemberDetail: { member: Member };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator
      screenOptions={{}}
        // screenOptions={{
        //   headerStyleInterpolator: HeaderStyleInterpolators.forSlideRight, // 오른쪽에서 왼쪽으로 슬라이드
        //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 왼쪽에서 오른쪽으로 슬라이드
        //   transitionSpec: {
        //     open: TransitionSpecs.TransitionIOSSpec, // 화면 이동 시 IOS 스타일 애니메이션 적용
        //     close: TransitionSpecs.TransitionIOSSpec, // 화면 종료 시 IOS 스타일 애니메이션 적용
        //   },
        // }}
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MemberDetail"
          component={MemberDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
