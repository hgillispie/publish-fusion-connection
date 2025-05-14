import { formatDate } from "@/lib/nasa-api";

export default function AsteroidCard({ asteroid, onClick, isSelected }) {
  // Format diameter to 2 decimal places
  const formatDiameter = (value) => {
    return value.toFixed(2);
  };

  // Format velocity to whole number
  const formatVelocity = (value) => {
    return Math.round(value).toLocaleString();
  };

  // Format miss distance
  const formatDistance = (value) => {
    return Math.round(value).toLocaleString();
  };

  // Get approach data for the first close approach
  const approachData = asteroid.closeApproachData[0] || {};

  return (
    <div
      className={`
        border rounded-lg p-4 mb-4 shadow-sm transition-all duration-200 hover:shadow-md
        ${isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}
        ${asteroid.isPotentiallyHazardous ? "border-l-4 border-l-red-500" : ""}
        cursor-pointer
      `}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
          e.preventDefault();
        }
      }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{asteroid.name}</h3>
        {asteroid.isPotentiallyHazardous && (
          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
            Potentially Hazardous
          </span>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Close approach: </span>
            {formatDate(approachData.closeApproachDate || asteroid.date)}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Diameter: </span>
            {formatDiameter(asteroid.diameter.min)} -{" "}
            {formatDiameter(asteroid.diameter.max)} meters
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Orbiting: </span>
            {asteroid.orbitingBody}
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Velocity: </span>
            {formatVelocity(approachData.velocity || 0)} km/h
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Miss distance: </span>
            {formatDistance(approachData.missDistance?.kilometers || 0)} km
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Lunar distance: </span>
            {formatDistance(approachData.missDistance?.lunar || 0)} LD
          </p>
        </div>
      </div>

      {isSelected && (
        <div className="mt-3 text-sm text-blue-600">
          Click again to deselect
        </div>
      )}
    </div>
  );
}
