const fetchAdvice = async () => {
  const playingOptions = {
    url: "https://api.adviceslip.com/advice",
  };
  const response = await fetch(playingOptions.url, {
    method: "GET",
    cache: 'no-store',
  });

  if (response.status !== 200) {
    return response.status;
  }

  const res_data = await response.json();

  return res_data.slip;
}

export { fetchAdvice };
