import React from 'react'
import './Repos.css'

export default ({ repo }) =>
    <div className="repositorios">
        <div className="dados-git">
            <div>
                <a href={repo.html_url}
                   target="_blank" rel="noopener noreferrer">
                        {repo.name}
                </a>
            </div>
            <div>
                <span className="badge badge-primary">Stars: {repo.stargazers_count}</span>
                <span className="badge badge-dotted">Watch: {repo.watchers_count}</span>
                <span className="badge badge-color">Forks: {repo.forks_count}</span>
            </div>
        </div>
    </div>
