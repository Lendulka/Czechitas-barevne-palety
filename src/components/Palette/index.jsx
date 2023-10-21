import SchemeColor from '../SchemeColor'
import './style.css'

const Palette = (props) => {
    const { name, image, attribution, colors, direction, description } = props

    return (
        <div className="palette">
            <div className={`palette-scheme palette-scheme--${direction}`}>
                <img className="scheme-image" src={image} alt={name} />
                <div className="scheme-colors">
                    {colors.map(oneColor => <SchemeColor key={oneColor} color={oneColor} />)}
                </div>
            </div>

            <div className="palette-info">
                <h2>{name}</h2>
                <p className="info-font">{description}</p>
                <p>Photo by <a href={attribution.url} target="_blank">{attribution.name}</a>.</p>
            </div>
        </div >
    )
}

export default Palette

