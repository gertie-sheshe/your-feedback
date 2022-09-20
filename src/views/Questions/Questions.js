import React, { useEffect, useState } from "react";
import Text from "../../components/Text";
import MultiChoice from "../../components/MultiChoice";
import Scale from "../../components/Scale";
import questions from "./questionsData";
import { useParams } from "react-router-dom";

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
    <div>
      {question?.type === "text" && <Text question={question} />}
      {question?.type === "multipleChoice" && (
        <MultiChoice question={question} />
      )}
      {question?.type === "scale" && <Scale question={question} />}
    </div>
  );
}

export default Questions;
