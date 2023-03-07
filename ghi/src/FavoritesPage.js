import { getTokenInternal, useToken } from './Token';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import './FavoritesPage.css';
import Loader from "./Loader"


function FavoritesPage() {
    const [isFetching, setIsFetching] = useState(true);
    const [isLoading, setIsLoading] = useState(true)
    const [filterValue, setFilterValue] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [plants, setPlants] = useState([]);
    const { token } = useToken();
    const navigate = useNavigate();

    const splitCommonName = (plant) => {
        if (plant.common_name == null) {
            return plant.common_name = "No common name found";
        }
        let formattedName = plant.common_name[0]
        if (plant.common_name.length >= 2) {
            for (let i = 1; i < plant.common_name.length; i++) {
                formattedName += (", " + plant.common_name[i])
            }
        }
        plant.common_name = formattedName
    }

    const checkSeasonAndBlooms = (plant, property) => {
        if (plant[`${property}`] == null) {
            return plant[`${property}`] = "N/A";
        } else {
            return plant[`${property}`]
        }
    }

    const getFavoritesList = async (favorites) => {
        const token = await getTokenInternal();
        const promises = favorites.map(async (favorite) => {
            try {
                const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/${favorite[1]}/`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    credentials: "include"
                });
                if (response.ok) {
                    const favoriteData = await response.json();
                    return favoriteData;
                }
            } catch (error) {
            }
        });
        const favoritesList = await Promise.all(promises);
        favoritesList.sort((p1, p2) => (p1.latin_name > p2.latin_name) ? 1 : (p1.latin_name < p2.latin_name) ? -1 : 0);
        favoritesList.map((plant) => {
            splitCommonName(plant)
            checkSeasonAndBlooms(plant, "color_of_blooms")
            checkSeasonAndBlooms(plant, "blooming_season")
        })
        setPlants(favoritesList);
        setIsFetching(false);
    }

    const getFavorites = async () => {
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
                await getFavoritesList(favorites)
                setIsLoading(false)
            }
        } catch (error) {
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

    const handleFilterVal = (event) => {
        setFilterValue(event.target.value);
    };

    const filteredPlants = () => {
        if (filterValue === " ") {
            return plants;
        } else {
            return plants.filter((plant) =>
                plant.latin_name.toUpperCase().includes(filterValue.toUpperCase()) || plant.common_name.toUpperCase().includes(filterValue.toUpperCase())
            );
        }
    };

    const redirectToDetails = (plant) => {
        navigate(`/plants/${plant.api_id}`)
    }

    const deleteFavorite = async (e, id) => {
        e.stopPropagation()
        let targetFavorite = [];
        for (let favorite of favorites) {
            if (favorite[1] === id) {
                targetFavorite = favorite;
            }
        }
        const response = await fetch(`${process.env.REACT_APP_ACCOUNTS_HOST}/api/account/favorites/${targetFavorite[0]}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            credentials: 'include'
        });
        await response.json()
        setIsLoading(true)
    }

    useEffect(() => {
        isLoggedIn();
        getFavorites();
    }, [isLoading]);

    return (
        <div className="px-4 py-5 my-5 mt-1 mb-1 pb-1 text-center">
            <h1 className="name">Top 5 Favorite Plants</h1>
            <form>
                <div className="form mb-3 mt-3">
                    <input
                        value={filterValue}
                        onChange={handleFilterVal}
                        placeholder="Search by Latin or Common Name"
                        name="filter-value"
                        id="filter-value"
                        className="form-control"
                    />
                </div>
            </form>
            <div>
                <h3>Click a card for more details!</h3>
            </div>
            <div className="container text-center">
                {isLoading ? (
                    <div>
                        <Loader />
                    </div>
                ) : (
                    <div className="row">
                        {filteredPlants().map((plant) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={plant.api_id}>
                                <div className="card h-100 border-0 card-background" onClick={() => redirectToDetails(plant)} style={{
                                    borderRadius: "15px",
                                    overflow: "hidden",
                                    backgroundImage: `url(${plant.img})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}>
                                    <button type="button" id="delbutton" className="btn btn-danger" onClick={(e) => deleteFavorite(e, plant.api_id)}>X</button>
                                    <div className="image-box">
                                        <img src={plant.img} alt="" className="image-thumbnail" />
                                    </div>
                                    <div className="card-body1">
                                        <h5 className="card-title">Latin Name: {plant.latin_name}</h5>
                                        <p className="card-text">Common Name: {plant.common_name}</p>
                                        <p className="card-text">Color of blooms: {plant.color_of_blooms}</p>
                                        <p className="card-text">Blooming Season: {plant.blooming_season}</p>
                                        <p className="card-text">Pruning: {plant.pruning}</p>
                                    </div>
                                </div>
                                <div className="green-border"></div>
                            </div>
                        ))}
                    </div>
                )}
                <div className='favorites'>
                    <h2>Favorite Plants Quick Care</h2>
                </div>
                {isLoading ? (
                    <div>
                        <Loader />
                    </div>
                ) : (

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Latin Name</th>
                                <th>Common Name</th>
                                <th>Pruning</th>
                                <th>Watering</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plants.map(plants => {
                                return (
                                    <tr key={plants.api_id}>
                                        <td>{plants.latin_name}</td>
                                        <td>{plants.common_name}</td>
                                        <td>{plants.pruning}</td>
                                        <td>{plants.watering}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default FavoritesPage;
