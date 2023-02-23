import { useAuthContext, useToken } from './Token';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const { token } = useAuthContext();
    const navigate = useNavigate()
    if (!token) {
        setTimeout(() => {
            navigate("/");
        }, 0);
    }
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
                setCategories(data.Category)
            }
        } catch { console.log("There was an error getting categories") }
    }
    useEffect(() => {
        getCategories();
    }, []);

    return (

        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Categories</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    house plant care website
                </p>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                </div>
                <div className="row">
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                </div>
                <div className="row">
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                    <div className="col align-self-center p-2 m-1 border border-dark rounded">Category</div>
                </div>
            </div>
        </div>

    );
}

export default CategoriesPage;

// import { useAuthContext } from './Token';
// import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";

// function ModelColumn(props) {
//     return (
//         <div className="col">
//             {props.list.map(data => {
//                 const category = data;
//                 return (
//                     <div key={category.Category} className="card mb-3 shadow">
//                         <div className="card-body">
//                             <h5 className="card-title">{category.Category}</h5>
//                             <h6 className="card-subtitle mb-2 text-muted">
//                                 Something
//                             </h6>
//                             <p class="card-text">
//                                 Something
//                             </p>

//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     )
// }


// function CategoriesPage() {
//     const [categories, setCategories] = useState([[], [], [], [], [], [], []]);
//     const { token } = useAuthContext();
//     const navigate = useNavigate()

//     if (!token) {
//         setTimeout(() => {
//             navigate("/");
//         }, 0);
//     }

//     const getCategories = async () => {
//         const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/categories/`;
//         try {
//             const response = await fetch(url, {
//                 method: 'get',
//                 headers: {
//                     Authentication: `Bearer ${token}`,
//                 },
//                 credentials: 'include'
//             });
//             if (response.ok) {
//                 const data = await response.json()
//                 const requests = [];
//                 console.log(data["Category"])
//                 for (let category of data.Category) {

//                     console.log(category["Category"])
//                     const categoryUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/plants/category/${category.Category}/`;
//                     requests.push(fetch(categoryUrl));
//                 }
//                 const responses = await Promise.all(requests);
//                 const columns = [[], [], [], [], [], [], []];
//                 let i = 0;
//                 for (const modelResponse of responses) {
//                     if (modelResponse.ok) {
//                         const details = await modelResponse.json();
//                         columns[i].push(details);
//                         i += 1;
//                         if (i > 7) {
//                             i = 0;
//                         }
//                     } else {
//                         console.error(modelResponse)
//                     }
//                 }
//                 setCategories(data.Category)
//             }
//         } catch { console.log("There was an error getting categories") }
//     }

//     useEffect(() => {
//         getCategories();
//     }, []);


//     return (
//         <>
//             <div className="container-fluid" style={{ paddingTop: 40 }}>
//                 <h2>Plant Categories</h2>
//                 <div className="container-fluid bg-light">
//                     <div className="row" style={{ paddingTop: 70 }}>
//                         {categories.map((modelList, id) => {
//                             return (
//                                 <ModelColumn key={id} list={modelList} />
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CategoriesPage;