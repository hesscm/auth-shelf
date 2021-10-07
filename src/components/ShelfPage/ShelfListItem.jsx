function ShelfListItem({ item }) {
    return(
        <div>
        <h3>{item.description}</h3>
        <img src={item.image_url} alt={item.description} />
        </div>
    )
}

export default ShelfListItem;