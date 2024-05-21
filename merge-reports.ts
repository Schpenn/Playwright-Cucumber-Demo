import fs from 'fs';
import path from 'path';

const reportDir = path.resolve(__dirname, 'reports');
const mergedReportFile = path.resolve(reportDir, 'merged-report.html');

function mergeReports() {
  const reportFiles = fs.readdirSync(reportDir).filter(file => file.endsWith('.html'));
  let mergedContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Merged Report</title>
      <style>
        body { font-family: Arial, sans-serif; }
        iframe { width: 100%; height: 500px; border: none; }
        .report-container { margin-bottom: 50px; }
      </style>
    </head>
    <body>
      <h1>Combined Browser Reports</h1>
  `;

  reportFiles.forEach(file => {
    mergedContent += `
      <div class="report-container">
        <h2>${file.replace('.html', '')}</h2>
        <iframe src="${file}"></iframe>
      </div>
    `;
  });

  mergedContent += `
    </body>
    </html>
  `;

  fs.writeFileSync(mergedReportFile, mergedContent);
}

mergeReports();
console.log('Merged report saved to', mergedReportFile);
