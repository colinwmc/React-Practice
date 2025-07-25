import ReactMarkdown from 'react-markdown'

export default function Recipe({recipe}){
    return (
        <section aria-live='polite'>
                <h2>Chef Mistral Recommends:</h2>
                <section className="suggested-recipe-container" aria-live="polite">
                    <ReactMarkdown children={recipe}></ReactMarkdown>
                </section>
            </section>
    )
}