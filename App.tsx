import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home, { Member } from "./pages/Home";
import React from "react";
import MemberDetail from "./pages/MemberDetail";

export type RootStackParamList = {
  Home: undefined;
  MemberDetail: { member: Member };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="MemberDetail"
          component={MemberDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
