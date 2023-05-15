import React from 'react'
import './Style.css'
import EmptyView from '../../components/common/EmptyView/EmptyView';
import FilterPanel from '../../components/Catering/FilterPanel/FilterPanel'
import List from '../../components/Catering/List/List'
import SearchBar from '../../components/Catering/SearchBar/SearchBar'
import { useEffect, useState } from 'react'
import { dataList } from '../../constant';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([250, 2000]);


  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');


  const handleSelectCategory=(event, value)=> 
    !value?null:setSelectedCategory(value);

    const handleSelectRating=(event, value)=> 
    !value?null:setSelectedRating(value);


  const handleChangePrice=(event, value)=>{
    setSelectedPrice(value)
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, searchInput, selectedPrice]);


  return (
    <div className='catering'>
        {/* Search bar */}
        <SearchBar value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)} />

        <div className='catering_panelList-wrap'>

          <div className='catering_panel-wrap'>
                {/* Side panel */}
                <FilterPanel 
                  selectedCategory={selectedCategory}
                  selectCategory={handleSelectCategory}
                  selectedRating={selectedRating}
                  selectedPrice={selectedPrice}
                  selectRating={handleSelectRating}
                  changePrice={handleChangePrice}
                   />
          </div>

          {/* List and Empty view */}
          <div className='catering_list-wrap'>
                {resultsFound ? <List list={list} /> : <EmptyView />}
          </div>

        </div>

    </div>
  )
}
