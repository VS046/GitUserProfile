import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(value);
        setValue("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-2 justify-center mt-10"
        >
            <div className="relative z-20" >
            <input
                className="border px-3 py-2 rounded-md w-64 bg-black text-white focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Search Github User"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            </div> 
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
