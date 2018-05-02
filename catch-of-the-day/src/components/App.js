import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from '../sample-fishes';

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish => {
        // if state was an array, perhaps: this.state.fishes.push(fish);
        // if it was an object, perhaps: this.state.fishes.fish1 = fish;
        //1. take a top level copy of the existing state.
        const fishes = {...this.state.fishes}
        //2. add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //3. Set the new fishes object to state
        this.setState({ fishes  });
            //fishes: fishes, in ES6 when having a property and value the same you can just type it once.
    };
    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes});
    };
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>                    
                </div>
                    <Order />
                    <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes}
                    />
            </div>
        )         
    }
}

export default App;