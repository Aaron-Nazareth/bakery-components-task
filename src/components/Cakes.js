const Cakes = () => {

    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ];

    const listedCakes = cakes.map(cake => {
        return( <>
            <h3>Cake name: {cake.cakeName}</h3>
            <p><b>Ingredients:</b></p>
            <li>{cake.ingredients.map(ingredient => {
                return <li key={ingredient}>{ingredient}</li>
            })}</li>
            <p><b>Cake rating: </b>{cake.rating}</p>
        </>
        )
    })

    return(
        <>
            <ul>
                {listedCakes}
            </ul> 
        </>
    )

}

export default Cakes;