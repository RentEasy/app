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
    
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <Content padder>
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
            <Text>{i18n.t('landlord.listProperty')}</Text>
        </ListItem>
    </Content>;
  }
}

const mapStateToProps = state => {
  const {loading, errorMessage} = state.login;
  return {loading, errorMessage};
};

export default connect(mapStateToProps, {logout})(ProfileScreen);
