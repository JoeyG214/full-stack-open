const totalLikes = (blogs) => {
  let likes = 0
  for (let blog of blogs) {
    likes = likes + blog.likes
  }
  return likes
}

const nonExistingId = () => {
  return 1
}

const notesInDB = () => {
  return 1
}

const usersInDB = () => {
  return 1
}

module.exports = {
  totalLikes,
  nonExistingId,
  notesInDB,
  usersInDB
}