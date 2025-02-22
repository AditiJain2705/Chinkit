import { useState } from "react";
import axios from "axios"; // To call geocoding API
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
const LocationCard = ({ onLocationSet }) => {
  const [location, setLocation] = useState(""); // For manual entry
  const [suggestions, setSuggestions] = useState([]); // For autocomplete
  const [isLocationSet, setIsLocationSet] = useState(false);

  // Geocode API key (Replace with your key)
  const API_KEY = "YOUR_GOOGLE_API_KEY";

  // Handle "Detect My Location"
  const handleDetectLocation = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
            );
            const detectedAddress =
              response.data.results[0]?.formatted_address ||
              " I-Square Corporate Park";
            setLocation(detectedAddress);
            setIsLocationSet(true);
            onLocationSet(detectedAddress);
          } catch (error) {
            alert("Failed to fetch address. Please try again.");
          }
        },
        (error) => {
          alert("Failed to detect location. Please enter manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Handle manual location input with suggestions
  const handleManualInput = async (e) => {
    setLocation(e.target.value);

    if (e.target.value.trim() === "") {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${e.target.value}&key=${API_KEY}`
      );
      setSuggestions(
        response.data.predictions.map((prediction) => prediction.description)
      );
    } catch (error) {
      console.error("Failed to fetch suggestions", error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion);
    setSuggestions([]);
    setIsLocationSet(true);
    onLocationSet(suggestion);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  z-50">
      <div className="bg-white  p-6 shadow-lg max-w-lg w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Welcome to Blinkit
        </h2>
        <div className="w-full flex mb-4">
          <p className="text-gray-800 ">
            <PlaceOutlinedIcon className="text-5xl" />
          </p>
          <span className="mx-1 text-gray-800">
            {" "}
            Please provide your delivery location to see products at a nearby
            store.
          </span>
        </div>

        <div className="flex justify-between  items-center pl-12">
          <button
            onClick={handleDetectLocation}
            className="text-[12px] bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Detect My Location
          </button>
          {/* <div className="h-[36px] flex justify-center items-center">
          <hr className="h-8 w-8 text-black"/>

            <div className="w-9 h-9 border border-gray-300 bg-gray-50 rounded-full flex justify-center items-center mx-4 relative">
                <div className="w-4 h-3 text-[10px] font-medium text-gray-400 text-center">
                  OR
                </div>
            
            </div>
          </div> */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter delivery location"
              value={location}
              onChange={handleManualInput}
              className="w-full border border-gray-300 rounded px-8 py-1"
            />
            {suggestions.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 rounded mt-2 w-full max-h-40 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
