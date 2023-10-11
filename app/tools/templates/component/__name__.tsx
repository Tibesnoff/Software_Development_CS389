import React from 'react';
import {styled} from 'nativewind';
import {Text} from 'react-native';
import ComponentPropType from '../../../types/ComponentPropType';
//All of this is meant to be replaced it just shows the basic structure of the component
//Navigation does not need to be included if it is not needed
const StylizedTouch = styled(Text);

const __name__: React.FC<ComponentPropType> = ({navigation}) => {
  return (
    <>
      <StylizedTouch
        onPress={() =>
          navigation.navigate('HomeStack', {screen: 'HomeScreen'})
        }>
        Home
      </StylizedTouch>
    </>
  );
};

export default __name__;
