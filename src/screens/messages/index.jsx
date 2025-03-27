import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/colors'
import Input from '../../components/ui/textInput'
import MessagesStyle from '../../styles/messagesStyle'
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'

import Chat from '../../components/messages/messages'
import Messages from '../../components/messages/messages'
import ActiveUsers from '../../components/messages/activeUsers'



const messages = [
    { id: '1', name: 'John', text: 'Hey! How are you?', image: require('../../assets/users/women1.jpeg') },
    { id: '2', name: 'Emma', text: 'The weather is amazing today.', image: require('../../assets/users/women7.jpeg') },
    { id: '3', name: 'Michael', text: 'I’m working with React Native.', image: require('../../assets/users/women8.jpeg') },
    { id: '4', name: 'Sophia', text: 'Did you order food?', image: require('../../assets/users/women4.jpeg') },
    { id: '5', name: 'Daniel', text: 'I’m excited to see your new project!', image: require('../../assets/users/women6.jpeg') },
    { id: '6', name: 'Daniel', text: 'I’m excited to see your new project!', image: require('../../assets/users/women6.jpeg') },
    { id: '7', name: 'Daniel', text: 'I’m excited to see your new project!', image: require('../../assets/users/women6.jpeg') },
    { id: '8', name: 'Daniel', text: 'I’m excited to see your new project!', image: require('../../assets/users/women6.jpeg') },
    { id: '10', name: 'Daniel', text: 'I’m excited to see your new project!', image: require('../../assets/users/women6.jpeg') },
    { id: '11', name: 'Daniel', text: 'I’m excited to see your new project!', image: require('../../assets/users/women6.jpeg') },
    { id: '12', name: 'Daniel', text: 'I’m excited to see your new project!', image: require('../../assets/users/women6.jpeg') },
    { id: '13', name: 'Daniel', text: 'I’m excited to see your new project!', image: require('../../assets/users/women6.jpeg') },
    { id: '14', name: 'Daniel', text: 'I’m excited to see your new project!', image: require('../../assets/users/women6.jpeg') },
    { id: '15', name: 'Daniel', text: 'I’m excited to see your new project!', image: require('../../assets/users/women6.jpeg') },
    { id: '16', name: 'Daniel', text: 'I’m excited to see your new project!', image: require('../../assets/users/women6.jpeg') },
    { id: '17', name: 'Daniel', text: 'I’m excited to see your new project!', image: require('../../assets/users/women6.jpeg') },
];


const users = [
    { id: '1', name: 'You', image: require('../../assets/users/men1.jpeg'), isActive: true },
    { id: '2', name: 'Sophia Brown', image: require('../../assets/users/women5.jpeg'), isActive: true },
    { id: '3', name: 'Liam Johnson', image: require('../../assets/users/women7.jpeg'), isActive: true },
    { id: '4', name: 'Emma Davis', image: require('../../assets/users/women6.jpeg'), isActive: true },
    { id: '5', name: 'Noah Smith', image: require('../../assets/users/women8.jpeg'), isActive: true },
];


const MessagesScreen = () => {
    return (
        <SafeAreaView style={defaultScreenStyle.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={MessagesStyle.search}>
                    <Input
                        placeholder="Search"
                        color={Colors.darkGray}
                        backgroundColor={Colors.mediumGray}
                    />
                </View>

                <FlatList
                    data={users}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ActiveUsers item={item} />}
                />

                <FlatList
                    data={messages}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Messages item={item} />}
                />






            </ScrollView>
        </SafeAreaView>
    )
}

export default MessagesScreen