import React from 'react';
import axios from 'axios';


//will load data from house & map out SwornMembers
class SwornMember extends React.Component {
    constructor() {
        super()
        this.setState = {
        swornMember: {}
        }
    }
//map over array of urls
    componentDidMount() {
        axios.get(props.url)
        console.log(props.url)
    }

    render() {
        return (
            <div>Sworn House Members</div>
        )
    }
}


export default SwornMember

