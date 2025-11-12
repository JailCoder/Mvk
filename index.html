<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MVK Proxy Browser</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #000;
            font-family: 'Arial', sans-serif;
            color: #fff;
            overflow: hidden;
            background-image: 
                linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)),
                repeating-linear-gradient(
                    45deg,
                    #111 0px,
                    #111 10px,
                    #222 10px,
                    #222 20px
                );
            min-height: 100vh;
        }

        #particles-js {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
        }

        .container {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .logo {
            text-align: center;
            margin-bottom: 50px;
            position: relative;
        }

        .logo h1 {
            font-size: 12rem;
            font-weight: 900;
            letter-spacing: -8px;
            text-transform: uppercase;
            background: linear-gradient(45deg, #ff0000, #8b0000, #ff0000);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 0 30px rgba(255, 0, 0, 0.6);
            animation: logoGlow 3s ease-in-out infinite alternate;
            margin: 0;
            padding: 0;
        }

        @keyframes logoGlow {
            0% {
                text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
            }
            100% {
                text-shadow: 0 0 50px rgba(255, 0, 0, 0.8), 0 0 80px rgba(255, 0, 0, 0.6);
            }
        }

        .letter-container {
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .letter {
            display: inline-block;
            animation: float 3s ease-in-out infinite;
            transform-origin: center;
            font-weight: 900;
        }

        .letter:nth-child(1) { animation-delay: 0s; }
        .letter:nth-child(2) { animation-delay: 0.3s; }
        .letter:nth-child(3) { animation-delay: 0.6s; }

        @keyframes float {
            0%, 100% { 
                transform: translateY(0) rotate(0deg);
                text-shadow: 0 0 30px rgba(255, 0, 0, 0.6);
            }
            50% { 
                transform: translateY(-30px) rotate(5deg);
                text-shadow: 0 0 60px rgba(255, 0, 0, 0.9), 0 0 100px rgba(255, 0, 0, 0.7);
            }
        }

        .proxy-form {
            background: rgba(15, 15, 15, 0.95);
            border: 3px solid #ff0000;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 0 40px rgba(255, 0, 0, 0.4);
            backdrop-filter: blur(15px);
            position: relative;
            overflow: hidden;
        }

        .proxy-form::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #ff0000, #8b0000, #ff0000);
            z-index: -1;
            border-radius: 17px;
            animation: borderAnimation 3s linear infinite;
            background-size: 300% 300%;
        }

        @keyframes borderAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            margin-bottom: 12px;
            color: #ff4444;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 14px;
        }

        .form-group input {
            width: 100%;
            padding: 18px;
            background: rgba(25, 25, 25, 0.9);
            border: 2px solid #444;
            border-radius: 8px;
            color: white;
            font-size: 18px;
            transition: all 0.3s ease;
        }

        .form-group input:focus {
            outline: none;
            border-color: #ff0000;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.6);
        }

        .btn {
            width: 100%;
            padding: 20px;
            background: linear-gradient(45deg, #ff0000, #8b0000);
            border: none;
            border-radius: 8px;
            color: white;
            font-size: 22px;
            font-weight: bold;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
            letter-spacing: 3px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 5px 25px rgba(255, 0, 0, 0.4);
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(255, 0, 0, 0.7);
        }

        .btn:active {
            transform: translateY(1px);
        }

        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: 0.5s;
        }

        .btn:hover::before {
            left: 100%;
        }

        .bars-animation {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 40px;
        }

        .bar {
            width: 6px;
            height: 40px;
            background: linear-gradient(to bottom, #ff0000, #8b0000);
            animation: barPulse 1.2s infinite alternate;
            border-radius: 3px;
        }

        .bar:nth-child(1) { animation-delay: 0s; height: 30px; }
        .bar:nth-child(2) { animation-delay: 0.1s; height: 35px; }
        .bar:nth-child(3) { animation-delay: 0.2s; height: 40px; }
        .bar:nth-child(4) { animation-delay: 0.3s; height: 35px; }
        .bar:nth-child(5) { animation-delay: 0.4s; height: 30px; }

        @keyframes barPulse {
            0% { 
                transform: scaleY(0.4); 
                opacity: 0.6; 
            }
            100% { 
                transform: scaleY(1); 
                opacity: 1; 
            }
        }

        .status {
            text-align: center;
            margin-top: 25px;
            color: #ff4444;
            font-weight: bold;
            min-height: 30px;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .chains {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        }

        .chain {
            position: absolute;
            width: 4px;
            height: 100%;
            background: repeating-linear-gradient(
                to bottom,
                #333 0px,
                #333 10px,
                #222 10px,
                #222 20px
            );
        }

        .chain.left { left: 5%; }
        .chain.right { right: 5%; }
        .chain.center { left: 50%; transform: translateX(-50%); }

        @media (max-width: 768px) {
            .logo h1 {
                font-size: 8rem;
                letter-spacing: -5px;
            }
            
            .proxy-form {
                padding: 25px;
            }
            
            .letter-container {
                gap: 10px;
            }
        }

        @media (max-width: 480px) {
            .logo h1 {
                font-size: 6rem;
                letter-spacing: -3px;
            }
            
            .proxy-form {
                padding: 20px;
            }
            
            .btn {
                font-size: 18px;
                padding: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="chains">
        <div class="chain left"></div>
        <div class="chain center"></div>
        <div class="chain right"></div>
    </div>
    <div id="particles-js"></div>
    
    <div class="container">
        <div class="logo">
            <div class="letter-container">
                <h1 class="letter">M</h1>
                <h1 class="letter">V</h1>
                <h1 class="letter">K</h1>
            </div>
        </div>
        
        <div class="proxy-form">
            <div class="form-group">
                <label for="url">URL САЙТА</label>
                <input type="text" id="url" placeholder="https://example.com" value="https://">
            </div>
            
            <div class="form-group">
                <label for="proxy">ПРОКСИ СЕРВЕР</label>
                <input type="text" id="proxy" placeholder="host:port или ip:port">
            </div>
            
            <button class="btn" onclick="startProxy()">СТАРТ</button>
            
            <div class="status" id="status"></div>
        </div>
        
        <div class="bars-animation">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script>
        // Инициализация частиц
        function initParticles() {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ff0000"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        }
                    },
                    opacity: {
                        value: 0.6,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 4,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 180,
                        color: "#ff0000",
                        opacity: 0.4,
                        width: 1.5
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "grab"
                        },
                        onclick: {
                            enable: true,
                            mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            line_linked: {
                                opacity: 0.8
                            }
                        },
                        push: {
                            particles_nb: 4
                        }
                    }
                },
                retina_detect: true
            });
        }

        // Функция запуска прокси
        function startProxy() {
            const url = document.getElementById('url').value.trim();
            const proxy = document.getElementById('proxy').value.trim();
            const status = document.getElementById('status');
            
            if (!url || url === 'https://') {
                status.textContent = 'Введите URL сайта!';
                status.style.color = '#ff4444';
                return;
            }
            
            if (!proxy) {
                status.textContent = 'Введите прокси сервер!';
                status.style.color = '#ff4444';
                return;
            }
            
            status.textContent = 'УСТАНОВКА СОЕДИНЕНИЯ ЧЕРЕЗ ПРОКСИ...';
            status.style.color = '#ffff00';
            
            // Симуляция подключения
            setTimeout(() => {
                status.textContent = 'СОЕДИНЕНИЕ УСТАНОВЛЕНО! ЗАГРУЗКА...';
                status.style.color = '#00ff00';
                
                // Здесь должна быть логика перенаправления через прокси
                // В реальной реализации это будет сложнее
                setTimeout(() => {
                    try {
                        // Открываем URL в новой вкладке через прокси (симуляция)
                        const proxyUrl = `https://${proxy.replace(':', '-')}.${url.replace('https://', '').replace('http://', '')}`;
                        status.innerHTML = `ПЕРЕНАПРАВЛЕНИЕ ЧЕРЕЗ ПРОКСИ:<br>${proxy}
→
${url}`;
                        
                        // В реальном приложении здесь был бы переход через прокси-сервер
                        console.log(`В реальном приложении здесь произошел бы переход на ${url} через прокси ${proxy}`);
                    } catch (error) {
                        status.textContent = 'ОШИБКА ПОДКЛЮЧЕНИЯ!';
                        status.style.color = '#ff4444';
                    }
                }, 2000);
            }, 3000);
        }

        // Инициализация при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            initParticles();
            
            // Добавляем обработчик Enter для формы
            document.getElementById('url').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    startProxy();
                }
            });
            
            document.getElementById('proxy').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    startProxy();
                }
            });
            
            // Фокус на первое поле
            document.getElementById('url').focus();
        });
    </script>
</body>
</html>
