import { useEffect, useRef } from "react";
import { getAsteroidColor } from "@/lib/nasa-api";

/**
 * SVG component to visualize an asteroid
 */
export default function AsteroidSvg({ asteroid, index, totalAsteroids }) {
  const svgRef = useRef(null);

  // Calculate size for visualization based on asteroid diameter
  const getScaledSize = () => {
    // Base size between 10 and 50px based on relative asteroid size
    const minSize = 10;
    const maxSize = 50;

    // Find the relative size compared to other asteroids in the set
    const relativeSize = index === 0 ? 1 : 1 - index / totalAsteroids;
    return minSize + relativeSize * (maxSize - minSize);
  };

  // Generate a unique animation key
  const animationKey = `orbit-${asteroid.id}`;
  // Calculate orbit duration (faster for closer asteroids)
  const orbitDuration = asteroid.closeApproachData[0]?.missDistance.kilometers
    ? Math.max(
        10,
        Math.min(
          60,
          asteroid.closeApproachData[0]?.missDistance.kilometers / 20000,
        ),
      )
    : 30;

  // Create a "bumpy" asteroid shape with random variations
  const createAsteroidPath = (size) => {
    const points = 12;
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2;

    let path = `M ${centerX + radius} ${centerY} `;

    for (let i = 1; i <= points; i++) {
      const angle = (Math.PI * 2 * i) / points;
      // Add some randomness to radius for each point
      const randomRadius = radius * (0.8 + Math.random() * 0.4);
      const x = centerX + randomRadius * Math.cos(angle);
      const y = centerY + randomRadius * Math.sin(angle);

      path += `L ${x} ${y} `;
    }

    path += "Z";
    return path;
  };

  useEffect(() => {
    if (svgRef.current) {
      // We could add more complex animations here if needed
      const element = svgRef.current;

      // Reset animation when component updates
      element.style.animation = "none";
      // Trigger reflow
      void element.offsetWidth;
      // Restart animation
      element.style.animation = "";
    }
  }, [asteroid]);

  const size = getScaledSize();
  const fill = getAsteroidColor(asteroid);
  const isHazardous = asteroid.isPotentiallyHazardous;

  return (
    <div
      className="relative inline-block"
      style={{ width: size, height: size }}
    >
      {/* Orbit animation */}
      <style jsx>{`
        @keyframes ${animationKey} {
          0% {
            transform: rotate(0deg) translateX(${size}px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(${size}px) rotate(-360deg);
          }
        }
        .orbit-animation {
          animation: ${animationKey} ${orbitDuration}s linear infinite;
        }
      `}</style>

      <svg
        ref={svgRef}
        className="orbit-animation"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <path
          d={createAsteroidPath(size)}
          fill={fill}
          stroke={isHazardous ? "#9e1c23" : "#1e7e34"}
          strokeWidth={isHazardous ? 1.5 : 0.5}
        >
          <title>{asteroid.name}</title>
        </path>

        {/* Add craters for visual interest */}
        {Array.from({ length: Math.floor(size / 5) }).map((_, i) => {
          const craterSize = size * (0.05 + Math.random() * 0.1);
          const x = size * (0.2 + Math.random() * 0.6);
          const y = size * (0.2 + Math.random() * 0.6);

          return (
            <circle
              key={`crater-${i}`}
              cx={x}
              cy={y}
              r={craterSize}
              fill="rgba(0,0,0,0.3)"
            />
          );
        })}
      </svg>
    </div>
  );
}
