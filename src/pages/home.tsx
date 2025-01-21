import Location from '@/components/location';
import Card from '@/components/ui/card';
import { rentalData } from '@/lib/data';

const filterContainerStyle : React.CSSProperties = {
  borderRadius: '.4rem',
  boxShadow: ' 0 0 0 1px rgba(0, 0, 0, .05)',
  gridTemplateColumns : 'repeat(auto-fit, minmax(150px, 1fr))',
  rowGap : '1rem',
  columnGap : '1.5rem'
};

export default function Home() {
  return (
    <main>
      <section
        className="mt-10 mb-5 w-100 md:mx-32 bg-white lg:h-[5.125rem] py-4 px-5 grid"
        style={filterContainerStyle}
      >
        <Location />
        <Location />
        <Location />
        <Location />
      </section>

      {/* Property Cards */}
      <section className="cardContainer">
        {rentalData.hits.map((item) => (
          <Card item={item} key={`${item.id}`} />
        ))}
      </section>
    </main>
  );
}
