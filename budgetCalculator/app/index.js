import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function BudgetCalculatorScreen() {
  const insets = useSafeAreaInsets();

  const [einkommen, setEinkommen] = useState('');
  const [miete, setMiete] = useState('');
  const [strom, setStrom] = useState('');
  const [versicherung, setVersicherung] = useState('');
  const [haustierkosten, setHaustierkosten] = useState('');
  const [abos, setAbos] = useState('');

  const [altersvorsorge, setAltersvorsorge] = useState('');
  const [spargeld, setSpargeld] = useState('');
  const [output, setOutput] = useState('');

  const berechneBudget = () => {
    const einkommenValue = parseFloat(einkommen);
    const mieteValue = parseFloat(miete);
    const stromValue = parseFloat(strom);
    const versicherungValue = parseFloat(versicherung);
    const haustierkostenValue = parseFloat(haustierkosten);
    const abosValue = parseFloat(abos);

    const altersvorsorgeValue = einkommenValue * 0.1; 
    const spargeldValue = einkommenValue * 0.1; 

    if (!isNaN(einkommenValue) && !isNaN(mieteValue) && !isNaN(stromValue) && !isNaN(versicherungValue) && !isNaN(haustierkostenValue)) {
      const ergebnis = einkommenValue - mieteValue - stromValue - versicherungValue - haustierkostenValue - abosValue - altersvorsorgeValue - spargeldValue;
      setAltersvorsorge(altersvorsorgeValue.toFixed(2).toString());
      setSpargeld(spargeldValue.toFixed(2).toString());
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
      <title>Ausgaben</title>
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
      <Text>Versicherung:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setVersicherung}
        value={versicherung}
        keyboardType="numeric"
      />
      <Text>Haustierkosten:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setHaustierkosten}
        value={haustierkosten}
        keyboardType="numeric"
      />
      <Text>Abonements:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAbos}
        value={abos}
        keyboardType="numeric"
      />
      <title>Sparen</title>
      <Text>Altersvorsorge: Wird automatisch berechnet</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAltersvorsorge}
        value={altersvorsorge}
        keyboardType="numeric"
      />
      <Text>Spargeld: Wird automatisch berechnet</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSpargeld}
        value={spargeld}
        keyboardType="numeric"
      />
      <Button title="Berechnen" onPress={berechneBudget} />
      <Text>Ergebnis: {output}</Text>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <BudgetCalculatorScreen/>
    </SafeAreaProvider>
  );
}

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
