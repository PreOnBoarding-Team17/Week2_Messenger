import Profile1 from 'Assets/Profile1.png';
import Profile2 from 'Assets/Profile2.png';
import Profile3 from 'Assets/Profile3.png';
import Profile4 from 'Assets/Profile4.png';

export const PROFILELIST = [Profile1, Profile2, Profile3, Profile4];

export const formatDate = (): string => {
  return new Date(+new Date() + 3240 * 10000)
    .toISOString()
    .replace('T', ' ')
    .replace(/\..*/, '');
};

export const SAMPLEUSER = [
  { userId: 1, userName: 'John', profileImage: Profile1 },
  { userId: 2, userName: 'Alice', profileImage: Profile2 },
  { userId: 3, userName: 'Tom', profileImage: Profile3 },
];

export const SAMPLEMESSAGE = [
  {
    id: 1,
    user: SAMPLEUSER[0],
    content: 'Hello, world!',
    date: formatDate(),
    reply: null,
  },
  {
    id: 2,
    user: SAMPLEUSER[1],
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    date: formatDate(),
    reply: null,
  },
  {
    id: 3,
    user: SAMPLEUSER[2],
    content:
      'Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
    date: '2022-02-11 16:32:31',
    reply: null,
  },
  {
    id: 4,
    user: SAMPLEUSER[2],
    content: 'Hello',
    date: '2022-02-11 13:32:31',
    reply: null,
  },
  {
    id: 5,
    user: SAMPLEUSER[1],
    content:
      'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. ',
    date: '2022-02-11 06:32:31',
    reply: null,
  },
];
