import React, { Component } from 'react';
import './list.css';
class List extends Component {
    
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>
                    <ul>
                        {
                            this.props.listdata.map((o, i) => <li key={i}>
                                <span className="title">{o.title}</span>
                                <img className="item" alt={o.title} src={o.img}/>
                                {this.props.add && <button className="btn" onClick={(e)=>this.props.add(i)}>Add</button>}
                                {this.props.remove && <button className="btn" onClick={(e)=>this.props.remove(i)}>Remove</button>}

                            </li>)
                        }
                    </ul>
                </div>
                
            </div>
        );
    }
}

export default List;