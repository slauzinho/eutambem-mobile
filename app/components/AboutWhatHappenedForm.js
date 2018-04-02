import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import appStyles from '../styles';

import { Button, Picker, DatePicker, TextInput, CheckBoxGroup, PlaceInput } from './common';

import { HARASSMENT_TYPE_OPTIONS,
  YES_NO_OPTIONAL_OPTIONS,
  MAX_TEXT_INPUT_LENGTH,
  FOLLOWUP_ACTIONS_OPTIONS } from '../constants';

export default class CreateReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      description: '',
      advice: '',
      establishment: {},
    };
  }

  onEstablishmentChange = (item) => {
    this.setState({ establishment: { value: item.id, label: item.label } });
  }

  render() {
    return (
      <View>
        <PlaceInput
          placeholder="Empresa em que ocorreu"
          value={this.state.establishment.label}
          onValueChange={this.onEstablishmentChange}
          types={['establishment']}
          navigation={this.props.navigation}
          required
          placeScreenTitle="Informe a Empresa"
        />
        <Picker
          required
          placeholder="Tipo de assédio"
          items={HARASSMENT_TYPE_OPTIONS}
        />
        <TextInput
          multiline
          required
          placeholder="Conte-nos mais sobre o ocorrido"
          onChangeText={description => this.setState({ description })}
          value={this.state.description}
        />
        <DatePicker
          date={this.state.date}
          required
          placeholder="Quando ocorreu"
          maxDate={new Date(Date.now())}
          onDateChange={date => this.setState({ date })}
        />
        <CheckBoxGroup
          label="Você tomou alguma providência com relação ao ocorrido?"
          options={FOLLOWUP_ACTIONS_OPTIONS}
        />
        <Picker
          required
          placeholder="Você recomendaria essa empresa depois do ocorrido?"
          items={YES_NO_OPTIONAL_OPTIONS}
        />
        <TextInput
          style={[appStyles.input, appStyles.multilineInput]}
          multiline
          autoGrow
          maxLength={MAX_TEXT_INPUT_LENGTH}
          placeholder="Qual seu conselho para os gestores?"
          onChangeText={advice => this.setState({ advice })}
          value={this.state.advice}
        />
        <Button
          onPress={() => this.props.navigation.navigate('AboutYou')}
          title="Prosseguir"
        />
      </View>
    );
  }
}

CreateReportForm.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func,
  }).isRequired,
};