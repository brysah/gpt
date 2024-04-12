import styled from "styled-components"; 
import illustration from '../../assets/hero-illustration.png'

export const Hero = styled.div` 
  min-height: 70rem;
  overflow-x: hidden;
  display: flex; 
  > .left-area { 
    max-width: 60rem;
    transform: translateX(10rem);
    height: 66rem;
    width: 100%;
    background-image: url(${illustration}) ;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  > .right-area {
    max-width: 63rem;
    width: 100%;
    margin-top: 12rem;
    h1 {
      background: linear-gradient(90deg, #ae67fa 1.84%, #f49867 102.67%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 6.2rem;
      font-weight: 800;
      line-height: 7.5rem;
      letter-spacing: -0.248rem;
      max-width: 61.4rem;
      width: 100%;
      margin-bottom: 3.2rem;
    }
    p {
      color: ${({ theme }) => theme.COLORS.TEXT_PARAGRAPH};
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 4rem;
    }
    .request-acess {
      display: flex;
      gap: 2rem;
      align-items: center;
      p {
        color: #fff;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 37.611px;
        display: block;
        margin-bottom: 0;
      }
    }
  }
  @media (max-width:1024px){
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    >.left-area{ 
      transform: translateX(0);
      height: 50rem;
    }
    >.right-area{ 
      text-align: center;
      margin-top: 5rem;
      .request-acess{
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  }
`;
