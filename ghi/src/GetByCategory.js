import { getTokenInternal, useToken } from './Token';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import './GetByCategory.css';
import Loader from "./Loader"



function CategoryPage() {
    const [filterValue, setFilterValue] = useState("");
    const [plants, setPlants] = useState([]);
    const { token } = useToken();
    const { category } = useParams();
    const navigate = useNavigate();
    const [loading, setIsLoading] = useState(true);


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


    const getPlants = async () => {
        const token = await getTokenInternal();
        const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/category/${category}/`;
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
                data.sort((p1, p2) => (p1.latin_name > p2.latin_name) ? 1 : (p1.latin_name < p2.latin_name) ? -1 : 0);
                data.map((plant) => {
                    splitCommonName(plant)
                })
                setPlants(data);
                setIsLoading(false);
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
        getPlants();
        isLoggedIn();
    }, [category, token]);


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

    return (
        <div className="px-4 py-1 my-3 text-center">
            <p className="name">{category} Plants</p>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <form>
                        <div className="form mb-3">
                            <input value={filterValue} onChange={handleFilterVal} placeholder="Search by Latin or Common Name" name="filter-value" id="filter-value" className="form-control" />
                        </div>
                    </form>
                    <div className="container text-center">
                        <div className="row">
                            {filteredPlants().map((plant) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={plant.api_id}>
                                    <Link to={`/plants/${plant.api_id}`} style={{ textDecoration: "none" }}>
                                        <div className="card h-100 border-0 card-background" style={{
                                            borderRadius: "15px",
                                            overflow: "hidden",
                                            backgroundImage: `url(${plant.img})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                        }}>
                                            <div className="image-box">
                                                <img src={plant.img} alt="" className="image-thumbnail" />
                                            </div>
                                            <div className="card-body2">
                                                <h5 className="card-title">{plant.latin_name}</h5>
                                                <p className="card-text">{plant.common_name}</p>
                                                <p className="card-text">{plant.color_of_blooms}</p>
                                                <p className="card-text">{plant.blooming_season}</p>
                                                <p className="card-text">{plant.use}</p>
                                            </div>
                                        </div>
                                        <div className="green-border"></div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}


export default CategoryPage;
