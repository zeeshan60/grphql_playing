const {
  CreatePatientInput,
  Patient,
  Device
} = require("./models/CreatePatientInput");
const { ApolloServer, gql } = require("apollo-server");
const okhttp = require("okhttp");

var MimeBuilder = okhttp.MimeBuilder;
var Request = okhttp.Request;
var RequestBody = okhttp.RequestBody;
var RequestBuilder = okhttp.RequestBuilder;
var FormEncodingBuilder = okhttp.FormEncodingBuilder;
var MultiPartBuilder = okhttp.MultiPartBuilder;

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
  }
  
  type Patient {
    id: Int
    email: String
    name: String
  }
  
  type Query {
    patient: Patient
    subjects: [Subject]
  }
  input CreatePatientInput {
    email: String!
    password: String!
    clientId: String!
    firstName: String
    lastName: String
    gender: String
    deviceId: String
    appVersion: String
    appVersionCode: Int
    syncState:String!
    lastModifiedTime:Int!
  }

  type Mutation {
    createPatient(patientInput: CreatePatientInput!): Patient
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

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];
const patients = [
  {
    email: "test1@test.com",
    name: "J.K. Rowling",
    books: books
  },
  {
    email: "test2@test.com",
    name: "J.K. Rowling",
    books: books
  },
  {
    email: "test3@test.com",
    name: "J.K. Rowling",
    books: books
  }
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    patient: (parent, args, context) => {
      function getPatient() {
        return new RequestBuilder()
          .GET("http://amun.healint.com:9002/v31/patients/99355")
          .header("X-AUTH-TOKEN", context.x_auth_token)
          .header("Accept", "application/json")
          .buildAndExecute()
          .then(value => {
            console.log(value);
            let patient = JSON.parse(value.data).result;
            return {
              id: patient.serverId,
              name: patient.firstName,
              email: patient.email
            };
          })
          .catch(reason => {
            console.log(reason);
            return patients[0];
          });
      }

      return getPatient();
    },
    subjects: (parent, args, context) => {
      return subjects;
    }
  },
  Subject: {
    questions: (parent, args, context) => {
      return questions[parent.id];
    }
  },
  Question: {
    choices: (parent, args, context) => {
      return choices[parent.id];
    }
  },
  Mutation: {
    createPatient: (_, args, dataSources) => {
      let patientInput = args.patientInput;
      let patient = new Patient(
          patientInput.email,
          false,
          patientInput.clientId,
          patientInput.firstName
      );
      patient.syncState = patientInput.syncState;
      patient.lastModifiedTime = new Date().getMilliseconds();
      var createPatient = new CreatePatientInput(
        null,
        patientInput.password,
        patient
      );

      return new RequestBuilder()
        .url("http://amun.healint.com:9002/v28/patients")
        .POST(
          RequestBody.create(
            createPatient,
            new MimeBuilder()
              .contentType("application/json", "charset", "utf8")
              .build()
          )
        )
        .header("Accept", "application/json")
        .header("content-type", "application/json")
        .buildAndExecute()
        .then(response => {
          if (response.response.statusCode) {
            let result = JSON.parse(response.data).result;
          }
          console.log(result.email);
          return {
            email: result.email,
            name: result.firstName,
            gender: result.gender
          };
        })
        .catch(error => {
          console.log(error);
          return { name: "something" };
        });
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
      x_auth_token:
        "rO0ABXeFABBtaWdyYWluZS1hbmRyb2lkAAABbqXCkDwAAAAAACQzMDhlMzc5YS05MWQ2LTQzZTktYWMxMy1hMDAxYmIzZTFjZGYAAAAAAAGEGwAAAAEABUFETUlO//////////8AJDI4NWJhZDE5ZGI2NmNmYjkwNzM3ZTQ1N2I5NzcxM2FkdGVzdA==#SoAw9iYfsy7cz88dKnRdVldrObaNoZgWcxXzX3YmXFPXhacNLcKbQ0xlAu9Faqlq7/bGl2YYTV1ckCebkX9rDA=="
    };
  }
});

// The `listen` method launches a web server.
server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
