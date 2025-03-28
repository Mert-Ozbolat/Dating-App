import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';


const defaultScreenStyle = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.lightGray,
    },

    darkMode: {
        backgroundColor: Colors.darkGray,
    },
    darkText: {
        color: Colors.lightGray,
    },
});

export { defaultScreenStyle };