import React from "react";
import { View, ScrollView } from "react-native";
import TeacherItem from "../../components/TeacherItem";
import styles from "./styles";
import PageHeader from "../../components/PageHeader";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys Favoritos" />

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
