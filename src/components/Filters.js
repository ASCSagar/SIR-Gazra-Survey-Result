// src/components/Filters.js

import React from 'react';
import { Button, TextField, MenuItem, Grid } from '@mui/material';
import { CSVLink } from 'react-csv';

const Filters = ({ filters, setFilters, resetFilters, filteredData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <Grid container spacing={2} alignItems="flex-end" sx={{ mb: 4 }}>
      {/* Age Group Filter */}
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Age Group"
          name="ageGroup"
          value={filters.ageGroup}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="">All Age Groups</MenuItem>
          <MenuItem value="18-24">18-24</MenuItem>
          <MenuItem value="25-34">25-34</MenuItem>
          <MenuItem value="35-44">35-44</MenuItem>
          <MenuItem value="45-54">45-54</MenuItem>
          <MenuItem value="55-64">55-64</MenuItem>
          <MenuItem value="65 and above">65 and above</MenuItem>
        </TextField>
      </Grid>

      {/* Education Level Filter */}
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Education Level"
          name="educationLevel"
          value={filters.educationLevel}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="">All Education Levels</MenuItem>
          <MenuItem value="Less than high school">Less than high school</MenuItem>
          <MenuItem value="High school graduate">High school graduate</MenuItem>
          <MenuItem value="Some college">Some college</MenuItem>
          <MenuItem value="Bachelor's degree">Bachelor's degree</MenuItem>
          <MenuItem value="Master's degree or higher">Master's degree or higher</MenuItem>
        </TextField>
      </Grid>

      {/* Occupation Filter */}
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Occupation"
          name="occupation"
          value={filters.occupation}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="">All Occupations</MenuItem>
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Employed full-time">Employed full-time</MenuItem>
          <MenuItem value="Employed part-time">Employed part-time</MenuItem>
          <MenuItem value="Self-employed">Self-employed</MenuItem>
          <MenuItem value="Unemployed">Unemployed</MenuItem>
          <MenuItem value="Retired">Retired</MenuItem>
        </TextField>
      </Grid>

      {/* Location Filter */}
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Location"
          name="location"
          value={filters.location}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="">All Locations</MenuItem>
          <MenuItem value="Urban">Urban</MenuItem>
          <MenuItem value="Suburban">Suburban</MenuItem>
          <MenuItem value="Rural">Rural</MenuItem>
        </TextField>
      </Grid>

      {/* Reset Filters Button */}
      <Grid item xs={12} sm={6} md={3}>
        <Button variant="outlined" color="secondary" onClick={resetFilters} fullWidth>
          Reset Filters
        </Button>
      </Grid>

      {/* Download Results Button */}
      <Grid item xs={12} sm={6} md={3}>
        <Button variant="contained" color="primary" fullWidth>
          <CSVLink data={filteredData} filename="survey_results.csv" style={{ color: '#fff', textDecoration: 'none' }}>
            Download Results
          </CSVLink>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
