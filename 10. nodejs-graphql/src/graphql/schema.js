const { gql } = require("graphql-tag");

// GraphQL schema structure:
// This file defines the structure of the data in the GraphQL API.
// It describes the Product type, the available Queries, and the Mutations for managing products.

// Scalar types:
// - String: Represents textual data (e.g., title, category)
// - Int: Represents integer numbers (e.g., product quantity)
// - Float: Represents floating-point numbers (e.g., price)
// - Boolean: Represents a true/false value (e.g., inStock)
// - ID: A unique identifier for objects (e.g., product ID)

// -> blog -> fetch all the blogs, fetch blog by id

// req.params.id -> /api/product/12345

// req.body

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    category: String!
    price: Float!
    inStock: Boolean!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(
      title: String!
      category: String!
      price: Float!
      inStock: Boolean!
    ): Product
    deleteProduct(id: ID!): Boolean
    updateProduct(
      id: ID!
      title: String
      category: String
      price: Float
      inStock: Boolean
    ): Product
  }
`;

module.exports = typeDefs;
