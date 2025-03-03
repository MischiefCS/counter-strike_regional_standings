### Roster Details<br />
Team Name: Vizora Esports<br />
Roster: Koxa, OCEANA, Paine, viscera, wonderzce<br />
Global Rank: [328](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [60]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  450.8<br />
<br />
Final Rank Value (450.8) = Starting Rank Value (483.7) + Head To Head Adjustments (-32.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.170[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.7
- 400 + ( ( 0.043 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 483.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      295 | 2025-02-16 | HOTU                    | L   | 1.000      | -            | -                | -                | -         |    -5.91 | Koxa, OCEANA, Paine, viscera, wonderzce |
|            8 |      302 | 2025-02-16 | Lost in saigon          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    13.27 | Koxa, OCEANA, Paine, viscera, wonderzce |
|            7 |      404 | 2025-02-14 | Nomads (Mongolian team) | L   | 1.000      | -            | -                | -                | -         |   -13.03 | Koxa, OCEANA, Paine, viscera, wonderzce |
|            6 |      618 | 2025-02-08 | The Huns Esports        | L   | 1.000      | -            | -                | -                | -         |    -2.06 | Koxa, OCEANA, Paine, viscera, xetN      |
|            5 |      764 | 2025-02-05 | Tsegtaslal              | L   | 1.000      | -            | -                | -                | -         |   -19.14 | Kaine, OCEANA, Paine, viscera, xetN     |
|            4 |     1885 | 2024-12-04 | THE (Russian team)      | L   | 0.618      | -            | -                | -                | -         |    -5.61 | Kaine, OCEANA, Paine, viscera, xetN     |
|            3 |     1924 | 2024-12-03 | SUBUTAI                 | W   | 0.612      | 0.250        | 0.001 (0.000)    | 0.061 (0.009)    | 0 (0.000) |    10.35 | Kaine, OCEANA, Paine, viscera, xetN     |
|            2 |     2012 | 2024-12-02 | The Huns Esports        | L   | 0.604      | -            | -                | -                | -         |    -1.07 | Echko, OCEANA, Paine, viscera, xetN     |
|            1 |     2601 | 2024-11-16 | MOLEGAN                 | L   | 0.504      | -            | -                | -                | -         |    -9.67 | Echko, OCEANA, Paine, viscera, xetN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
