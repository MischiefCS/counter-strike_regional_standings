### Roster Details<br />
Team Name: Never Say Never-<br />
Roster: elernity, Ggm6, madness, Tw1nk1e17, Yolo267<br />
Global Rank: [262](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [39]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  613.5<br />
<br />
Final Rank Value (613.5) = Starting Rank Value (618.4) + Head To Head Adjustments (-4.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 618.4
- 400 + ( ( 0.112 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 618.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1578 | 2024-12-12 | THE (Russian team) | L   | 0.672      | -            | -                | -                | -         |    -9.47 | elernity, Ggm6, madness, Tw1nk1e17, Yolo267 |
|            8 |     1613 | 2024-12-11 | Noobs But Diligent | W   | 0.665      | 0.143        | 0.000 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     7.25 | elernity, Ggm6, madness, Tw1nk1e17, Yolo267 |
|            7 |     1640 | 2024-12-10 | Rare Atom          | L   | 0.658      | -            | -                | -                | -         |    -2.51 | elernity, Ggm6, madness, Tw1nk1e17, Yolo267 |
|            6 |     1762 | 2024-12-07 | FengDa Gaming      | L   | 0.638      | -            | -                | -                | -         |    -7.98 | Frost77, Ggm6, madness, Tw1nk1e17, Yolo267  |
|            5 |     1801 | 2024-12-06 | Nalakuvara Gaming  | W   | 0.632      | 0.250        | 0.000 (0.000)    | 0.068 (0.011)    | 0 (0.000) |     9.24 | Frost77, Ggm6, madness, Tw1nk1e17, Yolo267  |
|            4 |     1828 | 2024-12-05 | Boring Players     | W   | 0.625      | 0.250        | 0.000 (0.000)    | 0.069 (0.011)    | 0 (0.000) |     4.83 | elernity, Ggm6, madness, Tw1nk1e17, Yolo267 |
|            3 |     1994 | 2024-12-02 | FengDa Gaming      | L   | 0.605      | -            | -                | -                | -         |    -7.39 | Frost77, Ggm6, madness, Tw1nk1e17, Yolo267  |
|            2 |     2148 | 2024-11-30 | THE (Russian team) | W   | 0.592      | 0.250        | 0.000 (0.000)    | 0.373 (0.055)    | 0 (0.000) |     9.94 | Frost77, Ggm6, madness, Tw1nk1e17, Yolo267  |
|            1 |     2175 | 2024-11-29 | XNL Gaming         | L   | 0.590      | -            | -                | -                | -         |    -8.78 | kawa1, madness, rin, Tw1nk1e17, Yolo267     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($718.01)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-09 |      0.651 | $100.00        | $65.08          |
| 2024-11-30 |      0.591 | $1,104.71      | $652.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
