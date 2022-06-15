
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {Route, Routes, Link} from "react-router-dom"
import { useState, useEffect } from "react";
import { ArticleDisplay } from './ArticleDisplay.jsx';



export const ArticleNav = () => {

    const [topicName, setTopicName] = useState('SELECT TOPIC')
    // const [isLoading, setIsLoading] = useState(true)
    
    return (
        <>
    <DropdownButton variant="dark" id="dropdown-item-button" title={topicName}>
  
  <Link to="/articles">
  <Dropdown.Item onClick={() => [setTopicName('ALL TOPICS')]} as="button">All</Dropdown.Item>
  </Link>
  <Link to="/articles/football">
  <Dropdown.Item onClick={() => [setTopicName('FOOTBALL')]} as="button">Football</Dropdown.Item>
  </Link>
  <Link to="/articles/cooking">
  <Dropdown.Item onClick={() => [setTopicName('COOKING')]} as="button">Cooking</Dropdown.Item>
  </Link>
  <Link to="/articles/coding">
  <Dropdown.Item onClick={() => [setTopicName('CODING')]} as="button">Coding</Dropdown.Item>
  </Link>
</DropdownButton>


<DropdownButton variant="dark" id="dropdown-item-button" title="SORT BY">
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
      
  </>
    )
}