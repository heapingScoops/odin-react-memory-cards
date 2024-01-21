import { Typography } from "@mui/material";
import ActionAreaCard from "./mui-components/ActionAreaCard";

export default function CardArea({ cards, handleClick }) {

    function handleCardClick(index) {
        console.log("made it to cardArea click")
        handleClick(index)
    }


    return (
        <>
            <Typography variant="h6" component="div" color="white" margin="20px">
                Get points by clicking on images. Clicking on an image for a 2nd time will destroy everything you've ever done or loved.
            </Typography>
            <div id="card-area">

                {
                    cards.map(card => (
                        <div key={card.index} onClick={() => handleCardClick(card.index)}>

                            <ActionAreaCard
                                card={card}
                            />
                        </div>
                    ))
                }

            </div>
        </>
    )
}