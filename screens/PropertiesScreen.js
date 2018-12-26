import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import i18n from '../i18n';
import {connect} from 'react-redux';
import {propertiesFetch} from "../actions/PropertiesActions";
import {Property} from "../components/properties/Property";


class PropertiesScreen extends React.Component {
  static navigationOptions = {
    title: i18n.t('general.rentalProperties'),
  };

  componentWillMount() {
    this.props.propertiesFetch();
  }

  componentWillUnmount() {
    this.props.unsubscribe();
  }

  renderLoading() {
    return (
      <View>
        <Text>Loading.</Text>
      </View>
    )
  }

  renderNoContent() {
    return (
      <View>
        <Text>No properties found.</Text>
      </View>
    )
  }

  renderList() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.properties}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
        />
      </View>
    );
  }

  _renderItem = ({item}) => (
    <Property
      property={item}
      onPress={() =>
        this.props.navigation.push('Property', {
          property: item
        })
      }
    />
  );

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    }

    if (this.props.properties.length === 0) {
      return this.renderNoContent();
    }

    return this.renderList();
  }
}

const mapStateToProps = state => {
  const {loading, properties, unsubscribe} = state.properties;
  return {loading, properties, unsubscribe};
};

export default connect(mapStateToProps, {
  propertiesFetch
})(PropertiesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
