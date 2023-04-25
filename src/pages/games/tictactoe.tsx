import React from "react";
import styles from "./tictactoe.module.css";
import Link from "next/link";
import { GitHubIcon } from "~/components/social/github-button";
import Head from "next/head";
import Navbar from "~/components/navigation/navbar";
import HomeIcon from "~/static/svg/home";
type value = "X" | "O" | null;
type GameState = [
    [value, value, value],
    [value, value, value],
    [value, value, value]
];
interface Grid {
    gameState: GameState;
    setCell: (cellId: [number, number]) => void;
}

const Cell = ({ value, onClick }: { value: value; onClick: () => void }) => {
    return (
        <button className={styles.cell} onClick={() => onClick()}>
            {value || " "}
        </button>
    );
};

const text = {
    pt: {
        title: "Jogo da velha",
        tie: "Empate",
        winner: (winner: string) => {
            return `O jogador ${winner} venceu`;
        },
        playAgain: "Jogar novamente",
        invalidPlay: "Jogada inválida",
        confirmReset: "Reiniciar Jogo?",
        restBtnText: "Reiniciar",
        cancel: "Cancelar",
        turn: (player: string) => {
            return `Vez do jogador ${player}`;
        },
        score: "Placar",
    },
    en: {
        title: "Tic Tac Toe",
        tie: "Tie",
        winner: (winner: string) => {
            return `Player ${winner} won`;
        },
        playAgain: "Play again",
        invalidPlay: "Invalid play",
        confirmReset: "Reset Game?",
        restBtnText: "Reset",
        cancel: "Cancel",
        turn: (player: string) => {
            return `Player ${player}'s turn`;
        },
        score: "Score",
    },
};

const Grid = ({ gameState, setCell }: Grid) => {
    return (
        <div className="grid h-fit w-fit grid-cols-3 grid-rows-3 gap-0">
            {gameState.map((row, i) => {
                return row.map((cell, j) => {
                    return (
                        <Cell
                            value={cell}
                            key={i + j}
                            onClick={() => setCell([i, j])}
                        />
                    );
                });
            })}
        </div>
    );
};

/**
 * checks the rows for a winner
 * @param gameState the current game state
 * @returns a winner if there is one, or undefined
 * */
const checkRows = (gameState: GameState) => {
    for (const row of gameState) {
        if (row.every((cell) => cell === "X")) return "X";
        if (row.every((cell) => cell === "O")) return "O";
    }
};

/**
 * checks the columns for a winner
 * @param gameState the current game state
 * @returns a winner if there is one, or undefined
 * */
const checkColumns = (gameState: GameState) => {
    for (let i = 0; i < 3; i++) {
        if (
            [gameState[0][i], gameState[1][i], gameState[2][i]].every(
                (cell) => cell === "X"
            )
        )
            return "X";
        if (
            [gameState[0][i], gameState[1][i], gameState[2][i]].every(
                (cell) => cell === "O"
            )
        )
            return "O";
    }
};

/**
 * checks the diagonals for a winner
 * @param gameState the current game state
 * @returns a winner if there is one, or undefined
 * */
const checkDiagonals = (gameState: GameState) => {
    if (
        [gameState[0][0], gameState[1][1], gameState[2][2]].every(
            (cell) => cell === "X"
        )
    )
        return "X";
    if (
        [gameState[0][0], gameState[1][1], gameState[2][2]].every(
            (cell) => cell === "O"
        )
    )
        return "O";
    if (
        [gameState[0][2], gameState[1][1], gameState[2][0]].every(
            (cell) => cell === "X"
        )
    )
        return "X";
    if (
        [gameState[0][2], gameState[1][1], gameState[2][0]].every(
            (cell) => cell === "O"
        )
    )
        return "O";
};
/**
 * checks the game state for a winner
 * uses checkRows, checkColumns and checkDiagonals functions
 * @param gameState the current game state
 * @returns a winner if there is one, or undefined
 * */
const checkWinner = (gameState: GameState) => {
    const winner =
        checkRows(gameState) ||
        checkColumns(gameState) ||
        checkDiagonals(gameState);
    if (winner) return winner;
    if (gameState.every((row) => row.every((cell) => cell !== null)))
        return "tie";
};

const Winner = ({
    winner,
    reset,
}: {
    winner: "X" | "O" | "tie";
    reset: () => void;
}) => {
    React.useEffect(() => {
        if (typeof window === "undefined") return;

        setLang(window.navigator.language === "pt-BR" ? "pt" : "en");
    }, []);

    const [lang, setLang] = React.useState<"pt" | "en">("en");
    return (
        <div className="absolute left-0 top-0 flex h-screen w-screen flex-col  items-center justify-center text-4xl font-bold text-white backdrop-blur">
            <h1>
                {winner === "tie" ? text[lang].tie : text[lang].winner(winner)}
            </h1>
            <button onClick={reset} className="primary-button">
                {text[lang].playAgain}
            </button>
        </div>
    );
};

const Reset = ({ reset, close }: { reset: () => void; close: () => void }) => {
    const [lang, setLang] = React.useState<"pt" | "en">("en");
    React.useEffect(() => {
        if (typeof window === "undefined") return;

        setLang(window.navigator.language === "pt-BR" ? "pt" : "en");
    }, []);

    return (
        <div className="absolute left-0 top-0 flex h-screen w-screen flex-col  items-center justify-center text-4xl font-bold text-white backdrop-blur">
            <h1>{text[lang].confirmReset}</h1>
            <div className="flex gap-2">
                <button onClick={close} className="primary-button">
                    {text[lang].cancel}
                </button>
                <button onClick={reset} className="primary-button">
                    {text[lang].restBtnText}
                </button>
            </div>
        </div>
    );
};

const TicTacToe = () => {
    const [gameState, setGameState] = React.useState<GameState>([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);
    const [player, setPlayer] = React.useState<"X" | "O">("X");
    const [winner, setWinner] = React.useState<"X" | "O" | "tie" | undefined>();
    const [lang, setLang] = React.useState<"pt" | "en">("en");
    const [score, setScore] = React.useState<{
        X: number;
        O: number;
        tie: number;
    }>({
        X: 0,
        O: 0,
        tie: 0,
    });
    const [reset, setReset] = React.useState<boolean>(false);
    const resetGame = () => {
        setReset(false);
        setGameState([
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]);
        setWinner(undefined);
        setPlayer("X");
    };

    const hardReset = () => {
        setReset(false);
        resetGame();
        setScore({ X: 0, O: 0, tie: 0 });
    };

    React.useEffect(() => {
        const winner = checkWinner(gameState);
        if (winner) {
            setWinner(winner);
            setScore((old) => {
                return {
                    ...old,
                    [winner]: old[winner] + 1,
                };
            });
        }
    }, [gameState]);

    const setCell = (cellId: [number, number]) => {
        const row = gameState[cellId[0]];
        if (!row || row[cellId[1]] !== null) return alert("jogada inválida");
        setGameState((old) => {
            return old.map((row, i) => {
                return row.map((cell, j) => {
                    if (i === cellId[0] && j === cellId[1]) {
                        return player;
                    }
                    return cell;
                });
            }) as GameState;
        });
        setPlayer((old) => (old === "X" ? "O" : "X"));
    };

    React.useEffect(() => {
        if (typeof window === "undefined") return;

        setLang(window.navigator.language === "pt-BR" ? "pt" : "en");
    }, []);

    return (
        <>
            <Head>
                <title>{text[lang].title}</title>
            </Head>
            <div className="flex min-h-screen flex-col items-center gap-4 bg-[var(--neutral-color)] p-4">
                {winner && <Winner winner={winner} reset={resetGame} />}
                {reset && (
                    <Reset reset={hardReset} close={() => setReset(false)} />
                )}
                <div className="fixed bottom-4 left-4 flex gap-4">
                    <Link
                        href="https://github.com/Glicio/portfolio/blob/main/src/pages/games/tictactoe.tsx"
                        className="flex items-center p-2 gap-2 rounded bg-white"
                    >
                        <GitHubIcon /> <span>Go to Repository</span>
                    </Link>
                    <Link
                        href="/"
                        className=" items-center gap-2 rounded bg-white p-2 flex "
                    >
                        <HomeIcon/> <span>Go Back</span>
                    </Link>
                </div>
                <h1 className="text-4xl font-bold text-white">
                    {text[lang].title}
                </h1>
                <div className=" flex flex-col items-center gap-4">
                    <span className="text-white">
                        {text[lang].turn(player)}
                    </span>
                    <Grid
                        gameState={gameState as GameState}
                        setCell={setCell}
                    />
                </div>
                <button
                    onClick={() => setReset(true)}
                    className="primary-button "
                >
                    {text[lang].restBtnText}
                </button>
                <table className="default-table ">
                    <thead>
                        <tr>
                            <th colSpan={2}>{text[lang].score}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>X</td>
                            <td>{score.X}</td>
                        </tr>
                        <tr>
                            <td>O</td>
                            <td>{score.O}</td>
                        </tr>
                        <tr>
                            <td>{text[lang].tie}s</td>
                            <td>{score.tie}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TicTacToe;
