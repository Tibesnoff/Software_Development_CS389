import React from 'react';
import type {PropsWithChildren} from 'react';
import type {
  ProfileNavigationRoutesType,
  NavigationRoutesType,
} from '../../../types/NavigationRoutesType';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {AuthContextType} from '../../../types/AuthContextType';
import AuthContext from '../../../Context/authContext';
import {
  ButtonText,
  MainButton,
  Subtitle,
  Title,
  WrapperView,
} from '../../../Helpers/StylizedComponents';

type ProfileSettingsProps = CompositeScreenProps<
  NativeStackScreenProps<ProfileNavigationRoutesType, 'ProfileSettings'>,
  BottomTabScreenProps<NavigationRoutesType>
> &
  PropsWithChildren;

const ProfileSettings: React.FC<ProfileSettingsProps> = ({navigation}) => {
  const {userProfile} = React.useContext(AuthContext) as AuthContextType;

  return (
    <WrapperView>
      <Title>Profile Screen</Title>
      <Subtitle>Hello, you will soon be able to edit these!</Subtitle>
      <Subtitle>Username: {userProfile.username}</Subtitle>
      <Subtitle>Email: {userProfile.email}</Subtitle>
      <Subtitle>Phone: {userProfile.phone}</Subtitle>
      <Subtitle>Address: {userProfile.address}</Subtitle>
      <Subtitle>City: {userProfile.city}</Subtitle>
      <Subtitle>State: {userProfile.state}</Subtitle>
      <Subtitle>Zip: {userProfile.zip}</Subtitle>
      <MainButton>
        <ButtonText>Edit Credit Cards</ButtonText>
      </MainButton>

      <MainButton onPress={() => navigation.goBack()}>
        <ButtonText>Go Back</ButtonText>
      </MainButton>
    </WrapperView>
  );
};

export default ProfileSettings;
