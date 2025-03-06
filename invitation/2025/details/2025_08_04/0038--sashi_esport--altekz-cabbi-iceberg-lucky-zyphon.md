### Roster Details<br />
Team Name: Sashi Esport<br />
Roster: Altekz, Cabbi, IceBerg, Lucky, Zyphon<br />
Global Rank: [38](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [26]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  543.3<br />
<br />
Final Rank Value (543.3) = Starting Rank Value (541.0) + Head To Head Adjustments (2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 541.0
- 400 + ( ( 0.054 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 541.0


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
|            8 |      161 | 2025-02-20 | 9Pandas                                   | L   | 0.097      | -            | -                | -                | -         |    -0.50 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            7 |      209 | 2025-02-16 | Natus Vincere Junior                      | W   | 0.071      | 0.435        | 0.060 (0.002)    | 0.603 (0.019)    | 0 (0.000) |     1.88 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            6 |      250 | 2025-02-15 | SINNERS Esports                           | W   | 0.063      | 0.435        | 0.000 (0.000)    | 0.081 (0.002)    | 0 (0.000) |     0.95 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            5 |      298 | 2025-02-13 | Nemiga Gaming                             | L   | 0.049      | -            | -                | -                | -         |    -0.59 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            4 |      315 | 2025-02-12 | Copenhagen Wolves (American organization) | W   | 0.043      | 0.435        | 0.000 (0.000)    | 0.435 (0.008)    | 0 (0.000) |     0.61 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            3 |      363 | 2025-02-10 | RUSH B (Russian team)                     | L   | 0.032      | -            | -                | -                | -         |    -0.52 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            2 |      408 | 2025-02-09 | OG                                        | W   | 0.023      | 0.435        | 0.000 (0.000)    | 1.000 (0.010)    | 0 (0.000) |     0.37 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            1 |      492 | 2025-02-07 | MoneyF                                    | W   | 0.012      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.11 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
