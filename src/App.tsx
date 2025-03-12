import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { ResultCard } from './components/ResultCard';
import { FeatureCard } from './components/FeatureCard';
import { Search, Shield, Database, Wifi, FileSearch, Key, Radio } from 'lucide-react';
import type { SearchResult } from './types';

// lista de features disponiveis no momento
const FEATURES = [
  { icon: Search, title: 'Busca ExploitDB & CVE', description: 'Pesquise em extensos bancos de dados de vulnerabilidades e exploits conhecidos' },
  { icon: Database, title: 'Scanner de Tecnologias', description: 'Identifique tecnologias e frameworks utilizados em sites-alvo' },
  { icon: Wifi, title: 'Detector de Takeover de Subdomínios', description: 'Detecte vulnerabilidades potenciais de takeover de subdomínios' },
  { icon: FileSearch, title: 'Scanner de Arquivos Sensíveis', description: 'Varredura avançada de arquivos e diretórios sensíveis' },
  { icon: Key, title: 'Verificador de Vazamento de Credenciais', description: 'Verifique credenciais expostas em vazamentos de dados públicos' },
  { icon: Radio, title: 'Scanner de Portas', description: 'Capacidades básicas de varredura de portas' },
  { icon: Shield, title: 'Testador de Exploits Comuns', description: 'Testes rápidos para vulnerabilidades de segurança comuns' },
];

function App() {
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = (query: string) => {
    // TODO: implementar busca real depois
    const mockResults: SearchResult[] = [
      {
        type: 'cve',
        title: 'CVE-2024-1234',
        description: 'Vulnerabilidade crítica em framework de aplicação web',
        severity: 'critical',
        date: '2024-03-15'
      },
      {
        type: 'exploit',
        title: 'Vetor de Injeção SQL',
        description: 'Detectada vulnerabilidade potencial de injeção SQL',
        severity: 'high',
        date: '2024-03-15'
      }
    ];
    setResults(mockResults);
  };

  return (
    <div className="min-h-screen bg-cyber-black text-gray-100">
      <header className="bg-cyber-dark border-b border-cyber-blue/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-cyber-blue" />
              <h1 className="text-2xl font-bold text-cyber-blue">404XploitHub</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyber-blue mb-4">
            Plataforma Completa de Pesquisa de Segurança
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ferramentas abrangentes de análise de segurança para pesquisadores e pentesters
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {results.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-cyber-blue">Resultados da Pesquisa</h2>
            {results.map((result, index) => (
              <ResultCard key={index} result={result} />
            ))}
          </div>
        )}

        <div className="text-center mt-16 mb-8">
          <div className="inline-block bg-cyber-dark border border-cyber-blue/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-cyber-blue mb-2">Projeto em Desenvolvimento</h3>
            <p className="text-gray-400">
              Este projeto está em fase de desenvolvimento ativo. Novas funcionalidades e melhorias serão implementadas em breve.
              Desenvolvido com dedicação para a comunidade de segurança.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-cyber-dark border-t border-cyber-blue/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-400">
            Use com responsabilidade. Apenas para fins de pesquisa em segurança.
          </p>
        </div>
      </footer>
    </div>
  );
}
