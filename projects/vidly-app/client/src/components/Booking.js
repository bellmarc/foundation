import React from 'react';
import '../style/Booking.css';
import { withBooking } from '../context/BookingProvider.js';

class Booking extends React.Component {

    componentDidMount() {
        this.props.getProfessionals(this.props.match.params.location)
    }

    render() {
        return (
            <div>
                BOOKING PAGE
                map here
            </div>
        )
    }
}



export default withBooking(Booking)