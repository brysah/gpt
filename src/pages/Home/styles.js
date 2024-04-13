import styled from "styled-components";
import illustration from "../../assets/hero-illustration.png";

export const Hero = styled.div`
  min-height: 70rem;
  overflow-x: hidden;
  display: flex;
  > .left-area {
    max-width: 60rem;
    transform: translateX(10rem);
    height: 66rem;
    width: 100%;
    background-image: url(${illustration});
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
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    > .left-area {
      transform: translateX(0);
      height: 50rem;
    }
    > .right-area {
      text-align: center;
      margin-top: 5rem;
      .request-acess {
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  }
`;

export const Companies = styled.div`
  max-width: 67rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12rem auto 12.6rem;
  > img {
    max-width: 7.1rem;
  }
  @media (max-width: 1024px) {
    margin-bottom: 6rem;
    flex-wrap: wrap;
  }
  @media (max-width: 670px) {
    justify-content: center;
    gap: 2rem;
  }
`;

export const Info = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
  padding: 5.7rem 6.1rem;
  width: 100%;
  margin-bottom: 20rem;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 9.1rem;
    flex-wrap: wrap;
    gap: 2rem;
    p {
      color: ${({ theme }) => theme.COLORS.TEXT_PARAGRAPH};
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 3rem;
      max-width: 73.1rem;
      width: 100%;
    }
  }
  .title {
    .line {
      width: 3.8rem;
      height: 0.3rem;
      background: linear-gradient(103deg, #ae67fa -13.86%, #f49867 99.55%), #fff;
    }
    h3 {
      color: #fff;
      font-size: 2.4rem;
      font-weight: 800;
      line-height: 7.5rem;
      letter-spacing: -0.096rem;
    }
  }
  .content {
    .explore {
      display: flex;
      justify-content: space-between;
      margin-bottom: 9.7rem;
      align-items: flex-start;
      h4 {
        background: linear-gradient(90deg, #ae67fa 1.84%, #f49867 102.67%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 3.4rem;
        font-weight: 800;
        line-height: 4.5rem;
        max-width: 47.2rem;
        width: 100%;
      }
      a {
        color: ${({ theme }) => theme.COLORS.TEXT_LINK};
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 3rem;
      }
    }
    .cards {
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
      .card {
        max-width: 33.4rem;
        width: 100%;
        p {
          color: ${({ theme }) => theme.COLORS.TEXT_PARAGRAPH};
          font-size: 1.6rem;
          font-weight: 500;
          line-height: 3rem;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 3rem;
    margin-bottom: 10rem;
    .content {
      .explore {
        flex-wrap: wrap;
        align-items: center;
        gap: 2rem;
      }
      .cards {
        flex-wrap: wrap;
        gap: 2rem;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const Future = styled.div`
  display: flex;
  justify-content: space-between; 
  gap: 3.5rem;
  margin-bottom: 7rem;
  .acess {
    width: 100%;
    max-width: 47.2rem;
    .explore {
      h4 {
        background: linear-gradient(90deg, #ae67fa 1.84%, #f49867 102.67%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 3.4rem;
        font-weight: 800;
        line-height: 4.5rem;
        max-width: 47.2rem;
        width: 100%;
        margin-bottom: 3.4rem;
      }
      a {
        color: ${({ theme }) => theme.COLORS.TEXT_LINK};
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 3rem;
      }
    }
  }
  .improve {
    display: flex;
    flex-direction: column;
    gap: 5.7rem; 
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 7.2rem;
      .title {
        max-width: 17.2rem;
        width: 100%; 
        .line {
          width: 3.8rem;
          height: 0.3rem;
          background: linear-gradient(103deg, #ae67fa -13.86%, #f49867 99.55%),
            #fff;
        }
        h3 {
          color: #fff;
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 2.4rem;
          letter-spacing: -0.072rem;
        }
      }
      p {
        color: ${({ theme }) => theme.COLORS.TEXT_PARAGRAPH};
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
        max-width: 33.4rem;
        width: 100%;
      }
    }
  }
  @media (max-width:1024px){
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    .acess{
      .explore{
        text-align: center;
      }
    } 
    .improve{
      .item{
        gap: 2rem;
      }
    }
  }
`;
