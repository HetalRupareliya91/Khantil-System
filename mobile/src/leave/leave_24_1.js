// Khantil System - Mobile :: Leave screen (PR 24, step 1)
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function LeaveScreen241() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.khantil.local/leave').then(r => r.json()).then(d => setData(d.data || []));
  }, []);
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Leave</Text>
      <FlatList data={data} keyExtractor={i => i.id} renderItem={({ item }) => <Text>{item.name || item.id}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 12 },
});
