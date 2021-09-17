import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const Tarefa = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemConteudo}>
                <View style={styles.quadrado}></View>

                <Text style={styles.textoItem}>{props.texto}</Text>
            </View>

            <View style={styles.circulo}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    itemConteudo: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: "wrap"
    },
    itemTexto: {
        maxWidth: '80%'
    },
    quadrado: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    circulo: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 60
    }
});

export default Tarefa;