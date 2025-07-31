import Image from "next/image";
import Games from "./components/Games";
import Searchbar from "./components/Searchbar";
import Title from "./components/Title";
import { SearchProvider } from "./components/searchContext";

export default function Home() {
  return (
    <div className="w-full h-scree " >
      <SearchProvider>
        <Searchbar />
        <Games />

      </SearchProvider>
    </div>
  );
}
