import {
    Dimensions,
    FlatList,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native'
import React, { useState } from 'react'
import {
    COLORS,
    SPACING,
} from '../theme/theme'
import InputHeader from '../components/InputHeader';
import SubMovieCard from '../components/SubMovieCard';
import { baseImagePath, searchMovies } from '../api/apicall';

const { width, height } = Dimensions.get('window');

const Searchcreen = ({ navigation }: any) => {

    const [searchList, setSearchList] = useState([]);

    const searchMoviesFunction = async (name: string) => {
        try {
            let response = await fetch(searchMovies(name));
            let json = await response.json();
            setSearchList(json.results);
        } catch (error) {
            console.log(
                'Something Went wrong in SearchMoviesFunction ',
                error
            )
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden />

            <View>
                <FlatList
                    data={searchList}
                    keyExtractor={(item: any) => item.id}
                    bounces={false}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={styles.inputHeaderContainer}>
                            <InputHeader searchFunction={searchMoviesFunction} />
                        </View>
                    }
                    contentContainerStyle={styles.centerContainer}
                    renderItem={({ item, index }) => (
                        <SubMovieCard
                            shouldMarginatedAtEnd={false}
                            shouldMarginatedArround={true}
                            cardFunction={() => {
                                navigation.push('MovieDetails', { movieid: item.id })
                            }}
                            cardWidth={width / 2 - SPACING.space_12 * 2}
                            title={item.original_title}
                            imagePath={baseImagePath('w342', item.poster_path)}
                        />
                    )}
                />
            </View>
        </View>
    )
}

export default Searchcreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        width,
        alignItems: 'center',
        backgroundColor: COLORS.Black,
    },
    inputHeaderContainer: {
        display: 'flex',
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_28,
        marginBottom: SPACING.space_28 - SPACING.space_12,
    },
    centerContainer: {
        alignItems: 'center',
    }
})