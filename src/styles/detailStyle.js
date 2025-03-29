import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { height, width } from '../utils/constants';

const DetailStyle = StyleSheet.create({
    profile: {
        position: 'relative',
    },
    goBackIcon: {
        position: 'absolute',
        width: width * 0.09,
        height: width * 0.09,
        backgroundColor: Colors.lightGray,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        left: width * 0.05,
        top: height * 0.03,
    },
    profileImg: {
        height: height * 0.55,
        width: '100%',
        resizeMode: 'cover',
        zIndex: -1,
    },
    contentWrapper: {
        alignItems: 'center',
        backgroundColor: Colors.primaryPink,
        height: '100%',
        borderTopRightRadius: width * 0.08,
        borderTopLeftRadius: width * 0.08,
        marginTop: -height * 0.06,
        padding: width * 0.05,
    },
    btnWrapper: {
        flexDirection: 'row',
        backgroundColor: Colors.darkGray,
        borderRadius: width * 0.08,
        justifyContent: 'space-around',
        width: width * 0.9,
        height: height * 0.09,
        alignItems: 'center',
        opacity: 0.9,
    },
    infoWrapper: {
        backgroundColor: Colors.lightGray,
        marginTop: height * 0.02,
        padding: width * 0.03,
        borderRadius: width * 0.05,
        width: width * 0.9,
    },
    nameText: {
        color: Colors.darkGray,
        fontSize: width * 0.05,
        fontWeight: '600',
    },
    jobText: {
        color: Colors.primaryGreen,
        fontSize: width * 0.04,
        fontWeight: '400',
    },
    locationContainer: {
        flexDirection: 'row',
        marginTop: height * 0.015,
        justifyContent: 'space-between',
    },
    locationIconWrapper: {
        padding: width * 0.015,
        borderRadius: width * 0.03,
        minHeight: height * 0.05,
        minWidth: width * 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9E1EA',
    },
    distanceText: {
        color: Colors.primaryPink,
        fontSize: width * 0.03,
        fontWeight: '400',
    },
    title: {
        fontSize: width * 0.04,
        fontWeight: '600',
        color: Colors.darkGray,
        marginBottom: height * 0.005,
    },
    text: {
        fontSize: width * 0.03,
        fontWeight: '400',
        color: Colors.darkGray,
        marginBottom: height * 0.005,
    },
    locationIcon: {
        width: width * 0.05,
        height: width * 0.05,
        resizeMode: 'cover',
        opacity: 1,
    },
    bioContainer: {
        flexDirection: 'column',
        marginTop: height * 0.015,
    },
    hobbiesWrapper: {
        backgroundColor: Colors.lightGray,
        marginTop: height * 0.02,
        padding: width * 0.03,
        borderRadius: width * 0.05,
        width: width * 0.9,
    },
    hobbiesTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'medium',
        padding: 5
    },
    hobbiesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: width * 0.05,
    },
    hobbyItem: {
        backgroundColor: Colors.primaryPink,
        padding: width * 0.015,
        borderRadius: width * 0.08,
    },
    hobbyText: {
        color: Colors.lightGray,
        fontSize: width * 0.03,
        fontWeight: '400',
    },
});

export default DetailStyle;
