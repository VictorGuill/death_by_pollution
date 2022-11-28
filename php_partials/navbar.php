<nav id="landing_nav" class="navbar navbar-expand-lg navbar-dark p-3" id="headerNav">
    <div class="container-fluid">
        <a class="navbar-brand d-block d-lg-none" href="/death_by_pollution/pages/index.php">
            <img src="/death_by_pollution/media/icons/logo.svg" height="30" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link mx-2 fs-5" href="/death_by_pollution/pages/about.php">About us</a>
                </li>
                <li class="nav-item d-none d-lg-block">
                    <a id="logo" class="nav-link mx-2" href="/death_by_pollution/index.php">
                        <img src="/death_by_pollution/media/icons/logo.svg" height="30" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mx-2 fs-5" href="/death_by_pollution/pages/gamesMenu.php">Games</a>
                </li>
                <ul id="navRightItems" class="navbar-nav">
                    <li class="nav-item mx-2">
                        <a id="languageIcon" class="nav-link h5">
                            <img src="/death_by_pollution/media/icons/globe.svg" height="23" />
                        </a>
                    </li>
                    <li class="mx-2">
                        <a id="loginIcon" class="nav-link h5" onclick="showLoginPanel()">
                            <img src="/death_by_pollution/media/icons/login.svg" height="23" /></a>
                    </li>
                </ul>
            </ul>
        </div>
    </div>
</nav>

<!-- LOG IN -->
<div id="loginPanel">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div id="loginCard" class="card shadow-2-strong" style="border-radius: 1rem">
                    <div id="closePanel" onclick="closeLoginPanel()">❌</div>
                    <div id="elementsPanel" class="card-body p-5 pb-4 text-center">
                        <h3 id="loginTitle" class="mb-5">Log in</h3>

                        <div class="mb-4">
                            <input type="text" placeholder="Nombre" />
                        </div>

                        <div class="mb-4">
                            <input type="password" placeholder="contraseña" />
                        </div>

                        <button id="loginButton" class="btn btn-primary btn-lg btn-block mt-4" type="submit">
                            ACEPTAR
                        </button>

                        <h5 id="switchPanel" class="mt-5 mb-0" onclick="switchPanel()">
                            crear cuenta
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="/death_by_pollution/js/loginPanelLogic.js"></script>