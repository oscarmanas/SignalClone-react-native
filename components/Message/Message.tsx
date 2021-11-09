import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const blue = '#3777f0';
const grey = 'lightgrey';

const myId = 'u1';

const Message = ({ message }) => {

    const isMe = message.user.id === myId;

    return(
    <View style={[
        styles.container, isMe ? styles.rightContainer : styles.leftContainerMe ]}
    >
        <Text style={{color: isMe ? 'black' : 'white' }}>{message.content}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%',
    },
    leftContainerMe:{
        backgroundColor: blue,
        marginRight: 'auto',
        marginLeft: 10,
    },
    rightContainer:{
        backgroundColor: grey,
        marginRight: 10,
        marginLeft:'auto',
    },
});

export default Message;