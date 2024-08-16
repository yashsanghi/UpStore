import React, { useState, useContext } from 'react';
import { ScrollView, View, KeyboardAvoidingView, StyleSheet, Button, TextInput, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import * as yup from 'yup';
import { Formik } from 'formik';
import Card from '../../components/UI/Card';
import StateContext from '../../StateContext';
import DispatchContext from '../../DispatchContext';

import Axios from 'axios';
import Colors from '../../constants/Colors';

const AuthScreen = props => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const mainState = useContext(StateContext);
  const mainDispatch = useContext(DispatchContext);

  const phoneValidationSchema = yup.object().shape({
    phoneNumber: yup.string().max(10, 'PHONE must have 10 digits').min(10, 'PHONE must have 10 digits').required('Please enter valid number')
  });

  const OTPValidationSchema = yup.object().shape({
    OTP: yup.string().max(6, 'OTP must have 6 digits').min(6, 'OTP must have 6 digits').required('OTP is required')
  });

  const onSubmitNumber = async values => {
    setLoading(true);

    try {
      const response = await Axios.post(`http://65.0.144.68/api/getSessionId`, { phoneNumber: values.phoneNumber });
      setSessionId(response.data.session_id);
      setPhoneNumber(values.phoneNumber);
      setLoading(false);
    } catch (err) {
      return console.log(err);
    }

    return;
  };

  const onSubmitOTP = async values => {
    setLoading(true);

    try {
      const response = await Axios.post(`http://65.0.144.68/api/verifyOTP`, { phoneNumber: values.phoneNumber, OTP: values.OTP, session_id: sessionId });
      mainDispatch({ type: 'login', value: response.data });

      saveDataToStorage({ token: response.data.token, ...response.data.user });
    } catch (err) {
      return console.log(err);
    }

    return;
  };

  const saveDataToStorage = user => {
    AsyncStorage.setItem('userData', JSON.stringify(user));
  };

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={50} style={styles.screen}>
      <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            <Formik validationSchema={phoneNumber ? OTPValidationSchema : phoneValidationSchema} initialValues={phoneNumber ? { OTP: '' } : { phoneNumber: '' }} onSubmit={phoneNumber ? onSubmitOTP : onSubmitNumber}>
              {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
                <View>
                  <Text style={styles.label}>{phoneNumber ? 'OTP' : 'Phone'}</Text>
                  <TextInput style={styles.input} onChangeText={handleChange(`${phoneNumber ? 'OTP' : 'phoneNumber'}`)} onBlur={handleBlur(`${phoneNumber ? 'OTP' : 'phoneNumber'}`)} value={phoneNumber ? values.OTP : values.phoneNumber} />
                  {loading ? <ActivityIndicator size="small" color={Colors.primary} /> : <Button onPress={handleSubmit} title="Submit" />}
                  {<Text>{JSON.stringify(errors)}</Text>}
                </View>
              )}
            </Formik>
          </ScrollView>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerTitle: 'Authenticate'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20
  },
  buttonContainer: {
    marginTop: 10
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8
  }
});

export default AuthScreen;
