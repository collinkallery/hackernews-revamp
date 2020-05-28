export const fetchPromises = async (keyword) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/${keyword}.json?print=pretty`);
  const data = response.json();
  return data;
}

export const fetchStories = async (storyID) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`);
  const data = response.json();
  return data;
}

export const fetchImages = async (url) => {
  const encoded = encodeURIComponent(url)
  const response = await fetch(`https://opengraph.io/api/1.1/site/${encoded}?app_id=0e0b4950-def6-4c04-b616-bbce614bff05`);
  const data = response.json();
  return data;
}
