import React from "react";
import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Message from "../components/Message";
import chatRoomsData from "../assets/dummy-data/Chats";
import { useRoute, useNavigation } from "@react-navigation/core";
import MessageInput from "../components/MessageInput";

export default function chatRoomScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    console.warn("Displaying chat room: ", route.params?.id)

    navigation.setOptions({title: 'Elon Musk'})

    return(
        <SafeAreaView style={styles.page}>
                <FlatList 
                    data={chatRoomsData.messages}
                    renderItem={({item}) => <Message message={item} />}
                    inverted
                />
                <MessageInput />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
})