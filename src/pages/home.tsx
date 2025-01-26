import BedsNBaths from '@/components/beds-bath';
import Location from '@/components/location';
import Price from '@/components/price';
import Card from '@/components/property-card';
import PropertyType from '@/components/property-type';
import { rentalData } from '@/lib/data';

const filterContainerStyle: React.CSSProperties = {
  borderRadius: '.4rem',
  boxShadow: '0 0 0 1px rgba(0, 0, 0, .05)',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  rowGap: '1rem',
  columnGap: '1.5rem',
};

export default function Home() {
  return (
    <main>
      <section
        className="mt-10 mb-5 w-100 mx-4 md:mx-10 xl:mx-32 bg-white lg:h-[5.125rem] py-4 px-5 grid"
        style={filterContainerStyle}
      >
        <Location />
        <Price />
        <BedsNBaths />
        <PropertyType />
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
