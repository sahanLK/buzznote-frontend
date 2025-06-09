// components/SearchBar.tsx
import { Search } from "lucide-react";
import { useState } from "react";

type PropType = {
    placeholder?: string,
    onFocusPlaceHolder?: string,
    className?: string
}

export default function SearchBar(props: PropType) {
    const [activePlaceholder, setActivePlaceholder] = useState(props.placeholder);

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <Search className="w-5 h-5" />
            </div>
            <input
                type="text"
                placeholder={activePlaceholder}
                onFocus={() => setActivePlaceholder(props.onFocusPlaceHolder)}
                onBlur={() => setActivePlaceholder(props.placeholder)}
                className="w-full pl-10 pr-4 py-2 rounded-full border-1 border-gray-300 transition-all duration-200 bg-white placeholder-gray-600 focus:outline-2 focus:transition-none focus:outline-green-700"
            />
        </div>
    );
}
