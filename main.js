document.addEventListener('DOMContentLoaded', () => {
    const matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    let playerTurn = false;
    let win = false;

    const table = document.querySelector('.table')
    const playerNr = document.querySelector('.player')
    console.log(win);

    for (const rows of matrix) {
        const row = document.createElement('div')
        row.classList.add('row')
        table.appendChild(row)
        for (const cells in rows) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            row.appendChild(cell)

            cell.addEventListener('click', (e) => {

                if (!rows[cells]) {
                    playerTurn = !playerTurn

                    if (playerTurn) {
                        playerNr.innerText = 'Crosh'
                        e.target.classList.add('active1')
                        rows[cells] = 1
                    } else {
                        playerNr.innerText = 'Circle'
                        e.target.classList.add('active2')
                        rows[cells] = 2
                    }

                    const temp = []
                    // for (let i = 0; i < matrix.length; i++) {
                    //     for (let j = 0; j < matrix[i].length; j++) {
                    //         temp.push(matrix[i][j])
                    //     }
                    // }

                    matrix.map(elem => elem.map(cell => temp.push(cell)))

                    console.log(temp);

                    const checkWinner = (number) => {
                        if (
                            (temp[0] === number && temp[1] === number && temp[2] === number) ||
                            (temp[0] === number && temp[3] === number && temp[6] === number) ||
                            (temp[0] === number && temp[4] === number && temp[8] === number) ||
                            (temp[1] === number && temp[4] === number && temp[7] === number) ||
                            (temp[2] === number && temp[5] === number && temp[8] === number) ||
                            (temp[2] === number && temp[4] === number && temp[6] === number) ||
                            (temp[3] === number && temp[4] === number && temp[5] === number) ||
                            (temp[6] === number && temp[7] === number && temp[8] === number)

                        ) {
                            if (number === 1) {
                                setTimeout(() => {
                                    alert('Winnner is circle');
                                }, 100)
                                win = true
                            } else {
                                setTimeout(() => {
                                    alert('Winnner is crosh');
                                }, 100)
                                win = true
                            }
                        }                        
                    }

                    checkWinner(1)
                    checkWinner(2)

                    if (temp.every(el => el) && !win) {
                        setTimeout(() => {
                            alert('Niciaaaaaa');
                        }, 100)
                    }
                }
            })
        }
    }
})