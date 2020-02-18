import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import externalStyle from './src/styles/style';

const App = () => {
  return (
    <Provider store={store}>
      <WrapperLearnAxios />
    </Provider>
  );
};

export default App;

const initialState = {
  firstName: 'John',
  secondName: 'Johnson',
};

const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';

const changeFirstName = newFirstName => {
  console.log('newFirstName', newFirstName);
  return {
    type: ACTION_CHANGE_FIRST_NAME,
    payload: newFirstName,
  };
};

const changeSecondName = newSecondName => {
  return {
    type: ACTION_CHANGE_SECOND_NAME,
    payload: newSecondName,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return {...state, firstName: action.payload};

    case ACTION_CHANGE_SECOND_NAME:
      return {...state, secondName: action.payload};
  }
  return state;
};

const store = createStore(rootReducer);

class Learn extends Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <View style={externalStyle.Center}>
        <TextInput
          style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChange={event => {
            dispatch(changeFirstName(event.target.value));
          }}
          value={this.props.firstName}
        />
        <TextInput
          style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChange={event => {
            dispatch(changeSecondName(event.target.value));
          }}
          value={this.props.secondName}
        />
        <Text>{this.props.firstName + '  ' + this.props.secondName}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstName: state.firstName,
    secondName: state.secondName,
  };
};

const WrapperLearnAxios = connect(mapStateToProps)(Learn);
