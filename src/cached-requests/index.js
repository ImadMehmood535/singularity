const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL_SERVER;

const reFetech = 5;

export async function getAllBlogs() {
  const res = await fetch(`${BaseUrl}/blog`, {
    next: { revalidate: reFetech },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function getSingleBlog(slug) {
  const res = await fetch(`${BaseUrl}/blog/${slug}`, {
    next: { revalidate: reFetech },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
