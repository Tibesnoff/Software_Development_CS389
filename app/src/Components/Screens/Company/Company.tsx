import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { Title } from '../../../Helpers/StylizedComponents';
import WrapperView from '../../../Helpers/WrapperView';
import type { CompanyNavigationRoutesType } from '../../../types/NavigationRoutesType';

type CompanyScreenProps = NativeStackScreenProps<
  CompanyNavigationRoutesType,
  'CompanyScreen'
> &
  PropsWithChildren;

const CompanyScreen: React.FC<CompanyScreenProps> = () => {
  return (
    <WrapperView>
      <Title className="mt-20">
        This is the company screen... what this for????
      </Title>
    </WrapperView>
  );
};

export default CompanyScreen;
