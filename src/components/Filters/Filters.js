import React from "react";
import { Button, TextField, MenuItem, Grid } from "@mui/material";

const Filters = ({ filters, setFilters, resetFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <Grid container spacing={2} alignItems="flex-end" sx={{ mb: 4 }}>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Age Group"
          name="ageGroup"
          value={filters.ageGroup}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="18-24">18-24</MenuItem>
          <MenuItem value="25-34">25-34</MenuItem>
          <MenuItem value="35-44">35-44</MenuItem>
          <MenuItem value="45-54">45-54</MenuItem>
          <MenuItem value="55-64">55-64</MenuItem>
          <MenuItem value="65 and above">65 and above</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Location"
          name="location"
          value={filters.location}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Urban">Urban</MenuItem>
          <MenuItem value="Sami-urban">Sami-Urban</MenuItem>
          <MenuItem value="Rural">Rural</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Education"
          name="education"
          value={filters.education}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="No Formal Education">No Formal Education</MenuItem>
          <MenuItem value="Primary Education">Primary Education</MenuItem>
          <MenuItem value="Secondary Education">Secondary Education</MenuItem>
          <MenuItem value="Higher Secondary Education">
            Higher Secondary Education
          </MenuItem>
          <MenuItem value="Bachelor's Degree">Bachelor's Degree</MenuItem>
          <MenuItem value="Master's Degree or Higher">
            Master's Degree or Higher
          </MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Gender"
          name="gender"
          value={filters.gender}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={resetFilters}
          fullWidth
        >
          Reset Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
