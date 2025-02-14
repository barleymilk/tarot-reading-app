import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import SectionVertical from '../components/SectionVertical';

const subscribeData = [
  {
    id: 1,
    title: '무료',
    price: 0,
    content: [
      '게스트 최대 10명',
      '7일간의 페이지 기록',
      '70개 이상의 API 통합',
    ],
    upgrade: false,
  },
  {
    id: 2,
    title: '플러스',
    price: 14000,
    content: [
      '게스트 최대 100명',
      '30일간의 페이지 기록',
      '무제한 블록',
      '무제한 파일 업로드',
      '무제한 차트',
    ],
    upgrade: true,
  },
  {
    id: 3,
    title: '비즈니스',
    price: 21000,
    content: [
      '게스트 최대 250명',
      '90일간의 페이지 기록',
      '비공개 팀스페이스',
      'SAML SSO',
    ],
    upgrade: true,
  },
];

function Subscribe() {
  return (
    <>
      <Header />
      <main className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          {subscribeData.map(data => (
            <SectionVertical
              key={data.id}
              title={data.title}
              price={data.price}
              content={data.content}
              upgrade={data.upgrade}
            />
          ))}
        </div>
        <FloatingButton />
      </main>
      <Footer />
    </>
  );
}

export default Subscribe;
