const convertToCSV = (data: any[], columns: any[]) => {
  const header = columns.map(col => col.title).join(',');
  const rows = data.map(item => 
    columns.map(col => {
      const value = item[col.dataIndex];
      // Handle values that might contain commas
      return value ? `"${value}"` : '';
    }).join(',')
  );
  
  return [header, ...rows].join('\n');
};

export const downloadCSV = (data: any[], columns: any[], filename: string) => {
  const csv = convertToCSV(data, columns);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if ((navigator as any).msSaveBlob) {
    // IE 10+
    (navigator as any).msSaveBlob(blob, filename);
  } else {
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}; 