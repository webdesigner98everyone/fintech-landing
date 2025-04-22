import React from 'react';

interface Props {
    categories: string[];
    selected: string;
    onSelect: (category: string) => void;
}

const ProductFilter: React.FC<Props> = ({ categories, selected, onSelect }) => {
    return (
        <div className="flex gap-2 flex-wrap mb-6">
            <button
                key="all"
                onClick={() => onSelect('all')}
                className={`px-4 py-2 rounded ${selected === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                    }`}
            >
                Todos
            </button>

            {categories
                .filter((cat) => typeof cat === 'string' && cat.trim() !== '')
                .map((cat, index) => (
                    <button
                        key={`${cat}-${index}`}
                        onClick={() => onSelect(cat)}
                        className={`px-4 py-2 rounded ${selected === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'
                            }`}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
        </div>
    );
};

export default ProductFilter;
