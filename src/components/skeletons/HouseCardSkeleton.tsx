import React from "react";
import ContentLoader from "react-content-loader";

const HouseCardSkeleton: React.FC = (props) => (
  <ContentLoader 
    speed={1.2} 
    width={350}
    height={600}
    viewBox="0 0 350 600"
    backgroundColor="#f0f0f0"
    foregroundColor="#cccccc"
    {...props}
  >
    <rect x="10" y="10" rx="15" ry="15" width="330" height="220" />

    <rect x="20" y="250" rx="5" ry="5" width="300" height="20" />

    <rect x="20" y="285" rx="5" ry="5" width="150" height="15" />

    <rect x="250" y="285" rx="5" ry="5" width="80" height="25" />

    <rect x="20" y="330" rx="5" ry="5" width="30" height="30" />

    <rect x="20" y="380" rx="5" ry="5" width="310" height="10" />
    <rect x="20" y="400" rx="5" ry="5" width="280" height="10" />
    <rect x="20" y="420" rx="5" ry="5" width="290" height="10" />
  </ContentLoader>
);

export default HouseCardSkeleton;
