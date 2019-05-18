import React, { Component } from 'react';
import axios from 'axios'
import Profile from './GitProfile'
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
    let user = 'MadsonDouglas'
    let { url, client_id, client_secret, count, sort } = this.state.github

    let get = `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`

    axios.get(get).then(({ data }) => {
      this.setState({ user: data })
    })
  }

  componentWillMount() {
    this.getUser()
  }

  render() {
    console.log(this.state)
    return (
      <article className="trabalhos">
        {this.state.user.length !== 0 ? <Profile user={this.state.user} /> : null}
        
        <div>2</div>
      </article>
    )
  }
}
