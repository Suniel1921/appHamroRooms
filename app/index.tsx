import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Image
        source={{ uri: 'https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?t=st=1722306083~exp=1722309683~hmac=5071981a3d574bfb0fd3047fc3f9dd5087ff93cb70cc6728e4358d0ff6c734d1&w=740' }}
        style={{ width: '90%', height: 400 , resizeMode: 'cover'}}
      />
      <Link  style={{marginTop: 29, backgroundColor: '#7271f9', width: 300, height:55, padding: 10, alignItems: 'center', textAlign: 'center', color: '#fff'}} href={'/home'}>Let's Get Started</Link>
    </View>
  );
}
