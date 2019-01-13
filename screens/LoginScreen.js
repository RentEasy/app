import React from 'react';
import {connect} from 'react-redux';
import {login, loginUser} from '../actions';
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {Button, Text, Content} from 'native-base';
import i18n from "../i18n";
import {FirebaseService} from "../services";


class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onPressButton() {
    this.props.login();
  }

  onPressFacebook() {
    this.props.login('facebook');
  }

  onPressGoogle() {
    this.props.login('google');
  }

  onPressEmail() {
    this.props.login('email');
  }

  componentWillMount() {
    FirebaseService.waitForLogin().then(user => this.props.loginUser(user));
  }

  renderLoading() {
    return <View><ActivityIndicator size="large"/></View>
  }

  renderLogin() {
    return <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')}
             style={{flexGrow: 2, width: '100%', height: '100%'}}
             resizeMode="contain"/>
      <View style={styles.buttonContainer}>
        <Button block onPress={this.onPressFacebook.bind(this)} style={styles.button}>
          <Text>{i18n.t('login.facebook')}</Text>
        </Button>
        <Button block onPress={this.onPressGoogle.bind(this)} style={styles.button}>
          <Text>{i18n.t('login.google')}</Text>
        </Button>
        <Button block light onPress={this.onPressEmail.bind(this)} style={styles.button}>
          <Text>{i18n.t('login.email')}</Text>
        </Button>
      </View>
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

export default connect(mapStateToProps, {login, loginUser})(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#b6d5e1',
    paddingTop: '60%'
  },
  buttonContainer: {
    flexGrow: 2,
    paddingLeft: 50,
    paddingRight: 50
  },
  button: {
    marginBottom: 10
  }
});