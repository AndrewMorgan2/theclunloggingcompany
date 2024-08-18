import React from 'react';

const Pricing = () => {
  const materials = [
    { name: 'Wood', unit: 'kg', prices: [
      { quantity: 2, price: 10 },
      { quantity: 5, price: 22 },
      { quantity: 10, price: 40 },
    ]},
    { name: 'Fancy Wood', unit: 'kg', prices: [
      { quantity: 1, price: 15 },
      { quantity: 3, price: 40 },
      { quantity: 5, price: 60 },
    ]},
    { name: 'Elven Wood', unit: 'cubic meter', prices: [
      { quantity: 0.5, price: 30 },
      { quantity: 1, price: 55 },
      { quantity: 2, price: 100 },
    ]},
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Material</th>
            <th className="py-2 px-4 border-b">Unit</th>
            {materials[0].prices.map((_, index) => (
              <th key={index} className="py-2 px-4 border-b">Price</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {materials.map((material, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="text-[#432910] py-2 px-4 border-b">{material.name}</td>
              <td className="text-[#432910] py-2 px-4 border-b">{material.unit}</td>
              {material.prices.map((price, priceIndex) => (
                <td key={priceIndex} className="text-[#432910] py-2 px-4 border-b">
                  {price.quantity} {material.unit}: £{price.price}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;