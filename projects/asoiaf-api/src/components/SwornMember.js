import React from "react";
import axios from "axios";

//will load data from house & map out SwornMembers
class SwornMember extends React.Component {
  constructor() {
    super();
    this.state = {
      swornMember: {},
      memberImage: "./cross-swords.png"
    };
  }

  componentDidMount() {
    //need axios get call here to display below
    axios
      .get(this.props.url)
      .then(res =>
        this.setState(
          {
            swornMember: res.data
          },
          this.getImage
        )
      )
      .catch(err => err);
  }

  getImage = () => {
    axios
      .get(
        `https://vschool-cors.herokuapp.com?url=https://api.got.show/api/show/characters/${this.state.swornMember.name}`
      )
      .then(res => {
        let image = "./cross-swords.png";
        if (res.data.image) {
          image = res.data.image;
          this.setState({
            memberImage: image
          });
        } else {
          return image
        }

      });
  };

  render() {
    //destructuring for shorter syntax
    const { name, gender, titles } = this.state.swornMember;
    return (
      <div className="member-page">
        <div className="member-container">
          <h2 className="member-name">{name}</h2>
          <h3 className="member-title" style={{ fontStyle: "italic" }}>
            {titles}
          </h3>
          <h3 className="member-gender">{gender}</h3>
          {/* add ternary statement in image src for placeholder image until page loads all images */}
          <img className="member-img" src={this.state.memberImage} alt={name} />
        </div>
      </div>
    );
  }
}

export default SwornMember;
