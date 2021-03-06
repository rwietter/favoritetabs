import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  place-content: center center;
  place-items: center center;

  gap: 40px 0;

  background: #f4f4f4;

  overflow: hidden;
`;

export const Main = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  color: #1d2227;

  .welcome {
    display: flex;
    align-items: center;
    h1 {
      font-family: 'Poppins_Black', -apple-system, Roboto, Ubuntu, Cantarell,
        sans-serif;
      font-size: clamp(1.5rem, 3.5vw, 3.5rem);
      letter-spacing: 1rem;
      span {
        box-shadow: inset 0 -9px 0 rgba(255, 121, 242, 0.2);
      }
    }
  }
  .go-app {
    font-family: 'Poppins_Regular', -apple-system, Roboto, Ubuntu, Cantarell,
      sans-serif;

    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-flow: column wrap;

    margin: 5rem 0 0 0;

    p {
      letter-spacing: 1px;
      line-height: calc(normal + 30px);
      max-width: 80%;
      font-size: clamp(0.8rem, 1vw, 1.2rem);
    }
  }
  @media screen and (max-width: 690px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    .welcome,
    .go-app {
      align-items: center;
      justify-content: center;
      p {
        max-width: 90%;
      }
    }
    .welcome h1 span {
      box-shadow: none;
    }
  }
  @media screen and (min-width: 630px){
    padding: 0 100px;
  }
`;

export const Button = styled.button`
  background-color: rgba(250, 250, 250, 0);
  font-family: 'Poppins_Bold', -apple-system, Roboto, Ubuntu, Cantarell,
    sans-serif;
  font-size: clamp(1rem, 1vw, 1.5rem);
  color: #1d2227;
  border: 2.7px solid #1d2227;
  outline: none;
  margin: 2rem 0 0 0;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  transition: box-shadow 0.3s ease;
  &:focus {
    box-shadow: 0 0 10px 3px rgba(255, 121, 242, 0.5);
  }
  &:hover {
    box-shadow: 0 0 10px 3px rgba(255, 121, 242, 0.5);
  }
  a {
    padding: 10px 20px;
    text-align: center;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")
      0 0 / 150px 150px,
    linear-gradient(315deg, #180d1c 0.57%, #452650 100%);
  background-size: 400px 400px, cover;
  clip-path: polygon(0% 0%, 100% 3.49vw, 100% 100%, 0% 100%);

  display: flex;

  img {
    width: 12%;
    margin: 130px 0 0 100px;
    align-content: flex-end;

    @media screen and (max-width: 1030px) {
      width: auto;
      max-width: 15%;
      margin: 150px 0 0 50px;
    }
  }
`;
