<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bloxis playground</title>
    <style>
        /* General Page Styling */
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #32CD32, #9370DB); /* Green to purple blend */
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Sidebar (Site Panel) Styling */
        .sidebar {
            height: 100%;
            width: 250px;
            position: fixed;
            top: 0;
            left: -250px;
            background-color: #2c2c54;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 60px;
        }

        .sidebar a {
            padding: 10px 15px;
            text-decoration: none;
            font-size: 22px;
            color: #ffffff;
            display: block;
            transition: 0.3s;
        }

        .sidebar a:hover {
            background-color: #575fcf;
            color: white;
        }

        /* Close Button (Hidden initially) */
        .close-btn {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 36px;
            color: white;
            cursor: pointer;
        }

        /* Hamburger Button */
        .hamburger-btn {
            position: absolute;
            top: 15px;
            left: 15px;
            font-size: 30px;
            cursor: pointer;
            color: white;
            z-index: 100;
        }

        /* Smooth transition for sliding animation */
        .open-sidebar {
            left: 0;
        }

        /* Main content styling */
        .main-content {
            text-align: center;
            color: white;
        }

        h1 {
            font-size: 48px;
        }
    </style>
</head>
<body>

    <!-- Hamburger Button (3 lines) -->
    <div class="hamburger-btn" onclick="toggleSidebar()">
        &#9776; <!-- Unicode for hamburger icon -->
    </div>

    <!-- Sidebar / Site Panel -->
    <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="close-btn" onclick="toggleSidebar()">&times;</a>
        <a href="https://bloxi123.github.io/home.js">Home</a>
        <a href="https://bloxi123.github.io/wordle.html">Wordle</a>
    </div>

    <!-- Main content area -->
    <div class="main-content">
        <h1>Welcome to the playground by bloxi!</h1>
        <p>Click the menu icon to explore.</p>
    </div>

    <script>
        function toggleSidebar() {
            const sidebar = document.getElementById("mySidebar");
            sidebar.classList.toggle("open-sidebar");
        }
    </script>

</body>
</html>
