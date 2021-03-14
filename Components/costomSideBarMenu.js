import React,{Component} from 'react';
import { Text,View,TouchableOpacity,TextInput, Image,StyleSheet,KeyboardAvoidingView,Modal,ScrollView ,Alert } from 'react-native';
import * as firebase from 'firebase'
import {DrawerItems} from 'react-navigation-drawer'

export default class CustomSideBarMenu extends Component{
    render (){
        return(
            <View style ={styles.container}>
                <View style ={drawerItemsContainer}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style ={styles.logoutContainer}>
                    <TouchableOpacity style ={styles.logoutBotton}
                    onPress={()=>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }}
                    >
                        <Text >
Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}