const { gql } = require("apollo-server");

module.exports = gql`
  type Task {
    text: String
    createdBy: String
    checked: Boolean
    deadline: String
  }
  input TaskInput {
    text: String
    username: String
    checked: Boolean
    deadline: String
  }
  type Query {
    task(id: ID!): Task
  }
  type Mutation {
    createTask(taskInput: TaskInput): Task!
  }
`;
