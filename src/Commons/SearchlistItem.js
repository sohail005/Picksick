import {
    StyleSheet,
    Text,
    View,
    Image,
    useWindowDimensions,
    ScrollView,
    Touchable,
    TouchableOpacity,
} from 'react-native';
import React from 'react';

const SearchlistItem = ({ searchData }) => {
    const { height, width, fontScale } = useWindowDimensions();

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, marginBottom: 50 }}>

                {searchData.map((data, index) => {
                    return (
                        <View key={index}>
                            {data.id === 0 ? (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                    }}>
                                    {data.images.map((imageData, imgIndex) => {
                                        return (
                                            <TouchableOpacity
                                                key={imgIndex}
                                                style={{ paddingBottom: 2, width: '33%' }}>
                                                <Image
                                                    source={{ uri: imageData }}
                                                    style={{ width: '100%', height: 150 }}
                                                />
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                            ) : null}
                            {data.id === 1 ? (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            flexWrap: 'wrap',
                                            width: '66.5%',
                                            justifyContent: 'space-between',
                                        }}>
                                        {data.images.slice(0, 4).map((imageData, imgIndex) => {
                                            return (
                                                <TouchableOpacity
                                                    key={imgIndex}
                                                    style={{ paddingBottom: 2, width: '49.5%' }}>
                                                    <Image
                                                        source={{ uri: imageData }}
                                                        style={{ width: '100%', height: 150 }}
                                                    />
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>
                                    <TouchableOpacity style={{ marginLeft: 2, width: '33%' }}>
                                        <Image
                                            source={{ uri: data.images[5] }}
                                            style={{ width: '100%', height: 300 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            ) : null}
                            {data.id === 2 ? (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <TouchableOpacity style={{ marginLeft: 2, width: '33%' }}>
                                        <Image
                                            source={{ uri: data.images[4] }}
                                            style={{ width: '100%', height: 300 }}
                                        />
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            flexWrap: 'wrap',
                                            width: '66.5%',
                                            justifyContent: 'space-between',
                                        }}>
                                        {data.images.slice(0, 4).map((imageData, imgIndex) => {
                                            return (
                                                <TouchableOpacity
                                                    key={imgIndex}
                                                    style={{ paddingBottom: 2, width: '49.5%' }}>
                                                    <Image
                                                        source={{ uri: imageData }}
                                                        style={{ width: '100%', height: 150 }}
                                                    />
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>

                                </View>
                            ) : null}
                        </View>
                    );
                })}

            </ScrollView>
        </View>
    );
};

export default SearchlistItem;

const styles = StyleSheet.create({

});
