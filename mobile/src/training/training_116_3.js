// Khantil System - Mobile :: Training screen (PR 116, step 3)
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function TrainingScreen1163() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.khantil.local/training').then(r => r.json()).then(d => setData(d.data || []));
  }, []);
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Training</Text>
      <FlatList data={data} keyExtractor={i => i.id} renderItem={({ item }) => <Text>{item.name || item.id}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 12 },
});
