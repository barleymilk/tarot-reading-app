import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Section from '../components/Section';
import Table from '../components/Table';
import { cards } from '../db/cards.json';
import styles from './About.module.css';

const majorHeaders = ['번호', '이름', '정방향', '역방향'];
const majorData = cards.major.map(card => [
  card.id,
  `${card.korean} (${card.name})`,
  card.upright.join(', '),
  card.reversed.join(', '),
]);

const minorHeaders = ['번호', 'Wands', 'Cups', 'Swords', 'Pentacles'];
const minorData = cards.minor.wands.map((_, index) => [
  index < 10 ? index + 1 : ['Page', 'Knight', 'Queen', 'King'][index - 10],
  cards.minor.wands[index]?.meaning || '',
  cards.minor.cups[index]?.meaning || '',
  cards.minor.swords[index]?.meaning || '',
  cards.minor.pentacles[index]?.meaning || '',
]);

function About() {
  return (
    <>
      <Header />
      <main className="container">
        <Section title="Major Arcana" id="major-arcana">
          <p className={styles.section__paragraph}>
            메이저 아르카나는 말 자체가 큰 흐름이라는 뜻이며, 커다란 영향을
            의미한다. 각각 고유한 이름을 가지나, 죽음 카드의 경우에는 이름을
            적지 않는 경우도 있다. 물론 옛날에는 모든 카드의 이름을 따로 적지
            않은 카드도 존재했다. 약식으로 이것만으로도 점을 볼 수 있다고 한다.
            다만 타로 카드의 78장이 모두 고유한 의미를 갖고 있기 때문에 해석할
            수 있는 결과에 한계가 생긴다. 초보들은 78장의 의미를 전부 외우기
            번거롭다는 이유로 메이저 22장만 빼서 따로 점을 치는 일이 많다.
            <br />
            <br />
            주로 22장으로 구성된다. 바보 혹은 광대로 번역되는 The Fool이 0번의
            자리에 있지만 경우에 따라서는 이 카드가 1번일 때도 있고, 세계(The
            world) 카드 바로 앞 21번에 올 때도 있고, 22번으로 세계 카드 뒤에
            위치할 때도 있고, 아예 번호를 달지 않고 독립적인 위치를 가질 때도
            있다. 카드의 번호 자체에 수비학적인 의미가 있다고 보는 사람들도
            있으나, 이렇게 정립되지 못한 체계 탓에 메디벌 캣 덱[17]에서는 사용자
            마음대로 하라며 모든 메이저 아르카나에 번호를 붙이지 않았다. 이것은
            힘과 정의 카드의 순서도 마음대로 하라는 배려로도 해석할 수 있다.
          </p>
          <Table headers={majorHeaders} data={majorData} />
        </Section>
        <Section title="Minor Arcana" id="minor-arcana">
          <p className={styles.section__paragraph}>
            마이너 아르카나는 작은 흐름이라는 뜻으로 사소한 일들, 작은 사건을
            의미한다. 크게 4종류의 수트(suits)로 나눠지고 각 수트마다 14장씩
            구성되어 총합 56장의 카드로 이루어져 있다. 플레잉 카드와 달리
            대부분의 타로 카드에는 아라비아 숫자 대신 로마 숫자[21]가 적혀있다.
          </p>
          <Table headers={minorHeaders} data={minorData} />
        </Section>
        <Section title="타로카드 뽑는 방식" id="how-draw">
          <p className={styles.section__paragraph}>
            메이저 아르카나는 말 자체가 큰 흐름이라는 뜻이며, 커다란 영향을
            의미한다. 각각 고유한 이름을 가지나, 죽음 카드의 경우에는 이름을
            적지 않는 경우도 있다.
          </p>
        </Section>
        <FloatingButton />
      </main>
      <Footer />
    </>
  );
}

export default About;
