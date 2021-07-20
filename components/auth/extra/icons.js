import React from 'react';
import { Icon} from '@ui-kitten/components';

export const PersonIcon = (style) => (
  <Icon {...style} name='person' />
);


export const EmailIcon = (style) => (
  <Icon {...style} name='email'/>
);

export const PlusIcon = (style) => (
  <Icon {...style} name='plus'/>
);

export const VideoIcon = (style) => {
  return <Icon {...style} name="video-outline"/>
}

export const LocationIcon = (style) => {
  return <Icon {...style} name="navigation-2-outline"/>
}

export const ClockIcon = (style) => (
  <Icon {...style} name='clock-outline'/>
);

export const HeartIcon = (style) => (
  <Icon {...style} name='heart-outline'/>
);

export const ShareIcon = (style) => (
  <Icon {...style} name='share-outline'/>
);