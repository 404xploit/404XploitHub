import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o domínio, CVE ou termo de busca..."
          className="w-full px-4 py-3 pl-12 text-lg bg-cyber-dark border border-cyber-blue/20 rounded-lg 
                   text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyber-blue/50 
                   focus:ring-1 focus:ring-cyber-blue/50"
        />
        <Search className="absolute left-4 text-cyber-blue" size={20} />
        <button
          type="button"
          className="absolute right-4 p-2 text-cyber-blue hover:text-cyber-blue/80"
        >
          <Filter size={20} />
        </button>
      </div>
    </form>
  );
}