import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

 const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  
 
  
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I'm Daniel omotara , a developer skilled in solving problems with Html, css, JavaScript, react, nextjs, redux, nodejs. 
I am focused on being a valuable asset on any team and help organisation solve problems
      </SectionText>
      
   
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
