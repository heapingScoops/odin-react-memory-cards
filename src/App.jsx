import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
// import axios from 'axios';
import { fetchData } from './API/api';
// import api from './API/api';
import CardArea from './components/CardArea'



function App() {
  const [highScore, setHighSchore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const [cards, setCards] = useState([
    //DEFAULT CARDS IN CASE YOU RUN OUT OF API USAGE
    {
      index: 0,
      cardImageUrl: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
      cardName: 'dog',
      counter: 0
    },
    {
      index: 1,
      cardImageUrl: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
      cardName: 'snow',
      counter: 0
    },
    {
      index: 2,
      cardImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5vg53VrYA6w1rApWshMGFLukVXlLU5bSM4cKeVarvg&s',
      cardName: 'fish',
      counter: 0
    },
    {
      index: 3,
      cardImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbBjxfTjU-lNpOQT6N0UUsKiOgmhMUDJfDkkC5sbTOjXSCzae37HS1CJ0vvjWqcbgDx0&usqp=CAU',
      cardName: 'dumb fish',
      counter: 0
    },
    {
      index: 4,
      cardImageUrl: 'https://fastly.picsum.photos/id/305/200/300.jpg?grayscale&hmac=4N3JuAXOfIKwKznDU2IaNVEYzDujGuBwS5kMV6_p_hs',
      cardName: 'B&W Flower',
      counter: 0
    },
    {
      index: 5,
      cardImageUrl: 'https://picsum.photos/200/300?random=1',
      cardName: 'Random 1',
      counter: 0
    },
    {
      index: 6,
      cardImageUrl: 'https://picsum.photos/200/300?random=2',
      cardName: 'Random 2',
      counter: 0
    },
    {
      index: 7,
      cardImageUrl: 'https://picsum.photos/200/300?random=3',
      cardName: 'Random 3',
      counter: 0
    },
    {
      index: 8,
      cardImageUrl: 'https://picsum.photos/200/300?random=4',
      cardName: 'Random 4',
      counter: 0
    },
    {
      index: 9,
      cardImageUrl: 'https://picsum.photos/200/300?random=5',
      cardName: 'Random 5',
      counter: 0
    },
    {
      index: 10,
      cardImageUrl: 'https://picsum.photos/200/300?random=6',
      cardName: 'Random 4',
      counter: 0
    },
    {
      index: 11,
      cardImageUrl: 'https://picsum.photos/200/300?random=7',
      cardName: 'Random 5',
      counter: 0
    },

  ])

  //WILL POPULATE AS MANY CARDS AS YOU WANT, BUT ONLY 50 PER HOUR. SORRY
  try {
    useEffect(() => {
      //empty array for all promises to be returned
      const fetchPromises = [];
      for (let i = 0; i < 8; i++) {
        //for each fetchData() call, add its result to the array of promises
        fetchPromises.push(fetchData());
      }

      //Promise.all takes an array of promises and returns a single promise that resolves when all of the input promises have resolved.
      Promise.all(fetchPromises).then(responses => {
        const placeholderCards = responses.map((response, index) => {
          return {
            cardImageUrl: response.data.urls.regular,
            cardName: response.data.alt_description,
            index: index
          };
        });
        setCards(placeholderCards);
      }).catch(error => {
        console.error("Error fetching data:", error);
        // Handle error appropriately
      });

    }, []);
  }
  catch{ (error => {
      console.error("Error fetching data:", error);
      // Handle error appropriately
    });
  }


    //NOTE: Index was a Horrible name choice. If I did again, would choose "id"

    //basically the router on if they choose right or wrong
    function handleClick(index) {
      if (findCardByIndex(index).counter == 1) {
        wrongAnswer();
      }
      else {
        correctAnswer(index);
      }
    }

    //helper function. Always called
    function shuffleCards() {
      //shuffle the cards
      setCards(prevCards => {
        // goddamn these ...s are so important
        const newCards = shuffleArray([...prevCards]);
        console.log(newCards)
        return newCards
      })

    }

    function correctAnswer(index) {
      setCurrentScore(currentScore + 1);
      setCards(prevCards => {
        const newCards = [...prevCards];
        findCardByIndex(index).counter = 1;
        return newCards;
      })
      shuffleCards();
      if (currentScore + 1 > highScore) {
        setHighSchore(currentScore + 1)
      }
    }

    function wrongAnswer() {
      setCurrentScore(0);
      resetCounters();
      shuffleCards();
    }

    function resetCounters() {
      setCards(prevCards => {
        const newCards = [...prevCards];
        newCards.forEach(card => {
          card.counter = 0;
        })
        return newCards;
      })
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function findCardByIndex(index) {
      return cards.find(card => {
        //WHEN USING .FIND DO A FUCKING DOUBLE == !!!
        return card.index == index;
      })
    }

    return (
      <>
        <Header currentScore={currentScore} highScore={highScore} />
        {/* will pass the img and name info to populate the cards in the CardArea component */}
        <CardArea cards={cards} handleClick={handleClick} />

        {/* <button onClick={shuffleCards}> shuffle </button> */}
      </>
    )
  }

  export default App
