import React from 'react';

import './GitProfile.css';

const Profile = ({ user }) =>
    <div className="container-card">
        <div className="card">
            <img src={user} alt="Avatar" />
            <div className="container">
                <h4>Repositorios: <span>{user.public_repos}</span></h4>
            </div>
            <div className="container">
                <h4>Seguidores: <span className="bg-b">{user.followers}</span></h4>
            </div>
            <div className="container">
                <h4>Seguindo: <span className="bg-b">{user.following}</span></h4>
            </div>
            <div className="container">
                <a href="">Ver perfil</a>
            </div>


        </div>
    </div>
export default Profile;