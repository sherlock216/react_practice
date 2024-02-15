import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className="App" style={{textAlign: 'center'}}>
            <h1>
                <Link to="/">SBAR</Link>
            </h1>

            <div className="menu">
                <a href="#x" className="link">
                    단어 추가
                </a>
                <a href="#x" className="link">
                    Day 추가
                </a>
            </div>
        </div>
    );
}
