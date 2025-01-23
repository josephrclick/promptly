// src/utils/tableParser.js

export const parseMarkdownTable = (markdownText) => {
    // Find table in markdown text
    const tableRegex = /\|(.+)\|\n\|(?:-{3,}[:|]-{3,})*\|\n((?:\|.+\|\n?)*)/g;
    const tables = [];
    
    let match;
    while ((match = tableRegex.exec(markdownText)) !== null) {
      const headerRow = match[1];
      const bodyRows = match[2];
      
      // Parse headers
      const headers = headerRow
        .split('|')
        .filter(cell => cell.trim())
        .map(cell => cell.trim());
      
      // Parse body rows
      const rows = bodyRows
        .trim()
        .split('\n')
        .map(row => 
          row
            .split('|')
            .filter(cell => cell.trim())
            .map(cell => cell.trim())
        );
      
      tables.push({
        headers,
        rows
      });
    }
    
    return tables;
  };
  
  export const hasMarkdownTable = (text) => {
    const tableRegex = /\|(.+)\|\n\|(?:-{3,}[:|]-{3,})*\|\n((?:\|.+\|\n?)*)/;
    return tableRegex.test(text);
  };