import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import appStyles from '../styles';
import Picker from '../components/common/Picker';
import DatePicker from '../components/common/DatePicker';
import SectionHeader from './common/SectionHeader';

export default class CreateReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      date: null,
    };
  }

  render() {
    return (
      <View>
        <TextInput
          style={appStyles.input}
          placeholder="Local do assédio"
          onChangeText={company => this.setState({ company })}
          value={this.state.company}
        />
        <DatePicker
          date={this.state.date}
          placeholder="Quando ocorreu"
          maxDate={new Date(Date.now())}
          onDateChange={date => this.setState({ date })}
        />
        <Picker
          placeholder="O que aconteceu"
          items={[{
            value: 'moral',
            label: 'Assédio Moral',
          }, {
            value: 'sexual',
            label: 'Assédio Sexual',
          }, {
            value: 'other',
            label: 'Outro tipo de Assédio',
          }]}
        />
        <SectionHeader title="Sobre você" />
        <Picker
          placeholder="Gênero"
          items={[{
            value: 'woman',
            label: 'Mulher',
          }, {
            value: 'man',
            label: 'Homem',
          }, {
            value: 'nonbinary',
            label: 'Não binário',
          }]}
        />
        <Picker
          placeholder="Idade"
          items={[{
            value: 'lessThan18',
            label: 'Menor de 18 anos',
          }, {
            value: 'between18and25',
            label: 'Entre 18 e 25 anos',
          }, {
            value: 'between26and35',
            label: 'Entre 26 e 35 anos',
          }, {
            value: 'between36and50',
            label: 'Entre 36 e 50 anos',
          }, {
            value: 'between51and65',
            label: 'Entre 51 e 65 anos',
          }, {
            value: 'over66',
            label: 'Maior de 66 anos',
          }]}
        />
      </View>
    );
  }
}
