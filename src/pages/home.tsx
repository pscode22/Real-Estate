import Card from '@/components/ui/card';
import { rentalData } from '@/lib/data';

export default function Home() {
  return (
    <main>
      <section className="mt-10 mb-5 w-100 bg-white h-[5.125rem]">Location</section>

      {/* Property Cards */}
      <section className="cardContainer">
        {rentalData.hits.map((item) => (
          <Card item={item} />
        ))}
      </section>
    </main>
  );
}
