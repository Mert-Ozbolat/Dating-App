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
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.darkGray
    },
    search: {
        width: '100%',
    }
});

export default MessagesStyle;
