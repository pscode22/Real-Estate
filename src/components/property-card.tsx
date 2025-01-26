import { Property } from '@/types';
import millify from 'millify';
import { BsGridFill } from 'react-icons/bs';
import { GoUnverified, GoVerified } from 'react-icons/go';
import { IoBedOutline } from 'react-icons/io5';
import { TbBath } from 'react-icons/tb';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function PropertyCard({
  item,
  isFav,
  favBtnClick,
}: {
  item: Property;
  isFav: boolean;
  favBtnClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: Property
  ) => void;
}) {
  return (
    <div className="card" key={item.id}>
      <div
        className="img bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${item.coverPhoto.url})` }}
      />

      <div className="badge">
        {item.isVerified ? (
          <GoVerified size={11} />
        ) : (
          <GoUnverified size={11} />
        )}
        {item.isVerified ? 'Verified' : 'Not Verified'}
      </div>

      <div className="px-5 mt-5 text-black relative">
        <div className="flex justify-between pe-5">
          <p className="font-semibold text-[1.375rem] text-[#5a4dea]">
            AED {millify(item.price)}
            <span className="text-xs ml-px text-secondary">/month</span>
          </p>

          <button
            className="border h-100 p-3 rounded-full border-secondary"
            onClick={(e) => favBtnClick(e, item)}
          >
            {isFav ? (
              <FaHeart size={22} color="#7268ed" />
            ) : (
              <FaRegHeart size={22} color="#7268ed" />
            )}
          </button>
        </div>

        <p className="font-bold text-lg min-h-14 flex align-middle">
          {item.title.length <= 40
            ? item.title
            : item.title.slice(0, 41) + '...'}
        </p>

        <div className="flex flex-wrap text-xs mb-2.5 mt-1.5 text-secondary h-8 align-middle">
          <p>
            <span style={{ fontWeight: 'bold' }}>Agency :-</span>{' '}
            {item.agency.name}
          </p>
        </div>

        <hr />

        <footer
          className="text-xs font-medium text-secondary  grid place-items-center gap-[0.3125rem] mt-3"
          style={{ gridTemplateColumns: 'auto auto auto' }}
        >
          <p className="flex gap-[0.1875rem] align-middle ">
            <IoBedOutline className="text-[0.9375rem] text-primary" />
            {item.rooms} Bed{item.rooms > 1 ? 's' : null}
          </p>

          <p className="flex gap-[0.1875rem] align-middle ">
            <TbBath className="text-[0.9375rem] text-primary" />
            {item.baths} Bathroom{item.baths > 1 ? 's' : null}
          </p>

          <p className="flex gap-[0.1875rem] align-middle ">
            <BsGridFill className="text-[0.9375rem] text-primary" />
            {item.area.toFixed(2)} sqft
          </p>
        </footer>
      </div>
    </div>
  );
}
