import { getTokenInternal, useToken } from './Token';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


export default function PlantDetails() {
    const { id } = useParams();
    const { token } = useToken();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [plants, setPlant] = useState([]);
    const [clicked, setClicked] = useState([])
    const [isFavorited, setIsFavorited] = useState(false);
    const [favoriteId, setFavoriteId] = useState("");
    const [favorites, setFavorites] = useState("")
    const [formData, setFormData] = useState({
        id: id,
        user_id: "",
    });


    const splitPropertyStrings = (plant, property) => {
        if (plant[`${property}`] == null) {
            return plant[`${property}`] = "None";
        }
        let formattedString = plant[`${property}`][0]
        if (plant[`${property}`].length >= 2) {
            for (let i = 1; i < plant[`${property}`].length; i++) {
                formattedString += (", " + plant[`${property}`][i])
            }
        }
        plant[`${property}`] = formattedString
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
            setPlant([data]);
        }


        //     formData.user_id = data.id
        //     if (data.response) {
        //         response = await fetch(`${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/${id}/`);
        //         if (response.ok) {
        //             let data = await response.json();
        //             setFavorites(data.favorites);
        //         }
        //     }
        // }
        //         setLoading(false);
        //         if (formData.user_id !== "") {
        //             response = await fetch(`${process.env.REACT_APP_ACCOUNTS_HOST}/api/account/${formData.user_id}/favorites/`,
        //                 { credentials: "include" });
        //             if (response.ok) {
        //                 const resp = await response.json();
        //                 const click = resp.favorites.find(
        //                     ({ id }) => id === formData.id
        //                 );
        //                 if (click) {
        //                     const addButton = document.querySelector(".add-favorite");
        //                     addButton.innerHTML = "Remove from my plants";
        //                     setFavoriteId(click.user_id);
        //                     setIsFavorited(true);
        //                 }
        //             }
    }



    const isLoggedIn = async () => {
        const token = await getTokenInternal()
        if (!token) {
            setTimeout(() => {
                navigate("/login");
            }, 0);
        }
    }

    useEffect(() => {
        isLoggedIn()
        getData();
    }, []);

    // const addedToggle = async (e) => {
    //         e.preventDefault();

    //         if (isFavorited) {
    //             const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/account/favorites/${favoriteId}`;
    //             const response = await fetch(url, {
    //                 method: "DELETE",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             });
    //             if (response.ok) {
    //                 setIsFavorited(false);
    //                 const addButton = document.querySelector(".add-favorite");
    //                 addButton.innerHTML = "Add to my plants";
    //             }
    //             } else {
    //             const favorite = {
    //                 id: formData.id
    //             };
    //             const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/favorites/`;
    //             const response = await fetch(url, {
    //                 method: "post",
    //                 body: JSON.stringify(favorite),
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             });
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setFavoriteId(data.id);
    //                 setIsFavorited(true);
    //                 const addButton = document.querySelector(".add-favorite");
    //                 addButton.innerHTML = "Remove from my plants";
    //             }
    //         }

    //     }

    return (
        <main>
            <div id="row">
                {plants.map((plant) => (
                    <div id="column" key={plant.api_id}>
                        <div id="plant-name">
                            {plant.latin_name}
                        </div>
                        <div id="box">
                            <div id="plant-image">
                                <img id="resize" src={plant.img} alt={plant.common_name} />
                            </div>
                            <div id="general-info">
                                <p className="h3"><span className='bolded'>Common Name:</span> {plant.common_name} </p>
                                <p className="h3"><span className='bolded'>Latin Name:</span> {plant.latin_name} </p>
                                <p className="h3"><span className='bolded'>Watering:</span> {plant.watering}</p>
                                <p className="h3"><span className='bolded'>Maximum Temperature:</span> {plant.temperature_max.F} °F</p>
                                <p className="h3"><span className='bolded'>Blooming Season:</span> {plant.blooming_season} </p>
                                <p className="h3"><span className='bolded'>Color of Blooms:</span> {plant.color_of_blooms}</p>
                                <p className="h3"><span className='bolded'>Insects:</span> {plant.insects}</p>
                                <p className="h3"><span className='bolded'>Climate:</span> {plant.climate}</p>
                                <p className="h3"><span className='bolded'>Use:</span> {plant.use}</p>
                                <button className="add-favorite" role="button" >
                                    <span className="text"><FontAwesomeIcon icon={faHeart} /> Add to My Favorites</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
