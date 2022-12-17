const initialBlogs = [
  {
    content: 'HTML is easy',
    date: new Date(),
    important: false
  },
  {
    content: 'Browser can execute only Javascript',
    date: new Date(),
    important: true
  }
]

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

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return {}
  }
  else {
    let authorCounts = blogs.reduce((authorCount, blog) => {
      authorCount[blog.author] = (authorCount[blog.author] || 0) + 1
      return authorCount
    }, {})
    let maxCount = Math.max(...Object.values(authorCounts))
    let mostFrequent = Object.keys(authorCounts).filter(author => authorCounts[author] === maxCount)
    return {
      author: mostFrequent[0],
      blogs: maxCount
    }
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return {}
  }
  else {
    let likesCounts = blogs.reduce((likesCount, blog) => {
      likesCount[blog.author] = (likesCount[blog.author] || 0) + blog.likes
      return likesCount
    }, {})
    let maxCount = Math.max(...Object.values(likesCounts))
    let mostLiked = Object.keys(likesCounts).filter(author => likesCounts[author] === maxCount)
    return {
      author: mostLiked[0],
      likes: maxCount
    }
  }
}

module.exports = {
  initialBlogs,
  totalLikes,
  favoriteBlogs,
  mostLikes,
  mostBlogs
}