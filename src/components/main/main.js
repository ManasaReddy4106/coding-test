import React, { Component } from 'react';
import List from '../list/list';
import _ from 'lodash';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            mylist:this.props.data.mylist,
            recommendations:this.props.data.recommendations
        };   

        this.addItemInMyList = this.addItemInMyList.bind(this);
        this.removeItemFromMyList = this.removeItemFromMyList.bind(this);
    }

    addItemInMyList(indx){
        let mylist = this.state.mylist;
        let recommendations = this.state.recommendations;

        if(_.findIndex(mylist, this.state.recommendations[indx]) < 0){
            mylist.push(this.state.recommendations[indx]);
            recommendations.splice(indx, 1);
            
        }

        this.setState({mylist:mylist, recommendations: recommendations});
    }

    removeItemFromMyList(indx){
        let mylist = this.state.mylist;
        let recommendations = this.state.recommendations;
        let removeItem = mylist.splice(indx, 1)[0];
        if(_.findIndex(recommendations, removeItem) < 0){
            recommendations.push(removeItem);
        }
        this.setState({mylist:mylist, recommendations: recommendations});

    }

    render(){
        return (
            <div style={{"padding-left": "8px"}}>
                <List title="My List" listdata={this.state.mylist} remove={this.removeItemFromMyList} />
                <List title="Recommendations" listdata={this.state.recommendations} add={this.addItemInMyList}/>
            </div>
        );
    }
}

export default Main;