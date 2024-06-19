const { gql } = require('graphql');

const schema = gql`
    type Item {
        id: ID!
        name: String!
        # Add other fields as needed
    }

    type Query {
        items: [Item!]!
        item(id: ID!): Item
    }

    type Mutation {
        createItem(name: String!): Item!
        updateItem(id: ID!, name: String!): Item!
        deleteItem(id: ID!): Boolean!
    }
`;

module.exports = schema;
