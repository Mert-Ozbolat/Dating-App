import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { height, width } from '../utils/constants';

const MessagesStyle = StyleSheet.create({
    // Header
    header: {
        height: height * 0.06,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.06,
        alignItems: 'center'
    },
    titles: {
        fontSize: width * 0.06,
        fontWeight: '700',
        color: Colors.primaryPink,
        paddingHorizontal: width * 0.025,
    },

    search: {
        position: 'relative',
        paddingHorizontal: width * 0.05,
        marginVertical: 30,
    },
    searchIcon: {
        position: 'absolute',
        width: width * 0.08,
        height: width * 0.08,
        bottom: height * 0.003,
        right: width * 0.08,
    },

    // Actives
    activeTitle: {
        marginHorizontal: width * 0.025,
        marginBottom: height * 0.012,
        fontSize: width * 0.045,
        fontWeight: '400',
        color: Colors.primaryPink,
    },
    section: {
        marginBottom: height * 0.025,
    },
    title: {
        fontSize: width * 0.045,
        fontWeight: '500',
        marginBottom: height * 0.012,
        color: Colors.primaryPink,
    },
    userContainer: {
        alignItems: 'center',
        height: height * 0.12,
        width: width * 0.17,
        marginRight: width * 0.04,
    },
    imageWrapper: {
        position: 'relative',
    },
    userImage: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: width * 0.08,
    },
    activeIndicator: {
        width: width * 0.035,
        height: width * 0.035,
        borderRadius: width * 0.018,
        backgroundColor: Colors.primaryGreen,
        position: 'absolute',
        bottom: height * 0.006,
        right: 0,
    },
    userName: {
        color: Colors.darkGray,
        marginTop: height * 0.008,
        fontSize: width * 0.04,
        fontWeight: 'regular',
        textAlign: 'center'
    },

    // Messages
    messagesSection: {
        marginBottom: height * 0.1,
    },
    messagesTitle: {
        marginHorizontal: width * 0.025,
        marginBottom: height * 0.012,
        fontSize: width * 0.045,
        fontWeight: '400',
        color: Colors.primaryPink,
    },
    messages: {
        flex: 1,
        marginBottom: height * 0.02,
        marginHorizontal: width * 0.05,
        height: height * 0.08,
    },
    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: height * 0.012,
        padding: width * 0.025,
        borderRadius: width * 0.025,
        width: '100%',
        height: '100%'
    },
    messageInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage: {
        width: width * 0.13,
        height: width * 0.13,
        borderRadius: width * 0.065,
        marginRight: width * 0.025,
        resizeMode: 'cover',
    },
    name: {
        fontSize: width * 0.04,
        fontWeight: 'bold',
        color: Colors.darkGray
    },
    message: {
        fontSize: width * 0.035,
        fontWeight: '500',
        color: Colors.darkGray,
    },

    unreadBadge: {
        backgroundColor: Colors.primaryPink,
        width: width * 0.07,
        height: width * 0.07,
        borderRadius: width * 0.035,
        justifyContent: "center",
        alignItems: "center"
    },
    unreadText: {
        color: Colors.lightGray,
        fontWeight: "bold",
        fontSize: width * 0.03
    },

});

export default MessagesStyle;
