### Roster Details<br />
Team Name: Big W<br />
Roster: Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN<br />
Global Rank: [250](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [29]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  675.4<br />
<br />
Final Rank Value (675.4) = Starting Rank Value (678.5) + Head To Head Adjustments (-3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.5
- 400 + ( ( 0.141 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 678.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1331 | 2024-12-14 | Gods Reign             | L   | 0.684      | -            | -                | -                | -         |   -10.19 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            5 |     1341 | 2024-12-13 | St4rboys               | W   | 0.683      | 0.262        | 0.002 (0.000)    | 0.060 (0.011)    | 0 (0.000) |     9.62 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            4 |     2850 | 2024-11-16 | Orgless5 (Indian team) | L   | 0.503      | -            | -                | -                | -         |    -6.98 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            3 |     2905 | 2024-11-16 | Gods Reign             | W   | 0.498      | 0.290        | 0.011 (0.002)    | 0.451 (0.065)    | 1 (0.498) |     8.01 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            2 |     4002 | 2024-10-27 | Gods Reign             | L   | 0.364      | -            | -                | -                | -         |    -5.49 | clouda, Crazy_Gamer, CycloneF, EmbeR, SpawN    |
|            1 |     4004 | 2024-10-26 | ROG Academy            | W   | 0.363      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.98 | clouda, Crazy_Gamer, CycloneF, EmbeR, SpawN    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,119.75)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-14 |      0.684 | $500.00        | $341.99         |
| 2024-11-16 |      0.503 | $1,183.74      | $595.85         |
| 2024-10-27 |      0.364 | $500.00        | $181.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
