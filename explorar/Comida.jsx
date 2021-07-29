import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
const localesMock = [
    {
        nombre: 'AASDASD',
        categoria: 'SADFSDF',
        precio: 12,
        id: 'ASDF'
    },
    {
        nombre: 'FGHFGH',
        categoria: 'GHGH',
        id: '4334SD',
        precio: 12,
    },
    {
        nombre: 'SDFSFRE',
        precio: 12,

        categoria: 'DFGDFGY6',
        id: '435GGGT45'
    },
    {
        nombre: 'AASDASD',
        precio: 12,

        categoria: 'SADFSDF',
        id: '332ASDF'
    },
    {
        nombre: 'FGHFGH',
        precio: 12,

        categoria: 'GHGH',
        id: '43323234SD'
    },
    {
        nombre: 'SDFSFRE',
        precio: 12,

        categoria: 'DFGDFGY6',
        id: '435GGGT233245'
    }
];
export default () => {
    const [menu, setMenu] = useState(menuMock)
    return (

        <View style={styles.container}>
            <ScrollView>
                {menu.map((item) => {
                    return (
                        <ListItem
                            key={item.id}
                            bottomDivider
                            onPress={() => {
                                console.log(item)
                            }}
                        >
                            <ListItem.Chevron />
                            <Avatar
                                source={{
                                    uri:
                                        "https://picsum.photos/200",
                                }}
                                rounded
                            />
                            <ListItem.Content>
                                <ListItem.Title>{item.nombre}</ListItem.Title>
                                <ListItem.Subtitle>{item.precio}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}

            </ScrollView>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});