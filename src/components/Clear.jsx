export default function Clear({array, setArray}) {
    function clearUpdate() {
        setArray([])
    }

    return (
        <button onClick={() => {
            clearUpdate()
        }}>Clear</button>
    )
}