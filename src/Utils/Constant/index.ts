export const formatDate = (): string => {
  return new Date(+new Date() + 3240 * 10000)
    .toISOString()
    .replace('T', ' ')
    .replace(/\..*/, '');
};

export const SAMPLEUSER = [
  { userId: 1, userName: 'John', profileImage: 'index.png' },
  { userId: 2, userName: 'Alice', profileImage: 'index.png' },
  { userId: 3, userName: 'Tom', profileImage: 'index.png' },
];

export const SAMPLEMESSAGE = [
  {
    id: 1,
    user: SAMPLEUSER[0],
    content: 'Hello',
    date: formatDate(),
    reply: null,
  },
  {
    id: 2,
    user: SAMPLEUSER[1],
    content: 'Hello',
    date: formatDate(),
    reply: null,
  },
  {
    id: 3,
    user: SAMPLEUSER[2],
    content: 'Hello',
    date: formatDate(),
    reply: null,
  },
  {
    id: 4,
    user: SAMPLEUSER[2],
    content: 'Hello',
    date: formatDate(),
    reply: null,
  },
  {
    id: 5,
    user: SAMPLEUSER[1],
    content: 'Hello',
    date: formatDate(),
    reply: null,
  },
];
