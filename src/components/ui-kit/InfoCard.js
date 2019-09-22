import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './InfoCard.scss';
import {IconStarGold, IconBoltWhite} from './svgs'
import logo from './assets/logo-carrier-sm-default.png';
import {Icons} from './FeatureIconHelper';
import Drawer from './Drawer';

export class InfoCard extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      toggled: false
    };
  }

  handleClick=()=>()=> {
    this.setState({toggled: !this.state.toggled});
  }

  header() {
    let {features, starRating, name, tagline} = this.props;
    let featuresAr = features ? features : [];
    let stars = [];

    for (let i = 0; i < starRating; i++) {
      stars.push(<IconStarGold/>);
    }

    return (
      <div className="headerWrapper">
        <img className="logo" src={logo} alt="logo"/>
        <div>
          <div className="name">{name}</div>
          <div>{tagline}</div>
          <div className="statWrapper">
            <div>{stars}</div>
            <div className="featuresIcon">
              <Icons features={featuresAr}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleButtonAction=()=>()=>{
    const url = `https://www.${this.props.link}`;
    window.open(url, '_blank');
  }

  priceHandler() {
    const {rate, type, linkText} = this.props;
    const rateFormatted = rate ? rate.toFixed(2) : rate;
    const buttonText = linkText ? linkText : "Buy Now";
    let buttonClass = "buttonOrange"

    if(type<2){
      buttonClass = "buttonBlue";
    }else if(type === 2){
      buttonClass = "buttonNone";
    }

    return (
      <div>
       { rate &&
        <div className="priceHandlerWrapper">
            <div className="price">{rateFormatted}</div> 
            <div className="monthTag"> / mo</div>
        </div>}
        <a className={`buyButton ${buttonClass}`} onClick={this.handleButtonAction()}>
          <IconBoltWhite/>
          <div className="buttonText">{buttonText}</div>
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="infoCardCintainer">
        <div className="infoCardWrapper">
          {this.header()}
          {this.priceHandler()}
        </div>
        <Drawer featuresList={this.props.featureBullets} content={this.props.details}/>
      </div>
    );
  }
}

InfoCard.propTypes = {
  name: PropTypes.string,
  starRating: PropTypes.number,
  rate: PropTypes.number,
  features: PropTypes.string,
  tagline: PropTypes.string,
  link: PropTypes.string
};
