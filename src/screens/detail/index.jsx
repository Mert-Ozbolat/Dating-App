import { View, Text, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import DetailStyle from '../../styles/detailStyle';
import { useNavigation } from '@react-navigation/native';
import ActionButtons from '../../components/ui/actionButtons';

const Detail = ({ route }) => {
    const { card } = route.params || {};
    const navigation = useNavigation()

    const hobbies = [
        { emoji: "✈️", name: "Traveling" },
        { emoji: "🍳", name: "Cooking" },
        { emoji: "📖", name: "Reading" },
        { emoji: "📸", name: "Photography" },
        { emoji: "🏊‍♂️", name: "Swimming" },
        { emoji: "🎮", name: "Gaming" },
        { emoji: "🎨", name: "Painting" },
        { emoji: "🎭", name: "Acting" },
        { emoji: "🎸", name: "Playing Guitar" }
    ];

    return (
        <ScrollView style={defaultScreenStyle.container}>
            <SafeAreaView>
                <View style={DetailStyle.profile}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={DetailStyle.goBack}>
                        <Image style={DetailStyle.goBackIcon} source={require('../../assets/icons/left-arrow.png')} />
                    </TouchableOpacity>
                    <Image style={DetailStyle.profileImg} source={card.image} />
                </View>

                <View style={DetailStyle.contentWrapper}>
                    <View style={DetailStyle.btnWrapper}>
                        <ActionButtons />
                    </View>

                    <View style={DetailStyle.infoWrapper}>
                        <View style={DetailStyle.nameContainer}>
                            <Text style={DetailStyle.nameText}>{card.name}, {card.age}</Text>
                            <Text style={DetailStyle.jobText}>Graphic Designer 🎨💻</Text>
                        </View>


                        <View style={DetailStyle.locationContainer}>
                            <View>
                                <Text style={DetailStyle.title}>Location</Text>
                                <Text style={DetailStyle.text}>Italy – Rome 🇮🇹🏛️</Text>
                            </View>
                            <View style={DetailStyle.locationIconWrapper}>
                                <Image source={require('../../assets/icons/location.png')} style={DetailStyle.locationIcon} />
                                <Text style={DetailStyle.distanceText}>1 km</Text>
                            </View>
                        </View>


                        <View style={DetailStyle.bioContainer}>
                            <Text style={DetailStyle.title}>Bio</Text>
                            <Text style={DetailStyle.text}>
                                Passionate graphic designer with a love for creativity and visual storytelling.
                                Always exploring new design trends and pushing creative boundaries.
                                In my free time, I enjoy painting, photography, and traveling to find inspiration from different cultures. 🎨📸✈️
                            </Text>
                        </View>
                    </View>


                    <View style={DetailStyle.hobbiesWrapper}>
                        <Text style={DetailStyle.hobbiesTitle}>Hobbies</Text>
                        <View style={DetailStyle.hobbiesGrid}>
                            {hobbies.map((hobby, index) => (
                                <View key={index} style={DetailStyle.hobbyItem}>
                                    <Text style={DetailStyle.hobbyText}>{hobby.emoji} {hobby.name}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Detail;
