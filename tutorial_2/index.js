import { ApolloServer } from "apollo-server";

// db
import db from "./_db.js";

// types
import { typeDefs } from "./schema.js";

// resolvers
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(parent, args, context, info) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id);
    },
  },
  Mutation: {
    addGame(_, args) {
      let game = {
        // ... : オブジェクトや配列内の要素を展開
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.games.push(game);

      return game;
    },
    deleteGame(_, args) {
      db.games = db.games.filter((g) => g.id !== args.id);

      return db.games;
    },
    // arg : ゲームのIDと編集内容を受け取る
    updateGame(_, args) {
      // ゲームのIDと引数のIDが一致するデータを探す
      db.games = db.games.map((g) => {
        if (g.id === args.id) {
          // 編集内容で更新
          return { ...g, ...args.edits };
        }

        return g;
      });

      // 更新されたゲームの情報を返す
      return db.games.find((g) => g.id === args.id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// サーバーを起動
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
