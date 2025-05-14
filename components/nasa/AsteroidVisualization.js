import { useEffect, useState } from "react";
import {
  getAsteroidData,
  processAsteroidData,
  getToday,
  getNextWeek,
} from "@/lib/nasa-api";
import AsteroidSvg from "./AsteroidSvg";
import AsteroidCard from "./AsteroidCard";

export default function AsteroidVisualization() {
  const [startDate, setStartDate] = useState(getToday());
  const [endDate, setEndDate] = useState(getNextWeek());
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedAsteroid, setSelectedAsteroid] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [hazardousCount, setHazardousCount] = useState(0);

  useEffect(() => {
    fetchAsteroidData();
  }, []);

  const fetchAsteroidData = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAsteroidData(startDate, endDate);
      const processed = processAsteroidData(data);

      setAsteroids(processed);
      setTotalCount(data.element_count || processed.length);
      setHazardousCount(
        processed.filter((a) => a.isPotentiallyHazardous).length,
      );
    } catch (err) {
      setError("Failed to load asteroid data. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === "startDate") {
      setStartDate(value);

      // Ensure end date is not more than 7 days after start date (NASA API limitation)
      const newStartDate = new Date(value);
      const maxEndDate = new Date(newStartDate);
      maxEndDate.setDate(newStartDate.getDate() + 7);

      const currentEndDate = new Date(endDate);
      if (currentEndDate > maxEndDate) {
        setEndDate(maxEndDate.toISOString().split("T")[0]);
      }
    } else {
      setEndDate(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAsteroidData();
  };

  const toggleAsteroidSelection = (asteroid) => {
    if (selectedAsteroid && selectedAsteroid.id === asteroid.id) {
      setSelectedAsteroid(null);
    } else {
      setSelectedAsteroid(asteroid);
    }
  };

  // Calculate maximum days between dates (NASA API limits to 7 days)
  const calculateMaxEndDate = () => {
    if (!startDate) return "";

    const start = new Date(startDate);
    const max = new Date(start);
    max.setDate(start.getDate() + 7);

    return max.toISOString().split("T")[0];
  };

  return (
    <div className="mb-10">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-2 text-gray-800">
          Near Earth Asteroids
        </h2>
        <p className="text-lg text-gray-600">
          Explore asteroids that will pass near Earth in the coming days
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6 mb-8"
      >
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={handleDateChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              End Date (max 7 days from start)
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={endDate}
              min={startDate}
              max={calculateMaxEndDate()}
              onChange={handleDateChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            disabled={loading}
          >
            {loading ? "Loading..." : "Get Asteroid Data"}
          </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {!loading && !error && asteroids.length > 0 && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                Total Asteroids
              </h3>
              <p className="text-3xl font-bold text-blue-600">{totalCount}</p>
            </div>

            <div className="bg-white rounded-lg shadow p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                Potentially Hazardous
              </h3>
              <p className="text-3xl font-bold text-red-600">
                {hazardousCount}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                Safe Asteroids
              </h3>
              <p className="text-3xl font-bold text-green-600">
                {totalCount - hazardousCount}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Asteroid Visualization
                </h3>
                <div className="relative" style={{ height: "400px" }}>
                  {/* Earth in the center */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-blue-200 flex items-center justify-center text-white text-xs font-medium">
                      Earth
                    </div>
                  </div>

                  {/* Orbit circles */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {[1, 2, 3].map((orbit) => (
                      <div
                        key={`orbit-${orbit}`}
                        className="rounded-full border border-gray-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          width: `${100 + orbit * 60}px`,
                          height: `${100 + orbit * 60}px`,
                          opacity: 0.6,
                        }}
                      />
                    ))}
                  </div>

                  {/* Asteroids */}
                  <div className="absolute inset-0 overflow-hidden">
                    {asteroids.map((asteroid, index) => {
                      // Calculate position based on index and total to distribute around Earth
                      const angle = (index / asteroids.length) * Math.PI * 2;
                      const distance = 80 + (index % 3) * 60; // Distribute in 3 orbit rings
                      const left = 50 + (Math.cos(angle) * distance) / 4;
                      const top = 50 + (Math.sin(angle) * distance) / 4;

                      const isSelected =
                        selectedAsteroid && selectedAsteroid.id === asteroid.id;

                      return (
                        <div
                          key={asteroid.id}
                          className={`absolute transition-all duration-300 transform ${isSelected ? "scale-125" : ""}`}
                          style={{
                            left: `${left}%`,
                            top: `${top}%`,
                            zIndex: isSelected ? 5 : 1,
                          }}
                          onClick={() => toggleAsteroidSelection(asteroid)}
                        >
                          <AsteroidSvg
                            asteroid={asteroid}
                            index={index}
                            totalAsteroids={asteroids.length}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-green-500 opacity-70 mr-2"></span>
                    <span className="text-sm text-gray-600">Safe Asteroid</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-red-500 opacity-70 mr-2"></span>
                    <span className="text-sm text-gray-600">
                      Potentially Hazardous
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">
                      Size of asteroid indicates relative diameter
                    </span>
                  </div>
                </div>
              </div>

              {selectedAsteroid && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-4 border-2 border-blue-500">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Selected: {selectedAsteroid.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700">Details</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>
                          Diameter: {selectedAsteroid.diameter.avg.toFixed(2)}{" "}
                          meters
                        </li>
                        <li>Orbiting: {selectedAsteroid.orbitingBody}</li>
                        <li
                          className={
                            selectedAsteroid.isPotentiallyHazardous
                              ? "text-red-600 font-semibold"
                              : "text-green-600"
                          }
                        >
                          {selectedAsteroid.isPotentiallyHazardous
                            ? "⚠️ Potentially Hazardous"
                            : "✓ Not Hazardous"}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">
                        Approach Data
                      </h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        {selectedAsteroid.closeApproachData.map(
                          (approach, idx) => (
                            <li key={idx}>
                              <span className="font-medium">
                                {approach.closeApproachDate}
                              </span>
                              :
                              <span>
                                {" "}
                                {Math.round(
                                  approach.missDistance.kilometers,
                                ).toLocaleString()}{" "}
                                km
                              </span>
                              <div className="text-xs text-gray-500">
                                Velocity:{" "}
                                {Math.round(approach.velocity).toLocaleString()}{" "}
                                km/h
                              </div>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:w-1/3">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Asteroid List
              </h3>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {asteroids.map((asteroid) => (
                  <AsteroidCard
                    key={asteroid.id}
                    asteroid={asteroid}
                    onClick={() => toggleAsteroidSelection(asteroid)}
                    isSelected={
                      selectedAsteroid && selectedAsteroid.id === asteroid.id
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {!loading && !error && asteroids.length === 0 && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                Select a date range and click "Get Asteroid Data" to start
                exploring near-Earth asteroids.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
