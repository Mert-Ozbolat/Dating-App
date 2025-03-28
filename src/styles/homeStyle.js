import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { height, width } from '../utils/constants';

const HomeStyle = StyleSheet.create({
    // HEADER
    headerContainer: {
        width: '100%',
        backgroundColor: Colors.primaryPink,
        flex: 0.6,
        borderBottomRightRadius: width * 0.2,
        borderBottomLeftRadius: width * 0.2,
    },

    // USER
    userContainer: {
        height: height * 0.08,
        width: width * 0.9,
        backgroundColor: Colors.lightGray,
        marginTop: height * 0.01,
        borderRadius: width * 0.05,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: width * 0.03
    },
    userProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: width * 0.14,
        width: width * 0.14,
        borderRadius: width * 0.14 / 2,
        overflow: 'hidden',
        marginRight: width * 0.02,
    },
    userImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    welcome: {
        fontFamily: 'Poppins-Regular',
        fontSize: width * 0.04,
        fontWeight: '700',
        color: Colors.darkGray,
    },
    userName: {
        fontSize: width * 0.035,
        fontWeight: '500',
        color: Colors.darkGray,
    },

    // DISCOVER
    title: {
        fontSize: 24,
        fontWeight: 'semibold',
        color: Colors.lightGray,
        padding: 20
    },
    searchWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    searchContainer: {
        width: '80%',
    },
    filterIcon: {
        width: 40,
        height: 40,
        backgroundColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    icon: {
        width: 30,
        height: 30,
    },

    // CARD
    cardContainer: {
        marginTop: -20,
        width: width * 0.85,
        height: height * 0.52,
        backgroundColor: Colors.lightGray,
        borderRadius: width * 0.08,
        overflow: 'hidden',
        alignSelf: 'center'
    },
    imageWrapper: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    matchImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: width * 0.08,
        resizeMode: 'cover',
    },
    cardBottom: {
        height: height * 0.14,
        width: '100%',
        backgroundColor: Colors.darkGray,
        position: 'absolute',
        bottom: 0,
        opacity: 0.9,
        borderBottomRightRadius: width * 0.08,
        borderBottomLeftRadius: width * 0.08,
        paddingHorizontal: width * 0.04,
    },
    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '100%',
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    nameText: {
        fontSize: width * 0.06,
        color: Colors.lightGray,
        fontWeight: 'medium',
    },
    locationText: {
        fontSize: width * 0.03,
        color: Colors.lightGray,
        fontWeight: 'medium',
    },
    ageWrapper: {
        width: width * 0.08,
        height: width * 0.08,
        borderRadius: width * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryPink,
    },
    age: {
        fontSize: width * 0.035,
        color: Colors.primaryYellow,
        fontWeight: 'bold',
    },


    // Buttons
    actionsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    cancel: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },

    match: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },

    star: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    matchIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    }
});

export default HomeStyle;
