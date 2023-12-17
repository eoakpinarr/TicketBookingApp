import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import React from 'react'
import {
    COLORS,
    FONTSIZE,
    SPACING,
} from '../theme/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CustomIcon from '../components/CustomIcon';
import Searchcreen from '../screens/Searchcreen';
import TicketsScreen from '../screens/TicketsScreen';
import UserAccountScreen from '../screens/UserAccountScreen';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.Black,
                    borderTopWidth: 0,
                    height: SPACING.space_10 * 10,
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={[
                                styles.activeTabBackground,
                                focused ? { backgroundColor: COLORS.Orange } : {}
                            ]}>
                                <CustomIcon
                                    name="video"
                                    color={COLORS.White}
                                    size={FONTSIZE.size_30}
                                />
                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen
                name='Search'
                component={Searchcreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={[
                                styles.activeTabBackground,
                                focused ? { backgroundColor: COLORS.Orange } : {}
                            ]}>
                                <CustomIcon
                                    name="search"
                                    color={COLORS.White}
                                    size={FONTSIZE.size_30}
                                />
                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen
                name='Ticket'
                component={TicketsScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={[
                                styles.activeTabBackground,
                                focused ? { backgroundColor: COLORS.Orange } : {}
                            ]}>
                                <CustomIcon
                                    name="ticket"
                                    color={COLORS.White}
                                    size={FONTSIZE.size_30}
                                />
                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen
                name='User'
                component={UserAccountScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={[
                                styles.activeTabBackground,
                                focused ? { backgroundColor: COLORS.Orange } : {}
                            ]}>
                                <CustomIcon
                                    name="user"
                                    color={COLORS.White}
                                    size={FONTSIZE.size_30}
                                />
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;

const styles = StyleSheet.create({
    activeTabBackground: {
        backgroundColor: COLORS.Black,
        padding: SPACING.space_18,
        borderRadius: SPACING.space_18 * 10,
    },
});