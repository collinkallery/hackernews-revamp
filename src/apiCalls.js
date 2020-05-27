export const fetchPromises = async (keyword) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/${keyword}.json?print=pretty`)
  const data = response.json()
  return data
}

export const fetchStories = async (storyID) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`)
  const data = response.json()
  return data
}

//change name of method