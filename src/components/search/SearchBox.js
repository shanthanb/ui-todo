import "bootstrap-icons/font/bootstrap-icons.css";

export const SearchBox = () => {
    return (
        <div className="row mt-5 mb-3">
            <div className="col-md-4 col-9">
                <div className="search-todo shadow-sm form-control mx-5 rounded-pill d-flex justify-content-between px-3">
                    <input
                        className="border-0 flex-grow-1 me-1"
                        placeholder="Search To Do"
                        style={{ fontSize: 12, outline: 'none' }}
                    />
                    <i
                        className="bi bi-search"
                        style={{ fontSize: 12 }}
                    />
                </div>
            </div>
        </div>

    )
}