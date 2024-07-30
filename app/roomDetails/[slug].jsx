// // app/roomDetails/[slug].jsx
// import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'expo-router';

// const RoomDetails = () => {
//     const { slug } = useParams();  // Dynamic slug parameter
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchRoomDetails = async () => {
//             try {
//                 const response = await fetch(`https://api.hamrorooms.com/api/v1/upload/singleRoom/${slug}`);
//                 const data = await response.json();
//                 if (data.success) {
//                     setRoom(data.singleRoom);
//                 } else {
//                     console.error("Error fetching room details:", data.message);
//                 }
//             } catch (error) {
//                 console.error("Error fetching room details:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchRoomDetails();
//     }, [slug]);

//     if (loading) {
//         return <Text>Loading...</Text>;
//     }

//     if (!room) {
//         return <Text>Room not found.</Text>;
//     }

//     return (
//         <ScrollView style={styles.container}>
//             <Image source={{ uri: room.imageUrl }} style={styles.image} />
//             <Text style={styles.title}>{room.address}</Text>
//             <Text style={styles.price}>Price: ${room.rent}</Text>
//             <Text style={styles.city}>City: {room.city.name}</Text>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     image: {
//         width: '100%',
//         height: 200,
//         resizeMode: 'cover',
//         marginBottom: 16,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     price: {
//         fontSize: 20,
//         color: 'green',
//     },
//     city: {
//         fontSize: 16,
//         color: 'gray',
//     },
// });

// export default RoomDetails;
