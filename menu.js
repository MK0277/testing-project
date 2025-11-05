 
document.write(`<div class="bg-dark text-light small py-1">
    <div class="container">
        <div class="row align-items-center gy-2">

            <!-- Address Section -->
            <div
                class="col-12 col-md-6 d-flex flex-wrap gap-2 justify-content-center justify-content-md-start text-center text-md-start">
                <span><i class="bi bi-geo-alt"></i> C-167, Omicron 1, 6% Abadi, Greater Noida</span>
                <span class="d-none d-lg-inline">| Earthcon Sanskriti, Sector 1, Greater Noida West</span>
            </div>

            <!-- Contact Section -->
            <div
                class="col-12 col-md-6 d-flex flex-wrap gap-3 justify-content-center justify-content-md-end text-center text-md-end">

                <!-- Phone 1 -->
                <a class="text-decoration-none text-light d-inline-flex align-items-center" href="tel:+918368979712">
                    <span class="d-inline d-md-none rounded-circle bg-primary p-2">
                        <i class="bi bi-telephone fs-6"></i>
                    </span>
                    <span class="d-none d-md-inline"><i class="bi bi-telephone"></i> +91 83689 79712</span>
                </a>

                <!-- Phone 2 -->
                <a class="text-decoration-none text-light d-inline-flex align-items-center" href="tel:+916380486914">
                    <span class="d-inline d-md-none rounded-circle bg-success p-2">
                        <i class="bi bi-telephone fs-6"></i>
                    </span>
                    <span class="d-none d-md-inline">/ +91 63804 86914</span>
                </a>

                <!-- Email -->
                <a class="text-decoration-none text-light d-inline-flex align-items-center"
                    href="mailto:a1training167@gmail.com">
                    <span class="d-inline d-md-none rounded-circle bg-danger p-2">
                        <i class="bi bi-envelope fs-6"></i>
                    </span>
                    <span class="d-none d-lg-inline"><i class="bi bi-envelope"></i> a1training167@gmail.com</span>
                </a>

            </div>
        </div>
    </div>
</div>


<!-- Header / Navbar -->
<nav class="navbar navbar-expand-lg bg-white sticky-top" aria-label="Primary">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
            <img src="assets/img/logo1.png" alt="A1 Training Institute logo" width="160" height="48" loading="eager" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav"
            aria-controls="offcanvasNav" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                    <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
                    <li class="nav-item dropdown dropdown-mega">
                        <a class="nav-link dropdown-toggle" href="#courses" id="coursesMenu" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Courses</a>
                        <div class="dropdown-menu shadow p-0" aria-labelledby="coursesMenu">
                            <div class="container py-3">
                                <div class="row g-4">
                                    <div class="col-lg-3">
                                        <h6 class="text-uppercase fw-bold">Junior Geeks (6th–12th)</h6>
                                        <ul class="list-unstyled list-checked">
                                            <li><a class="text-decoration-none" href="#junior">Programming
                                                    Foundations</a></li>
                                            <li><a class="text-decoration-none" href="#junior">Python for Kids</a>
                                            </li>
                                            <li><a class="text-decoration-none" href="#junior">Web Basics
                                                    (HTML/CSS/JS)</a></li>
                                            <li><a class="text-decoration-none" href="#junior">Game Development</a>
                                            </li>
                                            <li><a class="text-decoration-none" href="#junior">MS Office &
                                                    Typing</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <h6 class="text-uppercase fw-bold">Computer Science (XI–XII)</h6>
                                        <ul class="list-unstyled list-checked">
                                            <li><a class="text-decoration-none" href="#cs-1112">CBSE/NCERT
                                                    Syllabus</a></li>
                                            <li><a class="text-decoration-none" href="#cs-1112">Python + Data
                                                    Structures</a></li>
                                            <li><a class="text-decoration-none" href="#cs-1112">Weekly Doubt
                                                    Sessions</a></li>
                                            <li><a class="text-decoration-none" href="#cs-1112">Mini Projects &
                                                    Assignments</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <h6 class="text-uppercase fw-bold">Job Oriented</h6>
                                        <ul class="list-unstyled list-checked">
                                            <li><a class="text-decoration-none" href="#fullstack">Full Stack
                                                    (MERN)</a></li>
                                            <li><a class="text-decoration-none" href="#devops">DevOps with
                                                    AWS/Cloud</a></li>
                                            <li><a class="text-decoration-none" href="#cyber">Cybersecurity</a></li>
                                            <li><a class="text-decoration-none" href="#ai">AI/ML & Data Science</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <h6 class="text-uppercase fw-bold">Professional Courses</h6>
                                        <ul class="list-unstyled list-checked">
                                            <li><a class="text-decoration-none" href="#professional">Full Stack</a>
                                            </li>
                                            <li><a class="text-decoration-none" href="#professional">Software
                                                    Testing</a></li>
                                            <li><a class="text-decoration-none" href="#professional">Database &
                                                    SQL</a></li>
                                            <li><a class="text-decoration-none" href="#professional">Android &
                                                    Angular</a></li>
                                            <li><a class="text-decoration-none" href="#professional">Digital
                                                    Marketing</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#placements">Placements</a></li>

                    <li class="nav-item">
                        <a class="nav-link" href="course-download.html" id="">Download</a>
                    </li>

                    <li class="nav-item"><a class="nav-link" href="#reviews">Reviews</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about-banner">About</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="moreDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            More
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="moreDropdown">
                            <li><a class="dropdown-item" href="#internship">InterShip</a></li>
                            <li>
                            <a class="dropdown-item" href="#" id="openCollegeProjects">
                                College Projects
                            </a>
                        </li>


                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    <li class="nav-item ms-lg-2"><a class="btn btn-brand text-white" href="#lead-form">Enroll
                            Now</a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" defer></script>
 `); 
  