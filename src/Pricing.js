import React from 'react';
import logo_main from './log_logo_new.png';

const Pricing = () => {
  const materials = [
    { quantity: "Full Trailer (4.8m³)", price: 660 },
    { quantity: "Half trailer (2.4m³)", price: 330 },
    { quantity: "1.2m³ Bulk bag", price: 170 },
    { quantity: "1.0m³ Bulk bag", price: 140 }
  ];

  return (
    
    <div className="w-full flex justify-center bg-[#f5e6d3] bg-opacity-90 p-4">
      <img src={logo_main} width="30%" alt="Main Logo" class="mainClass" />
      <div className="max-w-2xl w-full overflow-x-auto">
        <table className="w-full bg-white border border-orange-300">
          <thead>
            <tr className="bg-orange-300">
              <th className="py-2 px-4 border-b border-orange-300">Quantity</th>
              <th className="py-2 px-4 border-b border-orange-300">Price</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-[#f5e6d3]' : 'bg-[#f5e6d3]'}>
                <td className="text-black black  py-2 px-4 border-b text-center border-orange-300">
                  {item.quantity}
                </td>
                <td className="text-black py-2 px-4 border-b text-center border-orange-300">
                  £{item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;