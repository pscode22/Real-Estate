import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FocusEventHandler, useState } from 'react';
import { useSearchSettings } from '../context/app.ctx';
import millify from 'millify';
import { Button } from './ui/button';
import DropdownBox from './ui/dropdown-box';
import { data } from './lib/data';

type PriceInputProps = {
  children: React.ReactNode;
  name: 'minPrice' | 'maxPrice';
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus: FocusEventHandler<HTMLInputElement>;
  dropdown: boolean;
};

// Block Element
const PriceInput = ({
  children,
  name,
  value,
  onChange,
  onFocus,
  dropdown,
}: PriceInputProps) => (
  <div className="w-1/3">
    <input
      className="py-3 px-2.5 h-[28px] w-full relative border"
      value={value}
      name={name}
      onChange={onChange}
      onFocus={onFocus}
    />
    {dropdown && <DropdownBox className="top-8 w-1/3">{children}</DropdownBox>}
  </div>
);

export default function Price() {
  // State
  const { searchSettings, setSearchSettings } = useSearchSettings();
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState<{ minPrice: boolean; maxPrice: boolean }>({
    minPrice: false,
    maxPrice: false,
  });

  // Functions
  const handleSelect = ({
    value,
    option,
  }: {
    value: string;
    option: 'maxPrice' | 'minPrice';
  }) => {
    setSearchSettings((e) => ({ ...e, [option]: value }));
    setPrice((e) => ({ ...e, [option]: false }));
    return;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const input = e.target.value.replace(/[a-zA-Z]|\s|[,]/gm, '');

    setSearchSettings((e) => ({ ...e, [key]: input }));
  };

  // Setting blocks
  const minPrice = (
    <PriceInput
      name="minPrice"
      value={searchSettings.minPrice}
      onChange={handleChange}
      onFocus={() => setPrice((e) => ({ ...e, minPrice: true }))}
      dropdown={price.minPrice}
    >
      {data[0].minPrice?.map(({ name, value }) => {
        return (
          <div
            key={value}
            onClick={() => handleSelect({ value, option: 'minPrice' })}
            className="py-[10px] px-[5px] font-medium cursor-pointer hover:bg-primary
                         hover:text-white focus:bg-[#e8e7e7] focus:text-primary z-10"
            style={{ borderBottom: '2px solid #f0f0f0' }}
          >
            {name}
          </div>
        );
      })}
    </PriceInput>
  );

  const maxPrice = (
    <PriceInput
      name="maxPrice"
      value={searchSettings.maxPrice}
      onChange={handleChange}
      onFocus={() => setPrice((e) => ({ ...e, maxPrice: true }))}
      dropdown={price.maxPrice}
    >
      {data[1].maxPrice?.map(({ name, value }) => {
        return (
          <div
            key={value}
            onClick={() => handleSelect({ value, option: 'maxPrice' })}
            className="py-[10px] px-[5px] font-medium cursor-pointer hover:bg-primary
                         hover:text-white focus:bg-[#e8e7e7] focus:text-primary z-10"
            style={{ borderBottom: '2px solid #f0f0f0' }}
          >
            {name}
          </div>
        );
      })}
    </PriceInput>
  );

  return (
    <div className="border-r-2 flex w-full gap-3 border-r-[#f0f0f0] relative">
      <div>
        <p className="font-semibold text-secondary">Price</p>
        <p className="font-bold text-black w-full">
          {millify(searchSettings.minPrice)} AED -{' '}
          {millify(searchSettings.maxPrice)} AED
        </p>
      </div>

      <button
        className="border-none bg-[#e8e7f7] p-1 w-max h-max text-primary self-end mb-1"
        style={{ borderRadius: '50%' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaAngleUp size={11} /> : <FaAngleDown size={11} />}
      </button>

      {isOpen && (
        <div
          className="dropDownTypes absolute w-[360px] bg-white z-10 top-[50px] px-6 pt-6 pb-2.5"
          style={{
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
          }}
        >
          <div className="flex flex-row justify-between relative flex-wrap">
            {minPrice}
            <p className="font-bold">-</p>
            {maxPrice}
          </div>

          <Button
            onClick={() => setIsOpen(false)}
            className="text-white bg-primary float-end px-1.5 py-2 font-semibold cursor-pointer mt-4 rounded text-sm w-[4rem]"
          >
            Done
          </Button>
        </div>
      )}
    </div>
  );
}
