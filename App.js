import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tarefa from './components/Tarefa';


export default function App() {
  const [tarefa, setTarefa] = useState();
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa) {
      Keyboard.dismiss();
      setTarefas([...tarefas, tarefa]);
      setTarefa(null);
    }
  };

  const completarTarefa = (index) => {
    setTarefas(tarefas.filter(el => el != tarefas[index]));
  };

  return (
    <View style={styles.conteudo}>
      <View style={styles.tarefas}>
        <Text style={styles.titulo}>Minhas Tarefas</Text>

        <View style={styles.itens}>
          {
            tarefas.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completarTarefa(index)}>
                  <Tarefa texto={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.formulario}
      >
        <TextInput style={styles.campoTexto}
          placeholder={'Write a Task'}
          value={tarefa || ''}
          onChangeText={text => setTarefa(text)}
        ></TextInput>

        <TouchableOpacity onPress={() => adicionarTarefa()}>
          <View style={styles.botaoAdicionar}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tarefas: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  itens: {
    paddingTop: 30
  },
  formulario: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  campoTexto: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },
  botaoAdicionar: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  }
});
