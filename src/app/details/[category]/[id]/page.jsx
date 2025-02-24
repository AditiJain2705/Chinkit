"use client";
import { useState } from "react";
import LocationCard from "../../../../components/LocationCard";
import Home from "@/components/HomePage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../../../store/store";
import DetailPage from "@/components/detail/DetailPage";
import SSDetailPage from "@/components/detail/SSDetailPage";
export default function Page() {
  const [userLocation, setUserLocation] = useState(null);

  const handleLocationSet = (location) => {
    setUserLocation(location);
  };

  return (
    <div className="bg-white">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
         
         <div className="hidden lg:block">
         <DetailPage userLocation={userLocation} />

         </div>
        <div className="block lg:hidden">
        <SSDetailPage userLocation={userLocation}/>

        </div>
        </PersistGate>
      </Provider>
    </div>
  );
}
