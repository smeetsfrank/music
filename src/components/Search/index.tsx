import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchSpotifyData } from '../../utils/functions';

const Search: React.FC = () => {
  const searchCtx = useSelector((state: RootState) => state.search);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      alert('please enter a valid value');
      return;
    }
    const searchTerm = inputRef.current.value;
    const response = await fetchSpotifyData(
      localStorage.getItem('access_token')!,
      searchTerm,
      searchCtx.filter,
    );
    console.log(response);
  };

  return (
    <form onSubmit={searchHandler}>
      <input type="search" ref={inputRef} />
      <button type="submit">Search</button>
    </form>
  );
};
export default Search;
