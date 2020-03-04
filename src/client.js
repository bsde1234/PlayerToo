export const getAllGames = async (callback) => {
  const response = await fetch('./board_games.json');
  const data = await response.json();
  const values = Object.values(data);
  return callback(values);
};

export const getAllListings = async (callback) => {
  const response = await fetch('./listings.json')
  const data = await response.json();
  const values = Object.values(data);
  return callback(values);
}

export const getAllUsers = async (callback) => {
  const response = await fetch('./users.json')
  const data = await response.json();
  const values = Object.values(data);
  return callback(values);
}