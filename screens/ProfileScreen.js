import React from 'react';
import {connect} from 'react-redux';
import {Content, Button, Text, List, ListItem, Separator} from 'native-base';
import i18n from "../i18n";
import {logout} from "../actions";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Profile',
  };

  onPressLogout() {
    this.props.logout();
  }

  onPressListProperty() {
    this.props.navigation.push('CreateProperty');
  }

  render() {
    return <Content>
        <Separator bordered>
            <Text>{i18n.t('general.account')}</Text>
        </Separator>
        <ListItem button onPress={this.onPressLogout.bind(this)}>
            <Text>{i18n.t('login.logout')}</Text>
        </ListItem>

        <Separator bordered>
            <Text>{i18n.t('general.tenant')}</Text>
        </Separator>
        <ListItem button onPress={this.onPressListProperty.bind(this)}>
            <Text>{i18n.t('tenant.renterProfile')}</Text>
        </ListItem>

        <Separator bordered>
            <Text>{i18n.t('general.landlord')}</Text>
        </Separator>
        <ListItem button onPress={this.onPressListProperty.bind(this)}>
            <Text>{i18n.t('landlord.createProperty')}</Text>
        </ListItem>
    </Content>;
  }
}

const mapStateToProps = state => {
  const {loading, errorMessage} = state.login;
  return {loading, errorMessage};
};

export default connect(mapStateToProps, {logout})(ProfileScreen);
