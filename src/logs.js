import React from 'react';

const BenefitCard = ({ emoji, title, description }) => (
  <div className="bg-orange-100 bg-opacity-90 p-4 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 p-3 rounded-full bg-orange-300">
        <span className="text-2xl" role="img" aria-label={title}>
          {emoji}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[#432910]">{title}</h3>
      <p className="text-[#432910]">{description}</p>
    </div>
  </div>
);

const KilnDriedBenefits = () => {
  const benefits = [
    {
      emoji: "🔥",
      title: "Easy to Ignite",
      description: "Lights quickly and easily for immediate warmth"
    },
    {
      emoji: "⚡",
      title: "Burns Efficiently",
      description: "Maximum energy from every log due to low moisture content"
    },
    {
      emoji: "🪵",
      title: "Less Wood Used",
      description: "Better efficiency means you need fewer logs to heat your home"
    },
    {
      emoji: "🌡️",
      title: "High Heat Output",
      description: "Produces more heat compared to standard logs"
    },
    {
      emoji: "💨",
      title: "Less Smoke",
      description: "Minimal smoke production for a cleaner burning experience"
    },
    {
      emoji: "✨",
      title: "Clearer Glass",
      description: "Keeps your log burner glass clear for better fire viewing"
    }
  ];

  return (
    <div className="h-32 bg-[#f5e6d3] bg-opacity-90 p-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#432910]">
            Why Kiln Dried Logs?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
            ))}
            </div>
    </div>
  );
};

export default KilnDriedBenefits;