import './Rgb.css'

export default function Rgb({ array, setArray }) {
    function addRgb() {
        let r = document.querySelector(".r")
        let g = document.querySelector(".g")
        let b = document.querySelector(".b")

        setArray([...array, {
            r: r.value,
            g: g.value,
            b: b.value
        }])
    }

    function changeRgb() {
        let r = document.querySelector(".r")
        let g = document.querySelector(".g")
        let b = document.querySelector(".b")

        if (r.value > 255) {
            alert("The max is 255.")
            r.value = 255
        }
        if (r.value < 1) {
            alert("The value can't be less than 0.")
            r.value = 1
        }
    }

    return (
        <div className={'rgb'}>
            <input type="number" className={'r'} onChange={changeRgb} />
            <input type="number" className={'g'} onChange={changeRgb} />
            <input type="number" className={'b'} onChange={changeRgb} />
            <button className={'add'} onClick={addRgb}>add</button>
        </div>
    );
}
