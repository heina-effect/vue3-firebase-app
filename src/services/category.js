const categories = [
  {
    label: 'Q&A',
    value: 'qna',
  },
  {
    label: '커뮤니티',
    value: 'community',
  },
  {
    label: '공지사항',
    value: 'notice',
  },
  {
    label: '강의',
    value: 'lecture',
  },
];

export function getCategories() {
  //DB로 관리하는 경우
  // axios.get 하면 됨
  return categories;
}
