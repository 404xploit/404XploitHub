import React from 'react';
import { AlertTriangle, Shield, Terminal } from 'lucide-react';
import { SearchResult } from '../types';

interface ResultCardProps {
  result: SearchResult;
}

export function ResultCard({ result }: ResultCardProps) {
  const getSeverityColor = (severity?: string) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-950';
      case 'high': return 'text-orange-400 bg-orange-950';
      case 'medium': return 'text-yellow-400 bg-yellow-950';
      case 'low': return 'text-green-400 bg-green-950';
      default: return 'text-cyber-blue bg-cyber-dark';
    }
  };

  const getSeverityText = (severity?: string) => {
    switch (severity) {
      case 'critical': return 'Crítico';
      case 'high': return 'Alto';
      case 'medium': return 'Médio';
      case 'low': return 'Baixo';
      default: return severity;
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'cve': return <AlertTriangle className="text-red-400" />;
      case 'exploit': return <Terminal className="text-cyber-blue" />;
      default: return <Shield className="text-cyber-blue" />;
    }
  };

  return (
    <div className="bg-cyber-dark border border-cyber-blue/20 rounded-lg p-6 mb-4 hover:border-cyber-blue/50 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {getIcon(result.type)}
          <div>
            <h3 className="text-lg font-semibold text-cyber-blue">{result.title}</h3>
            <p className="text-gray-400 mt-1">{result.description}</p>
          </div>
        </div>
        {result.severity && (
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(result.severity)}`}>
            {getSeverityText(result.severity)}
          </span>
        )}
      </div>
      {result.date && (
        <div className="mt-4 text-sm text-gray-500">
          Encontrado: {result.date}
        </div>
      )}
    </div>
  );
}