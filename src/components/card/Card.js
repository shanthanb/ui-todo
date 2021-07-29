export const Card = ({ header, children }) => {
    return (
        <div className="card mx-5 mb-3 shadow-sm">
            <div className="card-header ps-4">
                <span className="ms-1">{header}</span>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>

    )
}