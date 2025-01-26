import { FaHeart } from 'react-icons/fa';

export default function FavBtn() {
  return (
    <button
      className="border h-100 p-3 rounded-full border-secondary"
    >
      <FaHeart size={24} color="#7268ed" />
    </button>
  );
}
