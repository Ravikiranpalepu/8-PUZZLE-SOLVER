// Game state
const state = {
    board: [[1, 2, 3], [4, 5, 6], [7, 8, 0]],
    emptyPos: { row: 2, col: 2 },
    solution: [],
    currentStep: -1,
    autoPlayInterval: null,
    isSolving: false,
    cancelSolve: false,
    stats: {
        moves: 0,
        timeTaken: 0,
        statesExplored: 0
    }
};

// DOM elements
const boardEl = document.getElementById('board');
const solutionEl = document.getElementById('solution');
const shuffleBtn = document.getElementById('shuffle-btn');
const solveBtn = document.getElementById('solve-btn');
const resetBtn = document.getElementById('reset-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const playBtn = document.getElementById('play-btn');
const loadingModal = document.getElementById('loading-modal');
const cancelSolveBtn = document.getElementById('cancel-solve');
const movesCountEl = document.getElementById('moves-count');
const timeTakenEl = document.getElementById('time-taken');
const statesExploredEl = document.getElementById('states-explored');
const solveProgressEl = document.getElementById('solve-progress');

/* Rest of your existing JavaScript */
