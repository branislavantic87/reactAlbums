import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './src/components/header';
import Lista from './src/components/Lista';


const App = () =>
    (
        <View style ={{flex:1}}> 
            <Header headerText={'Tutorijal!!'} />
            <Lista />
        </View>

    );


export default App;