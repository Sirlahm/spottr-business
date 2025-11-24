import React, { useState } from 'react'
import { AmbassadorContainer, BottomDiv, BoxButton, ButtonArea, ImageArea, MapImage, TextArea, WritingBox } from './style'
import happy from 'assets/happy.png'
import arrow from 'assets/arrow.png'
import Modal from './Modal'
import map from 'assets/mapVector.png'
// import { toast } from 'react-toastify'


export default function Ambassador() {
    const [show,setShow] = useState(false)

    // const notify = () =>
    // toast.info("🚀🚀 Coming Soon !", {
    //   position: toast.POSITION.BOTTOM_RIGHT,
    // });
    return (
        <AmbassadorContainer>
            <Modal show={show} modalClosed={()=>setShow(!show)} >
                <MapImage src={map} alt='mapp' />
                <BottomDiv>
                    <WritingBox>
                        <h3>Country Representative</h3>
                        <p>
                            Activate your country and coordinate the 
                            SpottR ambassador community in your country 
                            with executive compensation.
                        </p>
                    <a href='https://forms.gle/mGoDAA1htvFHWQvA9'  rel="noreferrer" target='_blank'>
                        <BoxButton >
                            Apply Here
                            <img src={arrow} alt='road' />
                        </BoxButton>
                    </a>
                    </WritingBox>
                    <WritingBox style={{position:'relative',left:'10px'}} gold height='135px'>
                        <h3>Country Ambassador</h3>
                        <p>
                            Complete referral and promotion tasks to earn 
                            instant cash and crypto rewards
                        </p>
                        <a href='https://forms.gle/a1h2XbLRj2RvzNBP6' rel="noreferrer" target='_blank'>
                            <BoxButton  gold>
                                Apply Here
                                <img src={arrow} alt='road' />
                            </BoxButton>
                        </a>
                    </WritingBox>
                </BottomDiv>
            </Modal>
            <ImageArea>
                <img src={happy} alt='face' />
            </ImageArea>
            <TextArea>
                <h1>Become an Ambassador</h1>
                <p>
                Join the growing Global Community of proud SpottR ambassadors building 
                the worlds most advanced and largest marketplace of merchants who also 
                accept cryptocurrency payments
                </p>
                <ButtonArea onClick={()=>setShow(!show)}>
                    Click here to join
                    <img src={arrow} alt='road' />
                </ButtonArea>
            </TextArea>
        </AmbassadorContainer>
    )
}
