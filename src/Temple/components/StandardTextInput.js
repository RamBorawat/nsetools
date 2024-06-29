import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const StandardTextInput = ({ placeholderText, val, onChangeVal, isSecureTextEntry }) =>
    <TextInput
        style={{
            borderWidth: 1,
            borderColor: "orange",
            padding: 10,
            width: 300,
            marginBottom: 10,
            borderRadius: 10,
            color: 'orange'
        }}
        placeholder={placeholderText}
        value={val}
        onChangeText={onChangeVal}
        secureTextEntry={isSecureTextEntry}
    />


export default StandardTextInput;
