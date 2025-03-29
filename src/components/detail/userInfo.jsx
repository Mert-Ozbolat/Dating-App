import { View, Text, Image } from 'react-native'
import React from 'react'
import DetailStyle from '../../styles/detailStyle'
import ActionButtons from '../ui/actionButtons'


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

const UserInfo = ({ item }) => {
    return (
        <View style={DetailStyle.contentWrapper}>
            <View style={DetailStyle.btnWrapper}>
                <ActionButtons />
            </View>

            <View style={DetailStyle.infoWrapper}>
                <View style={DetailStyle.nameContainer}>
                    <Text style={DetailStyle.nameText}>{item.name}, {item.age}</Text>
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
    )
}

export default UserInfo