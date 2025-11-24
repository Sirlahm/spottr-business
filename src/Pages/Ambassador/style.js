import styled  from 'styled-components'

export const AmbassadorContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 4rem 1rem;

    @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 20px;
  }
`

export const ImageArea = styled.div`
    width: 40%;
    background: #C2E0FF;
    border-radius: 60px;
    transform: matrix(1, 0.02, -0.02, 1, 0, 0);

    @media (max-width: 768px) {
        width: 100%;
  }

    img{
        transform: rotate(-5.2deg);
        border-radius: 60px;
        width: 95%;
    }
`

export const TextArea = styled.div`
    width: 40%;

    @media (max-width: 768px) {
        width: 100%;
  }

    h1{
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 43px;
        line-height: 209.8%;
        color: #274B89;
        transform: rotate(0.2deg);

        @media (max-width: 768px) {
            line-height: 120.8%;
            font-size: 30px;
            margin-top:15px;
        }
    }

    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 158.8%;
        color: #4D4D4D;
        transform: rotate(0.2deg);
    }
`
export const ButtonArea = styled.div`
    background: #274B89;
    border-radius: 38px;
    display: flex;
    justify-content: space-between;
    color: white;
    width: 211px;
    padding: 15px;
    cursor:pointer;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 158.8%;
`

export const MapImage = styled.img`
    position: absolute;
    left: -69px;
    height: 400px;
`

export const BottomDiv = styled.div`
    width: 100%;
    display: flex;
    position: absolute;
    bottom:10px;
`

export const WritingBox = styled.div`
    padding: 10px;
    width: 150px;
    background: rgba(255, 255, 255, 0.8);
    mix-blend-mode: normal;
    border: ${({gold})=>gold?'0.5px solid #FFB720': '0.5px solid #ACA7E9'};
    box-sizing: border-box;
    box-shadow: 0px 0px 10px #E1EFFB;
    border-radius: 8px;
    height:${({height})=>height};

    h3{
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 8px;
        line-height: 11px;
        color: ${({gold})=>gold?'#FFB720': '#6E85AE'};
    }

    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 10.9488px;
        line-height: 15px;
        color: #333333;
    }
`

export const BoxButton = styled.div`
    background: ${({gold})=>gold?'#FF881B': '#274B89'};
    border-radius: 38px;
    display: flex;
    width: 70px;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 5px;
    cursor:pointer;
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 8.45455px;
    line-height: 12px;

    img{
        width: 15px;
    }
`