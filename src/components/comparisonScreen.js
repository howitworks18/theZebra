import React, {Component} from 'react';
import {InfoCard} from './ui-kit/InfoCard';

export class ComparisonScreen extends Component {
  render() {
    const insuranceData = require('../carrier_cards.json').carrier_cards;
    return (
      <>
        {insuranceData.map((data, i) => (
          <InfoCard 
            key={i} 
            type={data.type}
            link={data.action.link}
            linkText={data.action.link_text}
            name={data.name}
            tagline={data.tagline}
            rate={data.rate}
            starRating={data.stars}
            featureBullets={data.features_html}
            features={data.features}
            details={data.detail_body}/>
          )
        )}
      </>
    );
  }
}
