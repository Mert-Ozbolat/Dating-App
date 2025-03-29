import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Modal from "react-native-modal";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import ModalStyle from "../../styles/modalStyle";

const FilterModal = ({ isVisible, onClose }) => {
    const [selectedGender, setSelectedGender] = useState("Girls");
    const [ageRange, setAgeRange] = useState([18, 30]);
    const [distanceRange, setDistanceRange] = useState([0, 50]);

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            style={ModalStyle.modal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
        >
            <View style={ModalStyle.container}>
                <Text style={ModalStyle.title}>Filter</Text>

                <View style={ModalStyle.genderSection}>
                    <Text style={ModalStyle.sectionLabel}>Interested In</Text>
                    <View style={ModalStyle.genderContainer}>
                        {["Girls", "Boys", "Both"].map((gender) => (
                            <TouchableOpacity
                                key={gender}
                                style={[
                                    ModalStyle.genderButton,
                                    selectedGender === gender && ModalStyle.selectedGender,
                                ]}
                                onPress={() => setSelectedGender(gender)}
                            >
                                <Text
                                    style={[
                                        ModalStyle.genderText,
                                        selectedGender === gender && ModalStyle.selectedGenderText,
                                    ]}
                                >
                                    {gender}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={ModalStyle.locationSection}>
                    <Text style={ModalStyle.locationLabel}>Location</Text>
                    <View style={ModalStyle.locationInputContainer}>
                        <TextInput
                            placeholder="Chicago, USA"
                            style={ModalStyle.locationInput}
                        />
                    </View>
                </View>

                {/* Age Range Slider */}
                <View style={ModalStyle.sliderSection}>
                    <View style={ModalStyle.sliderLabelContainer}>
                        <Text style={ModalStyle.sectionLabel}>Age</Text>
                        <Text style={ModalStyle.rangeText}>{ageRange[0]} - {ageRange[1]}</Text>
                    </View>
                    <MultiSlider
                        values={ageRange}
                        min={18}
                        max={70}
                        step={1}
                        onValuesChange={setAgeRange}
                        selectedStyle={ModalStyle.selectedSlider}
                        markerStyle={ModalStyle.marker}
                        containerStyle={ModalStyle.sliderContainer}
                    />
                </View>

                {/* Distance Range Slider */}
                <View style={ModalStyle.sliderSection}>
                    <View style={ModalStyle.sliderLabelContainer}>
                        <Text style={ModalStyle.sectionLabel}>Distance</Text>
                        <Text style={ModalStyle.rangeText}>{distanceRange[0]} - {distanceRange[1]} km</Text>
                    </View>
                    <MultiSlider
                        values={distanceRange}
                        min={0}
                        max={100}
                        step={1}
                        onValuesChange={setDistanceRange}
                        selectedStyle={ModalStyle.selectedSlider}
                        markerStyle={ModalStyle.marker}
                        containerStyle={ModalStyle.sliderContainer}
                    />
                </View>

                <TouchableOpacity style={ModalStyle.searchButton} onPress={onClose}>
                    <Text style={ModalStyle.searchText}>Search</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default FilterModal;
