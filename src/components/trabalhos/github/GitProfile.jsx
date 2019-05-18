import React from 'react';
import './GitProfile.css';

const Profile = ({ user }) =>
    <div className="container-card">
        <div className="card">
            <img src={user.avatar_url} alt="Avatar" />
            <div className="container">
                <p>Repositorios: <span className="bg-g">{user.public_repos}</span></p>
            </div>
            <div className="container">
                <p>Seguidores: <span className="bg-b">{user.followers}</span></p>
            </div>
            <div className="container">
                <p>Seguindo: <span className="bg-b">{user.following}</span></p>
            </div>
            <div className="container link">
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="bg-g">Ver perfil</a>
            </div>
        </div>
    </div>
export default Profile;