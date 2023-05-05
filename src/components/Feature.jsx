import React from 'react'
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'
import FeatureBox from './FeatureBox'


function Feature() {
  const featureArr = [
    {
      id: 1,
      image: fimage1,
      title: 'WeightLifting',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, nostrum!',
    },
    {
      id: 2,
      image: fimage2,
      title: 'Specific Muscle',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, nostrum!',
    },
    {
      id: 3,
      image: fimage3,
      title: 'Flex Your Muscle',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, nostrum!',
    },
    {
      id: 4,
      image: fimage4,
      title: 'Cardio Exercise',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, nostrum!',
    },
  ]
  return (
    <section id="features">
      <div className="container">
        <h1 className='mb-5'>FEATURES</h1>
        <div className="row">
          {featureArr.map(feature => (
            <div key={feature.id} className='col-12 col-md-6 col-xl-3'>
              <FeatureBox  image={feature.image} title={feature.title} text={feature.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature
