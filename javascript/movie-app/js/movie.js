// var movieData = fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
    // .then((response) => {
    //     console.log(response.json());
    // })
    // .catch((error) => {
    //     console.log('Incorrect');
    // });

    // console.log(movieData);


    new Promise((accept,reject) => {
        var movieData = fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1');
        accept(movieData);
        // reject(movieData);
    })
    .then((response) => {
        new Promise((accept,reject) => {
            accept(response.json());
        }).then((response) => {
            getMoviesData(response.results);
        }).catch((error) => {
        })
    })
    .catch((error) => {
        console.log('Promise Incomplete');
    });


function getMoviesData(data){
    var dataa = '';
    data.forEach((value, index) => {
        console.log(value);
        // dataa += '<div class="movieContent"><div class="image"><img src="https://image.tmdb.org/t/p/w1280/aosm8NMQ3UyoBVpSxyimorCQykC.jpg"/></div><div class="content"><h2>Venom: The Last Dance</h2><p>Venom: The Last Dance</p></div></div>';

        dataa += `<div class="movieContent">
                <div class="image">
                    <img src="https://image.tmdb.org/t/p/w1280/${ value.poster_path }"/>
                </div>
                <div class="content">
                    <h2> ${ value.original_title } </h2>
                    <p>${ value.overview }</p>
                </div>
            </div>`;
    })


    document.getElementById('movieData').innerHTML = dataa;
}

async function searchMovies(movieTitle){

    try{
        var data = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${movieTitle.value}`);
        var data = await data.json();
        getMoviesData(data.results);
    } catch(error){
        
    }

    

    console.log(data);
}

