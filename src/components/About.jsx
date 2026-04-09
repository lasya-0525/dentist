import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=400&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=400&q=80",
  },
];

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const generateSquares = () =>
  shuffle([...squareData]).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ));

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares}
    </div>
  );
};

export default function About() {
  return (
    <section id="service" className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Left: text */}
        <div className="flex flex-col justify-center">
          <span className="block mb-5 text-xs tracking-widest uppercase font-semibold text-[#1a8a6e]">
            ( About Us )
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-6xl font-black leading-[1.08] mb-6 text-gray-900"
          >
            Care
            <em className="not-italic">-</em>
            <em className="italic">first.</em>
            <br />
            Smile
            <em className="not-italic">-</em>
            <em className="italic text-[#1a8a6e]">always.</em>
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 max-w-sm">
            We don't believe in one-size-fits-all dentistry. At Smilix, every
            patient receives thoughtful care — built on their goals, lifestyle,
            and comfort.
          </p>
          <div>
            <button className="bg-[#1a8a6e] text-white text-sm font-semibold tracking-wide py-3 px-8 rounded-full transition-all hover:bg-[#157a5f] active:scale-95">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Right: shuffle grid */}
        <div className="w-full">
          <ShuffleGrid />
        </div>
      </div>
    </section>
  );
}
