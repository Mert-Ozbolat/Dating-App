import { View, Text } from 'react-native'
import React from 'react'
import ProfileStyle from '../../styles/profileStyle'

const About = () => {
    return (
        <View style={ProfileStyle.aboutSection}>
            <View>
                <Text style={ProfileStyle.profileTitle}>About</Text>
            </View>

            <View style={ProfileStyle.personalInfoSection}>
                <View style={ProfileStyle.personalInfo}>
                    <Text style={ProfileStyle.infoTitle}>Full Name</Text>
                    <Text style={ProfileStyle.info}>Oliver Wilson</Text>
                </View>
                <View style={ProfileStyle.personalInfo}>
                    <Text style={ProfileStyle.infoTitle}>Email</Text>
                    <Text style={ProfileStyle.info}>user003@gmail.com</Text>
                </View>
                <View style={ProfileStyle.personalInfo}>
                    <Text style={ProfileStyle.infoTitle}>Social URL</Text>
                    <Text style={ProfileStyle.info}>Facebook.com/user00</Text>
                </View>
            </View>

        </View>
    )
}

export default About