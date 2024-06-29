import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const StandardButton = ({ title, action, disabled }) => <TouchableOpacity onPress={action}
  disabled={disabled}
>
  <Text style={{
    marginTop: 10,
    color: '#fff',
    backgroundColor: 'orange',
    padding: 10,
    paddingHorizontal: '30%',
    fontSize: 21,
    fontWeight: '600',
    borderRadius: 10,
  }}
  >
    {title}
  </Text>
</TouchableOpacity>

export default StandardButton;
