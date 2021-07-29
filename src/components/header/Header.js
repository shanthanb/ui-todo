import { SearchBox } from "../search/SearchBox"

export const Header = () => {
    return (
        <div className="my-2 py-3">
            <div className="d-flex justify-content-between mx-5 mt-2 mb-4">
                <h4 className="fw-bold">To Do List</h4>
                <button className="btn-add">Add To Do</button>
            </div>
            <SearchBox />
        </div>
    )
}