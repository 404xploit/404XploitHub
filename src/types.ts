export interface SearchResult {
  type: 'cve' | 'exploit' | 'file' | 'subdomain' | 'credential' | 'port' | 'technology';
  title: string;
  description: string;
  severity?: 'low' | 'medium' | 'high' | 'critical';
  date?: string;
}