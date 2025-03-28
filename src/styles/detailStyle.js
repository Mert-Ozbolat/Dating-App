import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { height, width } from '../utils/constants';

const DetailStyle = StyleSheet.create({
    profile: {
        position: 'relative',
    },
    goBackIcon: {
        position: 'absolute',
        width: 36,
        height: 36,
        backgroundColor: Colors.lightGray,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        left: 20,
        top: 20,
    },
    profileImg: {
        height: 440,
        width: '100%',
        resizeMode: 'cover',
        zIndex: -1,
    },
    contentWrapper: {
        alignItems: 'center',
        backgroundColor: Colors.primaryPink,
        height: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: -50,
        padding: 20
    },
    btnWrapper: {
        flexDirection: 'row',
        backgroundColor: Colors.darkGray,
        borderRadius: 30,
        justifyContent: 'space-around',
        width: 360,
        height: 70,
        alignItems: 'center',
        opacity: 0.9

    },


    infoWrapper: {
        backgroundColor: Colors.lightGray,
        marginTop: 16,
        padding: 10,
        borderRadius: 20,
        width: 360
    },

    nameText: {
        color: Colors.darkGray,
        fontSize: 20,
        fontWeight: 'medium',
    },
    jobText: {
        color: Colors.primaryGreen,
        fontSize: 16,
        fontWeight: 'regular'
    },
    locationContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    locationIconWrapper: {
        padding: 5,
        borderRadius: 10,
        minHeight: 35,
        minWidth: 65,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9E1EA',
    },
    distanceText: {
        color: Colors.primaryPink,
        fontSize: 12,
        fontWeight: 'regular'
    },

    title: {
        fontSize: 16,
        fontWeight: 'medium',
        color: Colors.darkGray,
        marginBottom: 2
    },
    text: {
        fontSize: 12,
        fontWeight: 'regular',
        color: Colors.darkGray,
        marginBottom: 2
    },
    locationIcon: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
        opacity: 1,
    },

    bioContainer: {
        flexDirection: 'column',
        marginTop: 10,
    },


    hobbiesWrapper: {
        backgroundColor: Colors.lightGray,
        marginTop: 16,
        padding: 10,
        borderRadius: 20,
        width: 360
    },
    hobbiesTitle: {
        textAlign: 'center',
    },
    hobbiesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
    },
    hobbyItem: {
        backgroundColor: Colors.primaryPink,
        padding: 5,
        borderRadius: 30,

    },
    hobbyText: {
        color: Colors.lightGray,
        fontSize: 12,
        fontWeight: 'Regular'
    }
});

export default DetailStyle;
