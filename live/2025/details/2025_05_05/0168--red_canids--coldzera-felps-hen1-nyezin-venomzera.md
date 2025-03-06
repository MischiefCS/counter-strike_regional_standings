### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, felps, HEN1, nyezin, venomzera<br />
Global Rank: [168](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [45]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  520.5<br />
<br />
Final Rank Value (520.5) = Starting Rank Value (509.2) + Head To Head Adjustments (11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.019[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.2
- 400 + ( ( 0.050 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 509.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      165 | 2025-02-19 | Team Solid       | L   | 0.699      | -            | -                | -                | -         |    -4.34 | coldzera, felps, HEN1, nyezin, venomzera    |
|           10 |      437 | 2025-02-08 | PaiN Gaming      | L   | 0.625      | -            | -                | -                | -         |    -0.04 | coldzera, felps, HEN1, nyezin, venomzera    |
|            9 |      485 | 2025-02-07 | Nitro.GG         | L   | 0.620      | -            | -                | -                | -         |    -7.72 | coldzera, felps, HEN1, nyezin, venomzera    |
|            8 |      496 | 2025-02-07 | Elevate          | W   | 0.618      | 0.143        | 0.000 (0.000)    | 0.183 (0.016)    | 0 (0.000) |     6.90 | coldzera, felps, HEN1, nyezin, venomzera    |
|            7 |      535 | 2025-02-05 | 9z Team          | W   | 0.606      | 0.143        | 0.000 (0.000)    | 0.075 (0.006)    | 0 (0.000) |     9.24 | coldzera, felps, HEN1, nyezin, venomzera    |
|            6 |      549 | 2025-02-05 | Elevate          | W   | 0.605      | 0.143        | 0.000 (0.000)    | 0.183 (0.016)    | 0 (0.000) |     6.80 | coldzera, felps, HEN1, nyezin, venomzera    |
|            5 |     1467 | 2024-11-14 | Imperial Esports | L   | 0.055      | -            | -                | -                | -         |    -0.19 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            4 |     1496 | 2024-11-14 | Legacy           | W   | 0.049      | 0.143        | 0.032 (0.000)    | 0.598 (0.004)    | 1 (0.049) |     1.29 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            3 |     1525 | 2024-11-13 | Case Esports     | W   | 0.043      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.043) |     0.47 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            2 |     1545 | 2024-11-12 | M80              | L   | 0.037      | -            | -                | -                | -         |    -0.52 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            1 |     1559 | 2024-11-11 | 9z Team          | L   | 0.035      | -            | -                | -                | -         |    -0.56 | coldzera, dav1deuS, HEN1, nython, venomzera |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
