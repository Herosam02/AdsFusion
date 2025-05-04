import { ShareApplication } from "../types/ShareApplication";

// Simulate Excel export functionality since we don't have an actual Excel library
export const exportToExcel = (applications: ShareApplication[], fileName: string) => {
  // Convert applications to CSV
  const headers = [
    'ID',
    'Shares Applied',
    'Amount Paid',
    'Title',
    'Surname',
    'First Name',
    'Other Names',
    'Address',
    'City',
    'State',
    'Country',
    'Phone Number',
    'Date of Birth',
    'Email',
    'Next of Kin',
    'CHN Number',
    'CSCS Number',
    'Stockbroker',
    'Member Code',
    'Joint Title',
    'Joint Surname',
    'Joint First Name',
    'Joint Other Names',
    'Bank Name',
    'BVN',
    'Account Number',
    'Branch',
    'City/State',
    'Created At',
  ];

  const csv = [
    headers.join(','),
    ...applications.map(app => [
      app.id,
      app.sharesApplied,
      app.amountPaid,
      app.title,
      app.surname,
      app.firstName,
      app.otherNames,
      app.address,
      app.city,
      app.state,
      app.country,
      app.phoneNumber,
      app.dob,
      app.email,
      app.nextOfKin,
      app.chnNumber,
      app.cscsNumber,
      app.stockbroker,
      app.memberCode,
      app.jointTitle,
      app.jointSurname,
      app.jointFirstName,
      app.jointOtherNames,
      app.bankName,
      app.bvn,
      app.accountNumber,
      app.branch,
      app.cityState,
      app.createdAt,
    ].map(value => {
      // Escape values with commas or quotes
      if (value === null || value === undefined) return '""';
      const str = String(value);
      if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    }).join(','))
  ].join('\n');

  // Create Blob and download
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${fileName}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Note: In a real application, you'd want to use a library like SheetJS/xlsx
// But for this demo, we'll use CSV which can be opened in Excel