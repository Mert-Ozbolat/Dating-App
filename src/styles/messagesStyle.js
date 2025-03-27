import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { height, width } from '../utils/constants';

const MessagesStyle = StyleSheet.create({
    // Header
    header: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        alignItems: 'center'
    },
    titles: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.primaryPink,
        paddingHorizontal: 10,
    },

});

export default MessagesStyle;
