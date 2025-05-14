/**
 * Server-side API route to proxy requests to NASA's NeoWs API
 * This solves CORS issues when accessing NASA API from the browser
 */
export default async function handler(req, res) {
  // Extract query parameters from the request
  const { start_date, end_date } = req.query;

  // NASA API key
  const NASA_API_KEY = "WEBfa0P8cJccaiyePF7eKATNKro9ZERSje4PcCgW";

  // Validate required parameters
  if (!start_date || !end_date) {
    return res.status(400).json({
      error:
        "Missing required parameters: start_date and end_date are required",
    });
  }

  try {
    // Make the request to NASA API from the server
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${NASA_API_KEY}`,
    );

    // Check if the request was successful
    if (!response.ok) {
      const errorData = await response.text();
      return res.status(response.status).json({
        error: `NASA API error: ${response.status}`,
        details: errorData,
      });
    }

    // Get the data from the response
    const data = await response.json();

    // Return the data
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching asteroid data:", error);
    return res.status(500).json({
      error: "Failed to fetch data from NASA API",
      details: error.message,
    });
  }
}
