"use client";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import NowtedLogo from "@/public/nowtedlogo.svg";
import SearchBar from "./SearchBar";
import AddNoteButton from "./AddNoteButton";

const HeadComponent = () => {
  const { category } = useParams();
  const [showSearchBar, setShowSearchBar] = useState(category === "s");
  const router = useRouter();

  return (
    <section>
      <div
        className={`flex justify-between items-center dark:invert-0 invert-75 px-5`}
      >
        <Image alt="nowted logo" src={NowtedLogo} width={100} loading="eager" />
        {/* <img src={logo} alt="nowted logo" /> */}
        {!showSearchBar ? (
          <Search
            className="text-background-800 cursor-pointer"
            onClick={() => {
              setShowSearchBar(true);
            }}
          />
        ) : (
          <X
            className="text-background-800 cursor-pointer"
            onClick={() => {
              setShowSearchBar(false);
              if (category === "s") router.push("/");
            }}
          />
        )}
      </div>
      {showSearchBar ? <SearchBar /> : <AddNoteButton />}
    </section>
  );
};

export default HeadComponent;
