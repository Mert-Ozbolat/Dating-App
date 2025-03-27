import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { height, width } from '../utils/constants';

const HomeStyle = StyleSheet.create({
    // HEADER
    headerContainer: {
        alignItems: 'center',
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
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: width * 0.03,
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
    discoverSection: {
        height: 120,
        marginTop: height * 0.03,
    },
    discoverTitle: {
        color: Colors.lightGray,
        fontSize: width * 0.06,
        fontWeight: '500',
    },
    searchBarWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height * 0.02,
    },
    searchInput: {
        backgroundColor: Colors.lightGray,
        width: '85%',
        borderRadius: width * 0.08,
        padding: width * 0.03,
    },
    filter: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightGray,
        borderRadius: width * 0.1,
        padding: width * 0.02,
    },
    filterIcon: {
        width: width * 0.08,
        height: width * 0.08,
        padding: width * 0.05,
    },

    // CARD
    cardContainer: {
        width: width * 0.85,
        height: height * 0.50,
        backgroundColor: Colors.lightGray, // Arka planı belirgin hale getirmek için
        borderRadius: width * 0.08,
        overflow: 'hidden',  // Taşan içeriği kesmek için
        alignSelf: 'center', // Ortalamak için
    },
    imageWrapper: {
        width: '100%',
        height: '100%',
        position: 'absolute', // Kartın içinde durmasını sağlar
    },
    matchImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: width * 0.08,
        resizeMode: 'cover',
    },
    cardBottom: {
        height: height * 0.12,
        width: '100%',
        backgroundColor: Colors.darkGray,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.9,
        borderBottomRightRadius: width * 0.08,
        borderBottomLeftRadius: width * 0.08,
        paddingHorizontal: width * 0.04,
    },
    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    nameText: {
        fontSize: width * 0.06,
        color: '#fff',
        fontWeight: 'bold',
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
});

export default HomeStyle;
