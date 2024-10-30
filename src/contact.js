import React from 'react';

const BusinessContactCard = () => {
  const businessInfo = {
    name: "Jonny Rowlands",
    phone: "07815189616",
    email: "theclunlogcompany@gmail.com",
    bank: {
      name: "The Clun Log Company",
      account: "24279582",
      sort: "04-06-05",
      vat: "473 3479 67"
    }
  };

  return (
    <div className="max-w-sm w-full bg-amber-50 rounded-lg shadow-md border-2 border-amber-900/20 p-4 mx-auto">
      <div className="space-y-3">
        {/* Name */}
        <div className="border-b border-amber-900/10 pb-3">
          <h2 className="text-amber-900 font-bold text-xl">{businessInfo.name}</h2>
        </div>

        {/* Contact Details */}
        <div className="flex items-center space-x-3 border-b border-amber-900/10 pb-3">
          <span className="text-amber-900">☏</span>
          <a href={`tel:${businessInfo.phone}`} 
             className="text-amber-900 hover:text-amber-700 font-medium text-lg">
            {businessInfo.phone}
          </a>
        </div>
        
        <div className="flex items-center space-x-3 border-b border-amber-900/10 pb-3">
          <span className="text-amber-900">✉</span>
          <a href={`mailto:${businessInfo.email}`} 
             className="text-amber-900 hover:text-amber-700 font-medium text-lg">
            {businessInfo.email}
          </a>
        </div>

        {/* Bank Details */}
        <div className="space-y-2">
          <h3 className="text-amber-900 font-medium">Bank Details</h3>
          <div className="pl-3 space-y-1">
            <p className="text-amber-900">{businessInfo.bank.name}</p>
            <p className="text-amber-900">Account: {businessInfo.bank.account}</p>
            <p className="text-amber-900">Sort Code: {businessInfo.bank.sort}</p>
            <p className="text-amber-900">VAT No: {businessInfo.bank.vat}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessContactCard;