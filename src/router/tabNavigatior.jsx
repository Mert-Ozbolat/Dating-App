import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TABNAVIGATION } from "../utils/routes";
import HomeScreen from "../screens/home";
import MessagesScreen from "../screens/messages";
import ProfileScreen from "../screens/profile";
import TabIcon from "../components/router/tabIcon";
import { Colors } from "../theme/colors";
import { useTheme } from "../context/themeContext";
import { height, width } from "../utils/constants";

const Tab = createBottomTabNavigator();

const TabNavigatior = () => {
    const { theme } = useTheme()
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
                    bottom: height * 0.02,
                    left: width * 0.05,
                    right: width * 0.05,
                    backgroundColor: Colors.mysticPurple,
                    elevation: 5,
                    borderRadius: 25,
                    height: height * 0.08,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: width * 0.05,
                },
                tabBarItemStyle: {
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                tabBarIconStyle: {
                    flex: 1,
                    alignSelf: 'center',
                    justifyContent: 'center',
                },
            })}
        >
            <Tab.Screen name={TABNAVIGATION.HOME} component={HomeScreen} />
            <Tab.Screen
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: theme === 'dark' ? Colors.darkGray : Colors.lightGray,
                    },
                    headerTitleStyle: {
                        color: theme === 'dark' ? Colors.lightGray : Colors.darkGray,
                    },
                    headerTitleAlign: 'left',
                }}
                name={TABNAVIGATION.MESSAGES} component={MessagesScreen} />
            <Tab.Screen
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: theme === 'dark' ? Colors.darkGray : Colors.lightGray,
                    },
                    headerTitleStyle: {
                        color: theme === 'dark' ? Colors.lightGray : Colors.darkGray,
                    },
                    headerTitleAlign: 'left',
                }}
                name={TABNAVIGATION.PROFILE}
                component={ProfileScreen}
            />
        </Tab.Navigator>
    )
}

export default TabNavigatior