import React, { useEffect, useState } from "react";
import Text from "../../components/Text";
import MultiChoice from "../../components/MultiChoice";
import Scale from "../../components/Scale";
import questions from "./questionsData";
import QuestionDetails from "../../components/QuestionDetails";
import Section from "../../layout/Section";
import ProgressBar from "../../components/ProgressBar";
import { useParams } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Link = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.secondary,
  border: "1px solid #000",
  borderRadius: "4px",
  padding: "10px",
  backgroundColor: "#000",
  width: "150px",
  textAlign: "center",
}));

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
        {question?.label && <QuestionDetails title={question.label} />}
        <Grid
          sx={{
            border: "1px solid #E5E5E5",
            borderRadius: "10px",
            padding: "20px",
            width: "60%",
            // height: "60vh",
          }}
        >
          {question?.type === "text" && <Text {...question} />}
          {question?.type === "multipleChoice" && <MultiChoice {...question} />}
          {question?.type === "scale" && <Scale {...question} />}
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "50px 0",
            }}
          >
            <Link to="user/1/question/q9">Previous</Link>
            <Button
              sx={{
                width: "150px",
              }}
              variant="secondary"
            >
              Skip
            </Button>
            <Link to={`user/1/question/q1`}>Next</Link>
          </Grid>
          <ProgressBar />
        </Grid>
      </Grid>
    </Section>
  );
}

export default Questions;
