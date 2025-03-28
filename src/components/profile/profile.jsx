import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '../../context/themeContext';
import ProfileStyle from '../../styles/profileStyle';

const Profile = () => {
    const { theme, toggleTheme } = useTheme(); // Temayı ve değiştirme fonksiyonunu al

    return (
        <View style={[ProfileStyle.profileSection, theme === 'dark' && ProfileStyle.darkMode]}>
            <View style={ProfileStyle.theme}>
                <TouchableOpacity style={ProfileStyle.themeBtn} onPress={toggleTheme}>
                    <Image
                        style={ProfileStyle.themeIcon}
                        source={theme === 'dark'
                            ? require('../../assets/icons/sun.png')
                            : require('../../assets/icons/moon.png')}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <View style={ProfileStyle.userImgContainer}>
                    <Image source={require('../../assets/users/men1.jpeg')} style={ProfileStyle.userImg} />
                </View>
                <View style={ProfileStyle.editProfileContainer}>
                    <Image source={require('../../assets/icons/camera.png')} style={ProfileStyle.editProfile} />
                </View>
                <Text style={[ProfileStyle.userName, theme === 'dark' && ProfileStyle.darkText]}>
                    Oliver Wilson
                </Text>
            </View>

            <View style={ProfileStyle.followers}>
                <View style={ProfileStyle.followsSection}>
                    <Text style={[ProfileStyle.follows, theme === 'dark' && ProfileStyle.darkText]}>Following</Text>
                    <Text style={[ProfileStyle.followsCount, theme === 'dark' && ProfileStyle.darkText]}>21 Friends</Text>
                </View>
                <View style={ProfileStyle.followsSection}>
                    <Text style={[ProfileStyle.follows, theme === 'dark' && ProfileStyle.darkText]}>Follower</Text>
                    <Text style={[ProfileStyle.followsCount, theme === 'dark' && ProfileStyle.darkText]}>11 Friends</Text>
                </View>
            </View>
        </View>
    );
};

export default Profile;
