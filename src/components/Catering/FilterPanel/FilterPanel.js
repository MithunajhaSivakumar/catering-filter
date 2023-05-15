import React from 'react'
import { categoryList } from '../../../constant'
import { ratingList } from '../../../constant'
import './FilterPanel.css'
import FilterListToggle from '../../common/FilterListToggle/FilterListToggle'
import PriceSlide from '../../common/Slider/PriceSlide'


function FilterPanel({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectedPrice,
  selectRating,
  changePrice,
    
  }) {
  return (
    <div>
      <br/><br/>
      {/* Category */}
      <div className='="input-group'>
        <p className='label'>Category</p>
        <FilterListToggle 
          options={categoryList} 
          value={selectedCategory} 
          selectToggle={selectCategory}
        />
      </div>
      <br/><br/>
      <br/><br/>
      {/* Price Range */}
      <div className='input-group'>
          <p className='label-range'>Price</p>
          <PriceSlide
            value={selectedPrice} 
            changedPrice={changePrice} 
          />
      </div>

      <br/><br/>
      <br/><br/>
      {/* Ratings */}
      <div className='input-group'>
        <p className='label'>Star Ratings</p>
        <FilterListToggle 
          options={ratingList} 
          value={selectedRating} 
          selectToggle={selectRating}
        />
      </div>
    </div>
  )
}

export default FilterPanel