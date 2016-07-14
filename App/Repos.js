import React, {Component} from 'react';

class Repos extends Component {
  constructor(){
    super(...arguments);
    this.state = {
      repositories: []
    }
  }

  componentDidMount(){
    fetch('https://api.github.com/users/da-vaibhav/repos')
      .then((response) => response.json())
      .then((responseDate) => {
        console.log(responseDate);
        this.setState({
          repositories: responseDate
        })
      })
      .catch((err) => console.log(err));
  }

  render(){
    let repos = this.state.repositories.map((repo) => (
      <li key={repo.id}>{repo.name}</li>
    ));
    return(
      <div>
        <h1>github repos</h1>
        <menu>
          <ul>
            {repos}
          </ul>
        </menu>
        {this.props.children}
      </div>
    );
  }
}

export default Repos;
