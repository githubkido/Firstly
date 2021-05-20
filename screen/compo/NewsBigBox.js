import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import faker from 'faker'


const NewsBigBox = (props) => {
    const [like, setLike] = useState({
        liked: false,
        color: 'black',
        icon: 'heart-outline',
        icon2: 'ios-heart',
    })
    return (
        <View style={{ marginTop: 20 }}>
            <View style={styles.headerView}>
                {/* view for name and other */}
                <View>
                    <Image source={{ uri: props.avatorImg }} style={styles.avator} />
                    <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                        <Text style={styles.ChannelName}>{props.channelNews}</Text>
                        <Text style={styles.username}>@{props.username}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.newsContainer}>
                <View style={{ margin: 10 }}>
                    {/* view for full news article */}
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Ionicons name="ios-git-commit-outline" size={22} color="black" />
                        <Text style={styles.catagory}> {props.catagory}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        props.nav.navigate('NewsCard', {
                            catagory: props.catagory,
                            image: props.newsImage,
                            title: props.newsHeading,
                            fullArticle: faker.lorem.paragraphs(4),
                        })
                    }}>
                        <Image style={styles.newsCard} source={{ uri: props.newsImage }} />
                        <Text style={styles.newsTitle}>{props.newsHeading}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ backgroundColor: '#d9d9d9', width: (Dimensions.get('window').width / 100) * 85, height: 1, margin: 5 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Ionicons onPress={() => {
                                if (like.liked === false) {
                                    setLike({
                                        color: '#FF2400',
                                        icon: 'ios-heart',
                                        icon2: 'heart-outline',
                                        liked: true
                                    })
                                } else if (like.liked === true) {
                                    setLike({
                                        color: 'black',
                                        icon: 'heart-outline',
                                        icon2: 'ios-heart',
                                        liked: false
                                    })
                                }
                            }} name={like.icon} size={24} color={like.color} />
                            <Ionicons name="md-chatbubbles-outline" size={24} color="black" />
                            <Ionicons name="bookmark-outline" size={24} color="black" />
                            <Ionicons name="share-social-outline" size={24} color="black" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    avator: {
        width: 46,
        height: 46,
        overflow: "hidden",
        borderRadius: 50
    },
    ChannelName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    username: {
        color: 'grey',
    },
    newsContainer: {
        flexDirection: 'column',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
        borderColor: '#d9d9d9',
        borderRadius: 15,
        borderWidth: 1
    },
    newsCard: {
        overflow: 'hidden',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        height: (Dimensions.get('window').height / 100) * 25,
        width: (Dimensions.get('window').width / 100) * 87,
    },
    newsTitle: {
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },
    catagory: {
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 15,
    }
})

export default NewsBigBox;