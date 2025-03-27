import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import HomeStyle from '../../styles/homeStyle';


const Card = () => {
    const [cards, setCards] = useState([
        { id: '1', name: 'John', age: 25, image: require('../../assets/users/women4.jpeg') },
        { id: '2', name: 'Emily', age: 23, image: require('../../assets/users/women5.jpeg') },
        { id: '3', name: 'Michael', age: 28, image: require('../../assets/users/women6.jpeg') },
    ]);

    return (
        <View style={{ flex: 1 }}>
            <Swiper
                cards={cards}
                renderCard={(card) => (
                    <View style={HomeStyle.cardContainer}>
                        <View style={HomeStyle.imageWrapper}>
                            <Image source={card.image} style={HomeStyle.matchImage} />
                            <View style={HomeStyle.cardBottom}>
                                <View style={HomeStyle.infoContainer}>
                                    <View style={HomeStyle.nameContainer}>
                                        <Text style={HomeStyle.nameText}>{card.name}</Text>
                                        <View style={HomeStyle.ageWrapper}>
                                            <Text style={HomeStyle.age}>{card.age}</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={HomeStyle.locationText}>Italy - Rome</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                onSwiped={(cardIndex) => console.log(`Swiped card index: ${cardIndex}`)}
                onSwipedLeft={(cardIndex) => console.log(`Left swipe: ${cards[cardIndex].name}`)}
                onSwipedRight={(cardIndex) => console.log(`Right swipe: ${cards[cardIndex].name}`)}
                cardIndex={0}
                containerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center', // Swiper içeriğini ortalar
                }}
                stackSize={3}
                verticalSwipe={false}
                horizontalOnly={true}
            />
        </View>
    );
};

export default Card;
