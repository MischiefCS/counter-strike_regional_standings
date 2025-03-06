### Roster Details<br />
Team Name: G2 Esports<br />
Roster: HeavyGod, huNter-, m0NESY, malbsMd, Snax<br />
Global Rank: [17](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [14]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  1218.6<br />
<br />
Final Rank Value (1218.6) = Starting Rank Value (1194.7) + Head To Head Adjustments (23.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.599[<sup>1</sup>](#table2)
- Bounty Collected: 0.441[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.277[<sup>2</sup>](#table1)

The average of these factors is 0.343<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1194.7
- 400 + ( ( 0.343 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 1194.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      586 | 2025-02-03 | FaZe Clan    | L   | 0.405      | -            | -                | -                | -         |    -0.29 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           12 |      601 | 2025-02-02 | Team Falcons | W   | 0.398      | 1.000        | 1.000 (0.398)    | 0.676 (0.269)    | 1 (0.398) |    12.26 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           11 |      615 | 2025-02-01 | Virtus.pro   | L   | 0.391      | -            | -                | -                | -         |    -1.00 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           10 |      657 | 2025-01-25 | Eternal Fire | L   | 0.344      | -            | -                | -                | -         |    -0.15 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            9 |      666 | 2025-01-23 | BetBoom Team | W   | 0.332      | 0.769        | 0.100 (0.025)    | 0.350 (0.089)    | 1 (0.332) |     1.70 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            8 |      668 | 2025-01-19 | BIG          | W   | 0.305      | 0.363        | 0.295 (0.033)    | 0.449 (0.050)    | 0 (0.000) |     7.02 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            7 |      676 | 2025-01-17 | B8           | W   | 0.293      | 0.363        | 0.162 (0.017)    | 0.857 (0.091)    | 0 (0.000) |     1.92 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            6 |      880 | 2024-12-14 | FaZe Clan    | L   | 0.063      | -            | -                | -                | -         |    -0.04 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            5 |      906 | 2024-12-12 | Team Falcons | W   | 0.055      | 1.000        | 1.000 (0.055)    | 0.676 (0.037)    | 1 (0.055) |     1.70 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            4 |     1003 | 2024-12-06 | FaZe Clan    | W   | 0.014      | 1.000        | 0.792 (0.011)    | 0.483 (0.007)    | 1 (0.014) |     0.44 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            3 |     1028 | 2024-12-05 | 3DMAX        | W   | 0.008      | 1.000        | 0.288 (0.002)    | 0.480 (0.004)    | 1 (0.008) |     0.20 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            2 |     1043 | 2024-12-05 | BIG          | W   | 0.003      | 1.000        | 0.295 (0.001)    | 0.449 (0.001)    | 1 (0.003) |     0.07 | huNter-, m0NESY, malbsMd, NiKo, Snax     |
|            1 |     1063 | 2024-12-04 | The MongolZ  | L   | 0.001      | -            | -                | -                | -         |    -0.00 | huNter-, m0NESY, malbsMd, NiKo, Snax     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,793.29)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.444 | $16,000.00     | $7,111.11       |
| 2025-01-26 |      0.351 | $17,500.00     | $6,139.58       |
| 2024-12-15 |      0.069 | $80,000.00     | $5,542.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
