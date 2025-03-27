import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TABNAVIGATION } from "../utils/routes";
import TabNavigatior from "./tabNavigatior";
import HomeScreen from "../screens/home";
import MessagesScreen from "../screens/messages";
import ProfileScreen from "../screens/profile";


const RootNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={TABNAVIGATION.TABNAVIGATOR} component={TabNavigatior} />
            <Stack.Screen name={TABNAVIGATION.HOME} component={HomeScreen} />
            <Stack.Screen name={TABNAVIGATION.MESSAGES} component={MessagesScreen} />
            <Stack.Screen name={TABNAVIGATION.PROFILE} component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigator