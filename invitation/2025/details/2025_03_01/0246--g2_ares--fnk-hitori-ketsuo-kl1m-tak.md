### Roster Details<br />
Team Name: G2 Ares<br />
Roster: fNk, hitori, ketsuo, kl1m, tAk<br />
Global Rank: [246](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [138]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  538.4<br />
<br />
Final Rank Value (538.4) = Starting Rank Value (519.3) + Head To Head Adjustments (19.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 519.3
- 400 + ( ( 0.062 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 519.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1422 | 2024-11-16 | FLuffy Gangsters                          | L   | 0.500      | -            | -                | -                | -         |    -4.81 | fNk, hitori, ketsuo, kl1m, tAk |
|            8 |     1522 | 2024-11-13 | Daystar                                   | W   | 0.478      | 0.143        | 0.000 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     9.05 | fNk, hitori, ketsuo, kl1m, tAk |
|            7 |     2148 | 2024-10-06 | TSM                                       | L   | 0.226      | -            | -                | -                | -         |    -1.73 | fNk, hitori, kl1m, tAk, xezr   |
|            6 |     2221 | 2024-10-04 | Los kogutos                               | W   | 0.210      | 0.435        | 0.027 (0.003)    | 0.387 (0.035)    | 0 (0.000) |     5.89 | fNk, hitori, kl1m, tAk, xezr   |
|            5 |     2295 | 2024-10-02 | CYBERSHOKE Esports                        | L   | 0.198      | -            | -                | -                | -         |    -0.99 | fNk, hitori, kl1m, tAk, xezr   |
|            4 |     2337 | 2024-10-01 | Metizport                                 | L   | 0.193      | -            | -                | -                | -         |    -0.31 | fNk, hitori, kl1m, tAk, xezr   |
|            3 |     2390 | 2024-09-29 | Copenhagen Wolves (American organization) | W   | 0.179      | 0.143        | 0.000 (0.000)    | 0.066 (0.002)    | 0 (0.000) |     2.92 | fNk, hitori, kl1m, tAk, xezr   |
|            2 |     2449 | 2024-09-27 | Nexus Gaming                              | W   | 0.166      | 0.143        | 0.178 (0.004)    | 0.497 (0.012)    | 0 (0.000) |     5.04 | fNk, hitori, kl1m, tAk, xezr   |
|            1 |     2498 | 2024-09-26 | EYEBALLERS                                | W   | 0.159      | 0.143        | 0.019 (0.000)    | 0.360 (0.008)    | 0 (0.000) |     4.03 | fNk, hitori, kl1m, tAk, xezr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
