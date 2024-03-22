let games = [
  { id: "1", title: "コールオブビューティー", platform: ["PS4", "Mobile"] },
  { id: "2", title: "スイカゲーム", platform: ["PC", "Switch"] },
  { id: "3", title: "エーベックス", platform: ["PS4", "PC", "Mobile"] },
]

let authors = [
  { id: "1", name: "Microsoft", verified: true },
  { id: "2", name: "任天堂", verified: false },
  { id: "3", name: "Epic", verified: true },
]

let reviews = [
  { id: "1", rating: 5, content: "スイカできた！", author_id: "2", game_id: "2" },
  { id: "2", rating: 4, content: "CODサイコー", author_id: "1", game_id: "1" },
  { id: "3", rating: 5, content: "フラットライン強すぎ！", author_id: "3", game_id: "3" },
  { id: "4", rating: 2, content: "クソゲースイカ", author_id: "2", game_id: "2" },
  { id: "5", rating: 1, content: "スイカできない...", author_id: "2", game_id: "2" },
  { id: "6", rating: 2, content: "スイカの当たり判定くそ", author_id: "2", game_id: "2" },
  { id: "7", rating: 1, content: "スイカスイカスイカスイカ....", author_id: "2", game_id: "2" },
  { id: "8", rating: 3, content: "BO4がいいな", author_id: "1", game_id: "1" },
  { id: "9", rating: 5, content: "マップもどせ！", author_id: "3", game_id: "3" },
]

export default { games, authors, reviews };

