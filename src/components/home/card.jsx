import React, { useState, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import HomeStyle from '../../styles/homeStyle';
import { useNavigation } from '@react-navigation/native';
import { TABNAVIGATION } from '../../utils/routes';
import ActionButtons from '../ui/actionButtons';

const Card = () => {
    const navigation = useNavigation();
    const [cards] = useState([
        { id: '1', name: 'Amelia Richardson', age: 25, image: require('../../assets/users/women4.jpeg') },
        { id: '2', name: 'Emily', age: 23, image: require('../../assets/users/men6.jpeg') },
        { id: '3', name: 'Michael', age: 28, image: require('../../assets/users/women6.jpeg') },
    ]);

    const handleCardPress = useCallback((card) => {
        navigation.navigate(TABNAVIGATION.DETAIL, { card });
    }, [navigation]);



    return (
        <View style={{ flex: 1 }}>
            <Swiper
                cards={cards}
                renderCard={(card) => (
                    <TouchableOpacity onPress={() => handleCardPress(card)} activeOpacity={0.8}>
                        <View style={HomeStyle.cardContainer}>
                            <View style={HomeStyle.imageWrapper}>
                                <Image source={card.image} style={HomeStyle.matchImage} />
                                <View style={HomeStyle.cardBottom}>
                                    <View style={HomeStyle.infoContainer}>
                                        <View style={HomeStyle.nameContainer}>
                                            <View>
                                                <Text style={HomeStyle.nameText}>{card.name}</Text>
                                                <Text style={HomeStyle.locationText}>Italy – Rome 🇮🇹</Text>
                                            </View>
                                            <View style={HomeStyle.ageWrapper}>
                                                <Text style={HomeStyle.age}>{card.age}</Text>
                                            </View>
                                        </View>

                                        <ActionButtons />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                onSwiped={(cardIndex) => console.log(`Swiped card index: ${cardIndex}`)}
                onSwipedLeft={(cardIndex) => console.log(`Left swipe: ${cards[cardIndex].name}`)}
                onSwipedRight={(cardIndex) => console.log(`Right swipe: ${cards[cardIndex].name}`)}
                cardIndex={0}
                containerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                stackSize={3}
                verticalSwipe={false}
                horizontalOnly={true}
            />
        </View>
    );
};

export default Card;
