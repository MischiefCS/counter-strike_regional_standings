### Roster Details<br />
Team Name: Team M33<br />
Roster: finW, jakekeS, MaLLiC, N4Tsu, NEVERMIDNITE<br />
Global Rank: [563](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [351]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  397.6<br />
<br />
Final Rank Value (397.6) = Starting Rank Value (400.5) + Head To Head Adjustments (-2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.5
- 400 + ( ( 0.000 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 400.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1916 | 2024-12-02 | Rhyno Esports | L   | 0.607      | -            | -                | -                | -         |    -1.33 | finW, jakekeS, MaLLiC, N4Tsu, NEVERMIDNITE |
|            5 |     2025 | 2024-12-01 | FALKE ESPORTS | W   | 0.599      | 0.333        | 0.000 (0.000)    | 0.046 (0.009)    | 0 (0.000) |     9.81 | finW, jakekeS, MaLLiC, N4Tsu, NEVERMIDNITE |
|            4 |     2091 | 2024-11-30 | ARCRED        | L   | 0.593      | -            | -                | -                | -         |    -1.60 | finW, jakekeS, MaLLiC, N4Tsu, NEVERMIDNITE |
|            3 |     2285 | 2024-11-26 | Team Genesium | L   | 0.567      | -            | -                | -                | -         |    -2.98 | finW, jakekeS, MaLLiC, N4Tsu, NEVERMIDNITE |
|            2 |     3546 | 2024-11-04 | Ex-DOSKI      | L   | 0.418      | -            | -                | -                | -         |    -6.56 | finW, jakekeS, MaLLiC, N4Tsu, NEVERMIDNITE |
|            1 |     5714 | 2024-09-25 | GUN5 Esports  | L   | 0.154      | -            | -                | -                | -         |    -0.23 | finW, jakekeS, MaLLiC, N4Tsu, NEVERMIDNITE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
