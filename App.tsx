import React from "react";
import Header from "./components/Header";
import Home, { Member } from "./pages/Home";
import MemberDetail from "./pages/MemberDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  MemberDetail: { member: Member };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="MemberDetail"
          component={MemberDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
