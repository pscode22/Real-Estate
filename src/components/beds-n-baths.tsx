import { useSearchSettings } from '@/context/app.ctx';
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import DropdownBox from './ui/dropdown-box';
import { data } from './lib/data';

type TBlockProps = {
  children: React.ReactNode;
  isDropdown: boolean;
  arrowBtnClick: React.MouseEventHandler<HTMLButtonElement>;
  name: 'beds' | 'baths';
  numOfName: number;
};

const Block = ({
  children,
  isDropdown,
  arrowBtnClick,
  name,
  numOfName,
}: TBlockProps) => (
  <div className='relative'>
    <div className="flex">
      <p className="font-bold text-black w-full">
        {numOfName}+{name}
      </p>
      <button
        className="border-none p-1 w-max h-max text-primary self-end"
        style={{ borderRadius: '50%' }}
        // onClick={() => setDropdown((e) => ({ ...e, beds: !e.beds }))}
        onClick={arrowBtnClick}
      >
        {isDropdown ? <FaAngleUp size={11} /> : <FaAngleDown size={11} />}
      </button>
    </div>

    {isDropdown && (
      <DropdownBox className="w-[50px] top-6 text-center">{children}</DropdownBox>
    )}
  </div>
);

export default function BedsNBaths() {
  const [isDropdown, setDropdown] = useState<{ beds: boolean; baths: boolean }>(
    {
      beds: false,
      baths: false,
    }
  );
  const { searchSettings, setSearchSettings } = useSearchSettings();

  const handleSelect = ({
    name,
    value,
  }: {
    name: 'numOfBeds' | 'numOfBaths';
    value: number;
  }) => {
    setSearchSettings((e) => ({ ...e, [name]: value }));
    if (name === 'numOfBeds') {
      setDropdown((e) => ({ ...e, beds: false }));
    } else {
      setDropdown((e) => ({ ...e, baths: false }));
    }
  };
  return (
    <div className="border-r-2 flex w-full gap-3 border-r-[#f0f0f0] relative">
      <div>
        <p className="font-semibold text-secondary">Beds & Baths</p>
        <div className="flex gap-5">
          <div className="flex gap-4 align-middle">
            {/* Number Of Beds */}
            <Block
              isDropdown={isDropdown.beds}
              arrowBtnClick={() =>
                setDropdown((e) => ({ ...e, beds: !e.beds }))
              }
              name={'beds'}
              numOfName={searchSettings.numOfBeds}
            >
              {data[2].items?.map(({ name, value }) => {
                return (
                  <div
                    key={name}
                    onClick={(e) =>
                      handleSelect({
                        name: 'numOfBeds',
                        value: Number(e.currentTarget.innerText),
                      })
                    }
                    className="py-[10px] px-[5px] font-medium cursor-pointer hover:bg-primary hover:text-white focus:bg-[#e8e7e7] focus:text-primary"
                    style={{ borderBottom: '2px solid #f0f0f0' }}
                  >
                    {value}
                  </div>
                );
              })}
            </Block>

            {/* Number Of Baths */}
            <Block
              isDropdown={isDropdown.baths}
              arrowBtnClick={() =>
                setDropdown((e) => ({ ...e, baths: !e.baths }))
              }
              name={'baths'}
              numOfName={searchSettings.numOfBaths}
            >
              {data[3].items?.map(({ name, value }) => {
                return (
                  <div
                    key={name}
                    onClick={(e) =>
                      handleSelect({
                        name: 'numOfBaths',
                        value: Number(e.currentTarget.innerText),
                      })
                    }
                    className="py-[10px] px-[5px] font-medium cursor-pointer hover:bg-primary hover:text-white focus:bg-[#e8e7e7] focus:text-primary"
                    style={{ borderBottom: '2px solid #f0f0f0' }}
                  >
                    {value}
                  </div>
                );
              })}
            </Block>
          </div>
        </div>
      </div>
    </div>
  );
}
