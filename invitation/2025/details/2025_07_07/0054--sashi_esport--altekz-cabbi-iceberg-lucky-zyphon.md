### Roster Details<br />
Team Name: Sashi Esport<br />
Roster: Altekz, Cabbi, IceBerg, Lucky, Zyphon<br />
Global Rank: [54](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [36]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  569.5<br />
<br />
Final Rank Value (569.5) = Starting Rank Value (557.5) + Head To Head Adjustments (12.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 557.5
- 400 + ( ( 0.064 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 557.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      161 | 2025-02-20 | 9Pandas                                   | L   | 0.283      | -            | -                | -                | -         |    -2.00 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|           10 |      209 | 2025-02-16 | Natus Vincere Junior                      | W   | 0.257      | 0.435        | 0.031 (0.003)    | 0.525 (0.059)    | 0 (0.000) |     6.26 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            9 |      250 | 2025-02-15 | SINNERS Esports                           | W   | 0.249      | 0.435        | 0.002 (0.000)    | 0.235 (0.025)    | 0 (0.000) |     5.41 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            8 |      298 | 2025-02-13 | Nemiga Gaming                             | L   | 0.236      | -            | -                | -                | -         |    -2.06 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            7 |      315 | 2025-02-12 | Copenhagen Wolves (American organization) | W   | 0.230      | 0.435        | 0.000 (0.000)    | 0.640 (0.064)    | 0 (0.000) |     3.32 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            6 |      363 | 2025-02-10 | RUSH B (Russian team)                     | L   | 0.218      | -            | -                | -                | -         |    -3.68 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            5 |      408 | 2025-02-09 | OG                                        | W   | 0.210      | 0.435        | 0.000 (0.000)    | 1.000 (0.091)    | 0 (0.000) |     3.44 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            4 |      492 | 2025-02-07 | MoneyF                                    | W   | 0.198      | 0.435        | 0.000 (0.000)    | 0.062 (0.005)    | 0 (0.000) |     1.84 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            3 |      555 | 2025-02-05 | 9INE                                      | W   | 0.184      | 0.435        | 0.000 (0.000)    | 0.627 (0.050)    | 0 (0.000) |     2.76 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            2 |      585 | 2025-02-03 | Monte                                     | L   | 0.172      | -            | -                | -                | -         |    -2.73 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            1 |      605 | 2025-02-02 | B8                                        | L   | 0.163      | -            | -                | -                | -         |    -0.53 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
