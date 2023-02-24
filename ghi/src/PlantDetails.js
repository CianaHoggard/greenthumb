import { useAuthContext } from './Token';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function PlantDetails() {
    const { id } = useParams();
    const { token } = useAuthContext();
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

    const getData = async () => {
        const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/${id}/`;
        console.log('url:', url);
            let response = await fetch(url, {
                method: 'get',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                credentials: "include"
            });
            console.log('response:', response);
            if (response.ok) {
                const data = await response.json();
                console.log({ data });
                setPlant([data]);
                formData.user_id = data.id
                if (data.response) {
                    response = await fetch(`${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/${id}/`);
                    if (response.ok) {
                        let data = await response.json();
                        setFavorites(data.favorites);
                    }
                }
            }
                    setLoading(false);
                    if (formData.user_id !== "") {
                        response = await fetch(`${process.env.REACT_APP_ACCOUNTS_HOST}/api/account/${formData.user_id}/favorites/`,
                            { credentials: "include" });
                        if (response.ok) {
                            const resp = await response.json();
                            const click = resp.favorites.find(
                                ({ id }) => id === formData.id
                            );
                            if (click) {
                                const addButton = document.querySelector(".add-favorite");
                                addButton.innerHTML = "Remove from my plants";
                                setFavoriteId(click.user_id);
                                setIsFavorited(true);
                            }
                        }
                    }
                }

    useEffect(() => {
        getData();
    }, []);

    const addedToggle = async (e) => {
            e.preventDefault();

            if (isFavorited) {
                const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/account/favorites/${favoriteId}`;
                const response = await fetch(url, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    setIsFavorited(false);
                    const addButton = document.querySelector(".add-favorite");
                    addButton.innerHTML = "Add to my plants";
                }
                } else {
                const favorite = {
                    id: formData.id
                };
                const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/favorites/`;
                const response = await fetch(url, {
                    method: "post",
                    body: JSON.stringify(favorite),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setFavoriteId(data.id);
                    setIsFavorited(true);
                    const addButton = document.querySelector(".add-favorite");
                    addButton.innerHTML = "Remove from my plants";
                }
            }

        }

    return (
        <main>
            <div className="row">
                {plants.map((plant) => (
                    <div class="container" key={plant.id}>
                        <figure class="figure">
                            <img src={plant.img} className="figure-img img-fluid rounded" alt={plant.common_name} />
                        </figure>
                        <div className="col-md-4">
                            <h1 className="display-5 fw-bold"> Plants</h1>
                        </div>
                        <button className="add-favorite" onClick={addedToggle}>
        Add to My Plants
    </button>


                        <div className="col-md-4">

                            <h1 className="display-5 fw-bold">{plant.common_name}</h1>
                            <dd className="col-sm-9">
                                <p className="h3">{plant.common_name} - {plant.latin_name}</p>
                                <p className="h3">{plant.watering}</p>
                                <p className="h3">{plant.color_of_blooms}</p>
                                <p className="h3">{plant.insects}</p>
                                <p className="h3">{plant.climate}</p>
                                <p className="h3">{plant.use}</p>
                            </dd>
                        </div>
                    </div>
                ))}
            </div>

        </main>
    );
}
