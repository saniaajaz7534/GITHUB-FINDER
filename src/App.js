import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends React.Component{
  state={
    users: [],
    loading: false
  }
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    this.setState({loading:true});
    const res=await axios.get(`https://api.github.com/users?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data , loading:false});
    console.log(res.data);


  }
  
  render(){
    return (
      <div className='App'>
        <Navbar title='Github-Finder' icon='fab fa-github' />
        <div className='container'>
        <Users loading={this.state.loading} users={this.state.users}/>
        </div>
        
      </div>
    );

    }
  
}

export default App;
