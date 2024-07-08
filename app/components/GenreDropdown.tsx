import { FC } from "react";

type GenreDropdownProps = {
  genres: string[];
  onGenreChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const GenreDropdown: FC<GenreDropdownProps> = ({ genres, onGenreChange }) => {
  return (
    <div className="flex gap-4 my-8 flex-col">
      <label htmlFor="genre" className="text-lg font-semibold">
        Genre
      </label>
      <select
        name="genre"
        id="genre"
        onChange={onGenreChange}
        className="p-2 border border-gray-300 rounded-md w-64"
      >
        <option value="">All</option>
        {genres?.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreDropdown;
