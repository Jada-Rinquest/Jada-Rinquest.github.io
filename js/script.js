<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jada Rinquest | Portfolio</title>

    <link rel="stylesheet" href="style.css">

    <!-- Font Awesome -->
    <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>

<div class="container">

    <!-- HEADER -->
    <section class="hero">

        <div class="hero-left">
            <span class="hello">👋 HELLO, I'M</span>

            <h1>Jada Rinquest</h1>

            <p class="subtitle">
                Aspiring Software Developer · IT Student
            </p>

            <div class="badges">
                <span>🎂 22 years</span>
                <span>📍 Belhar, Western Cape</span>
                <span>🔤 English · Afrikaans</span>
                <span>🚗 Driver's Licence</span>
            </div>
        </div>

        <div class="socials">
            <button id="emailBtn">
                <i class="fa-solid fa-envelope"></i>
            </button>

            <button id="linkedinBtn">
                <i class="fa-brands fa-linkedin-in"></i>
            </button>

            <button id="githubBtn">
                <i class="fa-brands fa-github"></i>
            </button>
        </div>

    </section>

    <!-- ABOUT -->
    <section class="card">
        <p>
            Adaptable and motivated with strong communication and
            interpersonal skills. I work well independently and as
            part of a team — eager to learn and committed to
            delivering quality work.
        </p>
    </section>

    <div class="grid">

        <!-- LEFT COLUMN -->
        <div>

            <section class="card">
                <h2>Technical Skills</h2>

                <div class="tags">
                    <span>Java</span>
                    <span>JavaScript</span>
                    <span>MySQL</span>
                    <span>Microsoft Office</span>
                    <span>NetBeans</span>
                    <span>IntelliJ</span>
                </div>
            </section>

            <section class="card">
                <h2>Soft Skills</h2>

                <ul>
                    <li>Problem Solving & Teamwork</li>
                    <li>Communication</li>
                    <li>Customer Service</li>
                    <li>Time Management</li>
                </ul>
            </section>

            <section class="card">
                <h2>Interests</h2>

                <div class="tags">
                    <span>Walks with Dogs</span>
                    <span>Baking</span>
                </div>
            </section>

            <section class="card">
                <h2>Education</h2>

                <div class="edu-box">
                    <h3>Diploma in IT</h3>
                    <p>Cape Peninsula University of Technology</p>
                </div>

                <div class="edu-box">
                    <h3>National Senior Certificate</h3>
                    <p>Bellville Technical High School</p>
                </div>
            </section>

            <section class="card">
                <h2>References</h2>

                <div class="reference">
                    <strong>Quentin Strydom</strong>
                    <p>Classic Cats • 068 254 2254</p>
                </div>

                <div class="reference">
                    <strong>Warren Meyer</strong>
                    <p>Sterns Manager • 073 841 7640</p>
                </div>
            </section>

        </div>

        <!-- RIGHT COLUMN -->
        <div>

            <section class="card">
                <h2>Work Experience</h2>

                <div class="job">
                    <h3>Sales Assistant – Sterns</h3>
                    <p>Customer service, POS systems, merchandising and teamwork.</p>
                </div>

                <div class="job">
                    <h3>Part-Time Bartender</h3>
                    <p>Professional customer service in a fast-paced environment.</p>
                </div>

                <div class="job">
                    <h3>Teacher's Assistant</h3>
                    <p>Supported learners and administrative duties.</p>
                </div>
            </section>

            <section class="card">
                <h2>Projects & Achievements</h2>

                <div class="project">
                    <h3>Student Accommodation App</h3>
                    <p>
                        Mobile app for student accommodation applications.
                    </p>

                    <button class="project-btn"
                    onclick="openProject('https://github.com/')">
                        View Project
                    </button>
                </div>

                <div class="project">
                    <h3>Campus Facility Booking</h3>
                    <p>Campus booking system repository.</p>

                    <button class="project-btn"
                    onclick="openProject('https://github.com/')">
                        View Project
                    </button>
                </div>

                <div class="project">
                    <h3>Portfolio Website</h3>

                    <button class="project-btn"
                    onclick="openProject('https://github.com/')">
                        View Project
                    </button>
                </div>

            </section>

        </div>

    </div>

</div>

<script src="script.js"></script>

</body>
</html>
