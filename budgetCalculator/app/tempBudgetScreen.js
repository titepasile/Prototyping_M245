import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BudgetCalculatorScreen = () => {
  const [einkommen, setEinkommen] = useState('');
  const [miete, setMiete] = useState('');
  const [strom, setStrom] = useState('');
  const [essen, setEssen] = useState('');
  const [output, setOutput] = useState('');

  const berechneBudget = () => {
    const einkommenValue = parseFloat(einkommen);
    const mieteValue = parseFloat(miete);
    const stromValue = parseFloat(strom);
    const essenValue = parseFloat(essen);

    if (!isNaN(einkommenValue) && !isNaN(mieteValue) && !isNaN(stromValue) && !isNaN(essenValue)) {
      const ergebnis = einkommenValue - mieteValue - stromValue - essenValue;
      setOutput(ergebnis.toFixed(2).toString());
    } else {
      setOutput('Ungültige Eingabe');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Einkommen:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEinkommen}
        value={einkommen}
        keyboardType="numeric"
      />
      <Text>Miete:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setMiete}
        value={miete}
        keyboardType="numeric"
      />
      <Text>Strom:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setStrom}
        value={strom}
        keyboardType="numeric"
      />
      <Text>Essen:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEssen}
        value={essen}
        keyboardType="numeric"
      />
      <Button title="Berechnen" onPress={berechneBudget} />
      <Text>Ergebnis: {output}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default BudgetCalculatorScreen;
