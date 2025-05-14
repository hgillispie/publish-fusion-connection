/**
 * Utility functions for interacting with NASA's APIs
 */

// NASA API key
const NASA_API_KEY = "WEBfa0P8cJccaiyePF7eKATNKro9ZERSje4PcCgW";

/**
 * Fetch asteroid data from NASA's NeoWs API for a specific date range
 * @param {string} startDate - Start date in YYYY-MM-DD format
 * @param {string} endDate - End date in YYYY-MM-DD format (max 7 days from start)
 * @returns {Promise<Object>} - Asteroid data
 */
export async function getAsteroidData(startDate, endDate) {
  try {
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${NASA_API_KEY}`,
    );

    if (!response.ok) {
      throw new Error(`NASA API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching asteroid data:", error);
    throw error;
  }
}

/**
 * Process and transform asteroid data for visualization
 * @param {Object} rawData - Raw asteroid data from NASA API
 * @returns {Array} - Processed asteroid data
 */
export function processAsteroidData(rawData) {
  if (!rawData || !rawData.near_earth_objects) {
    return [];
  }

  const dates = Object.keys(rawData.near_earth_objects);
  let processedData = [];

  dates.forEach((date) => {
    const asteroidsForDate = rawData.near_earth_objects[date];

    asteroidsForDate.forEach((asteroid) => {
      processedData.push({
        id: asteroid.id,
        name: asteroid.name,
        date: date,
        diameter: {
          min: asteroid.estimated_diameter.meters.estimated_diameter_min,
          max: asteroid.estimated_diameter.meters.estimated_diameter_max,
          avg:
            (asteroid.estimated_diameter.meters.estimated_diameter_min +
              asteroid.estimated_diameter.meters.estimated_diameter_max) /
            2,
        },
        isPotentiallyHazardous: asteroid.is_potentially_hazardous_asteroid,
        closeApproachData: asteroid.close_approach_data.map((approach) => ({
          closeApproachDate: approach.close_approach_date,
          velocity: parseFloat(approach.relative_velocity.kilometers_per_hour),
          missDistance: {
            kilometers: parseFloat(approach.miss_distance.kilometers),
            lunar: parseFloat(approach.miss_distance.lunar),
          },
        })),
        orbitingBody: asteroid.close_approach_data[0]?.orbiting_body || "Earth",
      });
    });
  });

  // Sort by size (largest first)
  return processedData.sort((a, b) => b.diameter.avg - a.diameter.avg);
}

/**
 * Get today's date in YYYY-MM-DD format
 */
export function getToday() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

/**
 * Get a date 7 days from today in YYYY-MM-DD format
 */
export function getNextWeek() {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  return nextWeek.toISOString().split("T")[0];
}

/**
 * Format a date string from YYYY-MM-DD to a more readable format
 */
export function formatDate(dateString) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

/**
 * Calculate a color based on asteroid hazard and size
 */
export function getAsteroidColor(asteroid) {
  // Base color depends on hazard status
  const baseColor = asteroid.isPotentiallyHazardous
    ? { r: 220, g: 53, b: 69 } // Red for hazardous
    : { r: 40, g: 167, b: 69 }; // Green for safe

  // Scale opacity based on size (larger = more opaque)
  const maxDiameter = 1000; // Consider asteroids larger than 1km as maximum
  const size = Math.min(asteroid.diameter.avg / maxDiameter, 1);
  const opacity = 0.3 + size * 0.7; // Opacity between 0.3 and 1.0

  return `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${opacity})`;
}
