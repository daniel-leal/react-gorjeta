import React, { Component } from "react";
import { StyleSheet, Alert } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";

export default class App extends Component {
  state = {
    valorConta: "",
    percentualGorjeta: ""
  };

  calcular = async () => {
    const valorConta = parseFloat(this.state.valorConta);
    const percentualGorjeta = parseFloat(this.state.percentualGorjeta);

    const result = (valorConta * (percentualGorjeta / 100)) + valorConta;

    const message = `R$${result}`

    Alert.alert(
      "Valor a Pagar",
      message,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  //#region Event Handlers
  handleValorContaChange = value => {
    this.setState({ valorConta: value });
  };

  handlePercentualGorjetaChange = value => {
    this.setState({ percentualGorjeta: value });
  };
  //#endregion

  render() {
    return (
      <Container>
        <Header noLeft>
          <Left />
          <Body>
            <Title>React-Gorjeta</Title>
          </Body>
          <Right />
        </Header>

        <Content style={styles.laterais}>
          <Form>
            <Item>
              <Input
                placeholder="Valor da Conta"
                value={this.state.valorConta}
                onChangeText={this.handleValorContaChange}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
              />
            </Item>
            <Item last>
              <Input
                placeholder="Percentual de Gorjeta (%)"
                value={this.state.percentualGorjeta}
                onChangeText={this.handlePercentualGorjetaChange}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
              />
            </Item>
          </Form>
        </Content>
        <Button full onPress={() => this.calcular()}>
          <Text>Calcular</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  laterais: {
    marginLeft: 10,
    marginRight: 10
  }
});
