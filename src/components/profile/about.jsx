import { View, Text } from 'react-native';
import React from 'react';

import ProfileStyle from '../../styles/profileStyle';
import { useTheme } from '../../context/themeContext';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';

const About = () => {
    const { theme } = useTheme();

    return (
        <View style={[ProfileStyle.aboutSection, theme === 'dark' && defaultScreenStyle.darkMode]}>
            <View>
                <Text style={[ProfileStyle.profileTitle, theme === 'dark' && defaultScreenStyle.darkText]}>About</Text>
            </View>

            {/* Personal Info */}
            <View style={ProfileStyle.personalInfoSection}>
                <View style={ProfileStyle.personalInfo}>
                    <Text style={ProfileStyle.infoTitle}>Full Name</Text>
                    <Text style={ProfileStyle.info}>Oliver Wilson</Text>
                </View>

                {/* Location */}
                <View style={ProfileStyle.personalInfo}>
                    <Text style={ProfileStyle.infoTitle}>Location</Text>
                    <Text style={ProfileStyle.info}>Italy – Rome 🇮🇹</Text>
                </View>

                {/* Profession (Job) */}
                <View style={ProfileStyle.personalInfo}>
                    <Text style={ProfileStyle.infoTitle}>Profession</Text>
                    <Text style={ProfileStyle.info}>Software Engineer 💻🚀</Text>
                </View>

                {/* Bio */}
                <View style={ProfileStyle.personalInfo}>
                    <Text style={ProfileStyle.infoTitle}>Bio</Text>
                    <Text style={ProfileStyle.info}>
                        Passionate software engineer with a love for technology and innovation.
                        Always exploring new programming languages and building scalable applications.
                        In my free time, I enjoy coding, problem-solving, and contributing to open-source projects. 💡👨‍💻🔥
                    </Text>
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
    );
}

export default About;
