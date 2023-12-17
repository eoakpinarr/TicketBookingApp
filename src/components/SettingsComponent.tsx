import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import React from 'react'
import CustomIcon from './CustomIcon'
import {
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
} from '../theme/theme'

const SettingsComponent = (props: any) => {
    return (
        <View style={styles.container}>
            <View>
                <CustomIcon style={styles.iconStyle} name={props.icon} />
            </View>
            <View style={styles.settingsContainer}>
                <Text style={styles.title}>{props.heading}</Text>
                <Text style={styles.subtitle}>{props.subheading}</Text>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
            </View>
            <View style={styles.iconBG}>
                <CustomIcon style={styles.iconStyle} name={'arrow-right'} />
            </View>
        </View>
    )
}

export default SettingsComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: SPACING.space_20,
    },
    settingsContainer: {
        flex: 1,
    },
    iconStyle: {
        color: COLORS.White,
        fontSize: FONTSIZE.size_24,
        paddingHorizontal: SPACING.space_20,
    },
    iconBG: {
        justifyContent: 'center',
    },
    title: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_18,
        color: COLORS.White,
    },
    subtitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        color: COLORS.WhiteRGBA15,
    },
});