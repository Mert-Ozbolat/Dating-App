import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TABNAVIGATION } from "../utils/routes";
import HomeScreen from "../screens/home";
import MessagesScreen from "../screens/messages";
import ProfileScreen from "../screens/profile";
import TabIcon from "../components/router/tabIcon";
import { Colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

const TabNavigatior = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon route={route} size={30} color={color} focused={focused} />
                ),
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    backgroundColor: Colors.mysticPurple,
                    elevation: 5,
                    borderRadius: 25,
                    height: 70,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 10,
                },
                tabBarItemStyle: {
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                tabBarIconStyle: {
                    flex: 1,
                    alignSelf: 'center',
                    justifyContent: 'center'
                },
            })}>
            <Tab.Screen name={TABNAVIGATION.HOME} component={HomeScreen} />
            <Tab.Screen
                options={{
                    headerShown: true
                }}
                name={TABNAVIGATION.MESSAGES} component={MessagesScreen} />
            <Tab.Screen
                options={{
                    headerShown: true
                }}
                name={TABNAVIGATION.PROFILE} component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigatior