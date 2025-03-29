import { StyleSheet } from "react-native";
import { Colors } from "../theme/colors";
import { height, width } from "../utils/constants";

const ModalStyle = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    container: {
        backgroundColor: Colors.lightGray,
        padding: width * 0.05,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: height * 0.66,
        alignItems: "center",
    },
    title: {
        fontSize: width * 0.06,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: height * 0.02,
    },
    genderSection: {
        width: "100%",
        marginBottom: height * 0.02,
    },
    sectionLabel: {
        fontSize: width * 0.04,
        fontWeight: "500",
        marginBottom: height * 0.01,
        color: Colors.darkGray,
    },
    genderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    genderButton: {
        flex: 1,
        paddingVertical: height * 0.015,
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: Colors.mediumGray,
        marginHorizontal: width * 0.02,
    },
    selectedGender: {
        backgroundColor: Colors.primaryPink,
    },
    genderText: {
        color: "black",
        fontWeight: "600",
        fontSize: width * 0.045,
    },
    selectedGenderText: {
        color: "white",
    },
    sliderSection: {
        width: "100%",
        marginBottom: height * 0.02,
        justifyContent: "center",
        alignItems: "center",
    },
    sliderLabelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    rangeText: {
        fontSize: width * 0.035,
        fontWeight: "400",
        color: Colors.darkGray,
    },
    sliderContainer: {
        marginTop: height * 0.01,
    },
    selectedSlider: {
        backgroundColor: Colors.primaryPink,
    },
    marker: {
        backgroundColor: Colors.primaryPink,
    },
    searchButton: {
        marginTop: height * 0.03,
        backgroundColor: Colors.primaryPink,
        paddingVertical: height * 0.02,
        borderRadius: 25,
        width: "90%",
        alignItems: "center",
    },
    searchText: {
        color: Colors.lightGray,
        fontSize: width * 0.045,
        fontWeight: "bold",
    },
    locationSection: {
        width: "100%",
        marginVertical: height * 0.03,
    },
    locationLabel: {
        position: "absolute",
        top: -height * 0.01,
        left: width * 0.02,
        zIndex: 100,
        backgroundColor: Colors.lightGray,
        paddingHorizontal: width * 0.05,
    },
    locationInputContainer: {
        borderWidth: 1,
        borderColor: Colors.mediumGray,
        flexDirection: "row",
        borderRadius: 10,
        paddingHorizontal: width * 0.02,
        paddingTop: height * 0.005,
    },
    locationInput: {
        width: width * 0.85,
    },
});

export default ModalStyle;
