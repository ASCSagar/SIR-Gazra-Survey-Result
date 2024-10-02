// src/sampleData.js

const sampleData = [
    {
      ageGroup: '25-34',
      educationLevel: "Bachelor's degree",
      occupation: 'Employed full-time',
      location: 'Urban',
      'Are you familiar with the term "violence against women"?': 'Very familiar',
      'Have you ever witnessed or experienced any form of violence against women?': 'Yes',
      'Which of the following do you consider to be forms of violence against women?': [
        'Physical assault (e.g., hitting, kicking, pushing)',
        'Emotional manipulation or gaslighting',
        'Online harassment or cyberbullying',
      ],
      'Before this survey, were you aware that all of these actions could be considered forms of violence against women?':
        'I was aware of some, but not all',
      'In your opinion, how common is physical violence against women in your community?': 'Very common',
      'Which form of physical violence do you think is most prevalent?': 'Hitting or punching',
      'Where do you think physical violence against women most commonly occurs?': 'At home',
      'How would you rate the prevalence of sexual violence against women in your community?': 'High',
      'Which form of sexual violence do you think is most underreported?': 'Rape',
      'In your opinion, what is the biggest barrier to reporting sexual violence?': 'Fear of retaliation',
      'Do you think emotional/psychological abuse is taken as seriously as physical violence?': 'No',
      'Which form of emotional/psychological abuse do you think is most common?': 'Gaslighting',
      'How easy do you think it is for victims to recognize emotional/psychological abuse?': 'Somewhat difficult',
      'Before this survey, were you aware of the concept of economic abuse?': 'I had heard of it but didn\'t know much about it',
      'Which form of economic abuse do you think has the most long-term impact?': 'Controlling all finances',
      'How serious do you think the issue of stalking is in your community?': 'Very serious',
      'Which form of stalking or harassment do you think is most common?': 'Unwanted, persistent communication',
      'Do you think current laws adequately address stalking and harassment?': 'No',
      'How prevalent do you think cyber violence is against women?': 'Very prevalent',
      'Which form of cyber violence do you think is most harmful?': 'Online harassment or bullying',
      'Do you think law enforcement is well-equipped to handle cases of cyber violence?': 'No',
      'Are you aware of any cultural or traditional practices in your community that could be considered forms of violence against women?':
        'Yes',
      'How difficult do you think it is to address violence against women that is rooted in cultural or traditional practices?':
        'Very difficult',
      'How confident do you feel in your ability to recognize signs of violence against women?': 'Somewhat confident',
      'If you witnessed violence against a woman, what would you most likely do?': 'Call the authorities',
      'Are you aware of any local resources or organizations that support women experiencing violence?': 'Yes',
      'What do you think is the most effective way to prevent violence against women?': 'Education and awareness programs',
      'Have you ever participated in any initiatives or programs aimed at preventing violence against women?': 'No',
    },
    // ... 49 more entries
  ];
  
  // Generate 49 more random entries
  const ageGroups = ['18-24', '25-34', '35-44', '45-54', '55-64', '65 and above'];
  const educationLevels = [
    'Less than high school',
    'High school graduate',
    'Some college',
    "Bachelor's degree",
    "Master's degree or higher",
  ];
  const occupations = [
    'Student',
    'Employed full-time',
    'Employed part-time',
    'Self-employed',
    'Unemployed',
    'Retired',
  ];
  const locations = ['Urban', 'Suburban', 'Rural'];
  const familiarityOptions = ['Very familiar', 'Somewhat familiar', 'Not very familiar', 'Not at all familiar'];
  const yesNoOptions = ['Yes', 'No', 'Prefer not to say'];
  const awarenessOptions = [
    'Yes, I was aware of all of them',
    'I was aware of some, but not all',
    "No, I wasn't aware that some of these were considered violence",
    'Unsure',
  ];
  const commonalityOptions = ['Very common', 'Somewhat common', 'Not very common', 'Not at all common', 'Unsure'];
  const physicalViolenceForms = [
    'Hitting or punching',
    'Kicking',
    'Pushing or shoving',
    'Pinching',
    'Hair pulling',
    'Throwing objects',
    'Using weapons',
    'Other',
  ];
  const locationsOfViolence = ['At home', 'In public spaces', 'At work', 'In educational institutions'];
  const prevalenceOptions = ['Very high', 'High', 'Moderate', 'Low', 'Very low', 'Unsure'];
  const sexualViolenceForms = [
    'Rape',
    'Sexual assault',
    'Unwanted touching or groping',
    'Forced kissing',
    'Sharing intimate images without consent',
    'Coercion into sexual acts',
  ];
  const barriersToReporting = [
    'Fear of retaliation',
    'Shame or stigma',
    'Lack of trust in authorities',
    'Fear of not being believed',
    'Lack of awareness of rights and resources',
  ];
  const emotionalAbuseOptions = ['Yes', 'No', 'Unsure'];
  const emotionalAbuseForms = [
    'Name-calling or insulting',
    'Constant criticism',
    'Humiliation in public or private',
    'Gaslighting',
    'Threats',
    'Isolation from friends and family',
  ];
  const easeOfRecognition = ['Very easy', 'Somewhat easy', 'Somewhat difficult', 'Very difficult', 'Unsure'];
  const economicAbuseAwareness = [
    'Yes, I was fully aware',
    "I had heard of it but didn't know much about it",
    "No, I wasn't aware of this concept",
  ];
  const economicAbuseForms = [
    'Controlling all finances',
    'Forbidding work or education',
    'Stealing money or assets',
    'Forcing someone to work',
    'Denying basic necessities',
  ];
  const seriousnessOptions = ['Very serious', 'Somewhat serious', 'Not very serious', 'Not at all serious', 'Unsure'];
  const stalkingForms = [
    'Following or watching someone',
    'Unwanted, persistent communication',
    'Showing up uninvited at various locations',
    'Leaving unwanted gifts',
    "Tracking someone's movements",
  ];
  const cyberViolencePrevalence = ['Very prevalent', 'Somewhat prevalent', 'Not very prevalent', 'Not at all prevalent', 'Unsure'];
  const cyberViolenceForms = ['Online harassment or bullying', 'Impersonation on social media', 'Revenge porn', 'Doxxing'];
  const lawEnforcementOptions = ['Yes', 'No', 'Unsure'];
  const culturalPracticesAwareness = ['Yes', 'No', 'Unsure'];
  const difficultyOptions = ['Very difficult', 'Somewhat difficult', 'Not very difficult', 'Not at all difficult', 'Unsure'];
  const confidenceLevels = ['Very confident', 'Somewhat confident', 'Not very confident', 'Not at all confident'];
  const actionsIfWitnessed = ['Intervene directly', 'Call the authorities', 'Offer support to the victim afterwards', 'Nothing, out of fear or uncertainty'];
  const awarenessOfResources = ['Yes', 'No'];
  const preventionMethods = [
    'Education and awareness programs',
    'Stricter laws and enforcement',
    'Economic empowerment of women',
    'Changing cultural attitudes',
    'Improved support services',
  ];
  const participationOptions = ['Yes', 'No', 'Not sure'];
  
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  // For multi-select questions
  const formsOfViolence = [
    'Physical assault (e.g., hitting, kicking, pushing)',
    'Sexual assault or rape',
    'Verbal abuse or name-calling',
    'Controlling behavior (e.g., isolating from friends/family, controlling finances)',
    'Stalking or persistent unwanted attention',
    'Online harassment or cyberbullying',
    'Emotional manipulation or gaslighting',
    'Forced marriage or honor-based violence',
    'Reproductive coercion (forcing pregnancy or abortion)',
    'Denial of education or employment opportunities',
  ];
  
  for (let i = 0; i < 49; i++) {
    sampleData.push({
      ageGroup: getRandomElement(ageGroups),
      educationLevel: getRandomElement(educationLevels),
      occupation: getRandomElement(occupations),
      location: getRandomElement(locations),
      'Are you familiar with the term "violence against women"?': getRandomElement(familiarityOptions),
      'Have you ever witnessed or experienced any form of violence against women?': getRandomElement(yesNoOptions),
      'Which of the following do you consider to be forms of violence against women?': formsOfViolence.filter(() => Math.random() < 0.3),
      'Before this survey, were you aware that all of these actions could be considered forms of violence against women?':
        getRandomElement(awarenessOptions),
      'In your opinion, how common is physical violence against women in your community?': getRandomElement(commonalityOptions),
      'Which form of physical violence do you think is most prevalent?': getRandomElement(physicalViolenceForms),
      'Where do you think physical violence against women most commonly occurs?': getRandomElement(locationsOfViolence),
      'How would you rate the prevalence of sexual violence against women in your community?': getRandomElement(prevalenceOptions),
      'Which form of sexual violence do you think is most underreported?': getRandomElement(sexualViolenceForms),
      'In your opinion, what is the biggest barrier to reporting sexual violence?': getRandomElement(barriersToReporting),
      'Do you think emotional/psychological abuse is taken as seriously as physical violence?': getRandomElement(emotionalAbuseOptions),
      'Which form of emotional/psychological abuse do you think is most common?': getRandomElement(emotionalAbuseForms),
      'How easy do you think it is for victims to recognize emotional/psychological abuse?': getRandomElement(easeOfRecognition),
      'Before this survey, were you aware of the concept of economic abuse?': getRandomElement(economicAbuseAwareness),
      'Which form of economic abuse do you think has the most long-term impact?': getRandomElement(economicAbuseForms),
      'How serious do you think the issue of stalking is in your community?': getRandomElement(seriousnessOptions),
      'Which form of stalking or harassment do you think is most common?': getRandomElement(stalkingForms),
      'Do you think current laws adequately address stalking and harassment?': getRandomElement(lawEnforcementOptions),
      'How prevalent do you think cyber violence is against women?': getRandomElement(cyberViolencePrevalence),
      'Which form of cyber violence do you think is most harmful?': getRandomElement(cyberViolenceForms),
      'Do you think law enforcement is well-equipped to handle cases of cyber violence?': getRandomElement(lawEnforcementOptions),
      'Are you aware of any cultural or traditional practices in your community that could be considered forms of violence against women?':
        getRandomElement(culturalPracticesAwareness),
      'How difficult do you think it is to address violence against women that is rooted in cultural or traditional practices?':
        getRandomElement(difficultyOptions),
      'How confident do you feel in your ability to recognize signs of violence against women?': getRandomElement(confidenceLevels),
      'If you witnessed violence against a woman, what would you most likely do?': getRandomElement(actionsIfWitnessed),
      'Are you aware of any local resources or organizations that support women experiencing violence?': getRandomElement(awarenessOfResources),
      'What do you think is the most effective way to prevent violence against women?': getRandomElement(preventionMethods),
      'Have you ever participated in any initiatives or programs aimed at preventing violence against women?': getRandomElement(participationOptions),
    });
  }
  
  export default sampleData;
  