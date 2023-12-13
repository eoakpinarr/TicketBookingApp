import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING
} from '../theme/theme';
import CustomIcon from './CustomIcon';

const AppHeader = (props: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.iconBG}
                onPress={() => props.action()}
            >
                <CustomIcon name={props.name} style={styles.iconStyle} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{props.header}</Text>
            <View style={styles.emptyContainer}></View>
        </View>
    )
};

export default AppHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconBG: {
        height: SPACING.space_20 * 2,
        width: SPACING.space_20 * 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: BORDERRADIUS.radius_20,
        backgroundColor: COLORS.Orange,
    },
    iconStyle: {
        color: COLORS.White,
        fontSize: FONTSIZE.size_24,
    },
    headerText: {
        flex: 1,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        color: COLORS.White,
    },
    emptyContainer: {
        height: SPACING.space_20 * 2,
        width: SPACING.space_20 * 2,
    },
});