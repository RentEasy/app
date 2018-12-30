import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';
import {View, Button, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import i18n from "../i18n";


class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onPressButton() {
    this.props.login();
  }

  renderLoading() {
    return <View><ActivityIndicator size="large" /></View>
  }

  renderLogin() {
    return <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')}
             style={{ width: '100%', height: 400 }}
             resizeMode="contain" />
      <Button title={i18n.t('login.facebook')} onPress={this.onPressButton.bind(this)} />
      <Button title={i18n.t('login.google')} onPress={() => {}} />
      <Button title={i18n.t('login.email')} onPress={() => {}} />
    </View>
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    }

    return this.renderLogin();
  }

}

const mapStateToProps = state => {
  const {loading, errorMessage} = state.login;
  return {loading, errorMessage};
};

export default connect(mapStateToProps, {login})(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6d5e1',
    paddingTop: '60%'
  },
});