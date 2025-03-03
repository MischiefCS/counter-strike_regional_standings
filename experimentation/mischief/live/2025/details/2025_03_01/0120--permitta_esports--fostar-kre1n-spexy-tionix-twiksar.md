### Roster Details<br />
Team Name: Permitta Esports<br />
Roster: fostar, Kre1N, Spexy, Tionix, Twiksar<br />
Global Rank: [120](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [84]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  765.2<br />
<br />
Final Rank Value (765.2) = Starting Rank Value (754.5) + Head To Head Adjustments (10.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.080[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 754.5
- 400 + ( ( 0.181 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 754.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      812 | 2025-02-04 | GardenGarage                   | L   | 1.000      | -            | -                | -                | -         |   -16.52 | fostar, Kre1N, Spexy, Tionix, Twiksar  |
|           10 |      823 | 2025-02-04 | Ex-Daystar                     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.056 (0.008)    | 0 (0.000) |     3.32 | fostar, Kre1N, Spexy, Tionix, Twiksar  |
|            9 |     1290 | 2024-12-20 | Mission Possible               | W   | 0.728      | 0.143        | 0.000 (0.000)    | 0.201 (0.021)    | 0 (0.000) |     5.24 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|            8 |     1295 | 2024-12-20 | HyperSpirit                    | W   | 0.727      | 0.143        | 0.000 (0.000)    | 0.041 (0.004)    | 0 (0.000) |     2.68 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|            7 |     1302 | 2024-12-20 | Maestro Esports (Belgian team) | W   | 0.727      | 0.143        | 0.000 (0.000)    | 0.087 (0.009)    | 0 (0.000) |     2.62 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|            6 |     1463 | 2024-12-14 | BIG                            | W   | 0.686      | 0.143        | 0.221 (0.022)    | 0.519 (0.051)    | 1 (0.686) |    21.18 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            5 |     1965 | 2024-12-02 | Partizan Esports               | L   | 0.607      | -            | -                | -                | -         |    -2.78 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            4 |     2144 | 2024-11-30 | Kubix Esports                  | W   | 0.593      | 0.372        | 0.044 (0.010)    | 0.216 (0.048)    | 0 (0.000) |    12.85 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            3 |     2288 | 2024-11-26 | 1win                           | L   | 0.566      | -            | -                | -                | -         |   -10.73 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            2 |     2827 | 2024-11-11 | Reveal (German team)           | L   | 0.467      | -            | -                | -                | -         |    -9.96 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            1 |     2831 | 2024-11-11 | BIG SELECTA                    | W   | 0.466      | 0.143        | 0.000 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     2.78 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,326.65)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-14 |      0.686 | $6,302.85      | $4,326.65       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
