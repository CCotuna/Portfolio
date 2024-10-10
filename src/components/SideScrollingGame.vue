<template>
    <div class="game-container" @touchstart="jump">
        <img class="square" :src="chickenIcon" :style="{ left: '20px', bottom: `${squareY}px` }" alt="Chicken Icon" />
        <div v-for="(obstacle, index) in obstacles" :key="index" class="obstacle"
            :style="{ left: `${obstacle.x}px`, height: '50px', width: '25px' }"></div>
        <div class="score">Score: {{ score }}</div>
        <button v-if="!gameStarted" @click="startGame" class="start-button">Start Game</button>
        <div v-if="gameOver" class="game-over">
            <p>Game Over! Your score: {{ score }}</p>
            <button @click="resetGame" class="retry-button">Retry</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import chickenIcon from '@/assets/Chicken Icon Illustration.png';

const squareY = ref(0);
const isJumping = ref(false);
const score = ref(0);
const obstacles = ref([]);
const jumpHeight = 150;
const initialObstacleWidth = 50;
const obstacleWidth = initialObstacleWidth / 2;
const obstacleGap = 200;
let gameInterval;
const gameStarted = ref(false);
const gameOver = ref(false);
let obstacleSpeed = 8;

const jump = () => {
    if (gameStarted.value && !isJumping.value) {
        isJumping.value = true;
        squareY.value = jumpHeight;
        setTimeout(() => {
            squareY.value = 0;
            isJumping.value = false;
        }, 400);
    }
};

const handleKeyDown = (event) => {
    if (event.code === 'Space') {
        jump();
    }
};

const moveObstacles = () => {
    obstacles.value.forEach(obstacle => {
        obstacle.x -= obstacleSpeed;
    });

    obstacles.value = obstacles.value.filter(obstacle => obstacle.x > -obstacleWidth);

    if (obstacles.value.length && obstacles.value[0].x < 0) {
        score.value++;
    }

    if (score.value >= 50) {
        obstacleSpeed = 10;
    } else if (score.value >= 100) {
        obstacleSpeed = 14;
    }



    if (!isJumping.value) {
        checkCollision();
    }

    if (obstacles.value.length === 0 || obstacles.value[obstacles.value.length - 1].x < obstacleGap) {
        obstacles.value.push({ x: 800 });
    }
};

const checkCollision = () => {
    obstacles.value.forEach(obstacle => {
        if (obstacle.x < 60 && obstacle.x > 10) {
            if (squareY.value === 0) {
                clearInterval(gameInterval);
                gameOver.value = true;
            }
        }
    });
};

const resetGame = () => {
    squareY.value = 0;
    score.value = 0;
    obstacles.value = [];
    gameStarted.value = false;
    gameOver.value = false;
    obstacleSpeed = 5;
};

const startGame = () => {
    gameStarted.value = true;
    score.value = 0;
    obstacles.value = [];
    moveObstacles();
    gameInterval = setInterval(moveObstacles, 20);
};

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
    clearInterval(gameInterval);
    window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
.game-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    height: 400px;
    overflow: hidden;
    background-color: rgb(0, 0, 0);
    border: 1px solid #000000;
}

.square {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 20px;
    bottom: 0;
    transition: bottom 0.4s;
}

.obstacle {
    position: absolute;
    background-color: green;
    bottom: 0;
}

.score {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 24px;
    color: #ffffff;
}

.start-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    font-size: 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.start-button:hover {
    background-color: #45a049;
}

.game-over {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 24px;
    color: #000;
}

.retry-button {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 20px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.retry-button:hover {
    background-color: #e53935;
}

@media (max-width: 600px) {
    .game-container {
        height: 300px;
    }

    .square {
        width: 40px;
        height: 40px;
    }

    .obstacle {
        width: 20px;
        height: 40px;
    }

    .score {
        font-size: 18px;
    }

    .start-button,
    .retry-button {
        font-size: 16px;
    }
}
</style>
