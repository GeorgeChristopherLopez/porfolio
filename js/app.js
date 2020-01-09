let bg = document.querySelector('canvas');

let projectBtn = document.querySelector('.project-btn');

let app = document.querySelector('.app');

projectBtn.addEventListener('click', e => {
    app.classList.toggle('adjust');

    app.innerHTML += `<section id="projects-head-section">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <div class="p-5">



                        <h1 class="display-4">My Projects</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <!----- PROJECTS SECTION ----->

    <section id="projects-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-xs-12">
                    <article class="wow fadeInLeft" data-wow-duration="2s">
                        <a href="https://georgechristopherlopez.github.io/fitbody/" class="image fit thumb" target="_blank"><img src="img/Fitbody_thumbnail.png" alt="" /></a>
                        <h3>Fitbody</h3>
                        <p>Fitness programs and meal plans for the extreme.</p>
                        <a href="https://georgechristopherlopez.github.io/fitbody/" class="btn btn-outline-danger" target="_blank">View Project</a>
                        <a href="https://github.com/GeorgeChristopherLopez/fitbody" class="btn btn-danger" target="_blank">View Code</a>
                    </article>
                </div>
                <div class="col-md-6 col-xs-12">
                    <article class="wow fadeInRight" data-wow-duration="2s">
                        <a href="https://georgechristopherlopez.github.io/Elite-Driving/" class="image fit thumb" target="_blank"><img src="img/elite-driving-thumbnail.png" alt="" /></a>
                        <h3>Elite Driving</h3>
                        <p>Making your driving, Elite.</p>
                        <a href="https://georgechristopherlopez.github.io/Elite-Driving/" class="btn btn-outline-danger" target="_blank">View Project</a>
                        <a href="https://github.com/GeorgeChristopherLopez/Elite-Driving" class="btn btn-danger" target="_blank">View Code</a>
                    </article>
                </div>
                <div class="col-md-6 col-xs-12">
                    <article class="wow fadeInLeft" data-wow-duration="2s">
                        <a href="https://georgechristopherlopez.github.io/Skyward-Esl/" class="image fit thumb" target="_blank"><img src="img/skyward_thumbnail.png" alt="" /></a>
                        <h3>Skyward ESL</h3>
                        <p>ESL program and U.S Citizenship lessons for Non English speakers.</p>
                        <a href="https://georgechristopherlopez.github.io/Skyward-Esl/" class="btn btn-outline-danger" target="_blank">View Project</a>
                        <a href="https://github.com/GeorgeChristopherLopez/Skyward-Esl" class="btn btn-danger" target="_blank">View Code</a>
                    </article>
                </div>
                <div class="col-md-6 col-xs-12">
                    <article class="wow fadeInRight" data-wow-duration="2s">
                        <a href="https://georgechristopherlopez.github.io/arch-equipment/" class="image fit thumb" target="_blank"><img src="img/archequipment_thumbnail.png" alt="" /></a>
                        <h3>Arch Equipment</h3>
                        <p>Hottest equipment for contractors and enthusiast. New and Used.</p>
                        <a href="https://georgechristopherlopez.github.io/arch-equipment/" class="btn btn-outline-danger" target="_blank">View Project</a>
                        <a href="https://github.com/GeorgeChristopherLopez/arch-equipment" class="btn btn-danger" target="_blank">View Code</a>
                    </article>
                </div>
            </div>
    </section>
                    `;
    document.location = '#projects-head-section';


})


console.log(bg);

   
      


    