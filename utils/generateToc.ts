export interface TocItem {
  level: number;
  value: string;
}

export default function generateToc(data: string) {
  const html = new DOMParser().parseFromString(data, 'text/html');

  const toc: TocItem[] = [];

  const headings = html.querySelectorAll('h2, h3');

  headings.forEach((heading, i) => {
    if (heading.textContent) {
      toc.push({
        level: Number(heading.tagName.slice(1)),
        value: heading.textContent,
      });
    }
  });

  return toc;
}
