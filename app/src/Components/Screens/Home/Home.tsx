import React from 'react';
import type {PropsWithChildren} from 'react';
import type {
  HomeNavigationRoutesType,
  NavigationRoutesType,
} from '../../../types/NavigationRoutesType';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CompositeScreenProps} from '@react-navigation/native';
import AuthContext from '../../../Context/authContext';
import {AuthContextType} from '../../../types/AuthContextType';
import {
  ButtonText,
  MainButton,
  Subtitle,
  Title,
  WrapperView,
} from '../../../Helpers/StylizedComponents';

type HomeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<HomeNavigationRoutesType, 'HomeScreen'>,
  BottomTabScreenProps<NavigationRoutesType>
> &
  PropsWithChildren;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {signOut, userProfile} = React.useContext(
    AuthContext,
  ) as AuthContextType;

  return (
    <WrapperView>
      <Title>Home Screen</Title>
      <Subtitle>Hello {userProfile.username}</Subtitle>
      <MainButton
        onPress={() =>
          navigation.navigate('ProfileStack', {screen: 'ProfileScreen'})
        }>
        <ButtonText>Go to Profile</ButtonText>
      </MainButton>
      <MainButton onPress={() => signOut()}>
        <ButtonText>Logout</ButtonText>
      </MainButton>
    </WrapperView>
  );
};

export default HomeScreen;
