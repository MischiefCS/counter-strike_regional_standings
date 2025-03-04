### Roster Details<br />
Team Name: Atrix Esports<br />
Roster: bokor, LyttleZ, REGIANE, s1non, sofiaxyz<br />
Global Rank: [235](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [71]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  584.6<br />
<br />
Final Rank Value (584.6) = Starting Rank Value (619.3) + Head To Head Adjustments (-34.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 619.3
- 400 + ( ( 0.115 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 619.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      289 | 2025-02-13 | Players (Brazilian team) | L   | 1.000      | -            | -                | -                | -         |   -10.76 | bokor, LyttleZ, REGIANE, s1non, sofiaxyz |
|           11 |      334 | 2025-02-11 | ShindeN                  | L   | 1.000      | -            | -                | -                | -         |   -12.28 | bokor, LyttleZ, REGIANE, s1non, sofiaxyz |
|           10 |      390 | 2025-02-09 | KRÜ Esports              | L   | 1.000      | -            | -                | -                | -         |   -13.24 | bokor, LyttleZ, REGIANE, s1non, sofiaxyz |
|            9 |     1878 | 2024-10-18 | Thekillaz                | W   | 0.307      | 0.483        | 0.001 (0.000)    | 0.026 (0.004)    | 0 (0.000) |     4.70 | bokor, LyttleZ, mari, s1non, sofiaxyz    |
|            8 |     2237 | 2024-10-03 | InSanitY Female          | L   | 0.207      | -            | -                | -                | -         |    -3.38 | bokor, LyttleZ, mari, s1non, sofiaxyz    |
|            7 |     2444 | 2024-09-27 | Fluxo Demons             | L   | 0.167      | -            | -                | -                | -         |    -1.76 | bokor, LyttleZ, mari, s1non, sofiaxyz    |
|            6 |     2534 | 2024-09-25 | Peak Academy Female      | W   | 0.154      | 0.483        | 0.001 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     2.26 | bokor, LyttleZ, mari, s1non, sofiaxyz    |
|            5 |     2634 | 2024-09-23 | MIBR Female              | L   | 0.142      | -            | -                | -                | -         |    -2.15 | bokor, LyttleZ, mari, s1non, sofiaxyz    |
|            4 |     2639 | 2024-09-23 | Fluxo Demons             | W   | 0.141      | 0.371        | 0.016 (0.001)    | 0.100 (0.005)    | 0 (0.000) |     2.97 | bokor, LyttleZ, mari, s1non, sofiaxyz    |
|            3 |     2740 | 2024-09-19 | Fluxo Demons             | L   | 0.114      | -            | -                | -                | -         |    -1.20 | bokor, LyttleZ, mari, s1non, sofiaxyz    |
|            2 |     2970 | 2024-09-11 | FURIA Esports Female     | L   | 0.060      | -            | -                | -                | -         |    -0.22 | bokor, LyttleZ, mari, s1non, sofiaxyz    |
|            1 |     3123 | 2024-09-05 | MIBR Female              | W   | 0.021      | 0.483        | 0.004 (0.000)    | 0.052 (0.001)    | 0 (0.000) |     0.33 | bokor, LyttleZ, mari, s1non, sofiaxyz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($445.27)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-18 |      0.307 | $1,450.00      | $445.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
