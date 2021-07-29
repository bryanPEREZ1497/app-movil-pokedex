import React, { useContext, useEffect, useState } from "react";
import { View, Image, TextInput, StyleSheet } from "react-native";
import {
    Button,
    Text,
    Content,
    Container,
    List,
    ListItem,
    Body,
    Footer,
    FooterTab,
} from "native-base";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import FirebaseContext from "../../context/firebase/firebaseContext";
const productoMock = {
    nombre: 'asads',
    imagen: 'asd',
    categoria: 'asdas',
    descripcion: 'asas',
    precio: 98
}

export default ({ navigation }) => {
    const [item, setItem] = useState(productoMock)
    const [total, setTotal] = useState(0);
    const [cantidad, setCantidad] = useState(1);
    useEffect(() => {
        calcularTotal();
    }, [cantidad]);

    const sumar = () => {
        let nuevaCantidad = parseInt(cantidad + 1);
        setCantidad(nuevaCantidad);
    };

    const restar = () => {
        if (cantidad > 1) {
            let nuevaCantidad = parseInt(cantidad - 1);
            setCantidad(nuevaCantidad);
        }
    };

    const calcularTotal = () => {
        const nuevoTotal = item.precio * cantidad;
        setTotal(nuevoTotal);
    };

    const handleChange = (e) => {
        if (e < 1) {
            setCantidad(1);
        } else {
            setCantidad(e);
        }
    };

    return (
        <Container>
            <Content>
                {detallesplato && (
                    <View>
                        <Image style={{ height: 200 }} source={{ uri: imagen }} />
                        <Body>
                            <Text>Detalles Plato</Text>
                            <Text>{nombre}</Text>
                            <Text>{descripcion}</Text>
                            <Text note>{categoria}</Text>
                            <Text> $ {precio}</Text>
                            <Text>{total}</Text>
                        </Body>
                    </View>
                )}
            </Content>
            <View>
                <Button
                    full
                    success
                    onPress={() => {
                        const orden = {
                            ...detallesplato,
                            subtotal: total,
                            cantidad,
                        };

                        postOrden(orden);
                        navigation.navigate("Restaurant");
                    }}
                >
                    <Text>Ordenar</Text>
                </Button>
            </View>
            <Footer>
                <FooterTab>
                    <Button dark onPress={restar}>
                        <Ionicons name="remove" color="#fff" size={30} />
                    </Button>

                    <TextInput
                        style={styles.input}
                        value={cantidad.toString()}
                        placeholder="1"
                        keyboardType="numeric"
                        onChangeText={handleChange}
                    />
                    <Button dark onPress={sumar}>
                        <FontAwesome name="plus" color="#fff" size={20} />
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};

const styles = StyleSheet.create({
    input: {
        width: "30%",
        textAlign: "center",
        backgroundColor: "#fff",
        color: "#000",
    },
});