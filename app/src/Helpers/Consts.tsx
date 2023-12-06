import { Card, Reward } from '../types/CardType';

const AuthErrorMessages = {
  invalidEmail: 'Invalid Email',
  invalidPassword:
    'Invalid Password\n*Must be at least 12 characters\n*Must contain an uppercase and lowercase letter\n*Must contain a number\n*Must contain a special character',
  passwordsDoNotMatch: 'Passwords Do Not Match',
  userAlreadyExists: 'User Already Exists',
  userNotFound: 'User Not Found\nEither Email or Password is Incorrect',
  errorCreatingUser: 'Error Creating User',
  tooManyAttepts:
    'Too Many Attempts\nCheck Your Email for Further Instructions',
  invalidCode:
    'The code is not correct\nEither your email is not correct or you entered an invalid code',
  errorChangingPassword: 'Error Changing Password',
  sentRestEmail: 'Check Your Email for Further Instructions',
  invalidToken: 'Invalid Token\nPlease Contact Support',
  invalidCardName:
    'Invalid  Card Name\nName must be more then 10 characters\nName must only contain letters',
  invalidCardBin: 'Invalid Card Number\nMust be 6 digits',
  invalidBankName:
    'Invalid Bank Name\nWe do not support that bank at this time!',
  invalidDropdownOption: 'Invalid Dropdown Option',
  invalidCardLevel: 'Invalid Card Level\nName must be more then 3 characters',
  invalidCardType: 'Invalid Card Type\nThe type must be either Credit or Debit',
  undefined: 'Request failed, please try again later or contact support!',
  invalidUsername:
    'Invalid Username\nUsername must be more then 3 characters\nUsername must only contain letters',
  invalidPhone:
    'Invalid Phone Number\nMust be 10 digits in any acceptable phone number format',
  errorUpdatingUser: 'Error Updating User',
  notVerified: 'Email Not Verified\nPlease Verify Your Email',
  verifyEmail:
    'Successfully Signed Up\nPlease Check Your Email to Verify Your Account',
  addUsername:
    'Your Username was Not Saved\nPlease Add a Username and Try Again',
  errorGettingUser: 'Error Getting User',
};

enum CardFormEnum {
  Search = 0,
  Full = 1,
  Review = 2,
  Rewards = 3,
  AddOption = 4,
  Off = 5,
}

const DropdownListModes = {
  DEFAULT: 'DEFAULT',
  FLATLIST: 'FLATLIST',
  SCROLLVIEW: 'SCROLLVIEW',
  MODAL: 'MODAL',
};

const addCard: Card = {
  card_name: 'Add',
  id: -1,
  card_bin: 0o0,
};

//Dummy Data for development
const dummyCards: Card[] = [
  {
    id: 1,
    card_bin: 123456,
    card_name: 'BofA Cash Back Rewards',
    card_bank_name: 'Bank of America',
    exp_date: '12/24',
    card_brand_name: 'Visa',
    card_level: 'Freedom Unlimited',
    card_type: 'Credit',
  },
  {
    id: 2,
    card_bin: 234567,
    card_name: 'Chase Freedom Unlimited',
    card_bank_name: 'Chase',
    exp_date: '11/25',
    card_brand_name: 'MasterCard',
    card_level: 'Freedom Unlimited',
    card_type: 'Credit',
  },
];

const dummyProfile = {
  //Need to change this with an api call
  id: 1,
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  username: 'johndoe',
  phone: '1234567890',
  address: '1234 Main St',
  city: 'Anytown',
  state: 'CA',
  zip: '12345',
  subscribed: true,
  cards: dummyCards,
  //password: 'JohnDoe1234!',
};

const dummyCardRewards: Reward[] = [];

const cardItemSeparatorWidth = 48;

const devLocations = [
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'Budget Blinds' },
    distance: 0.23,
    id: '0',
    location: { latitude: 37.4205241, longitude: -122.08169219999998 },
    primaryType: 'store',
    primaryTypeDisplayName: { languageCode: 'en-US', text: 'Store' },
    types: ['point_of_interest', 'store', 'establishment'],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'Google Store Mountain View' },
    distance: 0.25,
    id: '1',
    location: { latitude: 37.42178760000001, longitude: -122.08062430000001 },
    primaryType: 'electronics_store',
    primaryTypeDisplayName: {
      languageCode: 'en-US',
      text: 'Electronics Store',
    },
    types: ['electronics_store', 'point_of_interest', 'store', 'establishment'],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'Exotic Silks' },
    distance: 0.43,
    id: '2',
    location: { latitude: 37.4185059, longitude: -122.09075889999998 },
    primaryType: 'home_goods_store',
    primaryTypeDisplayName: { languageCode: 'en-US', text: 'Home Goods Store' },
    types: ['home_goods_store', 'point_of_interest', 'store', 'establishment'],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'Thai Silks' },
    distance: 0.43,
    id: '3',
    location: { latitude: 37.418344, longitude: -122.09072940000001 },
    primaryType: 'home_goods_store',
    primaryTypeDisplayName: { languageCode: 'en-US', text: 'Home Goods Store' },
    types: ['home_goods_store', 'point_of_interest', 'store', 'establishment'],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: "Kevin's Auto Repair" },
    distance: 0.44,
    id: '4',
    location: { latitude: 37.419160999999995, longitude: -122.09162500000001 },
    primaryType: 'car_repair',
    primaryTypeDisplayName: {
      languageCode: 'en-US',
      text: 'Car Repair and Maintenance',
    },
    types: ['car_repair', 'point_of_interest', 'establishment'],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'Aid Mailing & Fulfillment' },
    distance: 0.44,
    id: '5',
    location: { latitude: 37.4193789, longitude: -122.09194879999998 },
    primaryType: 'courier_service',
    primaryTypeDisplayName: { languageCode: 'en-US', text: 'Courier Service' },
    types: [
      'consultant',
      'courier_service',
      'point_of_interest',
      'store',
      'establishment',
    ],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'Shelton Roofing Co Inc' },
    distance: 0.44,
    id: '6',
    location: { latitude: 37.419397, longitude: -122.09196310000002 },
    primaryType: 'roofing_contractor',
    primaryTypeDisplayName: {
      languageCode: 'en-US',
      text: 'Roofing Contractor',
    },
    types: [
      'roofing_contractor',
      'point_of_interest',
      'store',
      'establishment',
    ],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'In-N-Out Burger' },
    distance: 0.47,
    id: '7',
    location: { latitude: 37.420941, longitude: -122.09335289999999 },
    primaryType: 'hamburger_restaurant',
    primaryTypeDisplayName: {
      languageCode: 'en-US',
      text: 'Hamburger Restaurant',
    },
    types: [
      'hamburger_restaurant',
      'fast_food_restaurant',
      'american_restaurant',
      'restaurant',
      'point_of_interest',
      'food',
      'establishment',
    ],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'Fusion Technology' },
    distance: 0.48,
    id: '8',
    location: { latitude: 37.416354999999996, longitude: -122.08129079999998 },
    primaryType: 'store',
    primaryTypeDisplayName: { languageCode: 'en-US', text: 'Store' },
    types: ['point_of_interest', 'store', 'establishment'],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: "McDonald's" },
    distance: 0.53,
    id: '9',
    location: { latitude: 37.4194009, longitude: -122.09365009999999 },
    primaryType: 'fast_food_restaurant',
    primaryTypeDisplayName: {
      languageCode: 'en-US',
      text: 'Fast Food Restaurant',
    },
    types: [
      'fast_food_restaurant',
      'hamburger_restaurant',
      'sandwich_shop',
      'coffee_shop',
      'breakfast_restaurant',
      'cafe',
      'american_restaurant',
      'restaurant',
      'point_of_interest',
      'store',
      'food',
      'establishment',
    ],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'Hon Sushi' },
    distance: 0.54,
    id: '10',
    location: { latitude: 37.416315499999996, longitude: -122.0794109 },
    primaryType: 'sushi_restaurant',
    primaryTypeDisplayName: { languageCode: 'en-US', text: 'Sushi Restaurant' },
    types: [
      'sushi_restaurant',
      'japanese_restaurant',
      'restaurant',
      'point_of_interest',
      'food',
      'establishment',
    ],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: "Zareen's" },
    distance: 0.54,
    id: '11',
    location: { latitude: 37.4162147, longitude: -122.07953139999998 },
    primaryType: 'restaurant',
    primaryTypeDisplayName: { languageCode: 'en-US', text: 'Restaurant' },
    types: [
      'indian_restaurant',
      'restaurant',
      'point_of_interest',
      'food',
      'establishment',
    ],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'Michaels Restaurant' },
    distance: 0.54,
    id: '12',
    location: { latitude: 37.430406399999995, longitude: -122.08598119999999 },
    primaryType: 'american_restaurant',
    primaryTypeDisplayName: {
      languageCode: 'en-US',
      text: 'American Restaurant',
    },
    types: [
      'american_restaurant',
      'wedding_venue',
      'event_venue',
      'restaurant',
      'bar',
      'point_of_interest',
      'food',
      'establishment',
    ],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'Costco Tire Center' },
    distance: 0.55,
    id: '13',
    location: { latitude: 37.4211354, longitude: -122.0948975 },
    primaryType: 'auto_parts_store',
    primaryTypeDisplayName: { languageCode: 'en-US', text: 'Auto Parts Store' },
    types: [
      'auto_parts_store',
      'car_repair',
      'point_of_interest',
      'store',
      'establishment',
    ],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'Pichanga Pumping Service' },
    distance: 0.56,
    id: '14',
    location: { latitude: 37.4176676, longitude: -122.09290279999999 },
    primaryTypeDisplayName: { lang: 'en-US', text: 'Car Repair' },
    types: ['car_repair', 'point_of_interest', 'establishment'],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: {
      languageCode: 'en',
      text: 'Heartwood Window and Door, Inc.',
    },
    distance: 0.56,
    id: '15',
    location: { latitude: 37.418606, longitude: -122.09374400000002 },
    primaryTypeDisplayName: { lang: 'en-US', text: 'Point Of Interest ' },
    types: ['point_of_interest', 'store', 'establishment'],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'Autobahn Motorsport Haus' },
    distance: 0.56,
    id: '16',
    location: { latitude: 37.414732199999996, longitude: -122.08707319999999 },
    primaryType: 'car_repair',
    primaryTypeDisplayName: {
      languageCode: 'en-US',
      text: 'Car Repair and Maintenance',
    },
    types: [
      'auto_parts_store',
      'car_repair',
      'point_of_interest',
      'store',
      'establishment',
    ],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'All Automotive' },
    distance: 0.56,
    id: '17',
    location: { latitude: 37.414732199999996, longitude: -122.08707319999999 },
    primaryType: 'car_repair',
    primaryTypeDisplayName: {
      languageCode: 'en-US',
      text: 'Car Repair and Maintenance',
    },
    types: ['car_repair', 'point_of_interest', 'establishment'],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'Mountain View Auto Interiors' },
    distance: 0.56,
    id: '18',
    location: { latitude: 37.414732199999996, longitude: -122.08707319999999 },
    primaryType: 'furniture_store',
    primaryTypeDisplayName: { languageCode: 'en-US', text: 'Furniture Store' },
    types: [
      'furniture_store',
      'home_improvement_store',
      'home_goods_store',
      'car_repair',
      'point_of_interest',
      'store',
      'establishment',
    ],
  },
  {
    businessStatus: 'OPERATIONAL',
    displayName: { languageCode: 'en', text: 'AA Motorworks' },
    distance: 0.56,
    id: '19',
    location: { latitude: 37.414733399999996, longitude: -122.0871177 },
    primaryType: 'car_repair',
    primaryTypeDisplayName: {
      languageCode: 'en-US',
      text: 'Car Repair and Maintenance',
    },
    types: ['car_repair', 'point_of_interest', 'establishment'],
  },
];

const Consts = {
  CardFormEnum: CardFormEnum,
  DropdownListModes: DropdownListModes,
  authErrorMessages: AuthErrorMessages,
  dummyProfile: dummyProfile,
  dummyCards: dummyCards,
  dummyCardRewards: dummyCardRewards,
  cardItemSeparatorWidth,
  addCard,
  devLocations,
};

export default Consts;
