import React from "react";
import StarRating from "./starRating"; // Import the StarRating component

export default function Result(props) {
    const boxes = props.movies.map(
        (item, index) => {
            return <Box key={index} poster_img={item.poster_path} mov_title={item.title} rel_date={item.release_date} star_rating={item.vote_average} />
        }
    );
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {boxes}
        </div>
    );
}

const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className='relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out'>
            <img src={IMGPATH + props.poster_img} alt={props.mov_title} className="w-full h-auto" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                <h1 className="text-white text-lg font-bold">{props.mov_title}</h1>
                <StarRating rating={props.star_rating}/> {/* Use the StarRating component with the rating */}
            </div>
        </div>
    );
}
