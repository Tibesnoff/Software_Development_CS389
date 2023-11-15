import React, {useRef} from 'react';
import type {PropsWithChildren} from 'react';
import type {
  LocationNavigationRoutesType,
  NavigationRoutesType,
} from '../../../types/NavigationRoutesType';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CompositeScreenProps} from '@react-navigation/native';
import Context from '../../../Context/context';
import {AppContext} from '../../../types/AppContextType';
import {
  GoogleMapsMarker,
  GoogleMapsView,
  NearbyLocationScrollView,
  NearbyLocationSeperator,
  Subtitle,
  Title,
  WrapperView,
} from '../../../Helpers/StylizedComponents';
import {Text, View, useWindowDimensions} from 'react-native';
import {styled} from 'nativewind';
import {Place} from '../../../types/Location';
const StyledView = styled(View);
import {Platform} from 'react-native';
import {PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';

type LocationScreenProps = CompositeScreenProps<
  NativeStackScreenProps<LocationNavigationRoutesType, 'LocationScreen'>,
  BottomTabScreenProps<NavigationRoutesType>
> &
  PropsWithChildren;

const StlyizedText = styled(Text, 'text-lg font-bold text-dark-green');

const LocationScreen: React.FC<LocationScreenProps> = ({navigation}) => {
  const {location, places} = React.useContext(Context) as AppContext;

  const [currentViewedPlace, setCurrentViewedPlace] = React.useState<Place[]>(
    [] as Place[],
  );
  const renderPlace = (place: Place) => {
    return (
      <StyledView>
        <StyledView className="flex bg-white flex-col h-20">
          <StlyizedText className="pl-5 text-left text-lg">
            {place.displayName.text}
          </StlyizedText>
          {/* <Subtitle>
            {place.primaryTypeDisplayName?.text || place.types[0] || ''}
          </Subtitle>
          <Subtitle>{place.distance} miles</Subtitle> */}
        </StyledView>
      </StyledView>
    );
  };

  const seperatorComponent = (
    <StyledView className="w-full h-0.5 bg-slate-200" />
  );

  const onViewRef = useRef((viewableItems: any) => {
    const check: Place[] = viewableItems.viewableItems.map(
      (item: any) => item.item as Place,
    );
    setCurrentViewedPlace(check);
  });

  const markerFactory = (title: string, description: string) => {
    return (
      <GoogleMapsMarker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        title={title}
        description={description}
      />
    );
  };

  return (
    <WrapperView>
      <Title className="mt-20">This is the location screen</Title>

      <GoogleMapsView
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={mapStyle}
        provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}>
        {markerFactory('test marker', 'test description')}
      </GoogleMapsView>
      <StyledView className="absolute bottom-0 left-0 w-full h-1/3">
        <StyledView className="rounded-t-xl h-10 border-b-2 border-slate-200 bg-white">
          <StlyizedText className="text-center pt-1">
            Nearby Locations
          </StlyizedText>
        </StyledView>
        <NearbyLocationScrollView
          className="rounded-xl text-black z-50"
          data={places}
          renderItem={({item}) => renderPlace(item as Place)}
          ItemSeparatorComponent={() => seperatorComponent}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          onViewableItemsChanged={onViewRef.current} // To get the current viewed card. Can't add method here. Throws error.
          keyExtractor={item => (item as Place).id}
          snapToAlignment="start"
          decelerationRate={'fast'}
          snapToInterval={82}
        />
      </StyledView>
    </WrapperView>
  ); //add button up here^^ between view and mapview <Button
  //title="Settings"
  //onPress={() => navigation.navigate('LocationSettings')}
  ///>
};

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];

export default LocationScreen;
