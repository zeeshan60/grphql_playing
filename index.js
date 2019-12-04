const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Subject {
    id: ID
    name: String
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
    isSelected: Boolean
  }
`;


const subjects = [
  {
    id: 'english',
    name: 'English'
  }
];

const questions = {
  'english': [
    {
      id: 'english_lun_mera',
      title: 'nomi lun'
    },
    {
      id: 'english_tomi',
      title: 'nomi tomi'
    }
  ]
};

const choices = {
  'english_lun_mera':[
    {
      id:'english_lun_mera_choice1',
      title: 'choice 1'
    },
    {
      id:'english_lun_mera_choice2',
      title: 'choice 2'
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
      return questions[parent.id];
    }
  },
  Question: {
    //todo code here to get list of choices for that question
    choices: (parent, args, context) => {
      return choices[parent.id];
    }
  },
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
      x_auth_token:
        "some auth token in future"
    };
  }
});

// The `listen` method launches a web server.
server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
