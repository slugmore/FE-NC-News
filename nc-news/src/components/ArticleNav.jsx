
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {Route, Routes, Link} from "react-router-dom"
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api.js";
import { ArticleDisplay } from './ArticleDisplay.jsx';
import Articles from './Articles.jsx';

export const ArticleNav = ({setTopicQuery}) => {

    const [topicName, setTopicName] = useState('SELECT TOPIC')
    // const [isLoading, setIsLoading] = useState(true)
    
    return (
        <>
    <DropdownButton variant="dark" id="dropdown-item-button" title={topicName}>
  <Dropdown.Item onClick={() => [setTopicQuery(''), setTopicName('ALL TOPICS')]} as="button">All</Dropdown.Item>
  <Link to="/articles/football">
  <Dropdown.Item onClick={() => [setTopicQuery('?topic=football'), setTopicName('FOOTBALL')]} as="button">Football</Dropdown.Item>
  </Link>
  <Dropdown.Item onClick={() => [setTopicQuery('?topic=cooking'), setTopicName('COOKING')]} as="button">Cooking</Dropdown.Item>
  <Dropdown.Item onClick={() => [setTopicQuery('?topic=coding'), setTopicName('CODING')]} as="button">Coding</Dropdown.Item>
</DropdownButton>

<DropdownButton variant="dark" id="dropdown-item-button" title="SORT BY">
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
      

<Routes>
    <Route path="/articles/football" element={<ArticleDisplay  />} />
</Routes>
  </>
    )
}