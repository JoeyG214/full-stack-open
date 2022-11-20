const totalLikes = (blogs) => {
  let likes = 0
  for (let blog of blogs) {
    likes = likes + blog.likes
  }
  return likes
}

const favoriteBlogs = (blogs) => {
  let favoriteBlog = blogs[0]
  for (let blog of blogs) {
    if (favoriteBlog.likes < blog.likes) {
      favoriteBlog = blog
    }
  }
  return favoriteBlog
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
  favoriteBlogs,
  nonExistingId,
  notesInDB,
  usersInDB
}