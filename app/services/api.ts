export const fetchDestinations = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/itinerary?highlight=true`
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const fetchArticles = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/article`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
