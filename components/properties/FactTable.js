import React from 'react';
import {Left, Right, View, Text} from 'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';

export default class FactTable extends React.Component {
  renderRow(header, value) {
    return (
      <Row key={header}>
          <Col><Text>{header}</Text></Col>
          <Col><Text style={{textAlign: 'right'}}>{value}</Text></Col>
      </Row>
    );
  }

  render() {
    const data = {
      'Cooling': 'Central',
      'Pets': 'Cats, Small Dogs',
      'Laundry': 'In Unit',
      'Type': 'Single Family',
      'Heating': 'Central',
      'Parking': 'On Street'
    };
    let rows = [];
    for (let header in data) {
      rows.push(this.renderRow(header,data[header]));
    }

    return (
        <Grid>
            {rows}
        </Grid>
    );
  }
}
