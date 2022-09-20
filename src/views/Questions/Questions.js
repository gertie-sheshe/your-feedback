import React, { useEffect, useState } from "react";
import Text from "../../components/Text";
import MultiChoice from "../../components/MultiChoice";
import Scale from "../../components/Scale";
import questions from "./questionsData";
import QuestionTitle from "../../components/QuestionTitle";
import Section from "../../layout/Section";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

function Questions() {
  const { userid, questionid } = useParams();
  const [question, setQuestion] = useState(null);

  const fetchQuestion = (id) => {
    return questions.find((question) => question.id === id);
  };

  useEffect(() => {
    const currentQuestion = fetchQuestion(questionid);
    setQuestion(currentQuestion);
  }, [userid, questionid]);

  return (
    <Section>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {question?.label && <QuestionTitle title={question.label} />}
        {question?.type === "text" && <Text question={question} />}
        {question?.type === "multipleChoice" && (
          <MultiChoice question={question} />
        )}
        {question?.type === "scale" && <Scale question={question} />}
      </Grid>
    </Section>
  );
}

export default Questions;
