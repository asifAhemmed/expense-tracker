import { Search } from 'lucide-react';
import { useState } from 'react';

const Filtering = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <div className="flex gap-2">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        <button
          onClick={() => onSearch(searchTerm)}
          className="flex items-center gap-2 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors"
        >
          <Search size={20} />
          Search
        </button>
      </div>
    </div>
  );
};




export default Filtering;
