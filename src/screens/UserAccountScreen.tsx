import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import React from 'react'
import {
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
} from '../theme/theme';
import AppHeader from '../components/AppHeader';
import SettingsComponent from '../components/SettingsComponent';

const UserAccountScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.appHeaderContainer}>
                <AppHeader
                    name="close"
                    header={'My Profile'}
                    action={() => navigation.goBack()}
                />
            </View>

            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/image/avatar.png')}
                    style={styles.avatarImage}
                />
                <Text style={styles.avatarText}>EOA</Text>
            </View>

            <View>
                <SettingsComponent 
                    icon="user"
                    heading="Account"
                    subheading="Edit Profile"
                    subtitle="Change Password"
                />
                <SettingsComponent 
                    icon="settings"
                    heading="Settings"
                    subheading="Theme"
                    subtitle="Permissions"
                />
                <SettingsComponent 
                    icon="dollar"
                    heading="Offers & Referrals"
                    subheading="Offer"
                    subtitle="Refferrals"
                />
                <SettingsComponent 
                    icon="info"
                    heading="About"
                    subheading="About Movies"
                    subtitle="more"
                />
            </View>
        </View>
    )
}

export default UserAccountScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: COLORS.Black,
    },
    appHeaderContainer: {
        marginHorizontal: SPACING.space_36,
    },
    profileContainer: {
        alignItems: 'center',
        padding: SPACING.space_36,
    },
    avatarImage: {
        height: 80,
        width: 80,
        borderRadius: 80,
    },
    avatarText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_16,
        marginTop: SPACING.space_16,
        color: COLORS.White,
    },
});