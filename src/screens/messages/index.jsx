import { View, Text, SafeAreaView, ScrollView, FlatList, TextInput, Image } from 'react-native'
import React from 'react'
import MessagesStyle from '../../styles/messagesStyle'
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import Messages from '../../components/messages/messages'
import ActiveUsers from '../../components/messages/activeUsers'
import Input from '../../components/ui/textInput'
import { Colors } from '../../theme/colors'



const messages = [
    { id: '1', name: 'John', text: 'Hey! How are you?', image: require('../../assets/users/women1.jpeg'), unread: 0 },
    { id: '2', name: 'Emma', text: 'The weather is amazing today.', image: require('../../assets/users/women7.jpeg'), unread: 2 },
    { id: '3', name: 'Michael', text: 'I’m working with React Native.', image: require('../../assets/users/women8.jpeg'), unread: 0 },
    { id: '4', name: 'Sophia', text: 'Did you order food?', image: require('../../assets/users/women4.jpeg'), unread: 1 },
    { id: '5', name: 'Daniel', text: 'I’m excited to see your new project!', image: require('../../assets/users/women6.jpeg'), unread: 3 },
    { id: '6', name: 'Alice', text: 'Let’s meet at 5 PM.', image: require('../../assets/users/men2.jpeg'), unread: 0 },
    { id: '7', name: 'Olivia', text: 'Check out this link!', image: require('../../assets/users/women6.jpeg'), unread: 2 },
    { id: '8', name: 'James', text: 'Don’t forget the meeting tomorrow.', image: require('../../assets/users/men3.jpeg'), unread: 4 },
    { id: '10', name: 'Sophia', text: 'See you later!', image: require('../../assets/users/women6.jpeg'), unread: 0 },
    { id: '11', name: 'William', text: 'Call me when you’re free.', image: require('../../assets/users/men4.jpeg'), unread: 5 },
    { id: '12', name: 'Ethan', text: 'That’s a great idea!', image: require('../../assets/users/women6.jpeg'), unread: 0 },
    { id: '13', name: 'Mia', text: 'Can you send the files?', image: require('../../assets/users/men5.jpeg'), unread: 1 },
    { id: '14', name: 'Charlotte', text: 'I’ll be there in 10 mins.', image: require('../../assets/users/women6.jpeg'), unread: 0 },
    { id: '15', name: 'Daniel', text: 'Are you available for a call?', image: require('../../assets/users/men6.jpeg'), unread: 2 },
    { id: '16', name: 'Lucas', text: 'Let’s go for a run!', image: require('../../assets/users/women6.jpeg'), unread: 0 },
    { id: '17', name: 'Ella', text: 'Movie night?', image: require('../../assets/users/women6.jpeg'), unread: 3 },
];



const users = [
    { id: '1', name: 'You', image: require('../../assets/users/men1.jpeg'), isActive: true },
    { id: '2', name: 'Sophia Brown', image: require('../../assets/users/women5.jpeg'), isActive: true },
    { id: '3', name: 'Liam Johnson', image: require('../../assets/users/men5.jpeg'), isActive: true },
    { id: '4', name: 'Emma Davis', image: require('../../assets/users/men4.jpeg'), isActive: true },
    { id: '5', name: 'Noah Smith', image: require('../../assets/users/women8.jpeg'), isActive: true },
    { id: '6', name: 'Noah Smith', image: require('../../assets/users/women8.jpeg'), isActive: true },
    { id: '7', name: 'Noah Smith', image: require('../../assets/users/women8.jpeg'), isActive: true },
];


const MessagesScreen = () => {
    return (
        <SafeAreaView style={defaultScreenStyle.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={MessagesStyle.search}>
                    <Input
                        placeholder={'Search'}
                        color={Colors.darkGray}
                        backgroundColor={Colors.mediumGray}
                    />
                    <Image source={require('../../assets/icons/search.png')} style={MessagesStyle.searchIcon} />
                </View>

                <View style={MessagesStyle.activeUsers}>
                    <Text style={MessagesStyle.activeTitle}>Actives</Text>
                    <FlatList
                        data={users}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <ActiveUsers item={item} />}
                    />
                </View>

                <View style={MessagesStyle.messagesSection}>
                    <Text style={MessagesStyle.messagesTitle}>Messages</Text>
                    <FlatList
                        data={messages}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Messages item={item} />}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default MessagesScreen