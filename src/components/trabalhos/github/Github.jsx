import React, { Component } from 'react';
import axios from 'axios'
import Profile from './GitProfile'
import Repos from './Repos'
import './Github.css';

export default class github extends Component {
  constructor() {
    super()
    this.state = {
      github: {
        url: 'https://api.github.com/users',
        client_id: '516ba45f461e3b4ba29d',
        client_secret: '1b20b1bbcb7c4c784a413e42d51feec6906eef2c',
        count: 7,
        sort: 'created: asc'
      },
      user: {},
      repos: [],
      error: ''
    }
  }
  getUser = () => {
    const user = 'MadsonDouglas'
    const { url, client_id, client_secret, count, sort } = this.state.github

    const profle = `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
    const repositorios = `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`

    axios.get(profle).then(({ data }) => { this.setState({ user: data }) })
    axios.get(repositorios).then(({ data }) => { this.setState({ repos: data }) })
  }
  
  componentWillMount() {
    this.getUser()
  }

  render() {
    const {repos} = this.state
    return (
      <article className="trabalhos">
        <div className="profile-render">
            {this.state.user.length !== 0 ? <Profile user={this.state.user} /> : null}
        </div>
        <div className="repositorios">
            {this.state.repos.length !== 0 ? repos.map(reps => <Repos key={reps.name} repo={reps} />) : null}
        </div>
      </article>
    )
  }
}
