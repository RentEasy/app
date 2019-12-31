import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import i18n from '../i18n';

import TabBarIcon from '../components/TabBarIcon';
import ProfileScreen from '../screens/ProfileScreen';
import PropertiesScreen from '../screens/landlord/PropertiesScreen';
import PropertyScreen from '../screens/landlord/PropertyScreen';
import AddressScreen from '../screens/landlord/create/AddressScreen';
 
// const PropertiesStack = createStackNavigator({
//   Properties: PropertiesScreen,
//   Property: PropertyScreen,
// });

// PropertiesStack.navigationOptions = {
//   tabBarLabel: i18n.t('general.rentals'),
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
//     />
//   ),
// };


const CreatePropertyStack = createStackNavigator({
  AddressScreen: AddressScreen,
});

const LandlordStack = createStackNavigator({
  Properties: PropertiesScreen,
  Property: PropertyScreen,
  CreateProperty: CreatePropertyStack
});

LandlordStack.navigationOptions = {
  tabBarLabel: i18n.t('landlord.yourProperties'),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};



const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: i18n.t('general.profile'),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  LandlordStack,
  ProfileStack,
});
