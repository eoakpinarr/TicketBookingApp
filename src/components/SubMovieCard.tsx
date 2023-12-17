import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    SPACING,
} from '../theme/theme';

const SubMovieCard = (props: any) => {
    return (
        <TouchableOpacity onPress={() => props.cardFunction()}>
            <View
                style={[
                    styles.container,
                    props.shouldMarginatedAtEnd
                        ? props.isFirst
                            ? { marginLeft: SPACING.space_36 }
                            : props.isLast
                                ? { marginRight: SPACING.space_36 }
                                : {}
                        : {},
                ]}>
                <Image
                    style={styles.cardImage}
                    source={{ uri: props.imagePath }}
                />
                <Text style={styles.textTitle} numberOfLines={1}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

export default SubMovieCard;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: COLORS.Black,
    },
    cardImage: {
        aspectRatio: 2 / 3,
        borderRadius: BORDERRADIUS.radius_20,
    },
    textTitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        color: COLORS.White,
        textAlign: 'center',
        paddingVertical: SPACING.space_10,
    },
});