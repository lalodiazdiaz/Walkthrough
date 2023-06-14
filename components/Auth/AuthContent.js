import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AuthContent({ isLogin, onAuthenticate }) {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail
  });

  
  return (
    <View>
      <Text>AuthContent</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
