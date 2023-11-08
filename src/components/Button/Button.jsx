export const Button = ({ onClick, disabled }) => {
    return (
        <div>
            <button type="button" className="button" onClick={onClick} disabled={disabled}>Load more...</button>
        </div>
    )
}