import React, { Component } from 'react';
import axios from 'axios'
import Profile from './GitProfile'
import './Github.css';
const initialState = {
  github: {
    url: 'https://api.github.com/users',
    client_id: '516ba45f461e3b4ba29d',
    client_secret: '1b20b1bbcb7c4c784a413e42d51feec6906eef2c',
    count: 7,
    sort: 'created: asc'
  },
  user: [],
  repos: [],

}
export default class github extends Component {

  state = { ...initialState }
  
  getUser = this.getUser.bind(this);

  getUser() {
    const user = 'MadsonDouglas'
    const { url, client_id, client_secret, count, sort } = this.state.github
    const get = `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`

    axios.get(get)
      .then(data => { this.setState({ user: data }) }).catch(error => { this.setState({ error }) })
  }
  render() {
    console.log(this.state)
    return (
      <article onLoad={this.getUser} className="trabalhos">
        {this.state.user.length !== 0 ? <Profile user={this.state.user} /> : null}
        <div>2</div>
      </article>
    )
  }
}
