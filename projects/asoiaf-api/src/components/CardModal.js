import React from 'react';
import {withChar} from '../context/CharacterProvider.js';



class CardModal extends React.Component {
    constructor() {
        super()
        this.state = {
        show: false
      };
    }
    showModal = e => {
        this.setState({
          show: true
        });
      };

    render(props) {
        const header = (
            {/* <img alt="Card" src={img}/> */}
        );
        const footer = (
            <span>
                <button label="Save" icon="pi pi-check"/>
                <button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
            </span>
        );

    return (
        <>
        <div class="card" style={{width: '360px'}}>
            <div class="p-card-header">
                {/* <img alt="Card" >
                </img> */}
            </div>
                <div class="p-card-body">
                    <div class="p-card-title">Advanced Card</div>
                        <div class="p-card-subtitle">Subtitle</div>
                            <div class="p-card-content">
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                                </div>
                            </div>
                                <div class="p-card-footer">
                                    <span>
                                        <button class="p-button p-component p-button-text-icon-left" style={{'margin-right': '0.25em'}}>
                                            <span class="pi pi-check p-c p-button-icon-left">
                                            </span>
                                            <span class="p-button-text p-c">Save
                                            </span>
                                        </button>
                                        <button class="p-button p-component p-button-secondary p-button-text-icon-left">
                                            <span class="pi pi-times p-c p-button-icon-left">
                                            </span>
                                            <span class="p-button-text p-c">Cancel</span>
                                        </button>
                                            </span>
                                </div>
                    </div>
            </div>
        </>
    )

}}



export default withChar(CardModal)