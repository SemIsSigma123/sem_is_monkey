import './Paint.css'

export default function Paint({array, setArray}) {
    return (
        <div className='paint'>
            {
                array.map((value, i) => (
                        <div key={i} style={{
                            backgroundColor: `rgb(${value.r}, ${value.g}, ${value.b})`
                        }}></div>
                    )
                )}
        </div>
    )
}