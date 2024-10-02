import React from 'react';
import { Card } from 'react-bootstrap';

const Inferences = ({ data, filters }) => {
  if (data.length === 0) {
    return (
      <div className="my-4">
        <h5>No data available for the selected filters.</h5>
      </div>
    );
  }

  // Generate inferences based on data and filters
  let inferences = generateInferences(data, filters);

  // Filter out null or undefined inferences
  inferences = inferences.filter((inference) => inference);

  return (
    <div className="my-4">
      <h3>Inferences</h3>
      {inferences.length === 0 ? (
        <p>No specific inferences for the selected filters.</p>
      ) : (
        inferences.map((inference, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>{inference.title}</Card.Title>
              <Card.Text>{inference.text}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

const generateInferences = (data, filters) => {
  const inferences = [];

  // Only generate inferences for applied filters
  if (filters.ageGroup) {
    const ageInference = generateAgeGroupInference(data, filters.ageGroup);
    if (ageInference) inferences.push(ageInference);
  }
  if (filters.education) {
    const educationInference = generateEducationLevelInference(data, filters.education);
    if (educationInference) inferences.push(educationInference);
  }
  if (filters.gender) {
    const occupationInference = generateOccupationInference(data, filters.gender);
    if (occupationInference) inferences.push(occupationInference);
  }
  if (filters.location) {
    const locationInference = generateLocationInference(data, filters.location);
    if (locationInference) inferences.push(locationInference);
  }

  return inferences;
};

// Update inference functions to handle cases when data is insufficient

const generateAgeGroupInference = (data, ageGroup) => {
  if (data.length === 0) {
    return null; // Not enough data to generate inference
  }

  const total = data.length;
  const keyQuestion =
    'How confident do you feel in your ability to recognize signs of violence against women?';
  const counts = {};

  data.forEach((item) => {
    const response = item[keyQuestion];
    if (response) {
      counts[response] = (counts[response] || 0) + 1;
    }
  });

  const sortedResponses = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  if (sortedResponses.length === 0) {
    return null; // No responses to generate inference
  }

  const [mostCommonResponse, count] = sortedResponses[0];
  const percentage = ((count / total) * 100).toFixed(1);

  return {
    title: `Confidence Level in Age Group ${ageGroup}`,
    text: `Among respondents aged ${ageGroup}, ${percentage}% feel "${mostCommonResponse}" about recognizing signs of violence against women.`,
  };
};

const generateEducationLevelInference = (data, education) => {
  if (data.length === 0) {
    return null;
  }

  const total = data.length;
  const keyQuestion =
    'Do you think emotional/psychological abuse is taken as seriously as physical violence?';
  const counts = {};

  data.forEach((item) => {
    const response = item[keyQuestion];
    if (response) {
      counts[response] = (counts[response] || 0) + 1;
    }
  });

  const sortedResponses = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  if (sortedResponses.length === 0) {
    return null;
  }

  const [mostCommonResponse, count] = sortedResponses[0];
  const percentage = ((count / total) * 100).toFixed(1);

  return {
    title: `Perception among ${education} Educated Respondents`,
    text: `${percentage}% of respondents with "${education}" education believe that emotional/psychological abuse is "${mostCommonResponse.toLowerCase()}" as physical violence.`,
  };
};

const generateOccupationInference = (data, gender) => {
  if (data.length === 0) {
    return null;
  }

  const total = data.length;
  const keyQuestion =
    'Have you ever participated in any initiatives or programs aimed at preventing violence against women?';
  const counts = {};

  data.forEach((item) => {
    const response = item[keyQuestion];
    if (response) {
      counts[response] = (counts[response] || 0) + 1;
    }
  });

  if (!counts['Yes']) {
    return null;
  }

  const participationRate = ((counts['Yes'] / total) * 100).toFixed(1);

  return {
    title: `Participation in Initiatives by ${gender}`,
    text: `${participationRate}% of respondents who are "${gender}" have participated in initiatives aimed at preventing violence against women.`,
  };
};

const generateLocationInference = (data, location) => {
  if (data.length === 0) {
    return null;
  }

  const total = data.length;
  const keyQuestion =
    'In your opinion, how common is physical violence against women in your community?';
  const counts = {};

  data.forEach((item) => {
    const response = item[keyQuestion];
    if (response) {
      counts[response] = (counts[response] || 0) + 1;
    }
  });

  const sortedResponses = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  if (sortedResponses.length === 0) {
    return null;
  }

  const [mostCommonResponse, count] = sortedResponses[0];
  const percentage = ((count / total) * 100).toFixed(1);

  return {
    title: `Perception of Violence in ${location} Areas`,
    text: `In "${location}" areas, ${percentage}% of respondents believe physical violence against women is "${mostCommonResponse}".`,
  };
};

export default Inferences;
