import BedsNBaths from '@/components/beds-n-baths';
import Location from '@/components/location';
import Price from '@/components/price';
import PropertyCard from '@/components/property-card';
import PropertyType from '@/components/property-type';
import { Button } from '@/components/ui/button';
import { useFavProperties } from '@/context/fav.ctx';
import { rentalData } from '@/lib/data';
import { Property } from '@/types';

const filterContainerStyle: React.CSSProperties = {
  borderRadius: '.4rem',
  boxShadow: '0 0 0 1px rgba(0, 0, 0, .05)',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  rowGap: '1rem',
  columnGap: '1.5rem',
};

export default function Home() {
  const { favorites, setFavorites } = useFavProperties();

  const handleFavBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: Property
  ) => {
    e.preventDefault();

    if (favorites.properties) {
      if (favorites.properties.some((e) => e.id === item.id)) {
        setFavorites({
          properties: favorites.properties.filter((e) => e.id !== item.id),
        });
      } else {
        setFavorites({ properties: [...favorites.properties, item] });
      }
    } else {
      setFavorites({ properties: [item] });
    }
  };
  
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

      <div className="flex align-center justify-center mb-5">
        <Button variant="default" className="bg-primary text-white rounded">
          Search
        </Button>
      </div>

      {/* Property Cards */}
      <section className="cardContainer">
        {rentalData.hits.map((item) => (
          <PropertyCard
            item={item}
            key={`${item.id}`}
            isFav={
              favorites.properties
                ? favorites.properties.some((e) => e.id === item.id)
                : false
            }
            favBtnClick={handleFavBtnClick}
          />
        ))}
      </section>
    </main>
  );
}
