// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const Character = ({ name, gender, birth_year, hair, eyes, skin, weight, height }) => {


    return(
        <Container>
            <Head>{name}</Head>
            <SubHead>{`Gender: ${gender}`}</SubHead>
            <SubHead>{`Born: ${birth_year}`}</SubHead>
            <DetailsDiv>
            <TopList>
            <ListItem>{`Weight: ${weight}kg`}</ListItem>
            <ListItem>{`Height: ${height}`}</ListItem>
            </TopList>
            <BottomList>
            <ListItem>{`Hair Color: ${hair}`}</ListItem>
            <ListItem>{`Eye Color: ${eyes}`}</ListItem>
            <ListItem>{`Skin Color: ${skin}`}</ListItem>
            </BottomList>
            </DetailsDiv>
        </Container>
    )

}

const Container = styled.div`
    background-color: #e8e7e3;
    display: inline-block;
    padding: 1.25%;
    margin: 1%;
    justify-content: center;
    width: 80%;
    border: .125rem;
    border-radius: 12px;
    box-shadow: 5px 2px 2px black;
`

const Head = styled.h1`
    font-size: 3rem;
    text-align: left;
    padding: 1.5%;
    margin: 1%;
    color: white;
    border-radius: 8px;
    background-color: black
`

const SubHead = styled.h3`
    font-size: 1.25rem;
    text-align: left;
    margin: 1%;
    color: red;
`

const DetailsDiv = styled.div`
    font-size: 0.75rem;
    text-align: center;
    margin: 1%;
    display: flex;
`

const ListItem = styled.li`
    text-decoration: none
`

const TopList = styled.ul`
    list-style: none;
    font-size: 0.95rem;
`

const BottomList = styled.ul`
    list-style: none;
    font-size: 0.75rem;
`

export default Character

