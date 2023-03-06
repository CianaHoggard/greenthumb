import { useToken, getTokenInternal } from './Token';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./CategoryPage.css"
import Loader from "./Loader"

function ModelColumn(props) {

    const foliagePlantACL = (name) => {
        if (name === "Foliage plant") {
            return (name = "Foliage")
        } else {
            return (name)
        }
    }

    return (
        <div className="col">
            {props.column.map(categoryName => {
                let category = foliagePlantACL(categoryName)
                return (
                    <Link key={category} to={`/categories/${category}`} className='card-link'>
                        <div className="card mb-3 shadow h-50 text-center">
                            <div className="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
                                <h6 className="card-title1" style={{ paddingTop: 5 }}>{category}</h6>
                                <p className="card-text">
                                    🌱
                                </p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    )
}


function CategoriesPage() {

    const [categories, setCategories] = useState([[], [], [], [], [], [], []]);
    const { token } = useToken();
    const navigate = useNavigate()
    const [loading, setIsLoading] = useState(true);

    const getCategories = async () => {

        const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/categories/`;
        try {
            const response = await fetch(url, {
                method: 'get',
                headers: {
                    Authentication: `Bearer ${token}`,
                },
                credentials: 'include'
            });
            if (response.ok) {
                const data = await response.json()
                const requests = [];
                for (let category of data) {
                    requests.push(category.Category)
                }
                requests.sort()
                requests.splice(14, 1)
                const columns = [[], [], [], [], [], [], []];
                let i = 0;
                for (let category of requests) {
                    columns[i].push(category);
                    i += 1;
                    if (i > 6) {
                        i = 0;
                    }
                }
                columns[6].push("Other")
                setCategories(columns)
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
        getCategories();
        isLoggedIn();
    }, []);


    return (
        <>
            {loading ? (
                <Loader />
            ) : (
            <div className="container-fluid" style={{ paddingTop: 20, paddingBottom: 300 }}>
                <h2 className="name" style={{ paddingTop: 20 }}>Plant Categories</h2>
                <div className="container-fluid">
                    <div className="row" style={{ paddingTop: 20 }}>
                        {categories.map((category) => {
                            return (
                                <ModelColumn key={categories.indexOf(category)} column={category} />
                            );
                        })}
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

export default CategoriesPage;
