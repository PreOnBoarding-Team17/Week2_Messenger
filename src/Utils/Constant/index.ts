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
  { userId: 1, userName: '인권', profileImage: Profile1 },
  { userId: 2, userName: '다솜', profileImage: Profile2 },
  { userId: 3, userName: '상섭', profileImage: Profile3 },
];

export const SAMPLEMESSAGE = [
  {
    id: 1,
    user: SAMPLEUSER[0],
    content: '네!!!',
    date: formatDate(),
    reply: null,
  },
  {
    id: 2,
    user: SAMPLEUSER[1],
    content: '저희 그럼 회의 진행할까요??',
    date: '2022-02-11 16:42:31',
    reply: null,
  },
  {
    id: 3,
    user: SAMPLEUSER[0],
    content: '어서오세요~',
    date: '2022-02-11 16:32:31',
    reply: null,
  },
  {
    id: 4,
    user: SAMPLEUSER[2],
    content: `반갑습니다. 😄`,
    date: '2022-02-11 13:32:31',
    reply: null,
  },
  {
    id: 5,
    user: SAMPLEUSER[1],
    content: `안녕하세요 저는 ${SAMPLEUSER[1].userName}이라고 합니다. `,
    date: '2022-02-11 06:32:31',
    reply: null,
  },
];
