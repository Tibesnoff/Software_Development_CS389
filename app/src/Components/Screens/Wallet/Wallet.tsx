import React, {useEffect, useRef} from 'react';
import type {PropsWithChildren} from 'react';
import type {
  WalletNavigationRoutesType,
  NavigationRoutesType,
} from '../../../types/NavigationRoutesType';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CompositeScreenProps} from '@react-navigation/native';
import {
  AddCardButton,
  AddCardIcon,
  AddCardView,
  CardButton,
  CardItemSeperator,
  CardList,
  CardListView,
  CardText,
  CardView,
  DeleteCardButton,
  RewardsView,
  SecondaryAddCardView,
  SecondaryCardView,
  Subtitle,
  Title,
  WrapperView,
} from '../../../Helpers/StylizedComponents';
import {AppContext} from '../../../types/AppContextType';
import Context from '../../../Context/context';
import {Card, Reward} from '../../../types/CardType';
import {Dimensions} from 'react-native';
import AddCardFullForm from './AddCardFullForm';
import ReviewCardForm from './ReviewCardForm';
import Consts from '../../../Helpers/Consts';

type WalletScreenProps = CompositeScreenProps<
  NativeStackScreenProps<WalletNavigationRoutesType, 'WalletScreen'>,
  BottomTabScreenProps<NavigationRoutesType>
> &
  PropsWithChildren;

const WalletScreen: React.FC<WalletScreenProps> = () => {
  const {Cards, removeCard, setCardForms, CardForms} = React.useContext(
    Context,
  ) as AppContext;
  const [currentViewedCard, setCurrentViewedCard] = React.useState<Card[]>([
    Cards[0],
  ]);
  const [deleteCard, setDeleteCard] = React.useState<boolean>(false);

  //helpers
  const getCardRewards = (CardId: number) => [];

  //components
  const addNewCardComponent = () => (
    <AddCardView>
      <SecondaryAddCardView>
        <CardText className="text-center">Add New Card</CardText>
        <AddCardButton onPress={handleAddPress}>
          <AddCardIcon source={require('../../../Assets/AddSign.png')} />
        </AddCardButton>
      </SecondaryAddCardView>
    </AddCardView>
  );
  const renderCard = (item: Card) => {
    if (item.card_name === 'Add') {
      return addNewCardComponent();
    }
    return (
      <CardView>
        <SecondaryCardView>
          <CardButton
            onLongPress={() => handleCardPress()}
            className={deleteCard ? 'opacity-50 ' : 'opacity-100'}>
            <CardText className="text-center font-bold truncate">
              {item.card_name}
            </CardText>
            <CardText>{`Card Type: ${item.card_type}`}</CardText>
            <CardText>{`Card Brand: ${item.card_brand}`}</CardText>
            <CardText>{`Bank Name: ${item.card_bank}`}</CardText>
            <CardText>{`Card Bin: ${item.card_bin}`}</CardText>
          </CardButton>
          {deleteCard && (
            <DeleteCardButton
              onLongPress={handleDelete}
              onPress={() => setDeleteCard(false)}>
              <CardText className="opacity-100 text-4xl text-center">
                Delete Card?
              </CardText>
              <CardText className="opacity-100 text-3xl text-center">
                Long Press Again to Confirm
              </CardText>
              <CardText className="opacity-100 text-2xl text-center">
                Tap to Exit
              </CardText>
            </DeleteCardButton>
          )}
        </SecondaryCardView>
      </CardView>
    );
  };

  const renderReward = (item: Reward) => {
    return (
      <RewardsView>
        <Subtitle className="text-left">{item.reward_name}</Subtitle>
        <Subtitle>{item.reward_description}</Subtitle>
      </RewardsView>
    );
  };

  const itemSeparatorComponent = () => <CardItemSeperator />;

  //handlers
  const handleCardPress = () => {
    setDeleteCard(!deleteCard);
  };

  const handleDelete = () => {
    setDeleteCard(false);
    removeCard(currentViewedCard[0]);
  };

  const handleAddPress = () => {
    setCardForms({...CardForms, Full: true});
  };

  const onViewRef = useRef((viewableItems: any) => {
    const check: Card[] = viewableItems.viewableItems.map(
      (item: any) => item.item as Card,
    );
    setCurrentViewedCard(check);
  });

  useEffect(() => {
    setDeleteCard(false);
  }, [currentViewedCard]);

  return (
    <WrapperView>
      {AddCardFullForm()}
      {ReviewCardForm()}
      <Title className="mt-10">Wallet</Title>
      <CardListView>
        <CardList
          data={[
            ...Cards,
            {
              card_name: 'Add',
              id: -1,
              card_bin: 0o0,
            } as Card,
          ]}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => (item as Card).card_bin.toString()}
          renderItem={({item}) => renderCard(item as Card)}
          horizontal={true}
          ItemSeparatorComponent={itemSeparatorComponent}
          onViewableItemsChanged={onViewRef.current} // To get the current viewed card. Can't add method here. Throws error.
          snapToInterval={
            Dimensions.get('window').width + Consts.cardItemSeparatorWidth
          } //Change 48 based on width of CardItemSeperator width
        />
      </CardListView>
      <CardListView className="h-2/6 justify-center items-center">
        <CardList
          className=" text-center w-3/4 p-2"
          data={[]} //This will need to be done
          ListHeaderComponent={
            currentViewedCard.filter(i => i.id === -1).length === 0 ? (
              <Title>Rewards</Title>
            ) : null
          }
          showsVerticalScrollIndicator={true}
          keyExtractor={item => (item as Reward).reward_name.toString()}
          renderItem={({item}) => renderReward(item as Reward)}
          ItemSeparatorComponent={itemSeparatorComponent}
        />
      </CardListView>
    </WrapperView>
  );
};

export default WalletScreen;
