import { getTokenInternal, useToken } from './Token';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";


function CategoryPage() {
    const [plants, setPlants] = useState([]);
    const { token } = useToken();
    const { category } = useParams();
    const navigate = useNavigate();


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
                setPlants(data);
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


    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">{category} Plants</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    House Plant Care Website
                </p>
            </div>
            <div className="container text-center">
                <div className="row">
                    {plants.map((plant) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={plant.api_id} >
                            <Link to={`/plants/${plant.api_id}`}>
                                <div className="card h-100">
                                    <img src={plant.img} className="card-img-top" alt={plant.common_name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{plant.common_name}</h5>
                                        <p className="card-text">{plant.latin_name}</p>
                                        <p className="card-text">{plant.color_of_blooms}</p>
                                        <p className="card-text">{plant.blooming_season}</p>
                                        <p className="card-text">{plant.use}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default CategoryPage;
