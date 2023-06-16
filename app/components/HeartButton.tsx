'use client'

import { useMemo } from "react";
import { SafeUser } from "../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
    listingId: string;
    currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser,
}) => {
    const hasFavourited = false;
    const toggleFavourite = () => {
        console.log("toggle favourite");
    };
    return (

      <div
        onClick={toggleFavourite}
        className = "relative hover:opacity-80 transition cursor-pointer"
      >
        <AiOutlineHeart
          size={28}
          className ="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
          "
        />

        <AiFillHeart
            size={24}
            className = {
                hasFavourited? 'fill-teal-500' : 'fill-neutral-500/70'
            }
        />


      </div>
    );
}

export default HeartButton;