// app/page.tsx
import { notion } from '@/lib/notion';

export default async function Home() {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DB_CONTENT!,
    filter: { property: 'Status', select: { equals: 'Publicado' } },
    page_size: 10,
  });

  return (
    <main className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4">Conteúdos publicados</h1>
      <ul>
        {res.results.map((item: any) => (
          <li key={item.id} className="mb-2">
            {item.properties.Título?.title[0]?.plain_text}
          </li>
        ))}
      </ul>
    </main>
  );
}
