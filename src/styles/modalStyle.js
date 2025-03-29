import { StyleSheet } from "react-native";

const ModalStyle = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0
    },
    container: {
        backgroundColor: "white",
        padding: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: "70%",
        alignItems: "center",
    },
    title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 15 },
    genderContainer: { flexDirection: "row", justifyContent: "space-between", width: "90%", marginBottom: 15 },
    genderButton: {
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        backgroundColor: "#ddd",
    },
    selectedGender: { backgroundColor: "#FF007F" },
    genderText: { color: "black", fontWeight: "bold", fontSize: 16 },
    selectedGenderText: { color: "white" },
    locationContainer: { width: "90%", marginBottom: 15 },
    label: { fontSize: 16, fontWeight: "bold", marginBottom: 5, textAlign: 'left' },
    locationInput: {
        padding: 15,
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        width: "100%",
    },
    locationText: { fontSize: 16, color: "gray" },
    sliderContainer: { width: "90%", flexDirection: "row", alignItems: "center" },
    slider: { flex: 1 },
    sliderValue: { fontSize: 16, fontWeight: "bold", marginLeft: 10 },
    searchButton: {
        marginTop: 20,
        backgroundColor: "#FF007F",
        paddingVertical: 15,
        borderRadius: 25,
        width: "90%",
        alignItems: "center",
    },
    searchText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default ModalStyle