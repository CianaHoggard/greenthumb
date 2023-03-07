import { getTokenInternal } from './Token';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PlantDetails.css'
import Loader from './Loader';
import Footer from './Footer';


function PlantDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [plants, setPlant] = useState([]);
    const [favoriteButton, setFavoriteButton] = useState("")
    const [favorites, setFavorites] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isFetching, setIsFetching] = useState(true)

    const splitPropertyStrings = (plant, property) => {
        if (plant[`${property}`] == null) {
            return plant[`${property}`] = "None known";
        }
        let formattedString = plant[`${property}`][0]
        if (plant[`${property}`].length >= 2) {
            for (let i = 1; i < plant[`${property}`].length; i++) {
                formattedString += (", " + plant[`${property}`][i])
            }
        }
        plant[`${property}`] = formattedString
    }


    const checkSeasonAndBlooms = (plant, property) => {
        if (plant[`${property}`] == null) {
            return plant[`${property}`] = "N/A";
        } else {
            return plant[`${property}`]
        }
    }

    const addToFavorites = async (plant) => {
        const token = await getTokenInternal();
        const apiId = plant.api_id
        const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/${apiId}/`;
        if (favorites.length >= 5) {
            console.log("You can't favorite more than 5 plants.");
            return;
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                credentials: 'include',
            })
            if (response.ok) {
                setFavoriteButton("d-none");
                setFavorites([...favorites, [plant.common_name, plant.api_id]]);
            };
        } catch (error) {
            console.log(error);
        }
        setIsLoading(true)
    }

    const deleteFavorite = async (id) => {
        const token = await getTokenInternal();
        let targetFavorite = [];
        for (let favorite of favorites) {
            if (favorite[1] === id) {
                targetFavorite = favorite;
            }
        }
        await fetch(`${process.env.REACT_APP_ACCOUNTS_HOST}/api/account/favorites/${targetFavorite[0]}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            credentials: 'include'
        });
        setIsLoading(true)
    }



    const getData = async () => {
        const token = await getTokenInternal();
        const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/${id}/`;
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            credentials: "include"
        });
        if (response.ok) {
            const data = await response.json();
            splitPropertyStrings(data, "common_name")
            splitPropertyStrings(data, "insects")
            splitPropertyStrings(data, "color_of_leaf")
            checkSeasonAndBlooms(data, "color_of_blooms")
            checkSeasonAndBlooms(data, "blooming_season")
            setPlant([data]);
            setTimeout(() => setIsFetching(false), 2000);
        }
    }


    const isLoggedIn = async () => {
        const token = await getTokenInternal()
        if (!token) {
            setTimeout(() => {
                navigate("/login");
            }, 0);
        }
    }

    const isFavorited = async () => {
        const token = await getTokenInternal();
        const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/account/favorites`;
        try {
            const response = await fetch(url, {
                method: 'get',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                credentials: 'include'
            });
            if (response.ok) {
                const data = await response.json();
                setFavorites(data);
                for (let favorite of favorites) {
                    if ((data.length >= 5) || favorite[1] === id) {
                        setFavoriteButton("d-none")
                    }
                }
            }
            setIsLoading(false);
        } catch (error) {

        }
    }


    useEffect(() => {
        isLoggedIn()
        isFavorited()
        getData();
    }, [isLoading]);


    return (
        <>
            {isFetching ? (
                <Loader />
            ) : (
                <>
                    <div className="px-4">
                        <div id="row" className="py-3">
                            {plants.map((plant) => (
                                <div id="column" key={plant.api_id}>
                                    <div className="name">
                                        {plant.latin_name}
                                    </div>
                                    <div id="box">
                                        <div id="image-container">
                                            <img id="resize" src={plant.img} alt={plant.common_name} />
                                            {favorites.find((favorite) => { return favorite[1] === plant.api_id }) ?
                                                (<button className="remove-favorite" onClick={() => deleteFavorite(plant.api_id)}><span className="text">Delete from My Favorites</span></button>
                                                ) : (<button className="add-favorite" onClick={() => addToFavorites(plant)}><span className="text">Add to My Favorites</span></button>)
                                            }
                                        </div>
                                        <div id="general-info">
                                            <p className="h3"><span className='bolded'>Common Name:</span> {plant.common_name} </p>
                                            <p className="h3"><span className='bolded'>Family:</span> {plant.family} </p>
                                            <p className="h3"><span className='bolded'>Watering:</span> {plant.watering}</p>
                                            <p className="h3"><span className='bolded'>Ideal Light:</span> {plant.ideal_light}</p>
                                            <p className="h3"><span className='bolded'>Maximum Temperature:</span> {plant.temperature_max.F} °F</p>
                                            <p className="h3"><span className='bolded'>Blooming Season:</span> {plant.blooming_season} </p>
                                            <p className="h3"><span className='bolded'>Color of Blooms:</span> {plant.color_of_blooms}</p>
                                            <p className="h3"><span className='bolded'>Color of leaves:</span> {plant.color_of_leaf}</p>
                                            <p className="h3"><span className='bolded'>Insects:</span> {plant.insects}</p>
                                            <p className="h3"><span className='bolded'>Climate:</span> {plant.climate}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Footer />
                    </div>
                </>)}
        </>
    );
}


export default PlantDetails;
