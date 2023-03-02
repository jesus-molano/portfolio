import { useState } from 'react';
import './searchbar.css';

interface Props {
  filterProjects: (search: string) => void;
}

export const SearchBar = ({ filterProjects }: Props) => {
  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    filterProjects(event.target.value);
  };
  return (
    <div id='search-bar' className='search-bar'>
      <input
        type='text'
        placeholder='Search'
        className='search-input'
        value={search}
        onChange={handleChange}
      />

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='search-icon'
      >
        <circle cx='11' cy='11' r='8'></circle>
        <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
      </svg>
    </div>
  )
}
