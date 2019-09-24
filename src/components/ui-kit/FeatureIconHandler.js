import React, {Component} from 'react';
import '../../index.scss';
import {  
  IconFeaturesLocalAgent,
  IconFeaturesMobile,
  IconFeatures247Support,
  IconFeaturesAutomaticPayment,
  IconFeaturesBuyOnline,
  IconFeaturesCreditCard,
  IconFeaturesDriverExclusion,
  IconFeaturesImmediateCoverage,
  IconFeaturesLowDownPayment,
  IconFeaturesNewCarReplacement,
  IconFeaturesNoCreditCheck,
  IconFeaturesNonOwner,
  IconFeaturesOnlineIdCards,
  IconFeaturesOnlineServicing,
  IconFeaturesPaperless,
  IconFeaturesRateLock,
  IconFeaturesRentersBundle,
  IconFeaturesSR22,
  IconStarWhite } from './assets/svgs'

export class FeatureIconHandler extends Component {

  icons() {
    let {features} = this.props;
    let featuresAr = features ? features : [];
    let featuresIcons = []

    featuresAr.forEach(element => {
      let icon 
      switch ( element.icon ) {
        case 'IconFeaturesLocalAgent':
          icon = (<IconFeaturesLocalAgent/>);
          break;
        case 'IconFeaturesMobile':
          icon = (<IconFeaturesMobile />);
          break;
        case 'IconFeatures247Support':
          icon = (<IconFeatures247Support />);
          break;
        case 'IconFeaturesAutomaticPayment':
          icon = (<IconFeaturesAutomaticPayment />);
          break;
        case 'IconFeaturesBuyOnline':
          icon = (<IconFeaturesBuyOnline />);
          break;
        case 'IconFeaturesCreditCard':
          icon = (<IconFeaturesCreditCard />);
          break;
        case 'IconFeaturesDriverExclusion':
          icon = (<IconFeaturesDriverExclusion />);
          break;
        case 'IconFeaturesImmediateCoverage':
          icon = (<IconFeaturesImmediateCoverage />);
          break;
        case 'IconFeaturesLowDownPayment':
          icon = (<IconFeaturesLowDownPayment />);
          break;
        case 'IconFeaturesNewCarReplacement':
          icon = (<IconFeaturesNewCarReplacement/>);
          break;
        case 'IconFeaturesNoCreditCheck':
          icon = (<IconFeaturesNoCreditCheck />);
          break;
        case 'IconFeaturesNonOwner':
          icon = (<IconFeaturesNonOwner />);
          break;
        case 'IconFeaturesOnlineIdCards':
          icon = (<IconFeaturesOnlineIdCards />);
          break;
        case 'IconFeaturesOnlineServicing':
          icon = (<IconFeaturesOnlineServicing />);
          break;
        case 'IconFeaturesPaperless':
          icon = (<IconFeaturesPaperless />);
          break;
        case 'IconFeaturesRateLock':
          icon = (<IconFeaturesRateLock />);
          break;
        case 'IconFeaturesRentersBundle':
          icon = (<IconFeaturesRentersBundle />);
          break;
        case 'IconFeaturesSR22':
          icon = (<IconFeaturesSR22 />);
          break;
        case 'IconStarWhite':
          icon = (<IconStarWhite />);
          break;
        default:
          icon = (null);
          break;
      }
      featuresIcons.push(icon);
    });
    return featuresIcons;
  }
  render() {
    return (
      <>
        {this.icons()}
      </>
    );
  }
}
