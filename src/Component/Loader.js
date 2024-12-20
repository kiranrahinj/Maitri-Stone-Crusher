import React from 'react';
import styled from 'styled-components';

const Loader = ({ size = 100, message = "loading.." }) => {
  return (
    <div className='flex flex-row justify-center '>
        <StyledWrapper size={size} aria-live="polite">
            <div className="cube div">
                <div className="top div" />
                <div className="div">
                {[...Array(4)].map((_, i) => (
                    <span className="span" key={i} style={{ '--i': i }}>
                    <p>{message}</p>
                    <p>{message}</p>
                    </span>
                ))}
                </div>
            </div>
        </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .cube {
    position: relative;
    height: 100px;
    width: 100px;
    transform-style: preserve-3d;
    animation: animate 4s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(0deg);
    }

    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }

  .cube .div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .cube .div .span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(90deg * var(--i))) translateZ(50px);
    background-image: linear-gradient(
      -45deg,
      #000000,
      #13273f,
      #0d1729,
      #6a6a8d);
    background-size: 1200% 1200%;
    animation: AnimationName 30s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
  }

  .cube .div .span p {
    position: absolute;
    font-size: 1em;
    color: white;
    transform: translateZ(20px);
  }

  .cube .div .span p:nth-child(1) {
    transform: translateZ(0) translateY(20px);
    color: rgba(0,0,0,0.1);
    filter: blur(2px);
  }

  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background-image: linear-gradient(
      -45deg,
      #000000,
      #13273f,
      #0d1729,
      #6a6a8d);
    transform: rotateX(90deg) translateZ(50px);
    background-size: 1200% 1200%;
    animation: AnimationName 30s ease infinite;
  }

  .top::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-image: linear-gradient(
      -45deg,
      #000000,
      #0d0d0e,
      #030303,
      #000000);
    background-size: 1200% 1200%;
    animation: AnimationName 30s ease infinite;
    box-shadow: 0 0 120px #3d413e,0 0 120px #302f2f,0 0 120px #413f3f;
    transition: box-shadow 3s;
    transform: translateZ(-200px);
    filter: blur(40px);
  }

  @keyframes AnimationName2 {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }`;

export default Loader;
