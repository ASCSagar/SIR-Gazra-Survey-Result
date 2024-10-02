import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import Inferences from "./Inferences";
import sampleData from "../sampleData";
import Visualization from "./Visualization";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const SurveyDataVisualization = () => {
  const [filters, setFilters] = useState({
    ageGroup: "",
    educationLevel: "",
    occupation: "",
    location: "",
  });

  // For sample data
  const [filteredData, setFilteredData] = useState(sampleData);

  // Uncomment the following when integrating API
  /*
      const [surveyData, setSurveyData] = useState([]);
      const [filteredData, setFilteredData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(false);
    
      // Fetch data from the Django REST API
      useEffect(() => {
        axios
          .get('http://localhost:8000/api/survey-data/') // Replace with your API endpoint
          .then((response) => {
            setSurveyData(response.data);
            setFilteredData(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setError(true);
            setLoading(false);
          });
      }, []);
      */

  // Update filtered data whenever filters change
  useEffect(() => {
    let data = sampleData;

    if (filters.ageGroup) {
      data = data.filter((item) => item.ageGroup === filters.ageGroup);
    }
    if (filters.educationLevel) {
      data = data.filter(
        (item) => item.educationLevel === filters.educationLevel
      );
    }
    if (filters.occupation) {
      data = data.filter((item) => item.occupation === filters.occupation);
    }
    if (filters.location) {
      data = data.filter((item) => item.location === filters.location);
    }

    setFilteredData(data);
  }, [filters]);

  // For sample data, we don't need loading and error states
  // When integrating API, uncomment the following
  /*
      if (loading) {
        return <div>Loading data, please wait...</div>;
      }
    
      if (error) {
        return <div>Error loading data. Please try again later.</div>;
      }
      */

  const resetFilters = () => {
    setFilters({
      ageGroup: "",
      educationLevel: "",
      occupation: "",
      location: "",
    });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Survey Data Visualization
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ my: 4 }}>
        <Filters
          filters={filters}
          setFilters={setFilters}
          resetFilters={resetFilters}
          filteredData={filteredData}
        />
        <Visualization data={filteredData} />
        <Inferences data={filteredData} filters={filters} />
      </Container>
    </>
  );
};

export default SurveyDataVisualization;
