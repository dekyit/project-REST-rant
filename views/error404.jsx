const React = require('react')
const Def = require('./default')


function error404(){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src = "/images/myTheo.jpg" alt="Goldendoodle puppy with white paws" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Dekyi Tenzin</a>
                    </div>
                    </div>

            </main>
        </Def>
    )
}

module.exports = error404