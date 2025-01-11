import { rentalData } from '@/lib/data';
import millify from 'millify';
import { GoUnverified, GoVerified } from 'react-icons/go';

export default function Card() {
  return (
    <section className="flex flex-col gap-4">
      {rentalData.hits.map((item) => (
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

          <div className="px-5 mt-5 text-black relative block">
            <div>
              <div className="propertyInfo">
                <p className="font-semibold text-[1.375rem] text-[#5a4dea]">
                  AED {millify(item.price)}
                  <span className="text-xs ml-px text-[#757575]">/month</span>
                </p>

                <p className="my-3 font-bold text-lg min-h-3 flex align-middle">
                  {item.title.length <= 40
                    ? item.title
                    : item.title.slice(0, 41) + '...'}
                </p>

                {/* <FavBtn
                  id={item.id}
                  favCards={favCards}
                  handleClick={handleClick}
                /> */}
              </div>

              <div className="flex flex-wrap text-xs mb-2.5 mt-1.5 text-[#757575] h-8 align-middle">
                <p>
                  <span style={{ fontWeight: 'bold' }}>Agency:-</span>{' '}
                  {item.agency.name}
                </p>
              </div>
            </div>

            <hr />
          </div>
        </div>
      ))}
    </section>
  );
}
