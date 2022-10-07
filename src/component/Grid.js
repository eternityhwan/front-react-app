import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import {BsHeart, BsChat, BsCursor, BsBookmark, BsGrid3X3} from "react-icons/bs";
import '../css/Grid.css'
import { FiUser } from "react-icons/fi";


function Grid() {
  return (
    <div className='Grid'>
    <Container>
        <Row>
            <div>
                <ul className='post'>
                    <li className='cell'>게시물</li>
                    <li className='cell'>저장됨</li>
                    <li className='cell'>태그됨</li>
                </ul>
            </div>
            <div>
                <ul className='post'>
                    <li className='cell'><BsGrid3X3/></li>
                    <li className='cell'><BsBookmark/></li>
                    <li className='cell'><FiUser/></li>
                </ul>
            </div>
            <Col className='text-alignc' xs> <br/>
            <img src='./jiyou1.jpg' alt='아기지유1' style={{ width : '200px'}}></img>
            <div>
                <button className='button'><BsHeart/></button> 
                <button className='button'><BsChat /></button>
                <button className='button'><BsCursor/></button>
                <button className='button'><BsBookmark/></button>
            </div>
            </Col> <br/>
            <Col className='text-alignc' xs={{ order: 12 }}> <br/>
            <div>
            <img src='./jiyou2.jpg' alt='아기지유2' style={{ width : '200px'}}></img>
            <div>
                <button className='button'><BsHeart/></button> 
                <button className='button'><BsChat /></button>
                <button className='button'><BsCursor/></button>
                <button className='button'><BsBookmark/></button>
            </div>
            </div>
            </Col>
            <Col className='text-alignc' xs={{ order: 1 }}><br/>
            <img src='./jiyou3.jpg' alt='아기지유3' style={{ width : '200px', height : '265px'}}></img>
            <div>
                <button className='button'><BsHeart/></button> 
                <button className='button'><BsChat /></button>
                <button className='button'><BsCursor/></button>
                <button className='button'><BsBookmark/></button>
            </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Grid;


