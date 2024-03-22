export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    # [String!]! : null許容しない
    platform: [String!]!
    # [Review!] : null許容
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    game: Game!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    games: [Game]
    game(id: ID!): Game
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }
  type Mutation {
    # 新しいゲームを追加
    addGame(game: AddGameInput!): Game
    # 指定されたIDを持つゲームを削除
    deleteGame(id: ID!): [Game]
    # 指定されたIDを持つゲームの情報を更新
    updateGame(id: ID!, edits: EditGameInput): Game
  }
  # addGameミューテーションで使用される入力タイプ
  input AddGameInput {
    title: String!,
    platform: [String!]!
  }
  # updateGameミューテーションで使用される入力タイプ
  input EditGameInput {
    title: String,
    platform: [String!]
  }
`