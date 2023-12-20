import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import BottomTab from '../Commons/BottomTab'
import { AppColors } from '../Colors';
import SearchlistItem from '../Commons/SearchlistItem';
import { useSelector } from 'react-redux';
import { languages } from '../Commons/MultiLaguage';

const Search = ({ navigation }) => {
    const { height, width, fontScale } = useWindowDimensions();
    const [searchText, setSearchText] = useState("")
    const data = [
        {
            id: 0, images: ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgPZ6g7_YYiFVaaSob7On-O9eWvQJfkmLkl_CkJOHP7pvGijGKq-NqlDVDdZQ8_V22pQ&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgPZ6g7_YYiFVaaSob7On-O9eWvQJfkmLkl_CkJOHP7pvGijGKq-NqlDVDdZQ8_V22pQ&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgPZ6g7_YYiFVaaSob7On-O9eWvQJfkmLkl_CkJOHP7pvGijGKq-NqlDVDdZQ8_V22pQ&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgPZ6g7_YYiFVaaSob7On-O9eWvQJfkmLkl_CkJOHP7pvGijGKq-NqlDVDdZQ8_V22pQ&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVL5BFE8D8kOW52bcbhprS66VvOBOn15EPaG39e0THyGZ09M78M6z5YKZ9Xs-5kOY4_Q&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDcmO22c2BCvZeEI6jctj8o65_W7Q5VDpJJ4CLbyFQgdU3fIDGHweRm34CR5QVgtoFwk&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZijn6WeGyWgc9LL-9NUHgVzDGB-gdA6qSFN5mklFdA6qNHHujO1ef_MGhpIso-K666Y&usqp=CAU',
                'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw0W9eniJWV2jpTrHQMaks45&ust=1702580195068000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqGAoTCIj_kdCLjYMDFQAAAAAdAAAAABCFAQ']
        },
        {
            id: 1, images: ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
                'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg',
                'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg',
                'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg',
                'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg',
                'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgPZ6g7_YYiFVaaSob7On-O9eWvQJfkmLkl_CkJOHP7pvGijGKq-NqlDVDdZQ8_V22pQ&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgPZ6g7_YYiFVaaSob7On-O9eWvQJfkmLkl_CkJOHP7pvGijGKq-NqlDVDdZQ8_V22pQ&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVL5BFE8D8kOW52bcbhprS66VvOBOn15EPaG39e0THyGZ09M78M6z5YKZ9Xs-5kOY4_Q&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDcmO22c2BCvZeEI6jctj8o65_W7Q5VDpJJ4CLbyFQgdU3fIDGHweRm34CR5QVgtoFwk&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZijn6WeGyWgc9LL-9NUHgVzDGB-gdA6qSFN5mklFdA6qNHHujO1ef_MGhpIso-K666Y&usqp=CAU',
                'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw0W9eniJWV2jpTrHQMaks45&ust=1702580195068000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqGAoTCIj_kdCLjYMDFQAAAAAdAAAAABCFAQ']
        },
        {
            id: 2, images: ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
                'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg',
                'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg',
                'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgPZ6g7_YYiFVaaSob7On-O9eWvQJfkmLkl_CkJOHP7pvGijGKq-NqlDVDdZQ8_V22pQ&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgPZ6g7_YYiFVaaSob7On-O9eWvQJfkmLkl_CkJOHP7pvGijGKq-NqlDVDdZQ8_V22pQ&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVL5BFE8D8kOW52bcbhprS66VvOBOn15EPaG39e0THyGZ09M78M6z5YKZ9Xs-5kOY4_Q&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDcmO22c2BCvZeEI6jctj8o65_W7Q5VDpJJ4CLbyFQgdU3fIDGHweRm34CR5QVgtoFwk&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZijn6WeGyWgc9LL-9NUHgVzDGB-gdA6qSFN5mklFdA6qNHHujO1ef_MGhpIso-K666Y&usqp=CAU',
                'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw0W9eniJWV2jpTrHQMaks45&ust=1702580195068000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqGAoTCIj_kdCLjYMDFQAAAAAdAAAAABCFAQ']
        }
    ]

    const backgroundColor = useSelector((state) => state.background.color);
    const defaultTextColor = useSelector((state) => state.background.defaultTextColor);
    const appLanguage = useSelector((state) => state.background.language);

    const searchTextprop = appLanguage == 'HINDI' ? languages[0].Hindi[1].search : 'Search';

    return (
        <View style={{ flex: 1, height: height, backgroundColor: backgroundColor }}>

            <View style={[styles.inputConatiner,{backgroundColor:backgroundColor,elevation:5,shadowColor:defaultTextColor}]}>
                <TextInput
                    value={searchText}
                    placeholder={searchTextprop}
                    style={[styles.input,{color:defaultTextColor}]}
                    placeholderTextColor={AppColors.grayText}
                    onChangeText={(text) => setSearchText(text)}
                />
                <TouchableOpacity>
                    <Image source={require('../Assets/search.png')} style={{ width: 20, height: 20, right: 15,tintColor:defaultTextColor }} />
                </TouchableOpacity>
            </View>
            {/* End */}

            {/* List Start */}
            <View style={{ flex: 1 }}>
                <SearchlistItem searchData={data} />

            </View>
            {/* List Start */}


            <View style={{ width: width, position: 'absolute', bottom: 0 }}>
                <BottomTab screen={1} navigation={navigation} />
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    input: {
        borderRadius: 100 / 2,
        paddingHorizontal: 15,
        color: AppColors.blackText,
        fontWeight: '700',
        flex: 1
    },
    inputConatiner: {
        flexDirection: 'row', alignItems: 'center',
        margin: 15,
        borderRadius: 100 / 2, height: 40,
    },

})