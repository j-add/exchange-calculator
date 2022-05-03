const Name = () => {

    const handleClick = (e) => {
        e.target.textContent = `Hi, ${e.target.textContent}!`;
    }

    return (
        <>
            <h1 onClick={handleClick}>Jordan</h1>
        </>
    )
}

export default Name;