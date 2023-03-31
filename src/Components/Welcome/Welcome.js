import "./Welcome.css"

function Welcome ( { nome = 'usuario' }) {
    return (
        <section className="welcome">

            <h1>Olá { nome }, seja bem-vindx!</h1>

        </section>
        
    ) 

}


export default Welcome;



