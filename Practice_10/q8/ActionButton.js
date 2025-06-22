export default function ActionButton({ isActive, text }) {
    return (
      <button
        className={`text-white font-bold py-2 px-4 rounded 
        ${isActive ? 'bg-blue-500 cursor-pointer' : 'bg-gray-400 cursor-not-allowed' }`}
      >
        {text}
      </button>
    );
  }