import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content'
import Aux from './Aux';

class App extends React.Component {
    state = {
        page: 1,
        maxPages: 6,
        verified: true
    }
    nextpage = () => {
        let temp = this.state.page;
        if (temp < this.state.maxPages && this.state.verified === true) {
            temp += 1;
            this.setState({
                page: temp,
                verified: false
            })
        }
    }
    prevpage = () => {
        let temp = this.state.page;
        if (temp >= 1) {
            temp -= 1;
            this.setState({
                page: temp
            })
        }
    }
    verify = () => {
        if (!this.state.verified) {
            this.setState({
                verified: true
            })
        }
    }
    render() {
        return (
            <Aux>
                <Header title="This is a sample course title" username="Sample Student" nextclick={this.nextpage} prevclick={this.prevpage} verified={this.state.verified}/>
                <Sidebar page={this.state.page} />
                <Content page={this.state.page} verification={this.verify} />
            </Aux>
        );
    }
};

export default App;