"use client";
import { useState } from "react";
import LocationCard from "../components/LocationCard";
import Home from "@/components/HomePage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/store";
export default function Page() {
  const [userLocation, setUserLocation] = useState(null);

  const handleLocationSet = (location) => {
    setUserLocation(location);
  };

  return (
    <div className="bg-white">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {!userLocation && <LocationCard onLocationSet={handleLocationSet} />}
          <Home userLocation={userLocation} />
        </PersistGate>
      </Provider>
    </div>
  );
}
