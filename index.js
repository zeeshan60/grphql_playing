const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Subject {
    id: ID
    name: String
    timeRequired: Int
    questions: [Question]
  }
  type Question {
    id: ID
    title: String
    choices: [Choice]
  }
  type Choice {
    id: ID
    title: String
    correct: Boolean
  }

  type Query {
    subjects: [Subject]
  }
`;

const subjects = [
  {
    id: "english",
    name: "English",
    timeRequired: 45
  },
  {
    id: "urdu",
    name: "Urdu",
    timeRequired: 45
  },
  {
    id: "science",
    name: "Science",
    timeRequired: 45
  },
  {
    id: "calculus",
    name: "Calculus",
    timeRequired: 45
  },
  {
    id: "physics",
    name: "Physics",
    timeRequired: 45
  },
  {
    id: "chemistry",
    name: "Chemistry",
    timeRequired: 45
  }
];

const questions = {
  english: [
    {
      id: "english_q1",
      title: "What is full name of Pakistan?"
    },
    {
      id: "english_q2",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "english_q3",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "english_q4",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "english_q5",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "english_q6",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "english_q7",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "english_q8",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "english_q9",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "english_q10",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "english_q11",
      title: "What is Pakistan's birthday?"
    }
  ],
  urdu: [
    {
      id: "urdu_q1",
      title: "What is full name of Pakistan?"
    },
    {
      id: "urdu_q2",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "urdu_q3",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "urdu_q4",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "urdu_q5",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "urdu_q6",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "urdu_q7",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "urdu_q8",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "urdu_q9",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "urdu_q10",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "urdu_q11",
      title: "What is Pakistan's birthday?"
    }
  ],
  science: [
    {
      id: "science_q1",
      title: "What is full name of Pakistan?"
    },
    {
      id: "science_q2",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "science_q3",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "science_q4",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "science_q5",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "science_q6",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "science_q7",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "science_q8",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "science_q9",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "science_q10",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "science_q11",
      title: "What is Pakistan's birthday?"
    }
  ],
  calculus: [
    {
      id: "calculus_q1",
      title: "What is full name of Pakistan?"
    },
    {
      id: "calculus_q2",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "calculus_q3",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "calculus_q4",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "calculus_q5",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "calculus_q6",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "calculus_q7",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "calculus_q8",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "calculus_q9",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "calculus_q10",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "calculus_q11",
      title: "What is Pakistan's birthday?"
    }
  ],
  physics: [
    {
      id: "physics_q1",
      title: "What is full name of Pakistan?"
    },
    {
      id: "physics_q2",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "physics_q3",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "physics_q4",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "physics_q5",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "physics_q6",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "physics_q7",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "physics_q8",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "physics_q9",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "physics_q10",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "physics_q11",
      title: "What is Pakistan's birthday?"
    }
  ],
  chemistry: [
    {
      id: "chemistry_q1",
      title: "What is full name of Pakistan?"
    },
    {
      id: "chemistry_q2",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "chemistry_q3",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "chemistry_q4",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "chemistry_q5",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "chemistry_q6",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "chemistry_q7",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "chemistry_q8",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "chemistry_q9",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "chemistry_q10",
      title: "What is Pakistan's birthday?"
    },
    {
      id: "chemistry_q11",
      title: "What is Pakistan's birthday?"
    }
  ]
};

const choices = {
  english_q1: [
    {
      id: "english_q1_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "english_q1_choice2",
      title: "choice 2",
      correct: false
    }
  ],
  english_q2: [
    {
      id: "english_q2_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "english_q2_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q2_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q2_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  english_q3: [
    {
      id: "english_q3_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "english_q3_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q3_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q3_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  english_q4: [
    {
      id: "english_q4_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "english_q4_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q4_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q4_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  english_q5: [
    {
      id: "english_q5_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "english_q5_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q5_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q5_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  english_q6: [
    {
      id: "english_q6_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "english_q6_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q6_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q6_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  english_q7: [
    {
      id: "english_q7_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "english_q7_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q7_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q7_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  english_q8: [
    {
      id: "english_q8_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "english_q8_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q8_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q8_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  english_q9: [
    {
      id: "english_q9_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "english_q9_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q9_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q9_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  english_q10: [
    {
      id: "english_q10_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "english_q10_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q10_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q10_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  english_q11: [
    {
      id: "english_q11_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "english_q11_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q11_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "english_q11_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  urdu_q1: [
    {
      id: "urdu_q1_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "urdu_q1_choice2",
      title: "choice 2",
      correct: false
    }
  ],
  urdu_q2: [
    {
      id: "urdu_q2_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "urdu_q2_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q2_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q2_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  urdu_q3: [
    {
      id: "urdu_q3_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "urdu_q3_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q3_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q3_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  urdu_q4: [
    {
      id: "urdu_q4_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "urdu_q4_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q4_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q4_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  urdu_q5: [
    {
      id: "urdu_q5_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "urdu_q5_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q5_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q5_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  urdu_q6: [
    {
      id: "urdu_q6_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "urdu_q6_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q6_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q6_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  urdu_q7: [
    {
      id: "urdu_q7_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "urdu_q7_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q7_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q7_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  urdu_q8: [
    {
      id: "urdu_q8_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "urdu_q8_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q8_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q8_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  urdu_q9: [
    {
      id: "urdu_q9_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "urdu_q9_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q9_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q9_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  urdu_q10: [
    {
      id: "urdu_q10_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "urdu_q10_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q10_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q10_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  urdu_q11: [
    {
      id: "urdu_q11_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "urdu_q11_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q11_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "urdu_q11_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  science_q1: [
    {
      id: "science_q1_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "science_q1_choice2",
      title: "choice 2",
      correct: false
    }
  ],
  science_q2: [
    {
      id: "science_q2_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "science_q2_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q2_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q2_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  science_q3: [
    {
      id: "science_q3_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "science_q3_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q3_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q3_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  science_q4: [
    {
      id: "science_q4_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "science_q4_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q4_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q4_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  science_q5: [
    {
      id: "science_q5_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "science_q5_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q5_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q5_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  science_q6: [
    {
      id: "science_q6_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "science_q6_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q6_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q6_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  science_q7: [
    {
      id: "science_q7_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "science_q7_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q7_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q7_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  science_q8: [
    {
      id: "science_q8_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "science_q8_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q8_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q8_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  science_q9: [
    {
      id: "science_q9_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "science_q9_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q9_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q9_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  science_q10: [
    {
      id: "science_q10_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "science_q10_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q10_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q10_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  science_q11: [
    {
      id: "science_q11_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "science_q11_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q11_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "science_q11_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  calculus_q1: [
    {
      id: "calculus_q1_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "calculus_q1_choice2",
      title: "choice 2",
      correct: false
    }
  ],
  calculus_q2: [
    {
      id: "calculus_q2_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "calculus_q2_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q2_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q2_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  calculus_q3: [
    {
      id: "calculus_q3_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "calculus_q3_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q3_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q3_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  calculus_q4: [
    {
      id: "calculus_q4_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "calculus_q4_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q4_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q4_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  calculus_q5: [
    {
      id: "calculus_q5_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "calculus_q5_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q5_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q5_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  calculus_q6: [
    {
      id: "calculus_q6_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "calculus_q6_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q6_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q6_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  calculus_q7: [
    {
      id: "calculus_q7_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "calculus_q7_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q7_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q7_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  calculus_q8: [
    {
      id: "calculus_q8_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "calculus_q8_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q8_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q8_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  calculus_q9: [
    {
      id: "calculus_q9_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "calculus_q9_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q9_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q9_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  calculus_q10: [
    {
      id: "calculus_q10_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "calculus_q10_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q10_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q10_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  calculus_q11: [
    {
      id: "calculus_q11_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "calculus_q11_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q11_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "calculus_q11_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  physics_q1: [
    {
      id: "physics_q1_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "physics_q1_choice2",
      title: "choice 2",
      correct: false
    }
  ],
  physics_q2: [
    {
      id: "physics_q2_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "physics_q2_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q2_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q2_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  physics_q3: [
    {
      id: "physics_q3_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "physics_q3_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q3_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q3_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  physics_q4: [
    {
      id: "physics_q4_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "physics_q4_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q4_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q4_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  physics_q5: [
    {
      id: "physics_q5_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "physics_q5_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q5_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q5_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  physics_q6: [
    {
      id: "physics_q6_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "physics_q6_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q6_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q6_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  physics_q7: [
    {
      id: "physics_q7_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "physics_q7_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q7_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q7_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  physics_q8: [
    {
      id: "physics_q8_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "physics_q8_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q8_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q8_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  physics_q9: [
    {
      id: "physics_q9_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "physics_q9_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q9_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q9_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  physics_q10: [
    {
      id: "physics_q10_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "physics_q10_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q10_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q10_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  physics_q11: [
    {
      id: "physics_q11_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "physics_q11_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q11_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "physics_q11_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  chemistry_q1: [
    {
      id: "chemistry_q1_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "chemistry_q1_choice2",
      title: "choice 2",
      correct: false
    }
  ],
  chemistry_q2: [
    {
      id: "chemistry_q2_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "chemistry_q2_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q2_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q2_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  chemistry_q3: [
    {
      id: "chemistry_q3_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "chemistry_q3_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q3_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q3_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  chemistry_q4: [
    {
      id: "chemistry_q4_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "chemistry_q4_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q4_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q4_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  chemistry_q5: [
    {
      id: "chemistry_q5_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "chemistry_q5_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q5_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q5_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  chemistry_q6: [
    {
      id: "chemistry_q6_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "chemistry_q6_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q6_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q6_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  chemistry_q7: [
    {
      id: "chemistry_q7_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "chemistry_q7_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q7_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q7_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  chemistry_q8: [
    {
      id: "chemistry_q8_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "chemistry_q8_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q8_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q8_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  chemistry_q9: [
    {
      id: "chemistry_q9_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "chemistry_q9_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q9_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q9_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  chemistry_q10: [
    {
      id: "chemistry_q10_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "chemistry_q10_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q10_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q10_choice4",
      title: "choice 2",
      correct: false
    }
  ],
  chemistry_q11: [
    {
      id: "chemistry_q11_choice1",
      title: "choice 1",
      correct: true
    },
    {
      id: "chemistry_q11_choice2",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q11_choice3",
      title: "choice 2",
      correct: false
    },
    {
      id: "chemistry_q11_choice4",
      title: "choice 2",
      correct: false
    }
  ]
};

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    subjects: (parent, args, context) => {
      //todo write your code here to get list of subjects from anywhere
      //can return a promise
      return subjects;
    }
  },
  Subject: {
    questions: (parent, args, context) => {
      //todo code here to get list of questions for that subject
      return new Promise(resolve => setTimeout(() => resolve(), 200)).then(
        x => questions[parent.id]
      );
    }
  },
  Question: {
    //todo code here to get list of choices for that question
    choices: (parent, args, context) => {
      return choices[parent.id];
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: req => {
    // simple auth check on every request
    // const auth = req.headers && req.headers.authorization || '';
    // const email = Buffer.from(auth, 'base64').toString('ascii');
    // if (!isEmail.validate(email)) return { user: null };
    // // find a user by their email
    // const users = await store.users.findOrCreate({ where: { email } });
    // const user = users && users[0] || null;
    //  console.log(req.headers);

    return {
      x_auth_token: "some auth token in future"
    };
  }
});

// The `listen` method launches a web server.
server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
