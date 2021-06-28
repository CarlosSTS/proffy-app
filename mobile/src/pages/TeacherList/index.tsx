import React, { useState } from "react";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { View, ScrollView, Text, TextInput } from "react-native";
import TeacherItem from "../../components/TeacherItem";
import styles from "./styles";
import PageHeader from "../../components/PageHeader";

import { Feather } from "@expo/vector-icons";
export default function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  function handleToggleFIlterVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }
  return (
    <View style={styles.container}>
      <PageHeader
        title="proffys Disponiveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFIlterVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matérias</Text>
            <TextInput style={styles.input} placeholder="Qual a matéria ?" />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}
