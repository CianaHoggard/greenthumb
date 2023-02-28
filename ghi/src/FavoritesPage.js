import { getTokenInternal, useToken } from './Token';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";


function FavoritesPage() {
    const [filterValue, setFilterValue] = useState("");
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const [plants, setPlants] = useState([]);
    const { token } = useToken();
    const navigate = useNavigate();

    // const getFavoritesList = async (favorites) => {
    //     const token = await getTokenInternal();
    //     const promises = favorites.map(async (favorite) => {
    //         try {
    //             const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/${favorite[1]}/`;
    //             const response = await fetch(url, {
    //                 method: 'GET',
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //                 credentials: "include"
    //             });
    //             if (response.ok) {
    //                 const favoriteData = await response.json();
    //                 return favoriteData;
    //             }
    //         } catch (error) {
    //         }
    //     });
    //     const favoritesList = await Promise.all(promises);
    //     setPlants(favoritesList);
    // }


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
                setLoading(false);
                console.log(favorites);
            }
            // const data = await response.json();
            // data.sort((p1, p2) => (p1.latin_name > p2.latin_name) ? 1 : (p1.latin_name < p2.latin_name) ? -1 : 0);
            // data.map((plant) => {
            //     if (plant.common_name == null) {
            //         return plant.common_name = "No common name found";
            //     }
            //     let formattedName = plant.common_name[0]
            //     if (plant.common_name.length >= 2) {
            //         for (let i = 1; i < plant.common_name.length; i++) {
            //             formattedName += (", " + plant.common_name[i])
            //         }
            //     }
            //     plant.common_name = formattedName
            // })
            // setPlants(data);
            // console.log(data);
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
    }, [token]);

    useEffect(() => {
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
            setPlants(favoritesList);
        }
        getFavoritesList(favorites);
    }, [favorites]);


    // const handleFilterVal = (event) => {
    //     setFilterValue(event.target.value);
    // };

    // const filteredPlants = () => {
    //     if (filterValue === " ") {
    //         return plants;
    //     } else {
    //         return plants.filter((plant) =>
    //             plant.latin_name.toUpperCase().includes(filterValue.toUpperCase()) || plant.common_name.toUpperCase().includes(filterValue.toUpperCase())
    //         );
    //     }
    // };


    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Favorites</h1>
            {/* <form>
            <div className="form mb-3">
                <input value={filterValue} onChange={handleFilterVal} placeholder="Search by Latin or Common Name" name="filter-value" id="filter-value" className="form-control" />
            </div>
        </form> */}
            <div className="container text-center">
                <div className="row">
                    {plants.map((plant) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={plant.api_id}>
                            <Link to={`/plants/${plant.api_id}`}>
                                <div className="image-box">
                                    <img src={plant.img} alt="" className="image-thumbnail" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{plant.latin_name}</h5>
                                    <p className="card-text">{plant.common_name}</p>
                                    <p className="card-text">{plant.color_of_blooms}</p>
                                    <p className="card-text">{plant.blooming_season}</p>
                                    <p className="card-text">{plant.use}</p>
                                </div>
                                <div className="green-border"></div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}


export default FavoritesPage;
