import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { PropsWithChildren } from 'react';
import React, { useCallback, useEffect } from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-ionicons';
import AuthContext from '../../../Context/authContext';
import {
  AuthInputBox,
  Logo,
  LogoContainer,
} from '../../../Helpers/StylizedComponents';
import { AuthContextType } from '../../../types/AuthContextType';
import type { WelcomeNavigationRoutesType } from '../../../types/NavigationRoutesType';
import KeyboardAvoidingViewScroll from '../../Common/KeyboardAvoidingViewScroll';
import PrimaryButton from '../../Common/PrimaryButton';
import PrimaryText from '../../Common/PrimaryText';
import TitleText from '../../Common/TitleText';
import WrapperView from '../../Common/WrapperView';
import Consts from '../../../Helpers/Consts';

type SignUpScreenProps = NativeStackScreenProps<
  WelcomeNavigationRoutesType,
  'Register'
> &
  PropsWithChildren;

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [email, setEmail] = React.useState<string>('');
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [repeatedPassword, setRepeatedPassword] = React.useState<string>('');

  const {
    signUp,
    clearAuthErrors,
    AuthErrorComponent,
    userToken,
    addAuthError,
  } = React.useContext(AuthContext) as AuthContextType;

  const Errors = Consts.authErrorMessages;

  useEffect(() => {
    clearAuthErrors();
  }, [clearAuthErrors]);

  const backButton = useCallback(() => {
    return (
      <Pressable
        className="flex-1 flex-row pl-4 h-10 justify-start items-center text-center top-10 left-0 absolute"
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrow-back" color="#4d654e" />
        <PrimaryText className="ml-2 text-xl text-center font-bold">
          Back
        </PrimaryText>
      </Pressable>
    );
  }, [navigation]);

  return (
    <WrapperView className="pb-0">
      <KeyboardAvoidingViewScroll>
        <View className="flex-1 flex-col w-full justify-center h-screen items-center mb-0">
          <TitleText className="mt-20">Sign Up for RightPay</TitleText>
          <LogoContainer>
            <Logo
              source={require('../../../Assets/RightPay-logo-light-transparent.png')}
            />
          </LogoContainer>
          <AuthInputBox
            placeholder="Email"
            placeholderTextColor={'black'}
            onChange={event => setEmail(event.nativeEvent.text)}
          />
          <AuthInputBox
            placeholder="Username"
            placeholderTextColor={'black'}
            onChange={event => setUsername(event.nativeEvent.text)}
          />
          <AuthInputBox
            placeholder="Password"
            placeholderTextColor={'black'}
            secureTextEntry={true}
            onChange={event => setPassword(event.nativeEvent.text)}
          />
          <AuthInputBox
            placeholder="Repeat Password"
            placeholderTextColor={'black'}
            secureTextEntry={true}
            onChange={event => setRepeatedPassword(event.nativeEvent.text)}
          />
          <PrimaryButton
            onPress={async () => {
              await signUp(email, username, password, repeatedPassword).then(
                res => {
                  if (res) {
                    addAuthError(Errors.verifyEmail);
                    setTimeout(() => {
                      navigation.navigate('Login');
                    }, 3000);
                  }
                },
              );
            }}>
            <PrimaryText type="secondary" className="text-xl">
              Sign Up
            </PrimaryText>
          </PrimaryButton>
          {userToken && (
            <TitleText>'You have successfully signed up'</TitleText>
          )}
          {AuthErrorComponent && <AuthErrorComponent />}
          {backButton()}
        </View>
      </KeyboardAvoidingViewScroll>
    </WrapperView>
  );
};

export default SignUpScreen;
