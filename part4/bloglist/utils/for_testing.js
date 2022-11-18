const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const nonExistingId = () => {
  return 1
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