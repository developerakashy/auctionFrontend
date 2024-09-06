export const AddListing = () => {
    return(
        <>
        <form action="">
            <div>
                <label>Product Image</label>
                <input type="file" name="productImage" id="" />
            </div>

            <div>
                <label>Product Name</label>
                <input type="text" name="productName"/>
            </div>

            <div>
                <label>Description</label>
                <textarea name="productDescription" id=""></textarea>
            </div>

            <div>
                <label>Initial bid price</label>
                <input type="number" name="bidPrice" id="" />
            </div>
        </form>
        </>
    )
}
