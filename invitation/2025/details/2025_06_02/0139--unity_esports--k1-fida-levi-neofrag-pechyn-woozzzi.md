### Roster Details<br />
Team Name: UNiTY esports<br />
Roster: K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi<br />
Global Rank: [139](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [78]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  398.8<br />
<br />
Final Rank Value (398.8) = Starting Rank Value (402.3) + Head To Head Adjustments (-3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.3
- 400 + ( ( 0.001 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 402.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      476 | 2025-02-08 | Iberian Soul      | L   | 0.436      | -            | -                | -                | -         |    -4.56 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|            6 |      551 | 2025-02-05 | Aurora Gaming     | L   | 0.417      | -            | -                | -                | -         |    -4.38 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|            5 |      583 | 2025-02-04 | Iberian Soul      | W   | 0.410      | 0.143        | 0.000 (0.000)    | 0.567 (0.033)    | 0 (0.000) |     8.64 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|            4 |      651 | 2025-01-27 | Ninjas in Pyjamas | L   | 0.356      | -            | -                | -                | -         |    -3.79 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|            3 |      774 | 2024-12-22 | 9INE              | L   | 0.117      | -            | -                | -                | -         |    -0.38 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|            2 |      799 | 2024-12-19 | Insilio           | W   | 0.098      | 0.354        | 0.000 (0.000)    | 0.173 (0.006)    | 0 (0.000) |     2.01 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |
|            1 |      814 | 2024-12-18 | Insilio           | L   | 0.091      | -            | -                | -                | -         |    -1.01 | K1-FiDa, Levi, NEOFRAG, Pechyn, woozzzi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
