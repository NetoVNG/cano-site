import { GetStaticProps } from 'next';
import { notion } from '@/lib/notion';

export const getStaticProps: GetStaticProps = async () => {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DB_CONTENT!,
    filter: { property: 'Status', select: { equals: 'Publicado' } },
    page_size: 5,
  });
  return { props: { items: res.results } };
};
