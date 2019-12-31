import React from 'react';
import { connect } from 'react-redux';
import { Content, Button, Text, List, ListItem, Left, Thumbnail, Body, Right } from 'native-base';
import i18n from "../../i18n";
import {propertiesFetch} from "../../actions/PropertiesActions";

class PropertiesScreen extends React.Component {
    static navigationOptions = {
        title: i18n.t('landlord.yourProperties'),
    };

    componentWillMount() {
        this.props.propertiesFetch();
    }

    renderProperty(property) {
        return  <ListItem thumbnail key={property.id}>
            <Left>
                <Thumbnail square source={property.image} />
            </Left>
            <Body>
                <Text>{property.shortAddress}</Text>
                <Text note numberOfLines={1}>Tenant: {property.tenant.name}</Text>
            </Body>
            <Right>
                <Button transparent onPress={() =>
                this.props.navigation.push('Property', {
                    property: property
                })
                }>
                    <Text>View</Text>
                </Button>
            </Right>
        </ListItem>;
    }

    render() {
        return <Content>
            <List 
                dataArray={this.props.properties} 
                renderRow={this.renderProperty.bind(this)}
                keyExtractor={(item) => item.id}   
            />
        </Content>;
    }
}

const mapStateToProps = state => {
    const {loading, properties, unsubscribe} = state.properties;
    return {loading, properties, unsubscribe};
  };
  
  export default connect(mapStateToProps, {
    propertiesFetch
  })(PropertiesScreen);
  