import { View, Text, Image } from 'react-native'
import React from 'react'
import ProfileStyle from '../../styles/profileStyle'

const Profile = () => {
    return (
        <View style={ProfileStyle.profileSection}>
            <View>
                <View style={ProfileStyle.userImgContainer}>
                    <Image source={require('../../assets/users/men1.jpeg')} style={ProfileStyle.userImg} />
                </View>
                <View style={ProfileStyle.editProfileContainer} >
                    <Image source={require('../../assets/icons/camera.png')} style={ProfileStyle.editProfile} />
                </View>
                <Text style={ProfileStyle.userName}>Oliver Wilson</Text>
            </View>

            <View style={ProfileStyle.followers}>
                <View style={ProfileStyle.followsSection}>
                    <Text style={ProfileStyle.follows}>Following</Text>
                    <Text style={ProfileStyle.followsCount}>21 Friends</Text>
                </View>
                <View style={ProfileStyle.followsSection}>
                    <Text style={ProfileStyle.follows}>Follower</Text>
                    <Text style={ProfileStyle.followsCount}>11 Friends</Text>
                </View>
            </View>

        </View>
    )
}

export default Profile