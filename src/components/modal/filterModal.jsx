import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const FilterModal = ({ isVisible, onClose }) => {
    const [selectedGender, setSelectedGender] = useState("Girls");
    const [ageRange, setAgeRange] = useState([18, 30]);  // Çift değerli yaş slider
    const [distanceRange, setDistanceRange] = useState([0, 50]); // Çift değerli mesafe slider

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            style={styles.modal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
        >
            <View style={styles.container}>
                <Text style={styles.title}>Filter</Text>

                {/* Gender Selection */}
                <View>
                    <Text>Interested In</Text>
                    <View style={styles.genderContainer}>
                        {["Girls", "Boys", "Both"].map((gender) => (
                            <TouchableOpacity
                                key={gender}
                                style={[styles.genderButton, selectedGender === gender && styles.selectedGender]}
                                onPress={() => setSelectedGender(gender)}
                            >
                                <Text style={[styles.genderText, selectedGender === gender && styles.selectedGenderText]}>
                                    {gender}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Age Range Slider */}
                <View>
                    <View>
                        <Text style={styles.label}>Age</Text>
                        <Text>{ageRange[0]}-{ageRange[1]}</Text>
                    </View>
                    <MultiSlider
                        values={ageRange}
                        min={18}
                        max={70}
                        step={1}
                        onValuesChange={setAgeRange}
                        selectedStyle={{ backgroundColor: "#FF007F" }}
                        markerStyle={{ backgroundColor: "#FF007F" }}
                        containerStyle={styles.sliderContainer}
                    />
                </View>

                {/* Distance Range Slider */}
                <View>
                    <View>
                        <Text style={styles.label}>Distance</Text>
                        <Text>{distanceRange[0]}-{distanceRange[1]} km</Text>
                    </View>
                    <MultiSlider
                        values={distanceRange}
                        min={0}
                        max={100}
                        step={1}
                        onValuesChange={setDistanceRange}
                        selectedStyle={{ backgroundColor: "#FF007F" }}
                        markerStyle={{ backgroundColor: "#FF007F" }}
                        containerStyle={styles.sliderContainer}
                    />
                </View>

                {/* Search Button */}
                <TouchableOpacity style={styles.searchButton} onPress={onClose}>
                    <Text style={styles.searchText}>Search</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0
    },
    container: {
        backgroundColor: "white",
        padding: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: "60%",
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15
    },
    genderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        marginBottom: 15
    },
    genderButton: {
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        backgroundColor: "#ddd",
    },
    selectedGender: {
        backgroundColor: "#FF007F"
    },
    genderText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16
    },
    selectedGenderText: {
        color: "white"
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10
    },
    sliderContainer: {
        width: "90%",
        marginTop: 10
    },
    searchButton: {
        marginTop: 20,
        backgroundColor: "#FF007F",
        paddingVertical: 15,
        borderRadius: 25,
        width: "90%",
        alignItems: "center",
    },
    searchText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
});

export default FilterModal;
