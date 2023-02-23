import React, { useState } from "react";
import { useToken } from '../Token'



function SomeComponent() {
    const { token } = useAuthContext();

    // Use the token value in a fetch
}


const HomePage = () => {

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-3 mt-4">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit} id="form">
                        <div className="form-floating mb-3">
                            <input
                                onChange={handleFormChange}
                                placeholder="..."
                                type="text"
                                name="email"
                                className="form-control"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={handleFormChange}
                                placeholder="..."
                                type="text"
                                name="password"
                                className="form-control"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button className="btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
