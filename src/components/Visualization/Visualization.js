import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Visualization = ({ data, selectedQuestion }) => {
  const questions = [
    'Are you familiar with the term "violence against women"?',
    "Have you ever witnessed or experienced any form of violence against women?",
    "Before this survey, were you aware that all of these actions could be considered forms of violence against women?",
    // Add more questions as needed
  ];

  const chartsData = questions.map((question) => ({
    question,
    data: prepareChartData(data, question),
  }));

  return (
    <div className="visualization">
      {chartsData.map((chart, index) => (
        <Accordion key={index} defaultExpanded={index === 0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{chart.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Paper elevation={3} sx={{ p: 2 }}>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart width={500} height={300} data={chart.data}>
                  <XAxis dataKey="response" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar
                    barSize={100}
                    dataKey="count"
                    strokeWidth={1}
                    fill="rgba(153, 102, 255, 0.6)"
                    stroke="rgba(153, 102, 255, 1)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

// Helper function to prepare data for each chart
const prepareChartData = (data, question) => {
  const counts = {};
  data.forEach((item) => {
    const response = item[question];
    if (Array.isArray(response)) {
      // For questions where multiple options can be selected
      response.forEach((res) => {
        counts[res] = (counts[res] || 0) + 1;
      });
    } else if (response) {
      counts[response] = (counts[response] || 0) + 1;
    }
  });

  return Object.keys(counts).map((key) => ({
    response: key,
    count: counts[key],
  }));
};

export default Visualization;
