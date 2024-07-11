const API_KEY = '44f7299f7a54491e9990196db82ec03f';

export const getTopHeadlines = async (Category) => {
  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&category=${Category}`
  );

  if (data.status == 200) {
    return data.json();
  }

  return "Oops, Sorry there is some error";
};
