import React from "react";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
// components
import Icon from "../../../components/atoms/icon/icon";
// badge images
import { badgeData } from "./badgeData";

const BadgeHub = styled.div`
  position: absolute;
  top: 27.8rem;
  left: 3rem;
  height: 7rem;
  width: 100vw;
`;
const BadgeText = styled.p`
  position: absolute;
  width: 6.6rem;
  height: 1.5rem;
  left: 3rem;
  top: 23.3rem;
  font-family: Catamaran;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.5rem;
  /* identical to box height, or 15px */
  display: flex;
  align-items: center;
  letter-spacing: 0.07em;

  /* main / menu text */

  color: #b8b7e1;
`;
const ViewAllText = styled.p`
  position: absolute;
  width: 4.1rem;
  height: 0.9rem;
  left: 28.9rem;
  top: 23.7rem;

  font-family: Catamaran;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 0.9rem;
  /* or 9px */

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  /* main / menu text */

  color: #b8b7e1;
`;

const ProfileBadges = () => {
  return (
    <>
      <BadgeText>BADGES</BadgeText>
      <ViewAllText>view all &rsaquo;</ViewAllText>
      <BadgeHub className={`badge-hub`}>
        <div>
          <SwipeableViews>
            {badgeData.map(badge => {
              {
                /* console.log(badge.svg);
                 */
              }
              const assignSlide = `Object.assign({}, styles.slide, styles.slide${badge.id}`;

              return (
                <Icon
                  className={`${badge.category} icon`}
                  key={badge.id}
                  badge={badge}
                  svg={badge.svg}
                  alt={badge.alt}
                  width={5.775}
                  height={6.55}
                />
              );
            })}
          </SwipeableViews>
        </div>
      </BadgeHub>
    </>
  );
};

export default ProfileBadges;
