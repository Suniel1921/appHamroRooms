// import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
// import React, { useEffect, useState } from 'react';

// const Home = () => {
//   const [roomList, setRoomList] = useState([]);

//   const getAllRooms = async () => {
//     try {
//       const response = await fetch('https://api.hamrorooms.com/api/v1/upload/getAllRoom');
//       const data = await response.json();
//       console.log(data);
//       if (data.success) {
//         setRoomList(data.allRoom);
//       }
//     } catch (error) {
//       console.error('Error fetching room data:', error);
//     }
//   };

//   useEffect(() => {
//     getAllRooms();
//   }, []);

//   return (
//     <ScrollView style={styles.container}>
//       {roomList.length > 0 ? (
//         roomList.map((room) => (
//           <View key={room._id} style={styles.roomContainer}>
//             {room.images.length > 0 && (
//               <Image 
//                 source={{ uri: room.images[0] }} 
//                 style={styles.roomImage} 
//               />
//             )}
//             <Text style={styles.roomAddress}>{room.address}</Text>
//             <Text style={styles.roomPrice}>Price: ${room.rent}</Text>
//           </View>
//         ))
//       ) : (
//         <Text>No rooms available</Text>
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   roomContainer: {
//     marginBottom: 20,
//   },
//   roomImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//     marginBottom: 10,
//   },
//   roomAddress: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   roomPrice: {
//     fontSize: 14,
//     color: 'green',
//   },
// });

// export default Home;




// using flatlist

// import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
// import React, { useEffect, useState } from 'react';

// const Home = () => {
//   const [roomList, setRoomList] = useState([]);

//   const getAllRooms = async () => {
//     try {
//       const response = await fetch('https://api.hamrorooms.com/api/v1/upload/getAllRoom');
//       const data = await response.json();
//       if (data.success) {
//         setRoomList(data.allRoom);
//       }
//     } catch (error) {
//       console.error('Error fetching room data:', error);
//     }
//   };

//   useEffect(() => {
//     getAllRooms();
//   }, []);

//   // Render function for each item
//   const renderItem = ({ item }) => (
//     <View style={styles.roomContainer}>
//       {item.images.length > 0 && (
//         <Image 
//           source={{ uri: item.images[0] }} 
//           style={styles.roomImage} 
//         />
//       )}
//       <Text style={styles.roomAddress}>{item.address}</Text>
//       <Text style={styles.roomPrice}>Price: ${item.rent}</Text>
//     </View>
//   );

//   return (
//     <FlatList
//       data={roomList}
//       renderItem={renderItem}
//       keyExtractor={(item) => item._id}
//       contentContainerStyle={styles.container}
//       ListEmptyComponent={<Text>No rooms available</Text>}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 16,
//   },
//   roomContainer: {
//     marginBottom: 20,
//   },
//   roomImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//     marginBottom: 10,
//   },
//   roomAddress: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   roomPrice: {
//     fontSize: 14,
//     color: 'green',
//   },
// });

// export default Home;






// with refresh functionality

import { View, Text, Image, FlatList, StyleSheet, RefreshControl } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';

const Home = () => {
  const [roomList, setRoomList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getAllRooms = async () => {
    try {
      const response = await fetch('https://api.hamrorooms.com/api/v1/upload/getAllRoom');
      const data = await response.json();
      if (data.success) {
        setRoomList(data.allRoom);
      }
    } catch (error) {
      console.error('Error fetching room data:', error);
    } finally {
      setRefreshing(false); // Ensure refreshing state is reset when done
    }
  };

  useEffect(() => {
    getAllRooms();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getAllRooms();
  }, []);

  // Render function for each item
  const renderItem = ({ item }) => (
    <View style={styles.roomContainer}>
      {item.images.length > 0 && (
        <Image 
          source={{ uri: item.images[0] }} 
          style={styles.roomImage} 
        />
      )}
      <Text style={styles.roomAddress}>{item.address}</Text>
      <Text style={styles.roomPrice}>Price: ${item.rent}</Text>
      <Text style={styles.roomCity}>City: {item.city.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={roomList}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      contentContainerStyle={styles.container}
      ListEmptyComponent={<Text>No rooms available</Text>}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  roomContainer: {
    marginBottom: 20,
  },
  roomImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  roomAddress: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roomPrice: {
    fontSize: 14,
    color: 'green',
  },
});

export default Home;
