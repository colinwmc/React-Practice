export default function Joke({ setUp, punchline, votes, isPun }) {
        return (
            <>
                {setUp && <h2>Setup: {setUp}</h2>}
                <h2 className={!setUp ? "punch" : "none"}>Punchline: {punchline}</h2>
                <p>{votes}</p><span>{isPun}</span>
            </>
        )
}