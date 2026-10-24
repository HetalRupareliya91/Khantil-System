// Khantil System - Mobile :: Announcements screen (PR 60, step 2)
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function AnnouncementsScreen602() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.khantil.local/announcements').then(r => r.json()).then(d => setData(d.data || []));
  }, []);
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Announcements</Text>
      <FlatList data={data} keyExtractor={i => i.id} renderItem={({ item }) => <Text>{item.name || item.id}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 12 },
});
