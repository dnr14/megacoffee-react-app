import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InfoLable from '../atoms/InfoLable';
import noProfile from '@/assets/images/noProfile.png';

const Profile = () => {
  return (
    <FlexBox>
      <Inner>
        <div>
          <img src={noProfile} alt="src" />
          <InfoLable>dnr14</InfoLable>
          <InfoLable>이민욱</InfoLable>
        </div>
        <div>
          <InfoLable>정보수정</InfoLable>
          <InfoLable>
            <Link to="/logout">로그아웃</Link>
          </InfoLable>
        </div>
      </Inner>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  height: 90%;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-right: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius2};

  background-color: ${({ theme }) => theme.color.coffee1};
  box-shadow: 2px 2px 2px ${({ theme }) => theme.color.shadowColor};

  ${({ theme }) => theme.media.tab} {
    display: none;
  }

  a {
    padding: 0.5rem 0;
  }
`;

const Inner = styled.div`
  height: 100%;
  margin: 0.3rem;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 0 1.5rem;
  background-color: ${({ theme }) => theme.color.coffee2};

  & > div {
    display: flex;
  }

  & > div:first-child {
    padding: 0.4rem 0 0.4rem 0;
    align-items: center;
    gap: 10px;
    font-size: 1rem;

    & > img {
      border-radius: 50%;
      width: 24px;
      padding: 5px;
      background-color: ${({ theme }) => theme.color.coffee1};
    }
  }

  & > div:last-child {
    justify-content: flex-start;
    gap: 0.5rem;
    font-size: 0.6rem;
  }
`;

export default memo(Profile);
