import styled from "styled-components";
import qblogo from '../assets/quickbuy.png';

const Home = () => {
  return(
    <HomeBox>
      <HomeImage src={qblogo}/>
      <HomeTitle>
        Welcome to QuickBuy
      </HomeTitle>
    </HomeBox>
  )
}

const HomeBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem auto;
`
const HomeImage = styled.img`
height: 350px;
width: 350px;
`
const HomeTitle = styled.div`
font-size: 30px;
font-weight: 500px;
margin: 2rem auto;
`
export default Home;
