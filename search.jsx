import { useState } from "react";

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState("");

    const handleKey = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    id="search-field"
                    placeholder="meal search"
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button
                    className="btn"
                    style={{
                        fontFamily: "Comic_CAT",
                        position: "absolute",
                        top: "0.2rem",
                        right: "1rem",
                        border: "3px #a5ab8b solid",
                        backgroundColor: "transparent",
                        color: "#a5ab8b",
                        lineHeight: "normal",
                    }}
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export { Search };