import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import React from "react";
import MemberDetail from "./pages/MemberDetail";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="MemberDetail"
          component={MemberDetail as React.ComponentType}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
