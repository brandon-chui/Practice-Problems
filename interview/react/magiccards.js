import React from "react";
import axios from "axios";

/*
For this exercise, use the scryfall.com api to
create a UI that has a search input, a list of 
results and the ability to render a detailed view
of a result when clicked. Don't worry about styling.

Add any library you would like for this exercise
and feel free to use the internet as a source, this
is an open note exercise.

API docs:
https://scryfall.com/docs/api

Requirements:
  Search Input:
    The search input should search as the user types.

  Detailed view:
    The detailed view should render the image of the card, the name
    and the set the card belongs to.
*/

function App() {
    const [input, setInput] = React.useState("");
    const [data, setData] = React.useState(null)
    const [itemDetails, setItemDetails] = React.useState(null)
    function handleSubmit(e) {
        e.preventDefault();
        async function searchMagic(str) {
            const result = await axios(
                `https://api.scryfall.com/cards/search?q=${input}`
            );
            console.log(result.data.data);
            setData(result.data.data)
        }

        searchMagic(input);
        setInput('');
    }
    // name, caard iamge, and set
    function handleClick(card) {
        setItemDetails(card)
    }

    return (
        <div>
            <h1>Scryfall</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button>submit</button>
            </form>
            {data && (
                <ul>
                    {data.map((card) => {
                        return (
                            <li
                                key={card.id}
                                onClick={event => handleClick(card)}
                            >{card.name}
                            </li>
                        )
                    })}
                </ul>
            )}
            {itemDetails && (
                <div>
                    <img src={itemDetails.image_uris.small} alt='...' />
                    <div>{itemDetails.name}</div>
                    <div>Set Name - {itemDetails.set_name}</div>
                </div>
            )}
            <button onClick={() => setData(null)}>close</button>
        </div>
    );
}

export default App;
