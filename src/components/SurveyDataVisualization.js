import React, { useEffect, useState } from "react";
import Filters from "./Filters/Filters";
import Inferences from "./Inferences/Inferences";
import sampleData from "../sampleData";
import Visualization from "./Visualization/Visualization";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Container,
  useTheme,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { initialQuestions } from "./Questions/Questions";

const SurveyDataVisualization = () => {
  const [filteredData, setFilteredData] = useState(sampleData);
  const [filters, setFilters] = useState({
    ageGroup: "",
    education: "",
    gender: "",
    location: "",
  });

  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
    setIsDrawerOpen(false);
  };

  const drawerWidth = 440;

  const drawerContent = (
    <div>
      <Toolbar />
      <List>
        {initialQuestions.map((question) => (
          <ListItem
            key={question.id}
            onClick={() => handleQuestionSelect(question)}
            button
          >
            <ListItemText primary={question.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const resetFilters = () => {
    setFilters({
      ageGroup: "",
      education: "",
      gender: "",
      location: "",
    });
  };

  useEffect(() => {
    let data = sampleData;
    if (filters.ageGroup) {
      data = data.filter((item) => item.ageGroup === filters.ageGroup);
    }
    if (filters.education) {
      data = data.filter((item) => item.education === filters.education);
    }
    if (filters.gender) {
      data = data.filter((item) => item.gender === filters.gender);
    }
    if (filters.location) {
      data = data.filter((item) => item.location === filters.location);
    }
    setFilteredData(data);
  }, [filters]);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Survey Data Visualization
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawerContent}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Container maxWidth="md">
          <Filters
            filters={filters}
            setFilters={setFilters}
            resetFilters={resetFilters}
          />
          <Paper elevation={3} sx={{ p: 4, mt: 2, mb: 2 }}>
            {selectedQuestion ? (
              <Typography variant="h5" gutterBottom>
                {selectedQuestion.title}
              </Typography>
            ) : (
              <Typography variant="body1">
                Please select a question from the sidebar.
              </Typography>
            )}
          </Paper>
          <Visualization data={filteredData} selectedQuestion={selectedQuestion} />
          <Inferences data={filteredData} filters={filters} />
        </Container>
      </Box>
    </Box>
  );
};

export default SurveyDataVisualization;
