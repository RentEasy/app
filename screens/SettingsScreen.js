import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {View} from 'react-native';
import {Button, Text} from 'native-base';
import i18n from "../i18n";
import {connect} from 'react-redux';
import {logout} from "../actions";

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  onPressLogout() {
    this.props.logout();
  }

  render() {
    return <View>
      <Button block light onPress={this.onPressLogout.bind(this)}>
        <Text>{i18n.t('logout')}</Text>
      </Button>
      <ExpoConfigView />
    </View>;
  }
}

const mapStateToProps = state => {
  const {loading, errorMessage} = state.login;
  return {loading, errorMessage};
};

export default connect(mapStateToProps, {logout})(SettingsScreen);
