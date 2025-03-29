import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { height, width } from '../utils/constants';

const ProfileStyle = StyleSheet.create({
    // Header
    header: {
        height: 40,
        justifyContent: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        alignItems: 'center'
    },

    // Theme Section
    theme: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        alignSelf: 'flex-end'
    },
    themeBtn: {
        backgroundColor: Colors.mediumGray,
        padding: 5,
        borderRadius: 50,
    },
    themeIcon: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
    },
    profileTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.darkGray,
    },

    // Profile Seciton
    profileSection: {
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },

    userImgContainer: {
        height: 137,
        width: 137,
        borderRadius: 100,
        overflow: 'hidden',
        position: 'relative'
    },
    userImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    editProfileContainer: {
        width: 34,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        right: 0,
        backgroundColor: Colors.lightGray,
        padding: 10,
        borderRadius: 50,
        opacity: 0.8
    },
    editProfile: {
        width: 20,
        height: 20,
        zIndex: 1000
    },
    userName: {
        fontSize: 14,
        color: Colors.darkGray,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 7
    },

    // Follower Section
    followers: {
        flexDirection: 'row',
        gap: 66,
        marginTop: 15,
    },
    followsSection: {
        alignItems: 'center'
    },
    follows: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.darkGray,
        textAlign: 'center',
    },
    follower: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.darkGray
    },
    followsCount: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.darkGray
    },

    // About Section
    aboutSection: {
        paddingHorizontal: 25,
    },

    personalInfoSection: {
        backgroundColor: Colors.mediumGray,
        padding: 20,
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 150,
        paddingHorizontal: 25,
        gap: 15,
    },
    personalInfo: {
        gap: 5
    },
    infoTitle: {
        fontSize: 14,
        color: Colors.darkGray,
        fontWeight: '500'
    },
    info: {
        fontSize: 14,
        color: Colors.darkGray,
        fontWeight: '700'
    },
});

export default ProfileStyle;
