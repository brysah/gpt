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
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    .acess {
      .explore {
        text-align: center;
      }
    }
    .improve {
      .item {
        gap: 2rem;
      }
    }
  }
`;

export const Feature = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-end;
  margin-bottom: 15.5rem;
  .right-area {
    max-width: 48rem;
    width: 100%;
    h3 {
      background: linear-gradient(90deg, #ae67fa 1.84%, #f49867 102.67%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 3.4rem;
      font-weight: 800;
      line-height: 4.5rem;
      margin-bottom: 2.3rem;
    }
    p {
      color: ${({ theme }) => theme.COLORS.TEXT_PARAGRAPH};
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 3rem;
      margin-bottom: 3.1rem;
    }
    a {
      color: ${({ theme }) => theme.COLORS.TEXT_LINK};
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
  .left-area {
    max-width: 54.6rem;
    width: 100%;
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    margin-bottom: 8rem;
    .left-area {
      max-width: 45rem;
    }
  }
`;

export const Cta = styled.div`
  border-radius: 10.724px;
  border: 1px solid #000;
  background: linear-gradient(90deg, #ae67fa 1.84%, #f49867 102.67%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 4.6rem 4.6rem 2.9rem;
  margin-bottom: 18rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  .register {
    span {
      color: #0e0e0e;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    p {
      color: #000;
      font-size: 2.4rem;
      font-weight: 800;
      line-height: 4.5rem;
    }
  }
  .get {
    max-width: 18.9rem;
    width: 100%;
    padding: 1.5rem 0;
    border-radius: 4rem;
    background: #000;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 3rem;
    transition: all 0.3s;
    &:hover {
      background: #fff;
      color: #000;
    }
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`;

export const Blog = styled.div`
  margin-bottom: 15rem;
  h3 {
    background: linear-gradient(90deg, #ae67fa 1.84%, #f49867 102.67%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 6.2rem;
    font-weight: 800;
    line-height: 7.5rem;
    letter-spacing: -0.248rem;
    max-width: 70rem;
    width: 100%;
    margin-bottom: 11.5rem;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    .large {
      max-width: 41.7rem;
      position: relative;
      height: -webkit-fill-available;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
      .card_item {
        .card_content {
          a {
            position: absolute;
            bottom: 1.4rem;
          }
        }
      }
    }
    .medium {
      max-width: 70.2rem;
      display: grid;
      grid-template-columns: 32.7rem 32.7rem;
      gap: 4.8rem;
      .card_item {
        .card_content {
          padding: 0.7rem 2.5rem;
          p {
            font-size: 1.9rem;
          }
        }
      }
    }
    .card_item {
      width: 100%;
      .card_content {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
        padding: 3.2rem 2.5rem;
        span {
          color: #fff;
          font-size: 1.1649rem;
          font-weight: 700;
          line-height: 3.4947rem;
        }
        p {
          color: #fff;
          font-size: 2.511rem;
          font-weight: 800;
          line-height: 3.0287rem;
        }
        a {
          color: #fff;
          font-size: 1.1649rem;
          font-weight: 700;
          line-height: 3.4947rem;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    h3 {
      max-width: none;
      text-align: center;
    }
    .cards {
      display: flex;
      flex-direction: column;
      gap: 8rem;
      .large {
        height: auto;
        .card_item {
          .card_content {
            height: 25rem;
          }
        }
      }
      .large,
      .medium {
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 768px) {
    .cards {
      .medium {
        max-width: 40rem;
        grid-template-columns: 1fr;
      }
    }
  }
`;
