import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

interface ListItem {
  id: string;
  title: string;
}

const MapLists = () => {
    const mapData = useSelector((state:any) => state.maps.savedMaps);
    console.log(mapData)

  const renderItem = ({ item }: { item: ListItem }) => (

    <TouchableOpacity 
    onPress={() => {
        console.log(item)
    }}
    style={[styles.item, {
        width:mapData.length > 1 ? "45%" : "90%",
    }]}>
      <Text style={styles.title}>{item?.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <View style={styles.listContainer}>
        <FlatList
        data={mapData}
        numColumns={2}
        horizontal={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF',
    },
    listContainer: {
    flex: 1,
    marginTop:30,
    backgroundColor: '#FFF',
    // paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
  },
  item: {
    backgroundColor: '#ADD8E6',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 6,
    borderRadius: 25,
    
    alignSelf:'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 16,
  },
});

export default MapLists;