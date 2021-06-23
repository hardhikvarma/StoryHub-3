import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import db from '../Config';

export default class WriteStoryScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author: '',
            storyText: '',
            title: ''
        };
    }

    submitStory = () =>{
        db.collection('stories').add({
                author: this.state.author,
                storyText: this.state.storyText,
                title: this.state.title,
        });

        this.setState({
            author: '',
            storyText:'',
            title: ''
        });
        ToastAndroid.show('STORY SUBMITTED', ToastAndroid.SHORT)
    };

    render(){
      return(
      <View style={styles.container}> 
      <View>
          <Text style={{textAlign: 'center', backgroundColor: "lightgreen", fontSize: 30}}> STORY HUB</Text>
          StoryHub{' '}
      </View>
      <View style={styles.inputView}>
      <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
         <TextInput 
         style={styles.inputBox}
         placeholder= "Title of the story"/>
      </KeyboardAvoidingView>

      <KeyboardAvoidingView>
         <TextInput 
         style={styles.inputBox}
         placeholder= "Author of the story"/>
         
         <TextInput 
         style={styles.storyBox}
         placeholder= "Write your story here"/>
    </KeyboardAvoidingView>
         <TouchableOpacity 
         style={styles.submitButton}
         onPress={this.submitStory}>
         <Text style={styles.submitButtonText}>SUBMIT</Text>
         </TouchableOpacity>
      </View>
      </View>    
    );
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
    },
    inputView: {
        flexDirection: 'row',
        margin: 20,
    },
    inputBox: {
        width: 200, height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        backgroundColor: "white",
    },
    storyBox: {
        width: 200, height: 200,
        borderWidth: 1.5,
        fontSize: 20,
        backgroundColor: "white", 
    },
    submitButton:{
        backgroundColor: '#FBC02D',
        width: 200, height: 50,
    },
    submitButtonText:{
        padding:10, 
        textAlign: 'center',
        fontSize: 20, fontWeight: 'bold',
        color: 'white',
    }
})