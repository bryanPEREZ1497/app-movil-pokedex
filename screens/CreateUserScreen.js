import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

const CreateUserScreen = () => {
    const initalState = {
        name: "",
        email: "",
        phone: "",
    };

    const [state, setState] = useState(initalState);
    handleChangeText = (name, value) => {
        setState({ ...state, [name]: value });
    }
    return (
        <ScrollView>
            <View>
                <TextInput placeholder="Name"
                    onChangeText={(value) => handleChangeText(value, "name")} />
            </View>
            <View>
                <TextInput placeholder="Emai"
                    onChangeText={(value) => handleChangeText(value, "email")} />
            </View>
            <View>
                <TextInput placeholder="Phone"
                    onChangeText={(value) => handleChangeText(value, "phone")} />
            </View>
            <View>
                <Button title="Save User" onPress={handleOnPress} />
            </View>
        </ScrollView>
    )
}

export default CreateUserScreen