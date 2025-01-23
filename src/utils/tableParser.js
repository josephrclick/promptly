// src/utils/tableParser.js

export const hasMarkdownTable = (content) => {
  const tableRegex = /\|(.+)\|\n\|(?:-{3,}[:|]-{3,})*\|\n((?:\|.+\|\n?)*)/;
  return tableRegex.test(content);
};

export const parseMarkdownTable = (content) => {
  const tables = [];
  const tableRegex = /\|(.+)\|\n\|(?:-{3,}[:|]-{3,})*\|\n((?:\|.+\|\n?)*)/g;
  
  let match;
  while ((match = tableRegex.exec(content)) !== null) {
    const headerRow = match[1].trim();
    const dataRows = match[2].trim().split('\n');
    
    const headers = headerRow
      .split('|')
      .map(cell => cell.trim())
      .filter(cell => cell !== '');
      
    const rows = dataRows.map(row => 
      row
        .split('|')
        .map(cell => cell.trim())
        .filter(cell => cell !== '')
    );
    
    tables.push({
      headers,
      rows
    });
  }
  
  return tables;
};