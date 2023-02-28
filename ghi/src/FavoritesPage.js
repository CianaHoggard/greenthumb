import { getTokenInternal, useToken } from './Token';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";


function FavoritesPage() {
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
        })
        setPlants(favoritesList);
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
                getFavoritesList(favorites)
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

    useEffect(() => {
        isLoggedIn();
        getFavorites();
    }, [token, isLoading]);


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

    const deleteFavorite = async (id) => {
        console.log(favorites);
        let targetFavorite = [];
        for (let favorite of favorites) {
            console.log(favorite)
            console.log(id);
            if (favorite[1] === id) {
                targetFavorite = favorite;
            }
        }
        console.log(targetFavorite);
        await fetch(`${process.env.REACT_APP_ACCOUNTS_HOST}/api/account/favorites/${targetFavorite[0]}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            credentials: 'include'
        });
        await getFavorites();
        setIsLoading(true);
    }


    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Top 5 Favorite Plants</h1>
            <form>
                <div className="form mb-3">
                    <input value={filterValue} onChange={handleFilterVal} placeholder="Search by Latin or Common Name" name="filter-value" id="filter-value" className="form-control" />
                </div>
            </form>
            <div className="container text-center">
                <div className="row">
                    {filteredPlants().map((plant) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={plant.api_id}>
                            <Link to={`/plants/${plant.api_id}`}>
                                <div className="card h-100 border-0" style={{
                                    borderRadius: "15px",
                                    overflow: "hidden",
                                    // background: `url("https://images.pexels.com/photos/1353938/pexels-photo-1353938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                                    // background: `url("https://wallpaperaccess.com/full/1385576.jpg")`,
                                    background: `url("https://i.pinimg.com/originals/b0/f3/83/b0f3837f1c3314d9fd624952faae891b.jpg")`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}>
                                    <div className="image-box">
                                        <img src={plant.img} alt="" className="image-thumbnail" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Latin Name: {plant.latin_name}</h5>
                                        <p className="card-text">Common Name: {plant.common_name}</p>
                                        <p className="card-text">Color of blooms: {plant.color_of_blooms}</p>
                                        <p className="card-text">Blooming Season: {plant.blooming_season}</p>
                                        <p className="card-text">Pruning: {plant.pruning}</p>
                                    </div>
                                </div>
                                <div className="green-border"></div>
                            </Link>
                            <button className="btn btn-success" onClick={() => deleteFavorite(plant.api_id)}>Remove from Favorites</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}


export default FavoritesPage;
