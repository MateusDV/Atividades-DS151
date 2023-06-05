import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import { readAll } from "../services/Aluno.js";

const Alunos = () => {
    const [alunos, setAlunos] = useState(null);

    async function getAlunos() {
        await readAll().then(rows => setAlunos(rows))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getAlunos();
    });

    if(alunos === null){
        return <Text>Alunos não encontrados!</Text>
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                {alunos.map(aluno => (
                    <View style={{ flexDirection: "row" }}>
                        <Text> {aluno.id} - {aluno.nome} - {aluno.media}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Alunos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
});
