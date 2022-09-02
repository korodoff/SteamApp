import styles from './Browse.module.css';
import React, { useEffect, useState } from 'react';


// import { AnimatePresence } from "framer-motion";
// import AnimatedPage from '../AnimatedPage/AnimatedPage';
// import { ReactComponent as Grids } from "../../Resources/image/grid.svg";
// import { ReactComponent as Columns } from "../../Resources/image/columns.svg";
import Filters from '../../Filters/Filters';
import Grid from "../../Grid/Grid"

// import Cart from '../../Components/Cart/Cart';


const Browse = props => {
  const { 
         
          handleSelect,
          reviewDisplay,
          currentFilter,
          shownGames,
          setShownGames,
          clearFilter,
          setReviewDisplay,
          
          allGames,
        //   setAllGames,
        //   handleLike,
        //   handleHoverGame,
        //   cart,
        //   cartAmount,
        //   handleAddToCart,
        //   handleSelectGame,
        //   handleSearch,
        //   handleSearchSubmit,
        //   search,
        //   searching,
        //   browsing,
        //   handleBrowse,
        //   handleHome,
        //   handleOpenCart,
        //   handleCloseCart,
          cartDisplayed,
        //   clearCart,
        //   handleRemoveFromCart,
        //   setHoverState,
        //   openGamePage
        } = props;
    
 
    const [grid, setGrid] = useState(true);

    const handleLayoutSwitch = (e) => {
      if (e.target.id === "grid") {
        setGrid(true);
      } else {
        setGrid(false);
      }
    }

    useEffect(() => {
      if (currentFilter === "none") {
        setShownGames(allGames);

      } else if (currentFilter !== "Ratings" && currentFilter !== "Reviews" && currentFilter !== "Wishlist") {
          let filteredShownGames = allGames.filter(game => game.genre === currentFilter);
          setShownGames(filteredShownGames);

      } else if (currentFilter === "Ratings") {
          let filteredShownGames = allGames.slice(0);
          filteredShownGames = filteredShownGames.sort(function(a, b) {
            return b.rating - a.rating;
          })
          setShownGames(filteredShownGames);

      } else if (currentFilter === "Reviews") {
          setReviewDisplay(true);

      } else if (currentFilter === "Wishlist") {
          let filteredShownGames = allGames.filter(game => game.isLiked === true);
          setShownGames(filteredShownGames);
      }

      if (currentFilter !== "Reviews") {
          setReviewDisplay(false);
      }
    }, [currentFilter])


  

    return (
      <section className={styles.Browse} style={{ maxHeight: cartDisplayed ? "100vh" : "1000vh", minHeight: "100vh" }}>

            <div className={styles.browseContent}>
              <Filters 
                // hoverState={hoverState}
                // handleHover={handleHover}
                handleSelect={handleSelect}
                currentFilter={currentFilter} 
              />

              <div className={styles.list}>
                <h1>Trending and interesting</h1>
                <p>Based on player counts and ratings</p>

                <div className={styles.applied}>
                  <div className={styles.filterList}>
                    <button 
                      className={styles.filterButton} 
                      aria-label="Current Filter"
                    >
                      Filter by:
                      <span> {currentFilter}</span>
                    </button>
                    <button 
                      className={`${styles.filterButton} ${styles.clearButton}`}
                      onClick={clearFilter} 
                      aria-label="Clear Filters"
                    >
                      Clear Filter
                    </button>
                  </div>
                       
                </div>

                    <Grid 
                      shownGames={shownGames}
                      reviewDisplay={reviewDisplay}
                    //   handleLike={handleLike}
                    //   handleHoverGame={handleHoverGame}
                    //   handleAddToCart={handleAddToCart}
                      grid={grid}
                      
                    //   handleSelectGame={handleSelectGame}
                      cartDisplayed={cartDisplayed}
                    //   hoverState={hoverState}
                    handleLayoutSwitch = {handleLayoutSwitch}
                    />
              </div>
            </div>
        
        
      </section>
    );
  }
  
  export default Browse;