import chefClaudeLogo from "../assets/Chef-Claude-Icon.png"

export default function Header() {
    return (
        <header className='header'>
            <img className="header-logo" src={chefClaudeLogo} alt="chef icon" />
            <h1 className="header-title">Chef Mistral</h1>
        </header>
    )
}