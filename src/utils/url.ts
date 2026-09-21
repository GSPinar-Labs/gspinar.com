const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path: string): string {
  if (
    /^(?:[a-z]+:)?\/\//i.test(path) ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
