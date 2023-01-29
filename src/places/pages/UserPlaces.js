import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Eiffel Tower',
    description: 'The most iconic structure in the City of Love',
    imageUrl: 'https://www.pexels.com/photo/eiffel-tower-at-night-2348811/',
    address: 'Champ de Mars, 5 Av. Anatole France, 75007 Paris, France',
    location: {
      lat: 48.8583694,
      lng: 2.2841826
    },
    creator: '01'
  },
  {
    id: 'p2',
    title: 'Eiffel Tower',
    description: 'The most iconic structure in the City of Love',
    imageUrl: 'https://www.pexels.com/photo/eiffel-tower-at-night-2348811/',
    address: 'Champ de Mars, 5 Av. Anatole France, 75007 Paris, France',
    location: {
      lat: 48.8583694,
      lng: 2.2841826
    },
    creator: '02'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;