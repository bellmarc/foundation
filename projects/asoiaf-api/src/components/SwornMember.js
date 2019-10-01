import React from 'react';
import axios from 'axios';


//will load data from house & map out SwornMembers
class SwornMember extends React.Component {
    constructor() {
        super()
        this.state = {
        swornMember: {}
        }
    }

    componentDidMount() {
    //need axios get call here to display below
    axios.get(this.props.url)
    .then(res =>
        this.setState({
            swornMember: res.data
        })
        )
    .catch(err => (err))
    }

    render() {
        //destructuring for shorter syntax
        const {name, gender, titles} =  this.state.swornMember
        return (
            <div>
                <div className="member-container">
                    <h1 className="member-name">{name}</h1>
                     <h3 className="member-title" style={{'fontStyle':'italic'}}>{titles}
                     </h3>
                    <h3 className="member-gender">{gender}
                    </h3>
                </div>
            </div>
        )
    }
}


export default SwornMember

