import React from 'react';
import { withChar } from "./context/CharacterProvider.js";



//will load data from house & map out SwornMembers
class SwornHouseMembers extends React.Component {
    constructor() {
        super()
        this.setState = {

        }
    }
    render() {
        return (
            <div>Sworn House Members</div>
        )
    }
}


export default withChar(SwornHouseMembers)