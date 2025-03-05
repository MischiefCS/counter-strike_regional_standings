### Roster Details<br />
Team Name: Team PeeP<br />
Roster: aNsavage, Brilliance, la3euka, yiksrezo, YumsaN<br />
Global Rank: [272](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [148]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  484.9<br />
<br />
Final Rank Value (484.9) = Starting Rank Value (486.4) + Head To Head Adjustments (-1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.4
- 400 + ( ( 0.045 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 486.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2572 | 2024-09-25 | Copenhagen Wolves (American organization) | L   | 0.150      | -            | -                | -                | -         |    -2.00 | aNsavage, Brilliance, la3euka, yiksrezo, YumsaN   |
|            4 |     2625 | 2024-09-24 | Team Spirit Academy                       | L   | 0.144      | -            | -                | -                | -         |    -0.26 | aNsavage, Brilliance, la3euka, yiksrezo, YumsaN   |
|            3 |     3030 | 2024-09-09 | Passion UA                                | L   | 0.046      | -            | -                | -                | -         |    -0.03 | bogemtdarf, Brilliance, GREATEST, la3euka, YumsaN |
|            2 |     3079 | 2024-09-07 | UNiTY esports                             | W   | 0.032      | 0.372        | 0.025 (0.000)    | 0.177 (0.002)    | 0 (0.000) |     0.87 | bogemtdarf, Brilliance, GREATEST, la3euka, YumsaN |
|            1 |     3201 | 2024-09-03 | FLuffy Gangsters                          | L   | 0.006      | -            | -                | -                | -         |    -0.04 | bogemtdarf, Brilliance, GREATEST, la3euka, YumsaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
