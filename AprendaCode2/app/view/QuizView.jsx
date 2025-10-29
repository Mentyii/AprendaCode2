// app/view/QuizView.jsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import QuizService from "../services/QuizServices";

export default function QuizView() {
  const quiz = QuizService.getQuizByLanguage("JavaScript");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Quiz de {quiz.language}
      </Text>
      {quiz.questions.map((q, i) => (
        <View key={i} style={{ marginVertical: 15 }}>
          <Text style={{ fontSize: 18 }}>{q.question}</Text>
          {q.options.map((opt, j) => (
            <TouchableOpacity key={j}>
              <Text style={{ padding: 4 }}>• {opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}