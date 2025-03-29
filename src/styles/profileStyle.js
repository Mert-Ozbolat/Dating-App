import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { height, width } from '../utils/constants';

const ProfileStyle = StyleSheet.create({
    // Header
    header: {
        height: height * 0.05,
        justifyContent: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.06,
        alignItems: 'center',
    },

    // Theme Section
    theme: {
        justifyContent: 'center',
        paddingHorizontal: width * 0.05,
        alignSelf: 'flex-end'
    },
    themeBtn: {
        backgroundColor: Colors.mediumGray,
        padding: width * 0.012,
        borderRadius: width * 0.1,
    },
    themeIcon: {
        width: width * 0.08,
        height: width * 0.08,
        resizeMode: 'cover',
    },
    profileTitle: {
        fontSize: width * 0.06,
        fontWeight: '700',
        color: Colors.darkGray,
    },

    // Profile Section
    profileSection: {
        height: height * 0.36,
        justifyContent: 'center',
        alignItems: 'center',
    },

    userImgContainer: {
        height: width * 0.35,
        width: width * 0.35,
        borderRadius: width * 0.5,
        overflow: 'hidden',
        position: 'relative'
    },
    userImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    editProfileContainer: {
        width: width * 0.09,
        height: width * 0.09,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: width * 0.08,
        right: 0,
        backgroundColor: Colors.lightGray,
        padding: width * 0.025,
        borderRadius: width * 0.1,
        opacity: 0.8
    },
    editProfile: {
        width: width * 0.05,
        height: width * 0.05,
        zIndex: 1000
    },
    userName: {
        fontSize: width * 0.035,
        color: Colors.darkGray,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: height * 0.01
    },

    // Follower Section
    followers: {
        flexDirection: 'row',
        gap: width * 0.15,
        marginTop: height * 0.02,
    },
    followsSection: {
        alignItems: 'center'
    },
    follows: {
        fontSize: width * 0.035,
        fontWeight: '500',
        color: Colors.darkGray,
        textAlign: 'center',
    },
    follower: {
        fontSize: width * 0.035,
        fontWeight: '500',
        color: Colors.darkGray
    },
    followsCount: {
        fontSize: width * 0.035,
        fontWeight: '700',
        color: Colors.darkGray
    },

    // About Section
    aboutSection: {
        paddingHorizontal: width * 0.06,
    },

    personalInfoSection: {
        backgroundColor: Colors.mediumGray,
        padding: width * 0.06,
        borderRadius: width * 0.08,
        marginTop: height * 0.015,
        marginBottom: height * 0.2,
        gap: width * 0.04,
    },
    personalInfo: {
        gap: width * 0.02
    },
    infoTitle: {
        fontSize: width * 0.035,
        color: Colors.darkGray,
        fontWeight: '500'
    },
    info: {
        fontSize: width * 0.035,
        color: Colors.darkGray,
        fontWeight: '700'
    },
});

export default ProfileStyle;
